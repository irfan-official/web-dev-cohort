// const assignCookiesOptions = {
//   expires: time,
//   httpOnly: true, // prevent xxs(cross script)
// };
import ms from "ms";

const deleteCookiesOptions = {
  httpOnly: true, // prevent xxs(cross script)
};

export default function (res, key, jwtToken, time) {
  const expiresDate = new Date(Date.now() + ms(time)); // convert '5min', '7day' etc. to milliseconds

  res.cookie(key, jwtToken, {
    expires: expiresDate,
    httpOnly: true, // prevent xxs(cross script)
  });
  return true;
}

export { deleteCookiesOptions };

// in production.............................>

// const assignCookiesOptions = {
//   expires: time,
//   httpOnly: true,
//   secure:  process.env.NODE_ENV === "production",
//   sameSite: "Strict",
// };

// const deleteCookiesOptions = {
//   httpOnly: true,
//   secure:  process.env.NODE_ENV === "production",
//   sameSite: "Strict",
// };
