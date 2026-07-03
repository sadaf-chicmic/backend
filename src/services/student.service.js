const students = require("../data/students");

function getAllStudents(){
    return students;
}

function getStudentById(id){
    const student=students.find((student)=>student.id===Number(id));

    return student;
}

function createStudent(studentData){
    const newStudent={
        id:students.length+1,
        ...studentData
    };

    students.push(newStudent);
    return newStudent;
}

function updateStudent(id,updatedData){
    const studentToUpdate=students.find((student)=>student.id ===Number(id));

    if(!studentToUpdate) return null;

    Object.assign(studentToUpdate,updatedData);

    return studentToUpdate;
}

function deleteStudent(id){
    const index=students.findIndex((student)=>student.id ===Number(id));

    if(index==-1) return null;

    return students.splice(index,1)[0];
}
    

module.exports = {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
}