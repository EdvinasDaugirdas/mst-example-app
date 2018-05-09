import React, { Fragment } from 'react'

import WeatherInput from 'components/WeatherInput'
import WeatherDetails from 'components/WeatherDetails'

const Weather = () => (
    <Fragment>
        <WeatherInput />
        <WeatherDetails />
    </Fragment>
)

export default Weather