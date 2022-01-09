// make an array of alphabets, this will be used to make the dictionaries
// which will map the letters to their index and vice versa
const alps_array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const index_alps = {}; // to store the index to alphabets
const alps_index = {}; // to store the alphabets to the index
// make a dictionary mapping each letter to an index (0-25).
// Time complexity: O(N)
alps_array.forEach((item, i) => {
    index_alps[i] = item; // maps letter to index
    alps_index[item] = i; // maps index to letter
});

function generateShortCode(storeId, transactionId) {
    let result = "";
    // 26*quotient + remainder
    let remainder = storeId % 26; // remainder
    let quotient = parseInt(storeId / 26); // quotient

    result += index_alps[quotient] + index_alps[remainder];

    // 26^2*first + 26*second + third + 1
    let first = parseInt(transactionId / (26*26)); // transactionId / 26^2
    // (transctionId - previous) / 26
    let second = parseInt( (transactionId - (26*26*first)) / 26);
    // (transactionId - previous - previous) - 1
    let third = parseInt( ((transactionId - (26*26*first) - (26*second))) - 1 );

    // concatenate the result
    result += index_alps[first] + index_alps[second] + index_alps[third];

    return result;
}


function decodeShortCode(shortCode) {
    // extract the first two characters from shortCode and
    // get their appropriate index
    let first = parseInt(alps_index[shortCode[0]]);
    let second = parseInt(alps_index[shortCode[1]]);

    // calculate the store_id
    let store_id = (first * 26) + second;

    // extract the remaining characters from shortCode and
    // get their appropriate index
    let third = parseInt(alps_index[shortCode[2]]);
    let fourth = parseInt(alps_index[shortCode[3]]);
    let fifth = parseInt(alps_index[shortCode[4]]);

    // calculate the transaction_id: (26^2 * third) + (26 * fourth) + fifth + 1
    // adding 1 because transaction_id starts from 1 each day
    let transaction_id = (26*26 * third) + (26 * fourth) + fifth + 1;

    return {
    storeId: store_id, // store id goes here,
    shopDate: new Date(), // the date the customer shopped,
    transactionId: transaction_id // transaction id goes here
    };
}


var storeIds = [175, 42, 0, 9];
var transactionIds = [9675, 23, 123, 7];

for (sid of storeIds) {
  for (tid of transactionIds) {
    console.log(generateShortCode(sid, tid));
    console.log(decodeShortCode(generateShortCode(sid, tid)));
  }
}
