/* eslint-disable linebreak-style */
import { useState } from 'react';

function useForm(inicialValues) {
  const [values, setValues] = useState(inicialValues);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }

  function handleChange(novaCategoria) {
    setValue(novaCategoria.target.getAttribute('name'),
      novaCategoria.target.value);
  }

  function clearForm() {
    setValues(inicialValues);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
