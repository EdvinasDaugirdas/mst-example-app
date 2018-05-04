import { types } from 'mobx-state-tree'

export const Weather = types
    .model({
        city: types.string,
        description: types.string,
        unit: types.enumeration('unit', ['kelvin', 'celsius']),
        degrees: types.number
    })
    .actions(self => ({
        changeDescription(newDescription) {
            self.description = newDescription
        }
    }))