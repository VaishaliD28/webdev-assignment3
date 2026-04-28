import React from 'react';
import StudentRow from './StudentRow';
import './StudentTable.css';

const StudentTable = ({ students, onUpdateScore }) => {
  return (
    <div className="student-table-container">
      <h2 className="table-title">Student Records</h2>
      <table className="student-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Score</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <StudentRow
              key={student.id}
              student={student}
              onUpdateScore={onUpdateScore}
            />
          ))}
        </tbody>
      </table>
      {students.length === 0 && (
        <div className="empty-state">
          <p>No students added yet. Add your first student above! ✨</p>
        </div>
      )}
    </div>
  );
};

export default StudentTable;