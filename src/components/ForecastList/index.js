import React from 'react'
import { inject, observer } from 'mobx-react'

import ForecastListItem from 'components/ForecastListItem'

const ForecastList = ({ forecast }) => (
    <ul>
        {forecast.map(item => (
            <ForecastListItem item={item} />
        ))}
    </ul>
)

const mapper = ({ appStore }) => ({
    forecast: appStore.forecast.weathers
})

export default inject(mapper)(
    observer(ForecastList)
)