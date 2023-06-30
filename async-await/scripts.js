function bestRockBand(band){
    return new Promise((resolve, reject) => {
        if (band == 'Queen') {
            resolve({
            sucess: true,
            bandName: band,
            msg: band + 'is the Best band ever !'})
        } else {
            reject({
                sucess: false,
                msg: 'I\'m not sure!'
            })
        }
    })
}
function bestRockSong(response) {
    return new Promise((resolve, reject) => {
        if (response.sucess) {
            resolve('Bohemian Rhapsody by' + response.bandName)
        } else {
            reject('Do you know Queen?')
        }
    })
}
