import React, { useState } from 'react';
import './StudentRow.css';

const StudentRow = ({ student, onUpdateScore }) => {
  const [editScore, setEditScore] = useState(student.score);
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = () => {
    if (editScore >= 0 && editScore <= 100) {
      onUpdateScore(student.id, editScore);
      setIsEditing(false);
    } else {
      alert('Please enter a valid score between 0 and 100');
    }
  };

  const handleCancel = () => {
    setEditScore(student.score);
    setIsEditing(false);
  };

  const isPass = student.score >= 40;
  const statusClass = isPass ? 'status-pass' : 'status-fail';
  const statusText = isPass ? '✅ Pass' : '❌ Fail';

  return (
    <tr className="student-row">
      <td className="student-name">{student.name}</td>
      <td className="student-score">
        {isEditing ? (
          <input
            type="number"
            className="score-input"
            value={editScore}
            onChange={(e) => setEditScore(e.target.value)}
            min="0"
            max="100"
            autoFocus
          />
        ) : (
          <span className="score-display">{student.score}</span>
        )}
      </td>
      <td>
        <span className={`status-badge ${statusClass}`}>
          {statusText}
        </span>
      </td>
      <td>
        {isEditing ? (
          <div className="action-buttons">
            <button className="btn-save" onClick={handleUpdate}>
              💾 Save
            </button>
            <button className="btn-cancel" onClick={handleCancel}>
              ✖ Cancel
            </button>
          </div>
        ) : (
          <button
            className="btn-edit"
            onClick={() => setIsEditing(true)}
          >
            ✏️ Edit Score
          </button>
        )}
      </td>
    </tr>
  );
};

export default StudentRow;