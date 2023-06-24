import { useState } from 'react'
import ListStudentPage from './component/student.list'
import './component/index';
import Router from './routes/router';

function App() {
  const [count, setCount] = useState(0)

  return (
   
      <div>       
           <Router/>           
      </div>
     
  
  )
}

export default App
