import React from 'react';
import './App.css'
import ComponentClass from './ComponentClass';

var students = [
  { name: 'Umidjon', id: 1, statues: 'Students' },
  { name: 'Otabek', id: 2, statues: 'Students' },
  { name: 'Ahliyor', id: 3, statues: 'Students' },
  { name: 'Eshmat', id: 4, statues: 'Students' },
  { name: 'Toshmat', id: 5, statues: 'Students' },
];

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <ComponentClass name='Umidjon' id={2}/> */}

        {
          students.map((value, index) => {
            return(
              <ComponentClass
              name={value.name}
              id={value.id}
              statues={value.statues}
             />
            )
            
            
          })
        }
      </div>

    )

  }
}

export default App; 
