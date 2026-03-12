import React, { useEffect, useState } from 'react'
import StudentCard from "./StudentCard"
import Popup from "./popup"
const StudentSection = () => {
  const [formLive, setFormLive] = useState(false)
  const[name,Setname] = useState("")
  const[course,SetCourse] = useState("")
  const[batch,SetBatch] = useState("")
  const [email, SetEmail] = useState("")
  const [phone, SetPhone] = useState("")
  const [selectedStudent, setSelectedStudent] = useState(null)
  const[viewPopup,setViewPopup]=useState(false)
  const [updatePopup, setUpdatePopup] = useState(false)
  const [updateStudent, setUpdateStudent] = useState(null)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((data) => {
        const formattedStudents = data.map((user) => ({
          key: user.id,
          id: user.id,
          name: user.name,
          course: "React",
          batch: "2024",
          email:user.email,
          phone:user.phone
        }))
        setStudents(formattedStudents)
      })
      .catch(() => {
        setError("Failed to load students")
        setLoading(false)
      })
  }, [])

  const [students, setStudents] = useState([
    // {id: 1, name: "Arun Kumar", course: "React Development", batch: "2026"},
    // {id: 2, name: "Priya Sharma", course: "JavaScript Fundamentals", batch: "2025"},
    // {id: 3, name: "Raj Patel", course: "Node.js Backend", batch: "2024"},
    // {id: 4, name: "Sneha Gupta", course: "UI/UX Design", batch: "2023"},
    // {id: 5, name: "Vikram Singh", course: "Python for Data Science", batch: "2025"},
    // {id: 6, name: "Anjali Mehta", course: "Mobile App Development", batch: "2026"},
  ])

  const handleDelete = (id) => {
    const updateStudents = students.filter(
      (student) => student.id !== id)

    setStudents(updateStudents)
  }

  // const fetchStudent = () => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then((data) => {

  //     const formattedStudents = data.map((user) => ({
  //       id: user.id,
  //       name: user.name,
  //       course: "React",
  //       batch: "2024"
  //     }))
  //     setStudents(formattedStudents)
  //   })
  // }

  const handleSubmit =() =>{
    const newStudent = {
      id:Date.now(),
      name:name,
      course:course,
      batch:batch,
      email: email,
      phone: phone
    }
    Setname("")
    SetBatch("")
    SetCourse("")
    SetEmail("")
    SetPhone("")
    setFormLive(false)
    setStudents([...students, newStudent])
  }
  const handleView = (student)=>{
    setSelectedStudent(student)
    setViewPopup(true)
  }
  const handleUpdate = (student) => {
    setUpdateStudent(student)
    Setname(student.name)
    SetCourse(student.course)
    SetBatch(student.batch)
    SetEmail(student.email)
    SetPhone(student.phone)
    setUpdatePopup(true)
  }
  const handleUpdateSubmit = () => {
      if (!updateStudent) return;

    const newStudent = students.map((student) =>
      student.id === updateStudent.id
        ? { ...student, name, course, batch, email, phone }
        : student
    )
    setStudents(newStudent)
    setUpdatePopup(false)

    Setname("")
    SetCourse("")
    SetBatch("")
    SetEmail("")
    SetPhone("")
}
  return (
    <div className="container my-5">

      {students.length === 0
        ?
        (<h4 className='text-danger text-center'>Students are not found</h4>)
        :
        (<h3 className='fw-bold text-info'>Total Students : {students.length}</h3>)
      }
      <h2 className="text-center mb-4 fw-bold">Our Students</h2>
      <div className="row">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            id={student.id}
            name={student.name}
            course={student.course}
            batch={student.batch}
            onDelete={() => handleDelete(student.id)}
            onView={()=>handleView(student)}
            onUpdate={() => handleUpdate(student)}
          />
        ))}
      </div>
      <button className="btn btn-primary w-25 ms-3" onClick={() => {
        setFormLive(true)
      }}>Add Student</button>

      <button className="btn btn-warning w-25 ms-3" onClick={() => (
        setStudents([])
      )}>
        Clear All
      </button>
      {viewPopup &&
      ( <Popup
        student={selectedStudent}
        closePopup={()=>setViewPopup(false)}
        />
      )
      }
      {formLive &&
        (<div className="popup-overlay">
        <div className="popup-form">
          <h4>Add New Student</h4>

          <input type="text" placeholder="Name" className="form-control mb-2" value={name} onChange={(e) =>Setname (e.target.value)} />
          <input type="text" placeholder="Course" className="form-control mb-2" value={course} onChange={(e) =>SetCourse (e.target.value)} />
          <input type="text" placeholder="Batch" className="form-control mb-2" value={batch} onChange={(e) =>SetBatch (e.target.value)} />
          <input type="text" placeholder="Email" className="form-control mb-2" value={email} onChange={(e) => SetEmail(e.target.value)}/>
          <input type="text" placeholder="Phone" className="form-control mb-2" value={phone} onChange={(e) => SetPhone(e.target.value)}/>
          <button className="btn btn-success me-2 "onClick={handleSubmit}>
            Submit
          </button>

          <button
            className="btn btn-secondary"onClick={()=>setFormLive(false)}>
            Cancel
          </button>
        </div>
        </div>
        )}
        {updatePopup && (
          <div className="popup-overlay">
          <div className="popup-form">
          <h4>Update Student</h4>
          <label>Name</label>
          <input type="text" className="form-control mb-2" value={name} onChange={(e)=>Setname(e.target.value)}/>
          <label>Course</label>
          <input type="text" className="form-control mb-2" value={course} onChange={(e)=>SetCourse(e.target.value)}/>
          <label>Batch</label>
          <input type="text" className="form-control mb-2" value={batch} onChange={(e)=>SetBatch(e.target.value)}/>
          <label>Email</label>
          <input type="text" className="form-control mb-2" value={email} onChange={(e)=>SetEmail(e.target.value)}/>
          <label>Phone</label>
          <input type="text" className="form-control mb-2" value={phone} onChange={(e)=>SetPhone(e.target.value)}/>
          <button className="btn btn-success me-2" onClick={handleUpdateSubmit}>
              Update
          </button>
          <button className="btn btn-secondary" onClick={()=>setUpdatePopup(false)}>
              Cancel
          </button>
          </div>
          </div>
        )}
      {/* <button className="btn btn-success w-25 ms-3" onClick={fetchStudent}>
            Fetch
          </button> */}
    </div>
  )
}

export default StudentSection