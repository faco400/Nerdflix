import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    // chave: nome, descricão, bla bla
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }

  function HandleChange(infoDosEventos) {
    setValue(
      infoDosEventos.target.getAttribute('name'),
      infoDosEventos.target.value,
    );
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    HandleChange,
    clearForm,
  };
}

export default useForm;
