const alps_array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const index_alps = {};
const alps_index = {};
alps_array.forEach((item, i) => {
    index_alps[i] = item;
    alps_index[item] = i;
});

function generateShortCode(storeId, transactionId=0) {
    let result = "";

    let remainder = storeId % 26;
    let quotient = parseInt(storeId / 26);

    result += index_alps[quotient] + index_alps[remainder];

    return result;

}

function decodeShortCode(shortCode) {
  // Logic goes here
  let first = parseInt(alps_index[shortCode[0]]);
  let second = parseInt(alps_index[shortCode[1]]);

  let store_id = (first * 25) + second + first;

  let third = parseInt(alps_index[shortCode[2]]);
  let fourth = parseInt(alps_index[shortCode[3]]);
  let fifth = parseInt(alps_index[shortCode[4]]);

  let transaction_id = (26*26 * third) + (26 * fourth) + fifth + 1;



  return {
    storeId: store_id, // store id goes here,
    shopDate: new Date(), // the date the customer shopped,
    transactionId: transaction_id // transaction id goes here
  };
}


console.log(generateShortCode(188));
console.log(decodeShortCode("hglmn"));