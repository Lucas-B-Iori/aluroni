import classNames from 'classnames';
import { IItem } from 'types/IItem';
import styles from './Tags.module.scss';

interface TagsProps {
    item: IItem,
}

export default function Tags({ item }: TagsProps) {
    return(
        <div className={styles.tags}>
            <div className={classNames({
                [styles.tags__tipo]: true,
                [styles[`tags__tipo__${item.category.label.toLowerCase()}`]]: true
            })}>
                {item.category.label}
            </div>
            <div className={styles.tags__porcao}>
                {item.size}g
            </div>
            <div className={styles.tags__qtdpessoas}>
                Serve {item.serving} pessoa{item.serving > 1 ? 's' : ''}
            </div>
            <div className={styles.tags__valor}>
                R$ {item.price.toFixed(2)}
            </div>
        </div>
    );
}