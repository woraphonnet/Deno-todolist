import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes/index.routes.ts";
import "./database/db.ts";

// Connect database

const POST = Deno.env.get("POST") || "8000";
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`localhost:${POST}`);
await app.listen({ port: parseInt(POST) });
