const { assert } = require("chai")

const Cont = artifacts.require("./Cont.sol")

require("chai")
    .use(require("chai-as-promised"))
    .should()

contract('Cont', ([contractOwner, secondAddress, thirdAddress]) => {
    let mCont

    // this would attach the deployed smart contract and its methods 
    // to the `truffleTutorial` variable before all other tests are run
    before(async () => {
        mCont = await Cont.deployed()
    })

    // check if deployment goes smooth
    describe('deployment', () => {
        // check if the smart contract is deployed 
        // by checking the address of the smart contract
        it('deploys successfully', async () => {
            const address = await mCont.address

            assert.notEqual(address, '')
            assert.notEqual(address, undefined)
            assert.notEqual(address, null)
            assert.notEqual(address, 0x0)
        })

        // check if the zero value is stored on deployment as expected
        it('has a zero value', async () => {
            const mm = await mCont.getCount()
            assert.equal(mm, 0)
        })
    })

    describe('+/-', () => {
        // check 
        it('contract increment', async () => {
            // set
            await mCont.incrementCounter()

            // check new value
            const mm = await mCont.getCount()
            assert.equal(mm, 1)
        })


    })
})