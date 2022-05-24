import { Router } from "express";
import {
  allPuppies,
  updatePuppies,
  deletePuppy,
  specificPuppy,
  newPuppy,
} from "../controller/controller";

const routes = Router();

routes.get("/", allPuppies);
routes.get("/:id", specificPuppy);
routes.post("/", newPuppy);
routes.put("/:id", updatePuppies);
routes.delete("/:id", deletePuppy);

export default routes;
