// //Asynchronous Function_____________________________________________________
// function sayHi(){
//     console.log("HI");
// }

// let sayHi2 = function(){
//     console.log("HI2");
// }

// setTimeout(sayHi2, 5000);
// sayHi();

// console.log(1);
// setTimeout(() => {
//     console.log("Hello");
// }, 4000);
// console.log(2);

// //Callback________________________________________________________________

// function sum(a, b){
//     return a+b;
// }

// function calculator(a, b, sumCallback){
//     return sumCallback(a,b);
// }

// console.log(calculator(5,10, sum)); //sum is a callback function here.

//Callback Hell: __________________________________________________________________
//Nested Callbacks

// function getData(id, getNextData){
//     setTimeout(() => {
//         console.log(id);
//         if(getNextData){
//             getNextData();
//         }
//     }, 3000)
// }

// getData(1, () => {
//     getData(2, () => {
//         getData(3);
//     })
// })

//Promise_________________________________________________________________________
// let promise1 = new Promise((resolve, reject) => {
//     console.log("Promise1");
// });
// console.log(promise1);

// let promise2 = new Promise((resolve, reject) => {
//     console.log("Promise2");
//     resolve("Success");
// });
// console.log(promise2);

// let promise3 = new Promise((resolve, reject) => {
//     console.log("Promise3");
//     reject("Failed");
// });
// console.log(promise3);

// function getData(id, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(id);
//             resolve("Success");
//             if(getNextData){
//                 getNextData();
//             }
//         }, 10000)
//     })
// }

// let getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("Inside Promise");
//         let person = {
//             name: "Saimul Hoque",
//             age: 23, 
//             id: "23-52203-2"
//         };
//         // resolve(person);
//         reject(person);
//     })
// }

// let promise = getPromise();
// promise.then((res) => {
//     console.log(res, "Then");
// }).catch((err) => {
//     console.log(err, "Catch");
// })

// promise.catch((err) => {
//     console.log(err, "Catch");
// })

// function getData(id){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(id);
//             if(id===2){
//                 reject("Rejected Horribly.So Sad!!!");
//             }
//             else{
//                 resolve("Data-"+id+" successful");
//             }
//         }, 3000);
//     });
// }

// console.log("Loading Data-1....");
// getData(123).then((res) => {
//     console.log(res);
//     console.log("Loading Data-2....");
//     getData(345).then((res2) => {
//         console.log(res2);
//     })
// }).catch((err) => {
//     console.log(err);
// })

//Better way:
// console.log("Loading Data-1....");
// getData(1).then((res) => {
//     console.log(res);
//     console.log("Loading Data-2....");
//     return getData(2);
// }).then((res) => {
//     console.log(res);
//     console.log("Loading Data-3");
//     return getData(3);
// }).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })

//Async_Await______________________________________________________

function api(day){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(day==="Monday"){
                reject(day+"'s weather is Sunny");
            }else{
                resolve(day+"'s Weather is Rainy");
            }
        },3000);
    });
}

//IIFE function. Calls itself immediately after declaration. don't need to call it. 
// (regular function)();
//Function doesn't require a name. Though it'll also work with name.
//cannot be used multiple times
(async function(){
    console.log("Fetching data...");
    let weather = await api("Sunday");
    console.log(weather);
    weather = await api("Monday");
    console.log(weather);
    weather = await api("Friday");
    console.log(weather);
})();



