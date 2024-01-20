import { db } from "@/db";
import { sql } from "drizzle-orm";

export async function increment(slug: string) {
  await db.execute(sql`
   INSERT INTO views (slug, count)
   VALUES (${slug}, 1)
   ON CONFLICT (slug)
   DO UPDATE SET count = views.count + 1
  `);
}

export async function bookmarks(
  title: string,
  summary: string,
  userId: string
) {
  await db.execute(sql`
    INSERT INTO bookmarks (title, summary, user_id)
    VALUES (${title}, ${summary}, ${userId})
   `);
}
