import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { HandleChange, values } = useForm({
    titulo: '',
    categoria: '',
    url: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // alert('Video cadastrado com sucesso'); // fazer pagina de aviso

        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
       });

        videosRepository.create({
          titulo: values.titulo,
          CategoriaId: categoriaEscolhida.id,
          url: values.url,
        })
          .then(() => {
            // eslint-disable-next-line no-console
            console.log('cadastrado com sucesso');
            history.push('/'); // empurra url do home no navegador
          });
      }}
      >
        <FormField
          label="Titulo do Video"
          // type="text"
          name="titulo"
          value={values.titulo}
          onChange={HandleChange}
        />

        <FormField
          label="Categoria"
          // type="text"
          name="categoria"
          value={values.categoria}
          onChange={HandleChange}
          suggestions={categoryTitles}
        />

        <FormField
          label="URL"
          // type="text"
          name="url"
          value={values.url}
          onChange={HandleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/Cadastro/Categoria">
        Cadastrar Categoria
      </Link>

    </PageDefault>
  );
}

export default CadastroVideo;
