import "@nomiclabs/hardhat-waffle"
import '@typechain/hardhat'
import dotenv from 'dotenv'
import { HardhatUserConfig } from "hardhat/config"
import { HttpNetworkConfig } from "hardhat/types";

dotenv.config()

// const { POLYGON_MAINNET_PRIVATE_KEY = '' } = process.env

module.exports = {
  solidity: "0.8.11"
}
