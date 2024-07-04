import Sequelize from "sequelize";
import { setUp } from "../models/index.js";

export class DB {
  static async getInstance() {
    if (!this.instance) {
      this.instance = new Sequelize.Sequelize({
        dialect: "sqlite",
        storage: ":memory:",
      });
      await setUp(this.instance);
    }
    return this.instance;
  }
}
