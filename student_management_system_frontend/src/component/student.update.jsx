import React, { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Check from "./validation";

const StudentUpdate = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formActive, setFormActive] = useState(false);

  const [rows, setRows] = useState([
    { academicYear: "", mark1: "", mark2: "", mark3: "", remark: "" },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    nrc: "",
    dob: "",
    phoneNo: "",
    email: "",
    gender: "",
    nationality: "",
    permanentAddress: "",
    studentDetailList: [],
  });

  useEffect(() => {
    const formattedData = rows.map((row) => ({
      academicYear: row.academicYear,
      mark1: row.mark1,
      mark2: row.mark2,
      mark3: row.mark3,
      remark: row.remark,
    }));
    setFormData((prevFormData) => ({
      ...prevFormData,
      studentDetailList: formattedData,
    }));
  }, [rows]);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/student/${id}`
        );
        const studentData = response.data;

        if (studentData) {
          setFormData(studentData);
          setRows(studentData.studentDetailList);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchStudent();
  }, [id]);

  const addStudent = async (formData) => {
    const response = await axios.put(
      "http://localhost:8080/api/student",
      formData
    );

    return response.data;
  };

  const createStudent = useMutation(addStudent, {
    onSuccess: () => {
      navigate("/students");
    },
    onError: (e) => console.log(e),
  });

  const handleAdd = () => {
    setRows([
      ...rows,
      { academicYear: "", mark1: "", mark2: "", mark3: "", remark: "" },
    ]);
  };

  const handleRemove = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    createStudent.mutate(formData);
  };

  const isAllValid = () => {
    return (
      Check.isValidName(formData.name) &&
      Check.isValidEmail(formData.email) &&
      Check.isValidPhoneNo(formData.phoneNo) &&
      Check.isValidGender(formData.gender) &&
      Check.isValidNationality(formData.nationality) &&
      Check.isValidAddress(formData.permanentAddress) &&
      Check.isValidNrcNumber(formData.nrc) &&
      Check.isValidDOB(formData.dob)
    );
  };
  return (
    <>
      <div className="container mt-5 mb-5 w-75">
        <div className="card p-4">
          <h2 className="text-center">
            Student Update Form{" "}
            <span className="float-end">
              <Link to="/" className="text-decoration-none">
                <i className="fa-sharp fa-solid fa-arrow-left"></i>
              </Link>
            </span>
          </h2>
          <form
            className="m-auto"
            onSubmit={handleSubmit}
            onBlur={() => setFormActive(true)}
          >
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label text-dark"
              >
                Student Name
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Eg: John Doe"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              {!Check.isValidName(formData.name) && formActive ? (
                <span className="text-danger fs-6">Name is required!</span>
              ) : null}
            </div>

            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label text-dark"
              >
                NRC <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="nrc"
                className="form-control"
                placeholder="Eg: 12/XXX(N)000000"
                value={formData.nrc}
                onChange={(e) =>
                  setFormData({ ...formData, nrc: e.target.value })
                }
              />
              {!Check.isValidNrcNumber(formData.nrc) && formActive ? (
                <span className="text-danger fs-6">NRC format is invalid!</span>
              ) : null}
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label text-dark"
              >
                Date of Birth <span className="text-danger">*</span>
              </label>
              <input
                type="date"
                name="dob"
                className="form-control"
                value={formData.dob}
                onChange={(e) =>
                  setFormData({ ...formData, dob: e.target.value })
                }
              />
              {!Check.isValidDOB(formData.dob) && formActive ? (
                <span className="text-danger fs-6">DOB is required!</span>
              ) : null}
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label text-dark"
              >
                Phone Number <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="phoneNo"
                className="form-control"
                placeholder="Eg: 09123456789"
                value={formData.phoneNo}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNo: e.target.value })
                }
              />
              {!Check.isValidPhoneNo(formData.phoneNo) && formActive ? (
                <span className="text-danger fs-6">
                  Phone Number format is invalid!
                </span>
              ) : null}
            </div>

            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label text-dark"
              >
                Email <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Eg: a@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              {!Check.isValidEmail(formData.email) && formActive ? (
                <span className="text-danger fs-6">
                  Email format is invalid!
                </span>
              ) : null}
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label text-dark"
              >
                Gender <span className="text-danger">*</span>
              </label>
              <select
                className="form-select"
                name="gender"
                aria-label="Default select example"
                value={formData.gender}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
              >
                <option value="">Select Gender</option>
                <option value="MALE">MALE</option>
                <option value="FEMALE">FEMALE</option>
              </select>
              {!Check.isValidGender(formData.gender) &&
              formActive ? (
                <span className="text-danger fs-6">Gender is required!</span>
              ) : null}
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label text-dark"
              >
                Nationality <span className="text-danger">*</span>
              </label>
              <select
                className="form-select"
                name="nationality"
                aria-label="Default select example"
                value={formData.nationality}
                onChange={(e) =>
                  setFormData({ ...formData, nationality: e.target.value })
                }
              >
                <option value="">Select Nationality</option>
                <option value="MYANMAR">MYANMAR</option>
                <option value="THAI">THAI</option>
                <option value="SINGAPORE">SINGAPORE</option>
                <option value="VIETNAM">VIETNAM</option>
              </select>
              {!Check.isValidNationality(formData.nationality) &&
              formActive ? (
                <span className="text-danger fs-6">Nationality is required!</span>
              ) : null}
            </div>

            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label text-dark"
              >
                Address <span className="text-danger">*</span>
              </label>
              <textarea
                className="form-control"
                name="permanentAddress"
                rows="3"
                value={formData.permanentAddress}
                onChange={(e) =>
                  setFormData({ ...formData, permanentAddress: e.target.value })
                }
              ></textarea>
              {!Check.isValidAddress(formData.permanentAddress) &&
              formActive ? (
                <span className="text-danger fs-6">Address is required!</span>
              ) : null}
            </div>
            <div>
              <div className="d-flex justify-content-between">
                <h5 className="mt-3 mb-2">Add Student Details</h5>
                <button
                  type="button"
                  className="btn btn-dark btn-sm mb-2"
                  onClick={handleAdd}
                >
                  Add Row
                </button>
              </div>

              <div className=" mw-100 mb-3">
                {rows.map((row, index) => (
                  <div
                    className="d-flex justify-content-between p-3 mb-2 bg-secondary"
                    key={index}
                  >
                    <div className="col-2 me-3">
                      <label htmlFor="academicYear">Academic Year</label>
                      <input
                        type="text"
                        className="form-control"
                        value={row.academicYear}
                        onChange={(e) => {
                          const updatedRows = [...rows];
                          updatedRows[index].academicYear = e.target.value;
                          setRows(updatedRows);
                        }}
                      />
                    </div>

                    <div className="col-2 me-3">
                      <label htmlFor="mark1">Mark 1</label>
                      <input
                        type="number"
                        className="form-control"
                        value={row.mark1}
                        onChange={(e) => {
                          const updatedRows = [...rows];
                          updatedRows[index].mark1 = e.target.value;
                          setRows(updatedRows);
                        }}
                      />
                    </div>
                    <div className="col-2 me-3">
                      <label htmlFor="mark2">Mark 2</label>
                      <input
                        type="number"
                        className="form-control"
                        value={row.mark2}
                        onChange={(e) => {
                          const updatedRows = [...rows];
                          updatedRows[index].mark2 = e.target.value;
                          setRows(updatedRows);
                        }}
                      />
                    </div>
                    <div className="col-2 me-3">
                      <label htmlFor="mark3">Mark 3</label>
                      <input
                        type="number"
                        className="form-control"
                        value={row.mark3}
                        onChange={(e) => {
                          const updatedRows = [...rows];
                          updatedRows[index].mark3 = e.target.value;
                          setRows(updatedRows);
                        }}
                      />
                    </div>
                    <div className="col-2 me-3">
                      <label htmlFor="remark">Remark</label>
                      <input
                        type="text"
                        className="form-control"
                        value={row.remark}
                        onChange={(e) => {
                          const updatedRows = [...rows];
                          updatedRows[index].remark = e.target.value;
                          setRows(updatedRows);
                        }}
                      />
                    </div>

                    <div className="col-2 mt-4">
                      {rows.length > 1 && (
                        <button
                          type="button"
                          className="btn btn-dark btn-sm"
                          onClick={() => handleRemove(index)}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-3">
              <button
                type="submit"
                className="w-100 btn btn-dark"
                disabled={!isAllValid()}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default StudentUpdate;
