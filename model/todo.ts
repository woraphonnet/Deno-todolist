import { Model, DataTypes } from "https://deno.land/x/denodb/mod.ts";

class TodoList extends Model {
  static table = "todo_list";
  static timestamps = true;
  static fields = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    detail: DataTypes.STRING,
  };
}

export default TodoList;
