import ToDoModel from "../model/todo.ts";

type NewType = ToDoModel;

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

  public async updateData(id:any,obj: any) {
    console.log('obj',obj);
    try {
      await ToDoModel.where("title","xxxx").update({ title: "guide hi", detail: "asdasdasd" });
      return "asdasds";          
    } catch (error) {
      console.log(error);
    }
  }

  public async deleteData(id: any) {
    const data = await ToDoModel.where("id", id).delete();
    return data;
  }
}

export default todoList;
