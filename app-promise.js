const yargs=require('yargs');
const axios=require('axios');
const argv = yargs.options({
    a: {
        demand: true,
        alias: "address",
        describe: "Address to fetch weather",
        string: true
    }
}).help().alias("help", "h").argv

let uriEncodedAddress=encodeURIComponent(argv.a)
let url=`http://maps.googleapis.com/maps/api/geocode/json?address=${uriEncodedAddress}`
axios.get(url).then((response)=>{
    if(response.data.status==="ZERO_RESULTS"||response.data.status==="OVER_QUERY_LIMIT"){
        throw new Error("No data result found")
    }
    console.log(JSON.stringify(response.data,undefined,2))
    let lat=response.data.results[0].geometry.location.lat
    let lng=response.data.results[0].geometry.location.lng
    let weatherUrl=`https://api.darksky.net/forecast/7c1c8dd09cd903add4de5cc32a8fbed0/${lat},${lng}`
    return axios.get(weatherUrl)

}).then((response)=>{
    console.log(response.data.currently.temperature)
}).catch((errorMessage)=>{
    console.log(errorMessage)
})