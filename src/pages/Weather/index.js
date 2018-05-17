import React, { Fragment } from 'react'

import WeatherInput from 'components/WeatherInput'
import WeatherDetails from 'components/WeatherDetails'
import ForecastButton from 'components/ForecastButton'
import ForecastList from 'components/ForecastList'

const Weather = () => (
    <Fragment>
        <WeatherInput />
        <WeatherDetails />
        <ForecastButton />
        <ForecastList />
    </Fragment>
)

export default Weather