import { Router } from "express";

const share_route = Router();

share_route.update("/", (req, res) => {
  res.send("Update on hourly basis with admin security");
});

export { share_route };
