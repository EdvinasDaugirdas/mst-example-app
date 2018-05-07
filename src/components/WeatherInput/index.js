import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import TextField from 'material-ui/TextField'

class WeatherInput extends Component {
    render() {
        const { weather } = this.props
        
        return (
            <div>
                <TextField
                    type="search" 
                    name="city"
                    label="City"
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