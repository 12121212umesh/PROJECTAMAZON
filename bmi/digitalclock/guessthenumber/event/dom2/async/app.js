// // Simulated async functions
// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Async function 1 completed");
//       resolve("Data from async function 1");
//     }, 4000);
//   });
// }

// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Async function 2 completed");
//       resolve("Data from async function 2");
//     }, 4000);
//   });
// }

// // Start async function chain
// console.log("Starting async functions...");

// let p1 = asyncFunc1();

// p1.then((data) => {
//   console.log(data);
//   return asyncFunc2();
// }).then((data) => {
//   console.log(data);
// });

// // Simulated data fetch
// function getDate(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`Data ${dataId} fetched`);
//       resolve(`Data ${dataId}`);
//     }, 2000);
//   });
// }

// // ✅ Promise chaining example (fetch 1 to 4 in order, with logs)
// getDate(1)
//   .then((res) => {
//     console.log("First data fetched, proceeding to next...");
//     return getDate(2);
//   })
//   .then(() => {
//     console.log("Second data fetched, proceeding to next...");
//     return getDate(3);
//   })
//   .then(() => {
//     console.log("Third data fetched, proceeding to next...");
//     return getDate(4);
//   })
//   .then(() => {
//     console.log("All data fetched.");
//   });

// getDate(1, () => {
//   console.log("First data fetched, proceeding to next...");
//   getDate(2, () => {
//     console.log("Second data fetched, proceeding to next...");
//     getDate(3, () => {
//       console.log("Third data fetched, proceeding to next...");
//       getDate(4);
//     });
//   });
// });

// function api() {
//   return new Promise((resolve, reject) => {
//     console.log("weather data");
//     setTimeout(() => {
//       console.log(" weather data ");
//       resolve(200);
//     }, 2000);
//   });
// }

// async function getWeatherData() {
//   await api();
//   await api();
//   await api();
// }

// function getDate(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//     }, 2000);
//   });
// }

// async function getAllData() {
//   console.log("getting data1 ....");
//   await getDate(1);
//   console.log("getting data2 ....");
//   await getDate(2);
//   console.log("getting data3 ....");
//   await getDate(3);
//   console.log("getting data4 ....");
//   await getDate(4);
//   console.log("getting data5 ....");
//   await getDate(5);
// }
