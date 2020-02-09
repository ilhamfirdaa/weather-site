import React from 'react'
// import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import { Container, Typography } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
// import SEO from '../components/seo'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    minHeight: '100vh',
    backgroundImage: 'url(https://images.unsplash.com/photo-1579911092621-fd9212a786c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)',
  },
  overlay: {
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 2,
    padding: theme.spacing(0),
  },
}))

export const PureForecast = ({ data }) => {
  const classes = useStyles()

  return (
    <>
      {/* <SEO title="Forecast" /> */}
      <main className={classes.mainContainer}>
        <div className={classes.overlay}>
          <Container maxWidth="md">
            <Typography variant="h2">
              Weather site!
            </Typography>
            <Typography variant="h3">
              {data.cityName}
            </Typography>
            {data.listForecasts.map((value, index) => (
              <li
                key={index}
                style={{
                  textAlign: 'center',
                  listStyle: 'none',
                  display: 'inline',
                }}
              >
                <p>{value.weather.description}</p>
              </li>
            ))}
          </Container>
        </div>
      </main>
    </>
  )
}

export const ForecastPage = (props) => {
  const { forecast } = useStaticQuery(graphql`
    {
      forecast {
        cityName
        countryCode
        id
        timezone
        listForecasts {
          precip
          temp
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
    }
  `)

  return <PureForecast {...props} data={forecast} />
}

export default ForecastPage
