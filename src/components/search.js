import { Link, useSearchParams } from 'react-router-dom';
import StudentsDb from '../sources/studentDb';

function Search(){
    const [searchParams, setSearchParams] = useSearchParams({"name":""});
    const searchText = searchParams.get("name")?.toLowerCase(); 
    let students = []; 
    if(searchParams.get("name")){
        students = StudentsDb.filter(student=>student.name.includes(searchText))
    } 
    return(    
        <>
            <h3>Search a student by name</h3>
            <form>
                <input type='text'
                placeholder='John Doe'
                value={searchParams.get("name")||""}
                onChange={(e)=>setSearchParams({"name":e.target.value})}
                />
            </form>
            {
                students.length>0 && 
                <ul>
                {
                students.map(student =>
                    <li key={student.id}>{student.id} &nbsp; &nbsp;
                        <Link to={`/students/${student.id.toString()}`}>{student.name}</Link>
                    </li>
                
                )
                }
                </ul>
            }
        </>
    )

}

export default Search;