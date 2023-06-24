import axios from 'axios';

const baseUrl ="http://127.0.0.1:8080/api/student";

const StudentService=() =>{
    const getAll= async ()=>{
        const response = await axios.get(baseUrl);
        return response.data;
    }
  return {
    getAll
  }  
  
}

export default StudentService();
