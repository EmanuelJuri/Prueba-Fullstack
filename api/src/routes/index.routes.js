import { Router } from "express";

import userRoutes from './user.routes.js'
import authRoutes from './auth.routes.js'
import billRoutes from './bill.routes.js'
import { checkJwt } from "../middleware/session.js";

const router = Router();

router.use('/api', authRoutes)
router.use('/api', /* checkJwt, */ userRoutes)
router.use('/api', checkJwt, billRoutes)


export default router;