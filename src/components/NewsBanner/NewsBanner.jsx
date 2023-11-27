import styles from './styles.module.scss'
import {formatTimeAgo} from '../helpers/formatTimeAgo'
import Image from '../Image/Image'

const NewsBanner = ({item}) => {
  return (
    <div className={styles.banner}>
    <Image image={item?.image}/>
      <h3>{item.title}</h3>
      <p>{formatTimeAgo(item.published)} by {item.author}</p>
    </div>
  );
};

export default NewsBanner;
