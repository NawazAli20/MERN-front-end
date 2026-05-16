import StudentDb from "../sources/studentDb";
import {Link} from 'react-router-dom';

function Students(){
    return(
        <>
            {
                StudentDb.map(student=>(
                    <p key={student.id}>{student.id}: <Link to={student.id.toString()}>{student.name}</Link></p>
                ))
            }
        </>
    )
}

export default Students;