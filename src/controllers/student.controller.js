const studentService = require("../services/student.service");

function getStudents(req,res){
    const data = studentService.getAllStudents();

    return res.status(200).json({
        success:true,
        message:"Student data fetched successfully",
        count:data.length,
        data:data
    })
}

function getStudent(req,res){
    const data = studentService.getStudentById(req.params.id);

    if(data == null){
        return res.status(404).json({
            success:false,
            message: `Student data of id = ${req.params.id} not found`,
        });
    }

    return res.status(200).json({
      success: true,
      message: `Student data of id = ${req.params.id} fetched successfully`,
      data: data,
    });
}

function createStudent(req,res){
const student=studentService.createStudent(req.body);

return res.status(201).json({
    success:true,
    message:"Student data created successfully",
    data:student
})
}

function updateStudent(req,res){
    const student=studentService.updateStudent(req.params.id,req.body);

    if(student == null){
        return res.status(404).json({
            success:false,
            message: `Student data of id = ${req.params.id} not found`,
        });
    }

    return res.status(200).json({
        success:true,
        message:"Student data updated successfully",
        data:student
    })
}

function deleteStudent(req,res){
    const student = studentService.deleteStudent(req.params.id);

    if(student == null){
        return res.status(404).json({
            success:false,
            message: `Student data of id = ${req.params.id} not found`,
        });
    }

    return res.status(200).json({
        success:true,
        message: `Student data of id = ${req.params.id} deleted successfully`,
        data: student
    })
}

module.exports={
    getStudents,
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent
}