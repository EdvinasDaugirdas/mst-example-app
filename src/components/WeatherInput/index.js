import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

class WeatherInput extends Component {
    render() {
        const { weather } = this.props

        return (
            <div>
                <input 
                    type="text"
                    name="city"
                    value={weather.city}
                    onChange={this.changeCityName} 
                />
            </div>
        )
    }

    changeCityName = e => {
        this.props.weather.changeCityName(e.target.value)
    }
}

const mapper = ({ appStore }) => ({
    weather: appStore.weather
})

export default inject(mapper)(
    observer(WeatherInput)
)