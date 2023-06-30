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
                msg: 'I´m not sure!'
            })
        }
    })
}
function bestRockSong(response) {
    return new Promise((resolve, reject) => {
        if (response.sucess) {
            resolve('Bohemian Rhapsody by ' + response.bandName)
        } else {
            reject('Do you know Queen?')
        }
    })
}
/*
bestRockBand('restart')
    .then(response => {
        console.log('Checking the answer...')
        return bestRockSong(response)
    })
    .then(response => {
        console.log('Find the best song...')
        console.log(response)
    })
    .catch(err.msg){
        console.log(msg)
    }
*/
async function doTheJob(){
   try {
     const bestRockBandResponse = await bestRockBand('Queen');
    const bestRockSongResponse = await bestRockSong(bestRockBandResponse);
    console.log(bestRockSongResponse);
    } catch(err){
        console.log(err.msg)
    }
}
doTheJob();