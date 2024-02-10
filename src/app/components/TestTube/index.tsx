import React from 'react';
import { TestTubeInterface } from '../../types';

interface Props {
  tube: TestTubeInterface;
  index: number;
}
const TestTube: React.FC<Props> = ({ tube, index }) => {
  return (
      <>
      {index===0 && 
        <tr>
          <th>No#</th>
          <th>Patient Name</th>
          <th>Patient ID</th>
          <th>Age</th>
          <th>Company</th>
          <th>City</th>
          <th>Vision Defect</th>
        </tr>
      }
      <tr>
        <td>{index+1}</td>
        <td>{tube.patientName}</td>
        <td>{tube.patientId}</td>
        <td>{tube.age}</td>
        <td>{tube.company}</td>
        <td>{tube.city}</td>
        <td>{tube.visionDefect}</td>
      </tr>
      </>
  );
};

export default TestTube;