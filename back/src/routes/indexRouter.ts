//que vaya a los router axinados
import { Router } from "express";
import userRoutes from "./usersRouter";
import appointmentRoutes from "./appointmentRouter";

const router: Router = Router();

router.use("/users", userRoutes);
router.use("/appointments", appointmentRoutes);

export default router;
