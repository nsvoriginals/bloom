const dotenv=require('dotenv')
dotenv.config();
console.log("DEVNET URL:", process.env.NEXT_PUBLIC_DEV_NET);
console.log("MAINNET URL:", process.env.NEXT_PUBLIC_MAIN_NET);
