import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { colourOptions } from './data';

const animatedComponents = makeAnimated();

const  MultipleSelect = () => {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[colourOptions[4], colourOptions[5]]}
      isMulti
      options={colourOptions}
    />
  );
}

export default MultipleSelect;
