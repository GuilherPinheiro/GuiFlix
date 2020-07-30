import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";

function CadastroCategoria() {
  const inicialValues = {
    nome: '',
    descricao: '',
    cor: '#000',
  }

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(inicialValues);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    })
  }

  function handleChange(novaCategoria) {
    setValue(novaCategoria.target.getAttribute('name'), 
    novaCategoria.target.value);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>
      
      <form onSubmit={function handleSubmit(novaCategoria) {
        novaCategoria.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);

        setValues(inicialValues);

      }}>

        <FormField 
          label="Nome da categoria: "
          value={values.nome}
          type="text"
          name="nome"
          onChange={handleChange}
        />

        <div>
          <label>
            Descrição:
            <textarea type="text" 
            value={values.descricao} 
            name="descricao"
            onChange={handleChange}/>
          </label>
        </div>

        <FormField 
          label="Cor:"
          value={values.cor}
          type="color"
          name="cor"
          onChange={handleChange}
        />

        <button>
          Cadastrar
        </button>
      </form>
      
      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;