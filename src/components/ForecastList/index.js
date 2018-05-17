import React from 'react'
import { inject, observer } from 'mobx-react'
import uniqid from 'uniqid'

import ForecastListItem from 'components/ForecastListItem'

const ForecastList = ({ forecast }) => (
    <ul>
        {forecast.map(item => (
            <ForecastListItem
                key={uniqid()} 
                item={item} 
            />
        ))}
    </ul>
)

const mapper = ({ appStore }) => ({
    forecast: appStore.forecast.weathers
})

export default inject(mapper)(
    observer(ForecastList)
)