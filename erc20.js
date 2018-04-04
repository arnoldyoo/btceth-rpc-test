const Web3 = require('web3');
const EthereumTx = require('ethereumjs-tx');
const fs = require('fs');
const path = require('path');

// const mainnet = "http://:8545"
const testnet = "";
const web3 = new Web3(new Web3.providers.HttpProvider(testnet));

// eos
// 0xd0a6E6C54DbC68Db5db3A091B171A77407Ff7ccf eos admin
// 0x86Fa049857E0209aa7D9e616F7eb3b3B78ECfdb0 eos contract address
// bokky
// 0x6020B93cce52196FA9C7915B3BC3D83009cd244D bokky admin
// 0x583cbBb8a8443B38aBcC0c956beCe47340ea1367 bokky contract address
    
/**
 * 
  bokky admin 1
    0x6020B93cce52196FA9C7915B3BC3D83009cd244D
    67f7f5fb893aed77b5b4d2b22d627471ca2827fcb09b89dafa485f5f3d22873a
  bokky admin 2
    0xA526fC12265027638E1aD10FA86179Ee6a1fF848
    70d1bdce1143890929f5eb52767e1ac0d99707fd3d7861623a91c2d5aad089f5
*/


const balanceObj = {
  frompubKey: '0x6020B93cce52196FA9C7915B3BC3D83009cd244D',
  contractAddr: '0x583cbBb8a8443B38aBcC0c956beCe47340ea1367',
  tokenName: 'bokky'
}

async function getBalance(params) {
  const abiArray = JSON.parse(fs.readFileSync(path.resolve(__dirname, `./${params.tokenName}-contract-abi.json`), 'utf-8'));
    // The address of the contract which created BOKKY
  const contract = new web3.eth.Contract(abiArray, params.contractAddr, {
      from: params.frompubKey
  });
  balance = await contract.methods.balanceOf(params.frompubKey).call();
  console.log('balance : ', web3.utils.fromWei(balance))
}

// getBalance(balanceObj);

const txObj = {
  tokenName: 'bokky',
  frompubKey: '0x6020B93cce52196FA9C7915B3BC3D83009cd244D',
  fromprivKey: '0x67f7f5fb893aed77b5b4d2b22d627471ca2827fcb09b89dafa485f5f3d22873a',
  topubKey: '0xA526fC12265027638E1aD10FA86179Ee6a1fF848',
  contractAddr: '0x583cbBb8a8443B38aBcC0c956beCe47340ea1367',
  amount: '0'
}

async function sendTransaction(params) {
    const privateKey = new Buffer(params.fromprivKey.substr(2), 'hex');  
    const nonceHex = web3.utils.toHex( web3.eth.getTransactionCount(params.frompubKey) );//보내는사람의 전송 넌스
    const value = web3.utils.toHex(web3.utils.toWei(params.amount));
    
    const abiArray = JSON.parse(fs.readFileSync(path.resolve(__dirname, `./${params.tokenName}-contract-abi.json`), 'utf-8'));
    // The address of the contract which created BOKKY
    const contract = new web3.eth.Contract(abiArray, params.contractAddr, {
        from: params.frompubKey
    });

    var count = await web3.eth.getTransactionCount(params.frompubKey);
    const gasPriceGwei = 3;
    const gasLimit = 3000000;
    // Chain ID of Ropsten Test Net is 3, replace it to 1 for Main Net
    const chainId = 3;
    const rawTransaction = {
        "from": params.frompubKey,
        "nonce": "0x" + count.toString(16),
        "gasPrice": web3.utils.toHex(gasPriceGwei * 1e9),
        "gasLimit": web3.utils.toHex(gasLimit),
        "to": params.contractAddr,
        "value": "0x0",
        "data": contract.methods.transfer(params.topubKey, 1).encodeABI(),
        "chainId": chainId
    };

    const tx = new EthereumTx(rawTransaction);
    tx.sign(privateKey);
    const serializedTx = tx.serialize();
    
    web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'), function(err, hash) {                
        if (!err) console.log('hash : ', hash)
        else console.log(err)
    });
}


// sendTransaction(txObj);






//////////////////////// 다른 방법 ////////////////////////
// console.log(balance);
  // console.log(contract.methods.balanceOf);
  // return new Promise((resolve, reject) => {
  //   web3.eth.call({
  //     to: params.frompubKey,
  //     data: contract.methods.balanceOf(params.frompubKey).encodeABI()
  //   }).then((balance) => {
  //     console.log(balance)
  //     var token = web3.utils.fromWei(balance)
  //     console.log('Tokens Owned: ' + token);
  //     resolve(token);
  //   })
  // })

  // return new Promise((resolve, reject) => {
  //   var fromPubKey = params.frompubKey;  
  //   var addr = fromPubKey;
  //   var contractAddr = contractAddress;
  //   var tknAddress = (addr).substring(2)
  //   var contractData = ('0x70a08231000000000000000000000000' + tknAddress)
  //   web3.eth.call({
  //     to: contractAddr, 
  //     data: contractData 
  //   },
  //   function(err, result) {
  //     if (result) {                
  //       resolve(web3.utils.fromWei(result));
  //     }
  //     else {
  //       reject(err);
  //       console.log(err); // Dump errors here
  //     }
  //   });
  // })