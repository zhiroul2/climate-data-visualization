//import logo from './logo.svg';
import './App.css';



import React from 'react';
import Iframe from 'react-iframe';

function NotebookViewer() {
  return (
    <div className="notebook-container">
      <Iframe
        url="src/climate-trend-data-visualization-and-analysis.html"
        width="100%"
        height="800px"
      />
    </div>
  );
}

export default NotebookViewer;




