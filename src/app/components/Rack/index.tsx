import React from 'react';
import TestTube from '../TestTube';
import { TestTubeInterface } from '../../types';

interface Props {
  tubes: TestTubeInterface[];
}

const Rack: React.FC<Props> = ({ tubes }) => {
  return (
    <table className="table">
      {tubes.map((tube: TestTubeInterface, index) => (
        <TestTube key={tube.patientId} tube={tube} index={index} />
      ))}
    </table>
  );
};

export default Rack;