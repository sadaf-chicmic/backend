const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth.middleware");
const validate = require("../middlewares/validation.middleware");

const {getStudents,getStudent,createStudent,updateStudent,deleteStudent} = require("../controllers/student.controller");

router.get("/" , getStudents);
router.get("/:id" , auth, getStudent);
router.post("/",auth,validate,createStudent);
router.put("/:id",auth,validate,updateStudent);
router.delete("/:id",auth,validate,deleteStudent);

module.exports = router;