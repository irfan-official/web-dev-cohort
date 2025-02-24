let salsesData = [
  { product: "Laptop", price: 1200 },
  { product: "Laptop", price: 1200 },
];

let initialValue = 0;
let totalSales = salsesData.reduce((acc, sale) => acc + sale.price, 0);
console.log(totalSales);

// pipe --> __._._

// Items less than 50
let inventory = [
  { name: "Widget A", stock: 30 },
  { name: "Widget A", stock: 120 },
  { name: "Widget A", stock: 45 },
  { name: "Widget A", stock: 70 },
];

let lowStockItems = inventory.filter((item, index) => item.stock < 50);

console.log(lowStockItems);

let userActivity = [
  { user: "Alice", activityCount: 45 },
  { user: "Alice", activityCount: 72 },
  { user: "Alice", activityCount: 33 },
];

let mostActiveUser = userActivity.reduce((acc, currnt) => {
  if (acc.activityCount > currnt.activityCount) {
    return acc;
  } else {
    return currnt;
  }
});

console.log(mostActiveUser);

// let mostActiveUser = userActivity.reduce((acc, current) => {
//   return acc.activityCount > current.activityCount ? acc : current;
// });

let expenses = [
  { description: "Groceries", amount: 50, category: "Food" },
  { description: "Electricity Bill", amount: 100, category: "Utilities" },
  { description: "Dinner", amount: 30, category: "Food" },
  { description: "Internet Bill", amount: 50, category: "Utilities" },
];

let expenseReport = expenses.reduce(
  (report, expense) => {
    report[expense.category] += expense.amount;
    return amount;
  },
  { Food: 0, Utilities: 0 }
);
console.log(expenseReport);
//....................................................................................................
let tasks = [
  { description: "Write report", completed: false, priority: 2 },
  { description: "Send email", completed: true, priority: 3 },
  { description: "Prepare presentation", completed: false, priority: 1 },
];

let pendingSortedTasks = tasks
  .filter((task, task_index) => !task.completed)
  .sort((a, b) => a.priority - b.priority);

console.log(pendingSortedTasks);

// ...............................................................................................

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
