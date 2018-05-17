export const fakeService = data => () => {
    return new Promise((resolve) => {
        resolve(data)
    })
}