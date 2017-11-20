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
    console.log(response.data)
}).catch((errorMessage)=>{
    console.log(errorMessage)
})