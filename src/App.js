import React from 'react';
import SciCalculator from './component/SciCalculator';

function App() {
  return (
    <div className='text-center' style={{fontSize:'40px',fontWeight:'bolder',textDecorationLine:'underline'}}>
          Ready to Calculate?
          <SciCalculator />
    </div>
  );
}

export default App;
