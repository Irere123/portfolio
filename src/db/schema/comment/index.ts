import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "../user";

export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  userId: text("user_id").references(() => users.id, {
    onDelete: "cascade",
  }),
  text: text("text").notNull(),
  parentId: text("parent_id"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

export type Comment = typeof comments.$inferSelect;
export type NewComment = typeof comments.$inferInsert;
