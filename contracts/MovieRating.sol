pragma solidity >=0.4.21 <0.7.0;

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

  uint public movieCount = 0;
  uint public ratingCount = 0;

  mapping(uint => Movie) public movies;
  mapping(uint => Rating) public ratings;

  // constructor() public {
  //   createMovie("Crouching Tiger, Hidden Dragon", 2000);
  // }

  function createMovie(string memory _name, uint _year) public {
    movies[movieCount] = Movie(movieCount, _name, _year, 0);
    movieCount++;
  }

  function createRating(uint movieId, uint rating, string memory comment) public {
    if (movieId > movieCount)
      return;

    ratings[ratingCount] = Rating(ratingCount, rating, movieId, comment);
    ratingCount++;
  }

  function likeMovie(uint id) public {
    if (id > movieCount)
      return;

    movies[id].likes++;
  }

}