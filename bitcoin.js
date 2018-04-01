const kapitalize = require('kapitalize')({
  host:    '',
  port:    8332,
  user:    '',
  pass:    ''
}) 


// // create new address (need account)
// kapitalize.exec('getnewaddress', 'dummy1' , function(err, result) {
//   console.log(err);
//   console.log(result);
// })


// // !! unlock wallet. password hide need
// kapitalize.exec('walletpassphrase', 'ioniafindexchain', 60, function(err, result) {
//   console.log(err);
//   console.log(result);
// })


// // get dumpprivate key from address
// kapitalize.exec('dumpprivkey','3Ct4j6yBY3RxieDAhhQEbsSfQhVSBAz4ax' ,function(err, result) {
//   console.log(err);
//   console.log(result);
// })


// // import private key to wallet
// kapitalize.exec('importprivkey','KxVqazaPKU5mocuMfMjSycEKyRG7LvFbhTcsuRiWPQT8LiMWDgwH', 'arnoldyoo' ,function(err, result) {
//   console.log('err : ', err);
//   console.log('result : ', result);
// })


// // get balance from account
// kapitalize.exec('getbalance', 'arnold' ,function(err, balance) {
//   console.log(balance);
// })

// show represented address from address
// kapitalize.exec('getaccountaddress', 'arnold2', function(err, result) {
//   console.log(result);
// })

// // show all address related in account
// kapitalize.exec('getaddressesbyaccount', 'arnold4', function(err, result) {
//   console.log(result);
// })

// // multisign to wallet ?? i don't know
// kapitalize.exec('addmultisigaddress', 1, ['37g2b3jiDFAVwpVNCWAUjrQJAcFRrwQyNg'], 'arnold', function(err, result) {
//   console.log(err);
//   console.log(result);
// })


// kapitalize.exec('walletlock', function(err, result) {
//   console.log('result : ', result);
//   console.log('err : ', err);
// })

// // send transaction
// kapitalize.exec('sendFrom', 'dummy', '3Ct4j6yBY3RxieDAhhQEbsSfQhVSBAz4ax', 0.1, 1, 'arnoldyoo get', 'dummy' , function(result) {
//   console.log(result);
// })



// get account from address
// kapitalize.exec('getaccount', '3Ch6PUZVQXfVEB1LsVVrAysjVTKTgwTW5f', function(err, result) {
//   console.log(err);
//   console.log(result);
// })