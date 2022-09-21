import { useState } from 'react';
import { Select, SelectOption } from './Select';

const options = [
  { label: 'First', value: 1 },
  { label: 'Second', value: 2 },
  { label: 'Third', value: 3 },
  { label: 'Fourth', value: 4 },
  { label: 'Fifth', value: 5 },
];

const App = () => {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]]);
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0]);
  return (
    <>
      <Select
        multiple
        options={options}
        value={value1}
        onChange={e => setValue1(e)}
      />
      <br />
      <Select options={options} value={value2} onChange={e => setValue2(e)} />
    </>
  );
};

export default App;
