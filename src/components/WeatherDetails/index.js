import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'

class WeatherDetails extends Component {
    render() {
        const { weather: { city, description, degrees } } = this.props

        return (
            <div>
                <h4 variant="headline">
                    { city || 'Start typing in city name' }
                </h4>

                <p variant="body1">
                    { description ? (
                        <Fragment>
                            Description: {description}
                            <br />

                            { 
                                description !== 'city not found' && 
                                <Fragment>{degrees}</Fragment> 
                            }
                        </Fragment>
                    ) : (
                        'Waiting for description' 
                    )}
                </p>
            </div>
        )
    }
}

const mapper = ({ appStore }) => ({
    weather: appStore.weather
})

export default inject(mapper)(
    observer(WeatherDetails)
)