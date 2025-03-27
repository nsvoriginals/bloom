import { LAMPORTS_PER_SOL, PublicKey, Connection, TransactionConfirmationStrategy } from "@solana/web3.js";
import dotenv from "dotenv";

dotenv.config();

const requestAirdrop = async (walletAddress: string, amount: number, rpcUrl: string) => {
  try {
    const connection = new Connection(process.env.NEXT_PUBLIC_DEV_NET || 'https://api.devnet.solana.com', { commitment: "confirmed" });
    console.log("Using RPC URL:", process.env.NEXT_PUBLIC_DEV_NET);

    const airdropSignature = await connection.requestAirdrop(
      new PublicKey(walletAddress),
      amount * LAMPORTS_PER_SOL
    );
    const latestBlockHash = await connection.getLatestBlockhash();
    // Define the confirmation strategy
 

    // Use the updated confirmTransaction method
    await connection.confirmTransaction({
      blockhash: latestBlockHash.blockhash,
      lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
      signature: airdropSignature,
    });
    console.log("Airdrop successful! Signature:", airdropSignature);
    return true;
  } catch (error) {
    console.error("Airdrop failed:", error);
    return false;
  }
};

export default requestAirdrop;
