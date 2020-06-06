// database
import { Database } from "https://deno.land/x/denodb/mod.ts";
import TodoList from "../model/todo.ts";
const db = new Database("sqlite3", {
  filepath: "./database.sqlite",
});

db.link([TodoList]);

db.sync({ drop: false });

export default db;
