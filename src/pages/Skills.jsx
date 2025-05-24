import React from 'react';

function Skills() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>My Skills</h1>
      <ul>
        {['JavaScript', 'React', 'CSS', 'HTML', 'Node.js'].map((skill, index) => (
          <li key={index} style={{ margin: '5px 0' }}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;