const request=require('request')

geocodeAddress=(address,callback)=>{
    let uriEncodedAddress=encodeURIComponent(address)
    request({
        url: `http://maps.googleapis.com/maps/api/geocode/json?address=${uriEncodedAddress}`,
        json: true //Will convert the json data to javascript object
    }, (error, response, body) => {
        if (!error) {
            if(body.status==="ZERO_RESULTS"||body.status==="OVER_QUERY_LIMIT")
                callback(body.status)
            else
                //console.log(JSON.stringify(body, undefined, 2))
                callback(undefined,body.results[0].geometry.location)
        }
        else{
            callback("Some Error Occurred")
        }
    })
}

module.exports={
    geocodeAddress
}