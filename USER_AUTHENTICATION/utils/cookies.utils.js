export default function (res, jwtToken) {
  const cookiesOptions = {
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    httpOnly: true, // prevent xxs(cross script)
  };
  res.cookie("jwtToken", jwtToken, cookiesOptions);
  return true;
}
