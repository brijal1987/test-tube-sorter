"use client"; // This is a client component 👈🏽
import React, { useState } from 'react';
import TestTubeForm from './components/TestTubeForm';
import Rack from './components/Rack';
import { TestTubeInterface } from './types';

const assignToRacks = (testTubes: TestTubeInterface[]): TestTubeInterface[][] => {
  const racks: TestTubeInterface[][] = [];
  testTubes.forEach((tube) => {
    let isAssigned = false;
    for (let rack of racks) {
      /*
      Check below
      1. Each tube contains a material for a specific patient
      2. It is illegal to place patients of the same age into the same rack
      3. It is illegal to place patients working in the same company into the same rack
      4. It is illegal to place patients who live in the same city district into the same rack
      5. It is illegal to place patients with the same vision defect into the same rack
      6. The number of racks is very limited
      */
      if (
        rack.some((t) => t.age === tube.age) ||
        rack.some((t) => t.company === tube.company) ||
        rack.some((t) => t.city === tube.city) ||
        rack.some((t) => t.visionDefect === tube.visionDefect)
      ) {
        continue;
      }
      rack.push(tube);
      isAssigned = true;
      break;
    }
    if (!isAssigned) {
      racks.push([tube]);
    }
  });
  return racks;
};

const Home: React.FC = () => {
  const [testTubes, setTestTubes] = useState<TestTubeInterface[]>([]);
  const [racks, setRacks] = useState<TestTubeInterface[][]>([]);

  const handleAddTube = (tubeData: TestTubeInterface) => {
    const newTube: TestTubeInterface = { ...tubeData, patientId: testTubes.length + 1 };
    const updatedTubes = [...testTubes, newTube];
    const updatedRacks = assignToRacks(updatedTubes);
    setTestTubes(updatedTubes);
    setRacks(updatedRacks);
  };

  return (
    <div className="container">
      <div className='header'>
        <h1>Test Tube Sorter</h1>
        Write an application that will allow the user to insert a list of test tubes, and then it will assign them to racks based on the following logic:<br/>
        1. Each tube contains a material for a specific patient<br/>
        2. It is illegal to place patients of the same age into the same rack<br/>
        3. It is illegal to place patients working in the same company into the same rack<br/>
        4. It is illegal to place patients who live in the same city district into the same rack<br/>
        5. It is illegal to place patients with the same vision defect into the same rack<br/>
        6. The number of racks is very limited<br/>
      </div>
      <div className='left'>
      <TestTubeForm onSubmit={handleAddTube} />
      </div>
      <div className="right">
        {racks.length > 0 && racks.map((rack, index) => (
          <>
          <h1>Rack {index+1}</h1>
          <Rack key={index} tubes={rack} />
          </>
        ))}
        {racks.length === 0 && <h1>No Rack Available</h1>}
      </div>
      
      <div className='footer'>&copy; Copyright 2024</div>
    </div>
  );
};

export default Home;