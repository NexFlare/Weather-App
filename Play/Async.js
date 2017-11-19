console.log("Hello World")

setTimeout(()=>{
    console.log("In Time Out ")
},2000)  //This is a async task

setTimeout(()=>{
    console.log("In Time Out Zone 2")
},0)


console.log("Bye bye")