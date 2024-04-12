import Web3 from "web3";
import { RPC_URL } from "./config";

const web3 = new Web3(RPC_URL.Local);

const accounts = web3.eth.accounts;

export async function createWallet(Passphrase: string) {
  const wallet = accounts.wallet.create(10);
  console.log(wallet);
  const encryptedWallet = await accounts.wallet.encrypt(Passphrase);
  console.log(encryptedWallet);
  return encryptedWallet;
}

export async function decryptWallet(wallet, password) {
  const decryptedWallet = await accounts.wallet.decrypt(wallet, password);
  console.log(decryptedWallet);
  return decryptedWallet;
}
