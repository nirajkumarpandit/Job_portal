import express from "express"
import isAuthenticate from "../middlewares/isAuthenticate.js";
import wrapAsync from "../utils/wrapAsync.js";
import { deleteJob, getAdminJob, getAllJob, getJobById, postJob } from "../controllers/job.controller.js";
const router = express.Router();

router.route("/postJob").post(isAuthenticate,wrapAsync(postJob))
router.route("/get").get(isAuthenticate,wrapAsync(getAllJob))
router.route("/get/:id").get(isAuthenticate,wrapAsync(getJobById))
router.route("/getAdminJobs").get(isAuthenticate,wrapAsync(getAdminJob))
router.route("/delete/:id").get(isAuthenticate,wrapAsync(deleteJob))

export default router