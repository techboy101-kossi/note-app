import express from "express";
import { notesControllers } from "../controllers/notesControllers.js";

const notesRouter = express();
notesRouter.post("/create", notesControllers.createNote);

notesRouter.get("/", notesControllers.getNotes);
notesRouter.get("/note/:noteId", notesControllers.getNotesById);
notesRouter.delete("/note/delete/:noteId", notesControllers.deleteNote);

export default notesRouter;
