import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import debounce from 'lodash/debounce'

class WeatherInput extends Component {
    render() {
        const { weather } = this.props

        return (
            <input
                type="search" 
                name="city"
                label="City"
                value={weather.city}
                onChange={this.changeCityName} 
            />
        )
    }

    changeCityName = e => {
        this.props.weather.changeCityName(e.target.value)
        this.fetchCities()
    }

    fetchCities = debounce(() => {
        this.props.weather.fetchWeatherDetails()
    }, 500)
}

const mapper = ({ appStore }) => ({
    weather: appStore.weather
})

export default inject(mapper)(
    observer(WeatherInput)
)