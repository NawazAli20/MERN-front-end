const apiEndPoint = "http://localhost:3000/api/students";

async function getStudents(){
    const response = await fetch(apiEndPoint);
    return response;
}

async function getStudentById(id){
    const response = await fetch(`${apiEndPoint}/${id}`);
    return response;
}

async function addAStudent(student){
    const response = await fetch(`${apiEndPoint}/add`,{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(student)
    });
    if(response.ok)
        return response;
    else{
        alert('Student is not added');
    }
}

//update a student 
async function updateAStudent(id,student){
    const response = await fetch(`${apiEndPoint}/update/${id}`,
        {
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(student)
        }
    );
    if(response.ok){
        return response; 
    }else{
        alert("Update failed"); 
    } 

}

export {getStudents, getStudentById, addAStudent, updateAStudent};