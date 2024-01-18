import { db } from "@/db";
import { sql } from "drizzle-orm";

export async function getBlogViews() {
  return (await db.execute(sql`SELECT slug, count FROM views`)).rows;
}
