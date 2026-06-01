// import StudentDb from "../sources/studentDb";
import {Link} from 'react-router-dom';
import { getStudents } from './apiHelperFunctions';
import { useState, useEffect } from 'react';

function Students(){
    const [students, setStudents] = useState([]); 
    const [errMsg, setErrMsg] = useState(""); 
    const [isLoading, setIsLoading] = useState(false); 

    useEffect(()=>{
        async function fetchStudent(){
            setStudents([]);
            setErrMsg("");
            setIsLoading(true); 
            
            const response = await getStudents(); 
            if(response.ok){
                const result = await response.json();
                setStudents(result); 
            }else{
                setErrMsg("Students fetching was not successful");
            }
            setIsLoading(false); 
        }
        fetchStudent();
    },[]);

    return(
        <>
            {
                isLoading && <p>Loading...</p>
            }
            {
                students.map(student=>(
                    <p key={student._id}> <Link to={student._id.toString()}>{student.name}</Link></p>
                ))
            }
            {
                errMsg.length>0 && <p>{errMsg}</p>
            }
        </>
    )
}

export default Students;