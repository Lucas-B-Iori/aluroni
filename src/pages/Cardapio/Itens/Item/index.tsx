import styles from './Item.module.scss';
import { IItem } from 'types/IItem';
import Tags from 'components/Tags';
import { useNavigate } from 'react-router-dom';

interface ItemProps {
    item: IItem
}

export default function Item({ item }: ItemProps) {
	const navigate = useNavigate();
	return (
		<div className={styles.item} onClick={() => {navigate(`/prato/${item.id}`);}}>
			<div className={styles.item__imagem}>
				<img src={item.photo} alt={item.title} />
			</div>
			<div className={styles.item__descricao}>
				<div className={styles.item__titulo}>
					<h2>{item.title}</h2>
					<p>{item.description}</p>
				</div>
				<Tags item={item}/>
			</div>
		</div>
	);
}