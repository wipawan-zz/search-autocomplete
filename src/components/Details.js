import React from 'react';
import IconsGroup from './IconsGroup';

import './Details.css';


const Details = ({ selectedItem }) => (
  <div className="details-container">
    <div className="details-text-container">
      <div className="details-repo-title" onClick={() => window.open(selectedItem.html_url, "_blank")}>{selectedItem.full_name}</div>
      <div className="details-repo-text">{selectedItem.language}</div>
      <div className="details-repo-desc">{selectedItem.description}</div>
    </div>
    <IconsGroup 
      stars={selectedItem.stargazers_count}
      forks={selectedItem.forks_count}
      watchers={selectedItem.watchers_count}
    />
  </div>
);

export default Details;