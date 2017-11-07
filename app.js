const request=require("request")

request({
    url: "http://maps.googleapis.com/maps/api/geocode/json?address=Sector%2062",
    json: true
},(error,response,body)=>{
    if(!error)
        console.log(body)
})