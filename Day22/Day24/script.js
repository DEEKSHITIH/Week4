//Asynchronous
setTimeout(() =>{
    console.log("java script by adithya saladi sir")
} ,2000)

// callback function
function myDisplayer(callback) {
    setTimeout(()=>{
        console.log("displaying")
        callback();

    },4000)
}

myDisplayer(()=>{
    console.log('finished')
});


// //Promise
function display()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data display");
            resolve();
        },7000)
    })
}
display()
.then(()=>{
    console.log("data is sucessfully resolved and fetched");

})
.catch((error)=>{
    console.error("error is occoured:",error);
})

