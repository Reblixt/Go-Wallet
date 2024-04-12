import { useState } from "react";
import {
  createWallet,
  decryptWallet,
  getBalance,
  privateKeyToAccountTest,
} from "../services/Web3Services";

export const Home = () => {
  const [wallet, setWallet] = useState({});
  const [password, setPassword] = useState("");

  const handleWallet = async () => {
    const newWallet = await createWallet("IamPassword");
    setWallet(newWallet);
  };

  return (
    <>
      <button onClick={handleWallet}> CreateWallet</button>
      <button
        onClick={async () => {
          await decryptWallet(wallet, password);
        }}
      >
        DecryptWallet
      </button>
      <button
        onClick={async () => {
          await privateKeyToAccountTest(password);
        }}
      >
        private key to account
      </button>
      <input
        type="text"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button
        onClick={async () => {
          await getBalance(password);
        }}
      >
        getBalance
      </button>
    </>
  );
};
