import React from 'react';
import useForm from './useForm'; // assuming the hook is saved in a file called useForm.js

const MyForm = () => {
  const phone = useForm('phone');  // Initialize useForm for phone validation
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (phone.validate()) {
      // Proceed with form submission logic
      console.log('Phone is valid:', phone.value);
    } else {
      console.log('Invalid phone number');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="phone"
        value={phone.value}
        onChange={phone.onChange}
        onBlur={phone.onBlur}
        placeholder="Digite seu telefone"
      />
      {phone.error && <span>{phone.error}</span>}  {/* Display error message */}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default MyForm;
