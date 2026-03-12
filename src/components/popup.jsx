import React from 'react'

const Popup = ({ student, closePopup }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-form">

        <h3 className="text-center mb-3">Student Details</h3>

        <div className="student-detail">
          <span>ID</span>
          <span>{student.id}</span>
        </div>

        <div className="student-detail">
          <span>Name</span>
          <span>{student.name}</span>
        </div>

        <div className="student-detail">
          <span>Course</span>
          <span>{student.course}</span>
        </div>

        <div className="student-detail">
          <span>Batch</span>
          <span>{student.batch}</span>
        </div>

        <div className="student-detail">
          <span>Email</span>
          <span>{student.email}</span>
        </div>

        <div className="student-detail">
          <span>Phone</span>
          <span>{student.phone}</span>
        </div>

        <button className="btn btn-dark w-100 mt-3" onClick={closePopup}>
          Close
        </button>

      </div>
    </div>
  )
}

export default Popup