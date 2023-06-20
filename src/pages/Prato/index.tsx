import styles from './Prato.module.scss';
import { useParams, useNavigate } from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import Tags from 'components/Tags';
import NotFound from 'pages/NotFound';
import Header from 'components/Header';
import { Routes, Route } from 'react-router-dom';

export default function Prato() {
    const { id } = useParams();
    const navigate = useNavigate();
    const prato = cardapio.find(item => item.id === Number(id));
    if(!prato) {
        return <NotFound />;
    }
    return (
        <Routes>
            <Route path='*' element={<Header />}>
                <Route index element={
                    <>
                        <button 
                            className={styles.voltar}
                            onClick={() => {navigate(-1);}}
                            >
                            {'< Voltar'}
                        </button>
                        <section className={styles.container}>
                            <h1 className={styles.titulo}>
                                {prato.title}
                            </h1>
                            <div  className={styles.imagem}>
                                <img src={prato.photo} alt={prato.title} />
                            </div>
                            <div className={styles.conteudo}>
                                <p className={styles.conteudo__descricao}>
                                    {prato.description}
                                </p>
                                <Tags item={prato}/>
                            </div>
                        </section>
                    </>
                } />
            </Route>
        </Routes>
    );
}