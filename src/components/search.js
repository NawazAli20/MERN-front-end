import {Link, useSearchParams} from 'react-router-dom'
import StudentsDB from '../sources/studentDb';

function Search(){
    const [searchParams, setSearchParams] = useSearchParams({"name":""});

    const searchText = searchParams.get("name")?.trim().toLowerCase(); 
    let students = [];

    if(searchParams.get("name")){
        students =  StudentsDB.filter(student=>student.name.toLowerCase().includes(searchText));
    }

    return(
        <>
        <h2>Search for a student by name:</h2>
        <input type='text'
        placeholder='John Doe'
        value={searchParams.get("name")||""}
        onChange={(e)=>setSearchParams({"name":e.target.value})}
        />
        {
            students.length>0 &&
            <ul>
                {
                    students.map(student=>
                        <li key={student.id}>{student.id}: 
                        <Link to={`/students/${student.id}`}>{student.name}</Link>
                        </li>
                    )
                }
            </ul>
        }

        </>
    );
}

export default Search;