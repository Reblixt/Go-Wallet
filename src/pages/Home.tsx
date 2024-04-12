import { useState } from "react";
import { createWallet, decryptWallet } from "../services/Web3Services";

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
      <input
        type="text"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
    </>
  );
};
