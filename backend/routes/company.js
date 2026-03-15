import express from "express"
import wrapAsync from "../utils/wrapAsync.js"
import { getAllCompany, getCompanyById, registeCompany, updateCompany } from "../controllers/company.controller.js"
import isAuthenticate from '../middlewares/isAuthenticate.js'
const router=express.Router()

router.route('/register').post(isAuthenticate,wrapAsync(registeCompany))
router.route('/get').get(isAuthenticate,wrapAsync(getAllCompany))
router.route('/get/:id').get(wrapAsync(getCompanyById))
router.route('/update/:id').put(isAuthenticate,wrapAsync(updateCompany))

export default router