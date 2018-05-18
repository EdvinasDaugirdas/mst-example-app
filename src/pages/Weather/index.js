import React, { Fragment } from 'react'

import WeatherInput from 'components/WeatherInput'
import WeatherDetails from 'components/WeatherDetails'
import ForecastList from 'components/ForecastList'

const Weather = () => (
    <Fragment>
        <WeatherInput />
        <WeatherDetails />
        <ForecastList />
    </Fragment>
)

export default Weather