import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

class WeatherDetails extends Component {
    render() {
        const { weather: { city, description, degrees } } = this.props

        return (
            <Paper>
                <Typography variant="headline">
                    { city || 'Start typing in city name' }
                </Typography>

                <Typography variant="body1">
                    { description && degrees ? (
                        <Fragment>
                            Description: {description}
                            <br />
                            Degrees: {degrees}
                        </Fragment>
                    ) : (
                        'Waiting for description' 
                    )}
                </Typography>
            </Paper>
        )
    }
}

const mapper = ({ appStore }) => ({
    weather: appStore.weather
})

export default inject(mapper)(
    observer(WeatherDetails)
)