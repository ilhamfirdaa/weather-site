const axios = require('axios')

const getImage = async () => {
  const unsplash = await axios.get('https://api.unsplash.com/photos/random/?query=landscape&orientation=landscape&client_id=73d4e267a297a2e12d0df27549f43b4c41be30c31e757c6ffa53c9c6766b2acd')
  return unsplash.data
}

const getForecasts = async () => {
  const forecast = await axios.get('https://api.weatherbit.io/v2.0/forecast/daily?city=Jakarta&days=7&key=2b0ee1414ceb4f9195c5a38d208c473f')
  return forecast.data
}

exports.sourceNodes = async ({
  actions: { createNode },
  createNodeId,
  createContentDigest,
}) => {
  // get data from api at build time
  const forecasts = await getForecasts()
  const unsplash = await getImage()

  createNode({
    imageFull: unsplash.urls.full,
    username: unsplash.user.username,
    instagramUsername: unsplash.user.instagram_username,
    fullname: unsplash.user.name,
    description: unsplash.description,
    alt_description: unsplash.alt_description,
    // required fields
    id: createNodeId(`unsplash-${unsplash.id}`),
    internal: {
      type: 'unsplash',
      contentDigest: createContentDigest(unsplash),
    },
  })

  // create node for build time forecasts data
  createNode({
    cityName: forecasts.city_name,
    timezone: forecasts.timezone,
    countryCode: forecasts.country_code,
    stateCode: forecasts.state_code,
    long: forecasts.long,
    lat: forecasts.lat,
    listForecasts: forecasts.data,
    // required fields
    id: createNodeId(`forecast-${forecasts.stateCode}`),
    internal: {
      type: 'forecast',
      contentDigest: createContentDigest(forecasts),
    },
  })
}
