import React from 'react';

const Array = () => {
  const fruits = ['Apple', 'Banana', 'Orange'];
  

  return (
    <div>
      <h2>List of Fruits</h2>
      <ul> 
            {fruits.map((fruit , index) => (
                <li key={index}>{fruit}</li>

             ) )
        }
      </ul>
    </div>
  );
};

export default Array;
