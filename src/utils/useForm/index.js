import {useState} from 'react';

export const useForm = initialValue => {
  const [value, setValue] = useState (initialValue);
  return [
    value,
    (formType, formValue) => { 
      if (formType === 'reset') {
        return setValue(initialValue);
      }
      return setValue ({...value, [formType]: formValue});
    },
  ];
};
