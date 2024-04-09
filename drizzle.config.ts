import { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
import { prod } from "@/lib/constants";

dotenv.config({
  path: prod ? ".env.local" : ".env.prod",
});

export default {
  schema: "./src/db/schema/*",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DB_URL!,
  },
  out: "./drizzle",
} satisfies Config;
