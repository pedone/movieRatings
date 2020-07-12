pragma solidity >=0.5.0 <0.7.0;

contract MovieRating {

  struct Rating
  {
    uint id;
    uint movieId;
    uint rating;
    string comment;
  }

  struct Movie {
    uint id;
    string name;
    uint year;
    uint likes;
  }

  event MovieCreated(uint id, string name, uint year);
  event RatingCreated(uint movieId, string comment);

  uint public movieCount = 0;
  uint public ratingCount = 0;

  mapping(uint => Movie) public movies;
  mapping(uint => Rating) public ratings;

  // constructor() public {
  //   createMovie("Crouching Tiger, Hidden Dragon", 2000);
  // }

  function createMovie(string memory _name, uint _year) public {
    movies[movieCount] = Movie(movieCount, _name, _year, 0);
    emit MovieCreated(movieCount, _name, _year);
    movieCount++;
  }

  function createRating(uint _movieId, uint _rating, string memory _comment) public {
    if (_movieId > movieCount)
      return;

    ratings[ratingCount] = Rating(ratingCount, _movieId, _rating, _comment);
    emit RatingCreated(_movieId, _comment);
    ratingCount++;
  }

  function likeMovie(uint _id) public {
    if (_id > movieCount)
      return;

    movies[_id].likes++;
  }

}