async function registerUser() {
  await collectData();
  validationEmail();
  await insertInDb();
  sendEmail();
  sendPushNotification();
}

registerUser
  .then(() => console.log("Done"))
  .catch(() => console.log(`Somithing went wrong`));
