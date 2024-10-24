import { defineDb, defineTable, column } from 'astro:db';

const User = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    email: column.text({ unique: true }),
    name: column.text({ optional: true }),
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: { User }
});
