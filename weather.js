const request=require('request');

let getTemp=(lat,lng,callback)=>{
    let url=`https://api.darksky.net/forecast/7c1c8dd09cd903add4de5cc32a8fbed0/${lat},${lng}`
    request({
        url:url,
        json:true
    },
        (error,response,body)=>{
            if(error)
                callback('Some error occured')
            else {
                //console.log(JSON.stringify(body, undefined, 2))
                console.log(body.currently.temperature)
            }
        })

}

module.exports={
    getTemp
}