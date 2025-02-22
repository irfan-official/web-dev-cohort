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
