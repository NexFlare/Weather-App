const yargs = require("yargs")
const geocode = require("./Play/Promise-request")
const weather = require("./weather")
const argv = yargs.options({
    a: {
        demand: true,
        alias: "address",
        describe: "Address to fetch weather",
        string: true
    }
}).help().alias("help", "h").argv

geocode.geocodeAddress(argv.a, (errorMessage, response) => {
    if (errorMessage)
        console.log(errorMessage)
    else {
        console.log(response)
        weather.getTemp(response.lat, response.lng, (message) => {
            console.log(message)

        })
    }
})

/*geocode.geoCodeAddress(argv.a).then((location)=>{
    console.log(location)
},(errorMessage)=>{
    console.log(errorMessage)
})*/
