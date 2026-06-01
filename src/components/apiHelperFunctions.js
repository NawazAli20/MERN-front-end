const apiEndPoint = "http://localhost:3000/api/students";

async function getStudents(){
    const response = await fetch(apiEndPoint);
    return response;
}

async function getStudentById(id){
    const response = await fetch(`${apiEndPoint}/${id}`);
    return response;
}

export {getStudents, getStudentById};