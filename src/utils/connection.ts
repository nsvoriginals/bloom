import { Connection ,LAMPORTS_PER_SOL,PublicKey } from "@solana/web3.js";

 export const connection=new Connection(process.env.DEV_NET || 'https://api.solana.devnet.com')

