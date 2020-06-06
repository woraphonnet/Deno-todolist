import { Router } from "https://deno.land/x/oak/mod.ts";
import todoListController from "../controllers/todoListController.ts";
const router = new Router();
const todoList = new todoListController();

router.get("/api/todoList", async ({ response }) => {
  try {
    response.body = await todoList.getAllData();
    response.status = 200;
  } catch (error) {
    console.log(error);
  }
});

router.get("/api/todoList/:id", async ({ params, response }: { params: { id: string }; response: any }) => {
  try {
    const value  = await params;
    response.body = await todoList.getIdData(value.id);
    response.status = 200;
  } catch (error) {
    console.log(error);
  }
});

router.post("/api/todoList", async ({ request, response }) => {
  try {
    const { value } = await request.body();
    response.body = await todoList.createData(value);
    response.status = 200;
  } catch (error) {
    console.log(error);
  }
});

router.put("/api/todoList/:id", async ({params, request, response }: { params: { id: string }; response: any ,request:any}) => {
  try {
    const itemId = await params;
    const { value } = await request.body();
    response.body = await todoList.updateData(itemId,value);
    response.status = 200;
  } catch (error) {
    console.log(error);
  }
});

router.delete("/api/todoList/:id", async ({ params, response }: { params: { id: string }; response: any }) => {
  try {
    const value  = await params;
    response.body = await todoList.deleteData(value.id);
    response.status = 200;
  } catch (error) {
    console.log(error);
  }
});

export default router;
