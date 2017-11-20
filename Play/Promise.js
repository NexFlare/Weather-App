let promise=new Promise((resolve,reject)=>{
    reject("Error Mesaage")
})

promise.then((str)=>{
    console.log(str)
},(errorMessage)=>{
    console.log(errorMessage)
})