"use client";
import jet from "@/utils/font";
import { useState } from "react";
import requestAirdrop from "@/utils/airDrop";


export default function Airdrop() {
  const [pubKey, setPubKey] = useState<string>("");
  const [amount, setAmount] = useState<number>(1);

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
    console.log(rpcUrl);
    
    const response = await requestAirdrop(pubKey.trim(), amount, rpcUrl);

    if (response) {
      alert("Airdrop successful");
    } else {
      console.error("Error in Airdrop");
    }
  };

  return (
    <div className={`w-screen h-screen flex flex-col justify-center items-center gap-10 ${jet.className}`}>
      <h1 className="text-center text-9xl">Solana Airdrop</h1>
      <input
        className="w-1/2 border-2 border-white p-5 rounded-full mt-24"
        type="text"
        value={pubKey}
        onChange={(e) => setPubKey(e.target.value)}
        placeholder="Enter Solana address"
      />
      <input
        type="number"
        className="w-1/4 border-2 border-white p-5 rounded-full mt-2 mb-10"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Enter amount"
      />
      <button
        className="bg-white text-black font-Jet px-10 py-5 rounded-full w-1/4 text-3xl"
        onClick={handleSubmit}
      >
        Airdrop
      </button>
    </div>
  );
}
