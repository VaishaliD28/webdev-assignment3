import React, { useState } from 'react';
import Header from './components/Header';
import StudentTable from './components/StudentTable';
import AddStudentForm from './components/AddStudentForm';
import './App.css';

const App = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Alice Johnson', score: 85 },
    { id: 2, name: 'Bob Smith', score: 42 },
    { id: 3, name: 'Charlie Brown', score: 38 },
    { id: 4, name: 'Diana Prince', score: 91 },
    { id: 5, name: 'Evan Wright', score: 27 }
  ]);

  const updateScore = (id, newScore) => {
    setStudents(prevStudents =>
      prevStudents.map(student =>
        student.id === id ? { ...student, score: Number(newScore) } : student
      )
    );
  };

  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name: name,
      score: Number(score)
    };
    setStudents([...students, newStudent]);
  };

  return (
    <div className="app">
      <div className="container">
        <Header />
        <AddStudentForm onAddStudent={addStudent} />
        <StudentTable students={students} onUpdateScore={updateScore} />
      </div>
    </div>
  );
};

export default App;