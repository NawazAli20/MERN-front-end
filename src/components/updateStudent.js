import { updateAStudent, getStudentById } from "./apiHelperFunctions";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function UpdateStudent(){
   const [student, setStudent] = useState({}); 
   const [errMsg, setErrMsg] = useState("");
   const {id} = useParams(); 
   const navigate = useNavigate(); 
   
   //for the form submission
   async function handleSubmit(event){
    event.preventDefault();
    await updateAStudent(id,student);
    navigate("/students");
   }

   //for the form changes
   function handleChange(e){
    const name = e.target.name; 
    const value = e.target.value;
    setStudent(prevState=>({...prevState,[name]:value}));
   }

   //Fetch the student
   useEffect(()=>{
        async function fetchStudent(){
            setStudent({});
            setErrMsg("");
            const response = await getStudentById(id); 
            if(response.ok){
                const result = await response.json(); 
                setStudent(result);
            }else{
                setErrMsg("Student is not found for the given ID");
            }
        }
        fetchStudent(); 
   },[id]);
   
   return(
    
        <>
            <h3>Update a student</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name"
                placeholder={student.name}
                value={student.name||""}
                onChange={handleChange}
                />

                <label htmlFor="gpa">GPA:</label>
                <input type="number" name="gpa" id="gpa"
                placeholder={student.gpa}
                value={student.gpa||""}
                onChange={handleChange}
                />
                <button type="submit">Send</button>
            </form>
        </>
    );
}

export default UpdateStudent;