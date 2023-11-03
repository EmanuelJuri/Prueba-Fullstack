import { Router } from "express";
import { getAllBills, getBill } from "../controllers/bill.controller.js";

const router = Router();

router.get('/bills', getAllBills)

router.get('/bill/:id', getBill)

export default router;