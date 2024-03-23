import React from 'react';

const Toolbar = ({ onClick }) => {
  const handleClick = (tag) => {
    onClick(tag);
  };

  return (
    <div className="toolbar">
      <button onClick={() => handleClick('heading')}>Heading</button>
      <button onClick={() => handleClick('bold')}>Bold</button>
      <button onClick={() => handleClick('italic')}>Italic</button>
      <button onClick={() => handleClick('link')}>Link</button>
      <button onClick={() => handleClick('image')}>Image</button>
      <button onClick={() => handleClick('code')}>Code Block</button>
    </div>
  );
};

export default Toolbar;
