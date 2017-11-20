const request=require("request")

let geoCodeAddress=(address)=>{
    let uriEncodedAddress=encodeURIComponent(address)

    return new Promise((resolve,reject)=>{
        request({
            url: `http://maps.googleapis.com/maps/api/geocode/json?address=${uriEncodedAddress}`,
            json: true //Will convert the json data to javascript object
        }, (error, response, body) => {
            if (!error) {
                if(body.status==="ZERO_RESULTS"||body.status==="OVER_QUERY_LIMIT")
                    reject(body.status)
                else
                //console.log(JSON.stringify(body, undefined, 2))
                    resolve(body.results[0].geometry.location)
            }
            else{
                reject("Some Error Occurred")
            }
        })
    })

}

module.exports={
    geoCodeAddress
}