import React from 'react'

const ForecastListItem = ({ item: { description, degrees, date } }) => (
    <li>
        {date}: {description} - {degrees}
    </li>
)

export default ForecastListItem