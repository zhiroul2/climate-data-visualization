//import logo from './logo.svg';
import hist from '../src/images/land_avg_temp_hist.png'
import uncertainty from '../src/images/uncertainty.png'
import t from '../src/images/time-series.png'
import './App.css';



//import React from 'react';
//import Iframe from 'react-iframe';

//import React from 'react';
import React, { useState } from 'react';

function TitleAndText() {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    // You can implement logic here to determine the content to display based on the clicked link
    // For now, we're just setting the active link in state
    setActiveLink(link);
  };

  return (
    <div>
      <h1>Global Temperature</h1>
      <p>There are 3192 rows and 9 columns inside the main CSV file. Let's explore what the data contains and what's the visualization of the data!</p>
      <p>
        Click on the links below to view content:
        <ul>
          <li>
            <a href="#" onClick={() => handleLinkClick('LandAverageTemperature')}>
              'LandAverageTemperature'
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleLinkClick('link2')}>
              Link 2
            </a>
          </li>
        </ul>
      </p>

      {activeLink === 'LandAverageTemperature' && (
  <div>
    <h2>Land Average Temperature</h2>
    <p>The mean of LandAverageTemperature is 8.374731132075471</p>
    <img src={hist} alt="Image for Link 1" style={{ maxWidth: '500px' }} />
    <p>The mean of LandAverageTemperatureUncertainty is 0.938467924528302</p>
    <img src={uncertainty} alt="Image for Link 2" style={{ maxWidth: '500px' }} />
    <p>Now it's time to investigate further into their relationships</p>
    <img src={t} alt="Image for Link 3" style={{ maxWidth: '500px' }} />
    <h3>Analysis on Possible Reasons</h3>
    <ul>
      <li>
        <strong>Inverse Relationship:</strong> The fact that uncertainty is decreasing while temperature is increasing suggests an inverse relationship between temperature and uncertainty. This means that as global land temperatures rise, the uncertainty around those temperature measurements is decreasing (unlikely by common sense).
      </li>
      <li>
        <strong>Improved Measurement Techniques:</strong> The decreasing uncertainty could indicate advancements in temperature measurement techniques, data collection, or data processing. It may reflect increased accuracy and confidence in temperature measurements.
      </li>
      <li>
        <strong>Climate Change:</strong> As we progress in time, our ability to measure and predict temperature changes due to climate change has improved. Additionally, global warming could cause the temperature to rise.
      </li>
    </ul>
  </div>
)}




    </div>
  );
}

export default TitleAndText;





