import { Portfolio } from "../models/portfolio.js";
import { Share } from "../models/share.model.js";
import { User } from "../models/user.model.js";

async function createSampleData() {
  const users = await User.bulkCreate(
    [
      { username: "test1" },
      { username: "test2" },
      { username: "test3" },
      { username: "test4" },
      { username: "test5" },
    ],
    {
      validate: true,
    }
  );

  const portfolios = await Portfolio.bulkCreate(
    [
      { userId: users[0].id },
      { userId: users[1].id },
      { userId: users[2].id },
      { userId: users[3].id },
      { userId: users[4].id },
    ],
    {
      validate: true,
    }
  );

  const shares = await Share.bulkCreate(
    [
      {
        symbol: "EVA",
        name: "EVA Commerce",
        maxAmount: 500,
      },
      {
        symbol: "GGL",
        name: "Google",
        maxAmount: 15000,
      },
      {
        symbol: "MCS",
        name: "Microsoft",
        description: "Microsoft stock",
        maxAmount: 125.8,
      },
      {
        symbol: "ETS",
        maxAmount: 10,
      },
      {
        symbol: "",
        maxAmount: 10000,
      },
      {
        symbol: "HYP",
        maxAmount: 1,
      },
    ],
    {
      validate: true,
    }
  );
}

export { createSampleData };
