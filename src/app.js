import express from "express";
import errorHandler from "errorhandler";
import routes from "./routes/default.route.js";
import { jsonInterceptor } from "./interceptors/json-response.interceptor.js";
import { DB } from "./config/db.js";

const app = express();
const port = 3000;

app.use(errorHandler());
app.use(jsonInterceptor);

app.use(routes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
  DB.getInstance();
});
