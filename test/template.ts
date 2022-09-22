// noinspection ES6ConvertVarToLetConst,JSDuplicatedDeclaration

import { ethers } from "hardhat";
import { BigNumber, ContractFactory, Signer } from "ethers";
import { ContractFunction } from "@ethersproject/contracts";
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import {
    CounterContract,
    CounterContract__factory,
    Seller,
    Seller__factory,
    Token,
    Token__factory
} from "../typechain-types";

chai.use(chaiAsPromised);
const expect = chai.expect;


describe("Test", () => {

    let seller: Seller
    let token: Token
    let owner: SignerWithAddress
    let buyer: SignerWithAddress
    let buyer2: SignerWithAddress
    let addrs: SignerWithAddress[]
    let tokenAddress

    beforeEach(async () => {
        const contractFactory = (await ethers.getContractFactory("Seller")) as Seller__factory

        [owner, buyer, buyer2, ...addrs] = await ethers.getSigners()

        seller = await contractFactory.deploy()
        await seller.deployed()

        tokenAddress = await seller.token()
        const tokenContractFactory = (await ethers.getContractFactory("Token")) as Token__factory
        token = await tokenContractFactory.attach(tokenAddress)
    })


    const oneEth = ethers.utils.parseEther('1')

    it("Send ETH test", async () => {
        expect(await ethers.provider.getBalance(seller.address)).to.be.equals(0)

        const tx = await owner.sendTransaction({
            to: seller.address,
            value: oneEth
        })
        await tx.wait()

        expect(await ethers.provider.getBalance(seller.address)).to.be.equals(oneEth)
    })

    it("buy token", async () => {
        expect(await ethers.provider.getBalance(seller.address)).to.be.equals(0)

        await seller.connect(buyer).sell({ value: oneEth })

        expect(await ethers.provider.getBalance(seller.address)).to.be.equals(oneEth)

        expect(await token.balanceOf(buyer.address)).to.be.equals(oneEth)
    })
})
