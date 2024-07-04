import express from "express";
import errorHandler from "errorhandler";
import * as routes from "./routes/default.route";
import { jsonInterceptor } from "./interceptors/json-response.interceptor";

const app = express();
const port = 3000;

app.use(errorHandler());
app.use(jsonInterceptor);

app.use(routes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
