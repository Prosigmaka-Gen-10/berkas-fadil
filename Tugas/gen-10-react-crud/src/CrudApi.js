import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./spinner/";

export default function CrudApi() {
  const formOriginal = {
    name: "",
    gender: "",
    address: "",
  };

  const [students, setStudents] = useState([]);
  const [formInput, setFormInput] = useState({ ...formOriginal });
  const [isLoading, setIsLoading] = useState(true);

  async function getStudentList() {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:3001/students");
      console.log("respnse data", response.data);
      setStudents(response.data);
    } catch (err) {
      console.log(err);
      alert("Ada masalah saat memproses data");
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formInput.id) {
      updateStudent();
    } else {
      createStudent();
    }

    setFormInput({ ...formOriginal });
  }

  function createStudent() {
    setIsLoading(true);
    axios
      .post("http://localhost:3001/students", formInput)
      .then(() => {
        getStudentList();
      })
      .catch((err) => {
        console.log(err);
        alert("Ada masalah saat memproses data");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function updateStudent() {
    setIsLoading(true);
    axios
      .put("http://localhost:3001/students/" + formInput.id, formInput)
      .then(() => {
        getStudentList();
      })
      .catch((err) => {
        console.log(err);
        alert("Ada masalah saat memproses data");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function deleteStudent(idStudent) {
    setIsLoading(true);
    axios
      .delete("http://localhost:3001/students/" + idStudent)
      .then(() => {
        getStudentList();
      })
      .catch((err) => {
        console.log(err);
        alert("Ada masalah saat memproses data");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleInput(event, propName) {
    const currentFormInput = { ...formInput };
    currentFormInput[propName] = event.target.value;
    setFormInput(currentFormInput);
  }

  function prepareUpdate(student) {
    setFormInput({ ...student });
  }

  useEffect(() => {
    getStudentList();
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <>
      <form onSubmit={(event) => handleSubmit(event)}>
        <h2>Form Data Siswa:</h2>

        <label>
          Nama Siswa:
          <input
            type="text"
            value={formInput.name}
            onChange={(event) => handleInput(event, "name")}
          />
        </label>

        <br />
        <br />

        <label>
          Gender
          <input
            type="text"
            value={formInput.gender}
            onChange={(event) => handleInput(event, "gender")}
          />
        </label>

        <br />
        <br />

        <label>
          alamat:
          <input
            type="text"
            value={formInput.address}
            onChange={(event) => handleInput(event, "address")}
          />
        </label>

        <br />
        <br />

        <button>Submit</button>
      </form>

      <br />
      <hr />
      <br />

      <h2>Daftar Siswa:</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} || {student.address} || {student.gender}
            &nbsp;&nbsp;
            <button onClick={() => prepareUpdate(student)}>Update</button>
            &nbsp;&nbsp;
            <button onClick={() => deleteStudent(student.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
