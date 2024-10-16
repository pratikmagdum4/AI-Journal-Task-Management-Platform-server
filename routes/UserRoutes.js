import express from "express";
import {
  addJournalEntry,
  CreateUser,
  getEntryOnDate,
} from "../controllers/CreateUserController.js";
import { UserLogin } from "../controllers/LoginController.js";
const router = express.Router();


router.post("/signup", CreateUser);
// router.post("/login", UserLogin);
router.post("/add-entry", addJournalEntry);
router.get("/get-entry", getEntryOnDate);

export default router;