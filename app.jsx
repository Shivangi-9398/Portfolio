import React, { useState } from 'react';
import Editor from './components/Editor';

function App() {
  const [sections, setSections] = useState([
    { id: '1', type: 'hero', content: 'Welcome to my portfolio!' },
    { id: '2', type: 'about', content: 'This is about me.' },
  ]);

  return (
    <div>
      <h1>Portfolio Builder</h1>
      <Editor sections={sections} setSections={setSections} />
    </div>
  );
}

export default App;
