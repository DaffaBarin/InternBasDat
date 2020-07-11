const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('cc1be001c75e3f456439afd07ea56d7ff4434c5eb07e0fb38005903f00394796');
const myWalletAddress = myKey.getPublic('hex');

const test = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 20);
tx1.signTransaction(myKey);
test.addTransaction(tx1);


console.log('\n Starting the miner..');
test.minePendingTransactions(myWalletAddress);

console.log('\nBalance of Dappa is', test.getBalanceOfAddress(myWalletAddress));
//tamper
//test.chain[1].transactions[0].amount = 10;
//test.chain[1]

console.log('Is chain valid?', test.isChainValid());
