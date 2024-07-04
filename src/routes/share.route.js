import { Router } from "express";

const shareRoute = Router();

shareRoute.update("/", (req, res) => {
  res.send("Update on hourly basis with admin security");
});

export { shareRoute };
