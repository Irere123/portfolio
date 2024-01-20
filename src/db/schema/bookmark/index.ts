import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "..";

export const bookmarks = pgTable("bookmarks", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  summary: text("summary").notNull(),
  userId: text("user_id").references(() => users.id),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

export type Bookmark = typeof bookmarks.$inferSelect;
export type NewBookmark = typeof bookmarks.$inferInsert;
