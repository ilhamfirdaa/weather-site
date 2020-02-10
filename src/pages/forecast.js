import React from 'react'
// import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import moment from 'moment'
import {
  Container, Typography, Grid, Box,
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import PlaceOutlinedIcon from '@material-ui/icons/PlaceOutlined'

import SEO from '../components/seo'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    minHeight: '100vh',
    // backgroundImage: 'url(https://source.unsplash.com/1920x1080/?nature)',
  },
  overlay: {
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: 2,
    padding: theme.spacing(0),
  },
  content: {
    padding: theme.spacing(8, 0),
  },
  whiteText: {
    color: 'white',
  },
  forecastImg: {
    // width: '100px',
    // height: '100px',
  },
}))

export const PureForecast = ({ data, imgData }) => {
  const classes = useStyles()

  return (
    <>
      <SEO title="Forecast" />
      <main className={`${classes.mainContainer} ${classes.whiteText}`} style={{ backgroundImage: `url(${imgData.imageFull})` }}>
        <div className={`${classes.overlay} ${classes.whiteText}`}>
          <Container maxWidth="md" className={`${classes.content} ${classes.whiteText}`}>
            <Box
              display="flex"
              alignItems="flex-center"
              justifyContent="center"
            >
              <PlaceOutlinedIcon fontSize="large" />
              <Typography variant="h5">
                {data.cityName}
              </Typography>
            </Box>
            <Grid
              container
              spacing={4}
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12} sm={6} md={6} style={{ textAlign: 'center' }}>
                <img src={`/weathers/${data.listForecasts[0].weather.icon}.png`} alt={`${data.listForecasts[0].weather.code}`} />
                <Typography variant="subtitle2">
                  {data.listForecasts[0].weather.description}
                </Typography>
              </Grid>
              <Grid item xs={6} sm={3} md={3} style={{ textAlign: 'right' }}>
                <Typography variant="subtitle2">
                  Date :
                </Typography>
                <Typography variant="subtitle1">
                  Temperature :
                </Typography>
                <Typography variant="subtitle2">
                  Wind Speed :
                </Typography>
                <Typography variant="subtitle2">
                  Precipitation :
                </Typography>
                <Typography variant="subtitle2">
                  Sunrise | Sunset :
                </Typography>
              </Grid>
              <Grid item xs={6} sm={3} md={3}>
                <Typography variant="subtitle2">
                  {moment(data.listForecasts[0].datetime).format('dddd, D MMMM YYYY')}
                </Typography>
                <Typography variant="subtitle1">
                  {`${data.listForecasts[0].temp}`}
                  &#8451;
                </Typography>
                <Typography variant="subtitle2">
                  {`${(data.listForecasts[0].wind_spd).toFixed(2)} mph`}
                </Typography>
                <Typography variant="subtitle2">
                  {`${Math.round(data.listForecasts[0].precip)}%`}
                </Typography>
                <Typography variant="subtitle2">
                  {`${moment.unix(data.listForecasts[0].sunrise_ts).format('hh:mm')} | ${moment.unix(data.listForecasts[0].sunset_ts).format('hh:mm')}`}
                </Typography>
              </Grid>
            </Grid>
            <Box
              display="flex"
              alignItems="flex-center"
              justifyContent="center"
              pt={4}
              pb={2}
            >
              <Typography variant="h5">
                Daily Forecast
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="flex-center"
              justifyContent="center"
              pt={2}
              pr={1}
              pl={1}
            >
              <Grid container spacing={2} align="center">
                {data.listForecasts.map((value, index) => {
                  const day = moment(value.datetime).format('ddd')
                  return (
                    <Grid item key={index}>
                      <Typography variant="body1">{day}</Typography>
                      <img src={`/weathers/${value.weather.icon}.png`} alt={`${value.weather.code}`} className={classes.forecastImg} />
                      <Typography variant="body1">
                        {`${value.temp}`}
                        &#8451;
                        {` | ${Math.round(value.precip)}%`}
                      </Typography>
                    </Grid>
                  )
                })}
              </Grid>
            </Box>
          </Container>
        </div>
      </main>
    </>
  )
}

export const ForecastPage = (props) => {
  const { forecast, unsplash } = useStaticQuery(graphql`
    {
      forecast {
        cityName
        countryCode
        id
        timezone
        listForecasts {
          precip
          temp
          datetime
          weather {
            code
            description
            icon
          }
          wind_spd
          sunrise_ts
          sunset_ts
        }
      }
      unsplash {
        imageFull
      }
    }
  `)

  return <PureForecast {...props} data={forecast} imgData={unsplash} />
}

export default ForecastPage