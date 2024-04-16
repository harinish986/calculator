import React, { useState, useEffect } from 'react';

const Calculator = () => {
 const [inputs, setInputs] = useState([
    { num1: '', num2: '', result: '' },
    { num1: '', num2: '', result: '' },
 ]);
 const [thirdSet, setThirdSet] = useState({ num1: '', num2: '', result: '' });

 const handleAddInput = () => {
    setInputs([...inputs, { num1: '', num2: '', result: '' }]);
 };

 const handleInputChange = (index, field, value) => {
    const newInputs = [...inputs];
    newInputs[index][field] = value;

    if (field === 'num1' || field === 'num2') {
      const num1Value = parseInt(newInputs[index].num1);
      const num2Value = parseInt(newInputs[index].num2);
      if (!isNaN(num1Value) && !isNaN(num2Value)) {
        newInputs[index].result = (num1Value + num2Value).toString();
      }
    }

    setInputs(newInputs);
 };

 useEffect(() => {
    const num1Sum = inputs.reduce((total, input) => {
      const num1Value = parseInt(input.num1);
      if (!isNaN(num1Value)) {
        return total + num1Value;
      } else {
        return total;
      }
    }, 0);

    const num2Sum = inputs.reduce((total, input) => {
      const num2Value = parseInt(input.num2);
      if (!isNaN(num2Value)) {
        return total + num2Value;
      } else {
        return total;
      }
    }, 0);

    const resultSum = inputs.reduce((total, input) => {
      const resultValue = parseInt(input.result);
      if (!isNaN(resultValue)) {
        return total + resultValue;
      } else {
        return total;
      }
    }, 0);

    setThirdSet({
      num1: num1Sum.toString(),
      num2: num2Sum.toString(),
      result: resultSum.toString(),
    });
 }, [inputs]);

 return (
    <div>
      {inputs.map((input, index) => (
        <div key={index}>
          <input
            type="number"
            value={input.num1}
            onChange={(e) => handleInputChange(index, 'num1', e.target.value)}
          />
          <span> + </span>
          <input
            type="number"
            value={input.num2}
            onChange={(e) => handleInputChange(index, 'num2', e.target.value)}
          />
          <span> = </span>
          <input
            type="text"
            value={input.result}
            readOnly
          />
        </div>
      ))}
      <button onClick={handleAddInput}>Add</button>
      <div>
        <input
          type="text"
          value={thirdSet.num1}
          onChange={(e) => setThirdSet({ ...thirdSet, num1: e.target.value })}
        />
        <input
          type="text"
          value={thirdSet.num2}
          onChange={(e) => setThirdSet({ ...thirdSet, num2: e.target.value })}
        />
        <input
          type="text"
          value={thirdSet.result}
          onChange={(e) => setThirdSet({ ...thirdSet, result: e.target.value })}
        />
      </div>
    </div>
 );
};

export default Calculator;
