//https://jsonplaceholder.typicode.com/todos/

//In a JSON file, multiple objects are compiled inside an array.

//Getting/Fetching Data from a JSON source/API. using XMLHttp Requests and Callback function(s).
// const getTodos = (resource, callback) => {
//     const request = new XMLHttpRequest( );

//     request.addEventListener('readystatechange', ( ) => {
//         if(request.readyState === 4 && request.status === 200){
//             //ideal readyState code = 4 while ideal status code = 200 for a successful data fetch.
//             const data = JSON.parse(request.responseText);
//             callback(undefined, data);
//         }

//         else if(request.readyState === 4){
//             callback('could not fetch data', undefined);
//         }   
       
//     });

//     request.open('GET', resource);
//     request.send( );
// };

// getTodos("https://jsonplaceholder.typicode.com/posts/" , (err, data) => {
//     console.log(`Callback fired!`);

//     if(err){
//         console.log(err);
//     }

//     else{
//         console.log(data);
//     }

//     getTodos("https://jsonplaceholder.typicode.com/todos/" ,(err, data) => {
//     console.log(`Callback fired!`);

//     if(err){
//         console.log(err);
//     }

//     else{
//         console.log(data);
//     }

//     getTodos("https://jsonplaceholder.typicode.com/photos", (err, data) => {
//     if(err){
//         console.log(err);
//     }

//     else{
//         console.log(data);
//     }
//     });
// });
// });

//Promises.
// const getSomething = ( ) => {
// return new Promise( (resolve, reject) => {
//     //resolve(`Some data.`);
//     reject(`Error!`);
// });
// };

// getSomething( ).then( (data) => {
//     console.log(data);
// }).catch( (error) => {
//     console.log(error);
// });

// //Another Promise.
// const promise = ( ) => {
//     return new Promise( (resolve, reject) =>{
//         resolve(`Data fetched!`);
//         reject(`Error fetching data!`)
//     });
// };

// promise( ).then(data => {
//     console.log(data);
// }).catch(error => {
//     console.log(error);
// });

//Using Promises.
// const todos = (resource) => {
//     return new Promise( (resolve, reject) => {
//         const request = new XMLHttpRequest( );
//         request.open('GET', resource);
//         request.send( );

//         request.addEventListener('readystatechange', ( ) => {
//             if(request.status === 200 && request.readyState === 4){
//                 const data = JSON.parse(request.responseText);
//                 resolve(data);
//             }

//             else if(request.readyState === 4){
//                 reject(`Error fetching data!`);
//             }
//         })
//     })
// };

//https://jsonplaceholder.typicode.com/todos/
//https://jsonplaceholder.typicode.com/users
//https://jsonplaceholder.typicode.com/albums

//CHAINING PROMISES.
// todos('https://jsonplaceholder.typicode.com/todos/').then(data => {
//     console.log(data);
//     return todos('https://jsonplaceholder.typicode.com/users');
// }).then(data => {
//     console.log(data);
//     return todos('https://jsonplaceholder.typicode.com/albums');
// }).then(data => {
//     console.log(data);
// }).catch(error => {
//     console.log(error);
// });

//USING THE fetch( ); method.
// fetch('https://jsonplaceholder.typicode.com/todos/').then(response => {
//     console.log('Resolved ', response);
//     return response.json( ); //response.json( ); is a promise.
// }).then(data => {
//     console.log('Promise resolved: ', data);
// }).catch(error => {
//     console.log('Promise rejected ', error);
// });

//In case we need to fetch more APIs, we use the nesting method - after one then( ); method is done, the next API fetch follows..
// return fetch('https://jsonplaceholder.typicode.com/albums').then(response => {
    //     console.log(response);
    //     return response.json( );
    // }).then(data => {
    //     console.log('Promise 2 resolved: ', data);
    // });

    //ASYNC AND AWAIT.
  
       //The async keyword makes the function return a promise 
       //while the await keyword blocks subsequent codes until its own is fully loaded and executed.

       const json = async (resource) => {
        const response = await fetch(resource);
        if(response.status !== 200){
            throw new Error('Error fetching data');
        }

        const data = await response.json( );
        return data;
       };

       json('https://jsonplaceholder.typicode.com/users').then(data => {
           console.log(`Promise 1 resolved: `, data);
           return json('https://jsonplaceholder.typicode.com/todos/');
       }).then(data => {
           console.log(`Promise 2 resolved: `, data);
           return json('http://api.openweathermap.org/data/2.5/weather?q=abeokuta&APPID=b34fddd3dae4a2eb0ad363b62f98ba1e');
       }).then(data => {
           console.log(`Promise 3 resolved: `, data);
       }).catch(error => {
           console.log(`Promise rejected: `, error.message);
       });