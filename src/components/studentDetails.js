import {useParams} from 'react-router-dom'; 
import StudentDb from "../sources/studentDb";


function StudentDetails(){
    let {id} = useParams(); 
    id = parseInt(id); 

    let student = null; 
    if(id){
        student = StudentDb.find(student=>student.id === id)
    }

    return(
        <>
            <h3>Student details:</h3>
            {
                student? Object.entries(student).map(([key,value],index)=>
                    <p key={index}>{key}: {value}</p>
                ):
                <p>No such student is found</p>
            }
        </>
    )
}

export default StudentDetails;