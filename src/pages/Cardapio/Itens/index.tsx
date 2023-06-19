import { IItem } from "types/IItem";
import Item from "./Item";
import styles from "./Itens.module.scss";
import itens from "./itens.json";
import { useState, useEffect } from "react";

interface ItensProps {
  filtro: number | null;
  busca: string;
  ordenador: string;
}

export default function Itens({ filtro, busca, ordenador }: ItensProps) {
  const [lista, setLista] = useState(itens);

  useEffect(() => {
    function testaBusca(title: string) {
      return title.toLowerCase().includes(busca.toLowerCase());
    }

    function testaFiltro(id: number | null) {
      if (filtro) {
        return filtro === id;
      }
      return true;
    }

    function ordenarPropriedadeCrescente(
      lista: IItem[],
      propriedade: "size" | "serving" | "price"
    ) {
      return lista.sort((a, b) => a[propriedade] - b[propriedade]);
    }

    function ordenar(novaLista: IItem[]) {
      switch (ordenador) {
        case "porcao":
          return ordenarPropriedadeCrescente(novaLista, "size");
        case "qtd_pessoas":
          return ordenarPropriedadeCrescente(novaLista, "serving");
        case "preco":
          return ordenarPropriedadeCrescente(novaLista, "price");
        default:
          return novaLista;
      }
    }

    const novaLista = itens.filter(
      (item) => testaBusca(item.title) && testaFiltro(item.category.id)
    );
    setLista(ordenar(novaLista));
  }, [filtro, busca, ordenador]);

  return (
    <div className={styles.itens}>
      {lista.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </div>
  );
}
