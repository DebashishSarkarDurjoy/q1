function generateShortCode(storeId, transactionId) {
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

    for (let i = 1; i <= 200; i++) {
      storeReps[i] = alpsPermutations[i-1];
    }
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
    ///transactionid

    console.log(storeReps[storeId], transactionReps[transactionId]);

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

generateShortCode(100,100);
generateDate();
