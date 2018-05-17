import React from 'react'
import { inject, observer } from 'mobx-react'

const ForecastButton = ({ fetchForecast, city }) => (
    <button onClick={() => fetchForecast(city)}>
        Get Forecast
    </button>
)

const mapper = ({ appStore }) => ({
    fetchForecast: appStore.forecast.fetchForecast,
    city: appStore.weather.city
})

export default inject(mapper)(
    observer(ForecastButton)
)