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

    it('creates movie', async () => {
        var result = await this.movieRating.createMovie('Blade', 1998);

        const event = result.logs[0].args;
        assert.equal(event.id.toNumber(), 0);
        assert.equal(event.name, 'Blade');
        assert.equal(event.year.toNumber(), 1998);

        var count = await this.movieRating.movieCount();
        assert.equal(count.toNumber(), 1);

        var movie = await this.movieRating.movies(0);
        assert.equal(movie.name, "Blade");
        assert.equal(movie.year.toNumber(), 1998);
    })
    
    it('creates rating', async () => {
        var movieResult = await this.movieRating.createMovie('Blade', 1998);

        var comment = "lots of action"
        var ratingResult = await this.movieRating.createRating(0, 5, comment);

        const event = ratingResult.logs[0].args;
        assert.equal(event.movieId.toNumber(), 0);
        assert.equal(event.comment, comment);

        var count = await this.movieRating.ratingCount();
        assert.equal(count.toNumber(), 1);

        var rating = await this.movieRating.ratings(0);
        assert.equal(rating.rating.toNumber(), 5);
        assert.equal(rating.comment, comment);
    })

    
    it('likes movie', async () => {
        var movieResult = await this.movieRating.createMovie('Blade', 1998);
        var movie = await this.movieRating.movies(0);
        assert.equal(movie.likes.toNumber(), 0);

        var likeResult = await this.movieRating.likeMovie(0);
        movie = await this.movieRating.movies(0);
        assert.equal(movie.likes.toNumber(), 1);
    })
})