
import {Routes, Route, BrowserRouter, Link} from 'react-router-dom' 
import Students from './components/students';
import StudentDetails from './components/studentDetails';
import Search from './components/search';
import AddStudent from './components/addStudent';
import UpdateStudent from './components/updateStudent';

function NavBar(){
    return(
        <>
            <nav className="nav">
                <div><Link to='/students'>Students</Link></div>
                <div><Link to='/students/add'>Add</Link></div>
                <div><Link to='/search'>Search</Link></div>
            </nav>
        </>
    )
}

function App(){
    return(
        <>
            <h1>Welcome to React!</h1>
            <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/students' element={<Students/>}/>
                <Route path='/search' element={<Search/>}/>
                <Route path='/students/:id' element={<StudentDetails/>}/>
                <Route path='/students/add' element={<AddStudent/>}/>
                <Route path='/update/:id' element={<UpdateStudent/>}/>
            </Routes>

            </BrowserRouter>
        </>
    )

}
export default App;