import React, { useState } from 'react';
import './AddStudentForm.css';

const AddStudentForm = ({ onAddStudent }) => {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!name.trim()) {
      newErrors.name = 'Student name is required';
    } else if (name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (score === '') {
      newErrors.score = 'Score is required';
    } else {
      const scoreNum = Number(score);
      if (isNaN(scoreNum)) {
        newErrors.score = 'Score must be a number';
      } else if (scoreNum < 0 || scoreNum > 100) {
        newErrors.score = 'Score must be between 0 and 100';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onAddStudent(name.trim(), Number(score));
      setName('');
      setScore('');
      setErrors({});
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">➕ Add New Student</h2>
      <form onSubmit={handleSubmit} className="add-student-form">
        <div className="form-group">
          <label htmlFor="studentName">Student Name</label>
          <input
            type="text"
            id="studentName"
            className={`form-input ${errors.name ? 'input-error' : ''}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter student name"
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="studentScore">Score (0-100)</label>
          <input
            type="number"
            id="studentScore"
            className={`form-input ${errors.score ? 'input-error' : ''}`}
            value={score}
            onChange={(e) => setScore(e.target.value)}
            placeholder="Enter score"
            min="0"
            max="100"
            step="1"
          />
          {errors.score && <span className="error-message">{errors.score}</span>}
        </div>
        
        <button type="submit" className="btn-submit">
          ✨ Add Student
        </button>
      </form>
    </div>
  );
};

export default AddStudentForm;