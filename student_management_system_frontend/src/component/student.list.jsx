// import { useState, useEffect } from "react";
// import studentService from "../service/studentService";
// import { Link } from "react-router-dom";
// import axios from 'axios'

// const ListStudentPage = () => {
//   const [studentList, setStudentList] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const students = await studentService.getAll();
//         setStudentList(students);
//         setIsLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (isLoading) return "Loading";
//   if (error) return `Something went wrong: ${error}`;

//   const handleDeleteStudent = (student) => {
//     setSelectedStudent(student);
//     setIsModalOpen(true);
//   };

//   const deleteStudent = async (studentId) => {
//     try {
//       await axios.delete(`http://localhost:8080/api/student/${studentId}`);
//       setStudentList((prevList) =>
//         prevList.filter((student) => student.id !== studentId)
//       );
//       setIsModalOpen(false);
//     } catch (error) {
//       console.error("Error deleting student:", error);
    
//     }
//   };
  

//   return (
//     <div className="container mt-5">
//       <div className="d-flex justify-content-between">
//         <h2>Student List</h2>
//         <Link to="/add-student" className="btn btn-dark btn-sm">
//           Add Student
//         </Link>
//       </div>
//       <table className="table table-bordered table-striped mt-3">
//         <thead>
//           <tr className="table-secondary">
//             <th scope="col">No</th>
//             <th scope="col">Name</th>
//             <th scope="col">NRC</th>
//             <th scope="col">DOB</th>
//             <th scope="col">Phone No</th>
//             <th scope="col">Email</th>
//             <th scope="col">Gender</th>
//             <th scope="col">Nationality</th>
//             <th scope="col">Permanent Address</th>
//             <th scope="col">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {studentList.map((student, index) => (
//             <tr key={student.id}>
//               <td>{index + 1}</td>
//               <td>{student.name}</td>
//               <td>{student.nrc}</td>
//               <td>{student.dob}</td>
//               <td>{student.phoneNo}</td>
//               <td>{student.email}</td>
//               <td>{student.gender}</td>
//               <td>{student.nationality}</td>
//               <td>{student.permanentAddress}</td>
//               <td className="d-flex flex-row">
//                 <Link to="/update-student" className="btn btn-success btn-sm">
//                   Update
//                 </Link>
//                 &nbsp;
//                 <button type="button" className="btn btn-danger btn-sm" onClick={()=>handleDeleteStudent(student)}>
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {isModalOpen && (
//       <div className="modal">
//         <div className="modal-content">
//           <h4>Delete Student</h4>
//           <p>Are you sure you want to delete this student?</p>
//           <div className="modal-actions">
//             <button
//               className="btn btn-danger"
//               onClick={() => deleteStudent(selectedStudent.id)}
//             >
//               Delete
//             </button>
//             <button
//               className="btn btn-secondary"
//               onClick={() => setIsModalOpen(false)}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//     )}

//     </div>
//   );
// };

// export default ListStudentPage;



// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from 'axios';
// import studentService from "../service/studentService";

// const ListStudentPage = () => {
//   const [studentList, setStudentList] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const students = await studentService.getAll();
//         setStudentList(students);
//         setIsLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleDeleteStudent = async (studentId) => {
//     try {
//       await axios.delete(`http://localhost:8080/api/student/${studentId}`);
//       setStudentList((prevList) =>
//         prevList.filter((student) => student.id !== studentId)
//       );
//     } catch (error) {
//       console.error("Error deleting student:", error);
//     }
//   };

//   if (isLoading) return <div>Loading</div>;
//   if (error) return <div>Something went wrong: {error}</div>;

//   return (
//     <div className="container mt-5">
//       <div className="d-flex justify-content-between">
//         <h2>Student List</h2>
//         <Link to="/add-student" className="btn btn-dark btn-sm">
//           Add Student
//         </Link>
//       </div>
//       <table className="table table-bordered table-striped mt-3">
//         <thead>
//           <tr className="table-secondary">
//             <th scope="col">No</th>
//             <th scope="col">Name</th>
//             <th scope="col">NRC</th>
//             <th scope="col">DOB</th>
//             <th scope="col">Phone No</th>
//             <th scope="col">Email</th>
//             <th scope="col">Gender</th>
//             <th scope="col">Nationality</th>
//             <th scope="col">Permanent Address</th>
//             <th scope="col">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {studentList.map((student, index) => (
//             <tr key={student.id}>
//               <td>{index + 1}</td>
//               <td>{student.name}</td>
//               <td>{student.nrc}</td>
//               <td>{student.dob}</td>
//               <td>{student.phoneNo}</td>
//               <td>{student.email}</td>
//               <td>{student.gender}</td>
//               <td>{student.nationality}</td>
//               <td>{student.permanentAddress}</td>
//               <td className="d-flex flex-row">
//                 <Link to={`/update-student/${student.id}`} className="btn btn-success btn-sm">
//                   Update
//                 </Link>
//                 &nbsp;
//                 <button type="button" className="btn btn-danger btn-sm" onClick={() => handleDeleteStudent(student.id)}>
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ListStudentPage;



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import studentService from "../service/studentService";

const ListStudentPage = () => {
  const [studentList, setStudentList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const students = await studentService.getAll();
        setStudentList(students);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDeleteStudent = (student) => {
    setSelectedStudent(student);
  };

  const confirmDeleteStudent = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/student/${selectedStudent.id}`);
      setStudentList((prevList) =>
        prevList.filter((student) => student.id !== selectedStudent.id)
      );
      setSelectedStudent(null);
      closeModal();     
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const closeModal = () => {
    const modal = document.getElementById("confirmDeleteModal");
    const backdrop = document.getElementsByClassName("modal-backdrop")[0];
    modal.classList.remove("show");
    backdrop.parentNode.removeChild(backdrop);
  };

  if (isLoading) return <div>Loading</div>;
  if (error) return <div>Something went wrong: {error}</div>;

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between">
        <h2>Student List</h2>
        <Link to="/add-student" className="btn btn-dark btn-sm">
          Add Student
        </Link>
      </div>
      <table className="table table-bordered table-striped mt-3">
        <thead>
          <tr className="table-secondary">
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">NRC</th>
            <th scope="col">DOB</th>
            <th scope="col">Phone No</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Nationality</th>
            <th scope="col">Permanent Address</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.nrc}</td>
              <td>{student.dob}</td>
              <td>{student.phoneNo}</td>
              <td>{student.email}</td>
              <td>{student.gender}</td>
              <td>{student.nationality}</td>
              <td>{student.permanentAddress}</td>
              <td className="d-flex flex-row">
                <Link to={`/update-student/${student.id}`} className="btn btn-success btn-sm">
                  Update
                </Link>
                &nbsp;
                <button type="button" className="btn btn-danger btn-sm" onClick={() => handleDeleteStudent(student)} data-bs-toggle="modal" data-bs-target="#confirmDeleteModal">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="modal fade" id="confirmDeleteModal" tabIndex="-1" aria-labelledby="confirmDeleteModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="confirmDeleteModalLabel">Delete Student</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete this student?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" onClick={confirmDeleteStudent}>Delete</button>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListStudentPage;

