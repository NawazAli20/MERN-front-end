
import {Routes, Route, BrowserRouter, Link} from 'react-router-dom' 
import Students from './components/students';
import StudentDetails from './components/studentDetails';
import Search from './components/search';

function NavBar(){
    return(
        <>
            <nav className="nav">
                <div><Link to='/students'>Students</Link></div>
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
            </Routes>

            </BrowserRouter>
        </>
    )

}
export default App;