
// Promise example
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('hello');
  }, 3000);
}
);

myPromise
  .then((data) => {
    console.log('promise then', data);
  });


// Async Await Example
async function testAsync() {
  const result = await myPromise;
  console.log('async await: ', result);

}

testAsync();