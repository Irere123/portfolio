import { sql } from "drizzle-orm"
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"
import { users } from "../user"


export const comments = pgTable("comments", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`), 
  userId: uuid("user_id").references(() => users.id, { onDelete: "cascade" }),
  text: text("text").notNull(), 
  parentId: uuid("parent_id"), 
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
})

export type Comment = typeof comments.$inferSelect();
export type NewComment = typeof comments.$inferInsert();
