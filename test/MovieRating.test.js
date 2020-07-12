const { assert } = require("chai");

const MovieRating = artifacts.require('./MovieRating.sol');

contract('MovieRating', accounts => {
    before(async () => {
        this.movieRating = await MovieRating.deployed();
    })

    it('deploys successfully', async () => {
        const address = await this.movieRating.address;
        assert.notEqual(address, 0x0);
        assert.notEqual(address, '');
        assert.notEqual(address, null);
        assert.notEqual(address, undefined);
    })
})