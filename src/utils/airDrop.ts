import { LAMPORTS_PER_SOL, PublicKey, Connection } from "@solana/web3.js";

const requestAirdrop = async (walletAddress: string, amount: number, rpcUrl: string) => {
  try {
    const connection = new Connection(rpcUrl, { commitment: "confirmed" });

    const airdropSignature = await connection.requestAirdrop(
      new PublicKey(walletAddress),
      amount * LAMPORTS_PER_SOL
    );

    await connection.confirmTransaction(airdropSignature);
    console.log("Airdrop successful! Signature:", airdropSignature);
    return true;
  } catch (error) {
    console.error("Airdrop failed:", error);
    return false;
  }
};

export default requestAirdrop;
