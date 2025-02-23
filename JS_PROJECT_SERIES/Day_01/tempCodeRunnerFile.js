let movieRating = [
  { title: "Movie A", ratings: [4, 5, 3] },
  { title: "Movie B", ratings: [5, 5, 4] },
  { title: "Movie C", ratings: [3, 4, 2] },
];

let averageRatings = movieRating.map((movie, movieIndex) => {
  let totalRating = movie.ratings.reduce((acc, current) => acc + current, 0);
  let rating = totalRating / movie.ratings.length;

  return { title: movie.title, rating: rating.toFixed(2) };
});
console.log(averageRatings);
