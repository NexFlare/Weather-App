const request = require("request")
const yargs = require("yargs")
const argv = yargs.options({
    a: {
        demand: true,
        alias: "address",
        describe: "Address to fetch weather",
        string: true
    }
}).help().alias("help", "h").argv

let address=encodeURIComponent(argv.a)

request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
    json: true //Will convert the json data to javascript object
}, (error, response, body) => {
    if (!error) {
        //console.log(JSON.stringify(body, undefined, 2))
        console.log(body.results[0].geometry.location)
    }
})