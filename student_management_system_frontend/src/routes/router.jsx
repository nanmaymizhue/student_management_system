import { Routes,Route } from "react-router-dom";
import ListStudentPage from "../component/student.list";
import StudentCreate from "../component/student.create";
import StudentUpdate from "../component/student.update";

const Router = ()=>{
return(
    <Routes>
        <Route path='/' element={<ListStudentPage />}/>
        <Route path='/students' element={<ListStudentPage />}/>
        <Route path='/add-student' element={<StudentCreate/>}/> 
        <Route path='/update-student/:id' element={<StudentUpdate/>}/>           
    </Routes>
)
}
export default Router;