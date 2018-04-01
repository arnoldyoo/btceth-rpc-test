const Web3 = require('web3');
const EthereumTx = require('ethereumjs-tx');

var mainnet = "http://:8545"
// var testnet = "";

// const web3 = new Web3(Web3.givenProvider || 'ws://104.155.141.101:8545');

const web3 = new Web3(new Web3.providers.HttpProvider(mainnet));


// web3.eth.personal.newAccount('790102', function(err ,account) {
//   console.log(account)
// })

// web3.eth.getAccounts().then(console.log);
// if (typeof web3 !== 'undefined') {
//   web3 = new Web3(web3.currentProvider);
// } else {
//   // set the provider you want from Web3.providers
//   web3 = new Web3(new Web3.providers.HttpProvider(mainnet));
//   web3.eth.net.isListening()
//    .then(() =>{
//      console.log('connection ok');
//   })
//    .catch(e => console.log(''));
// }

// web3.eth.personal.unlockAccount('0xcDeaE0658E5A36fBE7a5Af202cCBe6456238A0C6', '790102', 600);

// web3.eth.signTransaction({
//   from: "0xcDeaE0658E5A36fBE7a5Af202cCBe6456238A0C6",
//   gasPrice: "20000000000",
//   gas: "21000",
//   to: '0xB343Bc79A5e203279921f615370E4a7B8d304e28',
//   value: "1000000000000000000",
//   data: "",
//   nonce: "1"
// }, '790102').then(console.log);

// const address = "0x8849FFA08d4D7efC164c498d2bF53c4dBD91C2De";
// web3.eth.getBalance(address, function(err, data) {
//   const bal = data;
//   console.log('arnold bal :', web3.utils.fromWei(bal) + ' eth');
// })

// const address2 = '0x0F232032Cd2C3Fdf6e1319F4F98a03b69d1b34C2';
// web3.eth.getBalance(address2, function(err, data) {
//   const bal = data;
//   console.log('arnold bal :', web3.utils.fromWei(bal) + ' eth');
// })



// web3.eth.getAccounts().then((err, account) => {
//   console.log(err);
//   console.log('account : ', account);
// })


///////////////////////////////////////////////transaction test//////////////////////////////////////

// web3.eth.getGasPrice().then(data => console.log(data));


// web3.eth.getBlock('latest')
// .then(console.log);



// var fromPubKey = '0x8849FFA08d4D7efC164c498d2bF53c4dBD91C2De';
// var fromPriKey = '0xc48cb6ddd69fa6dd2abe9d870391d530e722595721301036f5e276ce9d2ee609';
// var toPubKey = '0x0F232032Cd2C3Fdf6e1319F4F98a03b69d1b34C2';

// const tempPrivate = fromPriKey.substr(2);
// console.log(tempPrivate);

// var privateKey = Buffer.from(tempPrivate, 'hex');

// var nonceHex = web3.utils.toHex( web3.eth.getTransactionCount(fromPubKey) );//보내는사람의 전송 넌스
// var gasLimit = web3.utils.toHex('5000');
// var gasPrice = web3.utils.toHex('11000000000');
// var value = web3.utils.toHex(web3.utils.toWei('0.001'));

// const txParams = {
//   nonce: nonceHex,
//   gasPrice: gasPrice, 
//   gasLimit: gasLimit,
//   to: toPubKey, 
//   value: value, 
//   data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057',
//   // EIP 155 chainId - mainnet: 1, ropsten: 3
//   chainId: 1
// }

// const tx = new EthereumTx(txParams)
// tx.sign(privateKey);
// const serializedTx = tx.serialize()

// web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'), function(err, hash) {                
//   if (!err) console.log(hash); // transaction hash
//   else console.log(err);
// });


///////////////////////////////////////////////transaction test//////////////////////////////////////



// const txObj = {
//   from: '0x0F232032Cd2C3Fdf6e1319F4F98a03b69d1b34C2',
//   to: '0x8849FFA08d4D7efC164c498d2bF53c4dBD91C2De',
//   value: web3.utils.toWei('0.001'),
//   gasPrice: 18000000000
// }
// web3.eth.sendTransaction(txObj, function(err, result) {
//   console.log(err);
//   console.log(result);
// })

// var tx = new Tx(rawTx);
// tx.sign(privateKey);
// var serializedTx = tx.serialize();

// web3.eth.sendTransaction(transactionObject [, callback])('0x' + serializedTx.toString('hex'), function(err, hash) {                
//     if (!err) console.log(hash); // transaction hash
//     else console.log(err);
// });




// const randomAccount = web3.eth.accounts.create();
// console.log(randomAccount);




// console.log(web3.eth.accounts.privateKeyToAccount('0x4c2a910a6e42d5463c534ebba0ce7df4682f7c84007c80d59578039ded19835f'));