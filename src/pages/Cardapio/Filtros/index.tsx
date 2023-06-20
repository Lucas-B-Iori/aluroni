import React from 'react';
import filtros from './filtros.json';
import styles from './Filtros.module.scss';
import classNames from 'classnames';

interface Filtro {
    id: number,
    label: string
}

interface FiltrosProps {
    filtro: number | null,
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filtros({ filtro, setFiltro }: FiltrosProps) {

	function selecionarFiltros(opcao: Filtro) {
		if(filtro === opcao.id) return setFiltro(null);
		return setFiltro(opcao.id);
	} 

	return (
		<div className={styles.filtros}>
			{filtros.map(opcao =>(
				<button 
					className={classNames({
						[styles.filtros__filtro]: true,
						[styles['filtros__filtro--ativo']]: filtro === opcao.id
					})} 
					key={opcao.id} 
					onClick={() => selecionarFiltros(opcao)}
				>
					{opcao.label}
				</button>
			))}
		</div>
	);
}
