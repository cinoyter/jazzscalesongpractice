import React from 'react';
import { useState } from 'react';
import './App.css';
import MeasureEditor from './editor/MeasureEditor';
import { Container } from '@mantine/core';
import update from 'immutability-helper';

function App() {
  
  const [ state, setState ] = useState( {
    songName: 'On Blue Narwhal Avenue',
    measures: [[ 'Eb dorian', 'F minor' ], ['C# phrygian dominant'] ]
  });

  function onMeasureChange (idx, val) {
    const m = state.measures;
    m[idx] = val;

    const newState = update( state.measures, {
        [idx]: { $set: val }
    });

    setState( {measures: newState } );
  }

  return( 
    <Container>
      <h2>{state.measures}</h2>

      { state.measures.map( (measure, index) => {
        return <MeasureEditor measure={measure} onMeasureChange={(val) => onMeasureChange(index, val)}></MeasureEditor>

      }) }
      
    </Container>
  );
}

export default App;
