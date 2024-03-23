import React, { useState } from 'react';
import {marked} from 'marked';
import './App.css';
import Toolbar from './components/Toolbar';

marked.setOptions({
  breaks: true,
});



const App = () => {
  const [markdown, setMarkdown] = useState('');

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const handleToolbarClick = (tag) => {
    let newMarkdown = '';
    switch (tag) {
      case 'heading':
        newMarkdown = markdown + '# ';
        break;
      case 'bold':
        newMarkdown = markdown + '**strong text**';
        break;
      case 'italic':
        newMarkdown = markdown + '*italicized text*';
        break;
      case 'link':
        newMarkdown = markdown + '[link text](https://)';
        break;
      case 'image':
        newMarkdown = markdown + '![alt text](https://image.jpg)';
        break;
      case 'code':
        newMarkdown = markdown + '```\ncode block\n```';
        break;
      default:
        newMarkdown = markdown;
        break;
    }
    setMarkdown(newMarkdown);
  };

  return (
    <>
    <h1 className='heading'>Markdown Previewer</h1>
    <div className="container">
      
      <div className="row">
        <div className="column">
          <textarea
            className="editor"
            value={markdown}
            onChange={handleChange}
            placeholder="Enter the TEXT Here..."
          />
          
        </div>
        <div className="column">
          <div
            className="preview"
            dangerouslySetInnerHTML={{ __html: marked(markdown) }}
          />
          
        </div>
        
      </div>
      
    </div>
    <Toolbar onClick={handleToolbarClick} />
    </>
  );
};

export default App;
