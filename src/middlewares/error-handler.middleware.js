export function errorHandlerMiddleware(err, req, res, next) {
  if (!err) return next(); // you also need this line
  const status = err.status || 500;
  res.error = err;
  console.error(err);
  res.status(status).send({
    status: "error",
    message: err.message,
  });
}
