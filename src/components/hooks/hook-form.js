import { useState } from 'react';

const useForm = (cb) => {
  const [item, setItem] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    
    cb(item);
  };
  const handleInputChange = (event) => {
    setItem({ ...item, [event.target.name]: event.target.value });
  };
  return [item, handleInputChange, handleSubmit];
};

export default useForm;