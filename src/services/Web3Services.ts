import Web3 from "web3";
import { RPC_URL } from "./config";

const web3 = new Web3(RPC_URL.Sepolio_URL);

const accounts = web3.eth.accounts;

export async function createWallet(Passphrase: string) {
  const wallet = accounts.wallet.create(1);
  const encryptedWallet = await wallet.encrypt(Passphrase);
  console.log(wallet);
  console.log(encryptedWallet);
  return encryptedWallet;
}

export async function importAccount(privateKey: string) {
  return accounts.wallet.add(privateKey);
}

export async function decryptWallet(wallet: any, password: string) {
  const decryptedWallet = await accounts.wallet.decrypt(wallet, password);
  console.log(decryptedWallet);
  return decryptedWallet;
}

export async function privateKeyToAccountTest(privateKey: string) {
  const account = accounts.privateKeyToAccount(privateKey);
  console.log(account);
  return account;
}

export async function getBalance(address: string) {
  const balance = await web3.eth.getBalance(address);
  const balanceInEther = web3.utils.fromWei(balance, "ether");
  const blockNumber = await web3.eth.getBlockNumber();
  const gasPrice = await web3.eth.getGasPrice();
  const gasPriceInEther = web3.utils.fromWei(gasPrice, "ether");
  console.log(gasPriceInEther, "gasPriceInEther");
  console.log(balanceInEther);
  console.log(blockNumber);

  return balance;
}

export async function sendTransaction(
  provider: string,
  reciever: string,
  value: string,
  data?: string,
) {
  const send = await web3.eth.sendTransaction({
    from: provider?.address,
    to: reciever,
    value: value, // needs to be hasched data
    gas: 300000,
    gasPrice: await web3.eth.getGasPrice(),
    data: data,
  });
  console.log(send);

  const signedTransaction = await accounts.signTransaction(
    send,
    provider.privateKey,
  );
  const txReceipt = await web3.eth.sendSignedTransaction(
    signedTransaction.send,
  );

  console.log("Transaction receipt", txReceipt);

  return txReceipt;
}
