const alps = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

/// storeID
let storeReps = {};

let alpsPermutations = [];

for (a1 of alps) {
  for (a2 of alps) {
    alpsPermutations.push(a1 + a2);
  }
}

for (let i = 1; i <= 200; i++) {
  storeReps[i] = alpsPermutations[i-1];
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

function decodeShortCode(shortCode) {
  // Logic goes here
  let shortCode_array = shortCode.split("");
  let store_id = shortCode.slice(0,2);
  let transaction_id = shortCode.slice(2, 5);


  return {
    storeId: parseInt(storeReps_switch[store_id]), // store id goes here,
    shopDate: new Date(), // the date the customer shopped,
    transactionId: transactionReps_switch[transaction_id] // transaction id goes here
  };
  console.log(typeof(), );
}


decodeShortCode("gtoic")
