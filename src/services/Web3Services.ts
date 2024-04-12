import Web3 from "web3";
import { RPC_URL } from "./config";

const web3 = new Web3(RPC_URL.Local);

const accounts = web3.eth.accounts;

export async function createWallet(Passphrase: string) {
  const wallet = accounts.wallet.create(10);
  const encryptedWallet = await wallet.encrypt(Passphrase);
  console.log(wallet);
  console.log(encryptedWallet);
  return encryptedWallet;
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
