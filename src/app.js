import _ from 'lodash'

const array = [1];
let other = _.concat(array, 2, [3], [[4]]);

alert(other); // [1, 2, 3, [4]]

function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  let x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}

f1();