// async function fetchDataFromAPI(success = true) {
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//           if (success) {
//               resolve("API Data received successfully");
//           } else {
//               reject("API request failed");
//           }
//       }, 1500); // Simulating delay
//   });
// }
// console.log( fetchDataFromAPI())
// async function getData() {
//   try {
//       const data = await fetchDataFromAPI(true); // Change to false to simulate failure
//       console.log(data); // "API Data received successfully"
//   } catch (error) {
//       console.error(error); // "API request failed" if the promise is rejected
//   }
// }

// getData();


 function fetchDataAsync() {
  let success = true; // Change this to false to simulate failure
  const data =  new Promise((resolve, reject) => {
      setTimeout(() => {
          if (success) {
              resolve("Data received successfully");
          } else {
              reject("Failed to fetch data");
          }
      }, 2000);
  });
  return data;
}
console.log(fetchDataAsync())
async function run() {
  try {
      const result = await fetchDataAsync();
      console.log(result);  // "Data received successfully"
  } catch (error) {
      console.error(error);  // This won't run if success is true
  }
}

run();