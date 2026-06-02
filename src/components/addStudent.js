import { useState } from "react";
import { addAStudent } from "./apiHelperFunctions"; 
import { useNavigate } from "react-router-dom";

function AddStudent(){
    const [student,setStudent] = useState({name:"",gpa:""});
    const navigate = useNavigate();

    async function handleSubmit(event){
        event.preventDefault(); 
        await addAStudent(student);
        navigate("/students");
    }

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;

        setStudent(prevState=>({...prevState,[name]:value}));

    }

    return(
        <>
            <h3>Add a student:</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text"
                name="name" id="name"
                placeholder="John Doe"
                value={student.name||""}
                onChange={handleChange}
                />
                <label htmlFor="gpa">GPA:</label>
                <input type="number"
                name="gpa" id="gpa"
                placeholder="3.25"
                value={student.gpa||""}
                onChange={handleChange}
                />
                <button type="submit">Send</button>
            </form>
        </>
    )
}

export default AddStudent;