import {useParams, Link} from 'react-router-dom'; 
// import StudentDb from "../sources/studentDb";
import { getStudentById } from './apiHelperFunctions';
import { useState, useEffect } from 'react';


function StudentDetails(){
    const [student,setStudent] = useState(null);
    const [errMsg,setErrMsg] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    let {id} = useParams(); 
     
    useEffect(()=>{
        async function fetchStudentById(){
            setStudent(null);
            setErrMsg("");
            setIsLoading(true);

            const response= await getStudentById(id);
            if(response.ok){
                const result = await response.json(); 
                setStudent(result);
            }else{
                setErrMsg("Student is not found");
            }
        }
        fetchStudentById()
    },[id])

    return(
        <>
            <h3>Student details:</h3>
            {
                student?( 
                    <>
                    {
                    Object.entries(student).map(([key,value],index)=>
                        <p key={index}>{key}: { typeof value === 'object'? JSON.stringify(value):value }</p>
                    )
                    }
                    <p><Link to={`/update/${student._id}`}>Update</Link></p>
                </>
            )
                :
                (
                <p>{errMsg}</p>
                )
            }
        </>
    );
}

export default StudentDetails;