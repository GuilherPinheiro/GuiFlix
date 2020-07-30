/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const inicialValues = {
    nome: '',
    descricao: '',
    cor: '#000',
  };

  const [categorias, setCategorias] = useState([]);
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

  useEffect(() => {
    const URL_TOP = 'https://guiflix.herokuapp.com/categorias';
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, [// se este segundo parâmetro estive vazio, carrega apenas ao iniciar
  ]);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(novaCategoria) {
        novaCategoria.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(inicialValues);
      }}
      >

        <FormField
          label="Nome da categoria: "
          value={values.nome}
          type="text"
          name="nome"
          onChange={handleChange}
        />

        <FormField
          label="Descrição: "
          value={values.descricao}
          type="textarea"
          name="descricao"
          onChange={handleChange}
        />

        <FormField
          label="Cor:"
          value={values.cor}
          type="color"
          name="cor"
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>
      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
