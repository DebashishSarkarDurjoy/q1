// Logic goes here
const alps = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

/// storeID
let storeReps = {};

let alpsPermutations = [];

for (a1 of alps) {
  for (a2 of alps) {
    alpsPermutations.push(a1 + a2);
  }
}

for (let i = 0; i < 200; i++) {
  storeReps[i] = alpsPermutations[i];
}
let storeReps_switch = {};
Object.keys(storeReps).forEach((key) => {
    storeReps_switch[storeReps[key]] = key;
})
///store id

///transactionid
let transactionReps = {};
let alpsPermutationsTransaction = [];

for (a1 of alps) {
  for (a2 of alps) {
    for (a3 of alps) {
      alpsPermutationsTransaction.push(a1+a2+a3);
    }
  }
}

for (let i = 1; i <= 10000; i++) {
  transactionReps[i] = alpsPermutationsTransaction[i-1];
}
let transactionReps_switch = {};
Object.keys(transactionReps).forEach((key) => {
    transactionReps_switch[transactionReps[key]] = key;
});
///transactionid

function generateShortCode(storeId, transactionId) {


    return storeReps[storeId] + transactionReps[transactionId];

}

function decodeShortCode(shortCode) {
  // Logic goes here
  let shortCode_array = shortCode.split("");
  let store_id = shortCode.slice(0,2);
  let transaction_id = shortCode.slice(2, 5);


  return {
    storeId: parseInt(storeReps_switch[store_id]), // store id goes here,
    shopDate: new Date(), // the date the customer shopped,
    transactionId: parseInt(transactionReps_switch[transaction_id]) // transaction id goes here
  };
}

function generateDate() {
    ///date
    const date = ['1', '2', '3', '4', '5', ...alps];
    const month = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'];
    const year = [...alps];

    const dateReps = {};
    for (let i = 1; i <=31; i++) {
      dateReps[i] = date[i-1];
    }

    const monthReps = {};
    for (let i = 1; i <= 12; i++) {
      monthReps[i] = month[i-1];
    }

    const yearReps = {};
    let y = 2009;
    for (let i = 1; i <= 26; i++) {
      yearReps[y] = year[i-1];
      y++;
    }

    const d = new Date();
    console.log(d.getDate(), d.getMonth(), d.getFullYear())
    console.log(yearReps);


    ////date
}

console.log(transactionReps);

// var storeIds = [175, 42, 0, 9];
// var transactionIds = [9675, 23, 123, 7];
//
// for (sid of storeIds) {
//   for (tid of transactionIds) {
//     console.log(generateShortCode(sid, tid));
//     console.log(decodeShortCode(generateShortCode(sid, tid)));
//   }
// }
