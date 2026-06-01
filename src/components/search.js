import { useEffect, useState } from 'react';
import {Link, useSearchParams} from 'react-router-dom'

import {getStudents} from './apiHelperFunctions'; 

function Search(){
    const [searchParams, setSearchParams] = useSearchParams({"name":""});
    const [students, setStudents] = useState([]);
    const [errMsg,setErrMsg] = useState("");
    const [isLoading, setIsLoading] = useState(false); 

    //fetch students 
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
                setErrMsg("Student fetching error"); 
            }
            setIsLoading(false);
        }
        fetchStudent();
    },[]);



    const searchText = searchParams.get("name")?.trim().toLowerCase(); 
    let searchedStudents = students;

    if(searchText){
        searchedStudents =  students.filter(student=>student.name.toLowerCase().includes(searchText));
    }

    return(
        <>
        {
        isLoading && <p>Loading...</p>
        }
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
                    searchedStudents.map(student=>
                        <li key={student._id}>
                        <Link to={`/students/${student._id}`}>{student.name}</Link>
                        </li>
                    )
                }
               
            </ul>
        }
         {
            errMsg.length>0 && <p>{errMsg}</p>
        }

        </>
    );
}

export default Search;