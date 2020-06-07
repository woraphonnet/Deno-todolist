import ToDoModel from "../model/todo.ts";
import { DB } from "https://deno.land/x/sqlite/mod.ts";

class todoList {
  public getAllData() {
    const data = ToDoModel.all();
    return data;
  }

  public getIdData(id: any) {
    const data = ToDoModel.find(id);
    return data;
  }

  public async createData(obj: any) {
    const data = await ToDoModel.create([obj]);
    return data;
  }

  public async updateData(id:any,obj: object) {
    try {
      const db = new DB("database.sqlite");
      db.query("UPDATE todo_list SET title ='guide' WHERE id = 3");
      db.close();
      // await ToDoModel.where('id','3').update('{title:"guide hi",detail:"asdasdasd"}');
      return "asdasds";          
    } catch (error) {
      console.log("asdasd",error);
    }
  }

  public async deleteData(id: any) {
    const data = await ToDoModel.where("id", id).delete();
    return data;
  }
}

export default todoList;
