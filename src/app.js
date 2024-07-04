import express from "express";
import { config } from "dotenv";
import routes from "./routes/default.route.js";
import { jsonInterceptor } from "./interceptors/json-response.interceptor.js";
import { DB } from "./config/db.js";
import { createSampleData } from "./utils/create-sample-data.js";
import { errorHandlerMiddleware } from "./middlewares/error-handler.middleware.js";

config();

const app = express();
const port = 3000;

app.use(jsonInterceptor);

app.use(routes);

app.use(errorHandlerMiddleware);

app.listen(port, async () => {
  console.log(`App listening on port ${port}`);
  await DB.connect();
  await createSampleData();
});
