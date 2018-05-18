import { onAction } from 'mobx-state-tree'

export default function listener(store) {
    const { weather, forecast } = store

    onAction(weather, ({ name }) => {
        const isFetchDetailsFn = name === 'fetchWeatherDetails'

        if (isFetchDetailsFn) {
            forecast.fetchForecast(weather.city)
        }
    })
}