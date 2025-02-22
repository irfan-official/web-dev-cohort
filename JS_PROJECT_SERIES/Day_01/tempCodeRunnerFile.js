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