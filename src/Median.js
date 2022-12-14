import React, { useState } from 'react';
import median from './ArrayMedian';

function Median() {
    let Array = median;
    // const [mid, setMid] = useState(median);
    let list1 = [-1, -2, -3];
    let list2 = [1, 2, 3 , 4, 5];
    console.log(Array(list1, list2));
    const result = () => {
        if(-1000 <= -8){document.write("True")}
    }
    
  return (
    <div>
        <h1>median</h1>
        <h2>{ result() }</h2>
    </div>
  );
}

export default Median;