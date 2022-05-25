import { Router } from "express";
import {
  createNewStudent,
  deleteStudent,
  getAllStudent,
  getSingleUseStudent,
  updateUserStudent,
} from "../controllers/studentsController.js";

const studentsRouter = Router();

studentsRouter.route("/").get(getAllStudents).post(createNewStudent);

studentsRouter
  .route("/:id")
  .get(getSingleStudent)
  .delete(deleteStudent)
  .put(updateStudent);

export default studentsRouter;