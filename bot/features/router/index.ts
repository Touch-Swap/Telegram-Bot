import { Router } from "@grammyjs/router";
import { Context } from "../../contexts";

const router = new Router<Context>(() => "hello");

export default router;