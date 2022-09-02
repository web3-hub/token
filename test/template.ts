// noinspection ES6ConvertVarToLetConst,JSDuplicatedDeclaration

import { ethers } from "hardhat";
import { BigNumber, ContractFactory, Signer } from "ethers";
import { ContractFunction } from "@ethersproject/contracts";
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import {CounterContract, CounterContract__factory} from "../typechain-types";

chai.use(chaiAsPromised);
const expect = chai.expect;


describe("Test", () => {

    let contract: CounterContract
    let owner: SignerWithAddress
    let buyer: SignerWithAddress
    let buyer2: SignerWithAddress
    let addrs: SignerWithAddress[]

    beforeEach(async () => {
        const contractFactory = (await ethers.getContractFactory("CounterContract")) as CounterContract__factory

        [owner, buyer, buyer2, ...addrs] = await ethers.getSigners()

        contract = await contractFactory.deploy()
        await contract.deployed()
    })


    it("Basic Test", async () => {
        expect(await contract.counter()).to.be.equals(0)
    })
})
