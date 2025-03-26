"use client";
import { useState } from "react";
import requestAirdrop from "@/utils/airDrop";

export default function Airdrop() {
  const [pubKey, setPubKey] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);

  const rpcUrl = process.env.NEXT_PUBLIC_DEV_NET || "https://api.devnet.solana.com";

  const handleSubmit = async () => {
    if (!pubKey.trim()) {
      alert("Please enter a valid public key.");
      return;
    }
    if (amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    console.log("Airdropping to:", pubKey.trim());
    const response = await requestAirdrop(pubKey.trim(), amount, rpcUrl);

    if (response) {
      alert("Airdrop successful");
    } else {
      console.error("Error in Airdrop");
    }
  };

  return (
    <div>
      <label htmlFor="publicKey">Enter public key</label>
      <input
        type="text"
        value={pubKey}
        onChange={(e) => setPubKey(e.target.value)}
        placeholder="Enter Solana address"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value) )}
        placeholder="Enter amount"
      />
      <button onClick={handleSubmit}>Airdrop</button>
    </div>
  );
}
