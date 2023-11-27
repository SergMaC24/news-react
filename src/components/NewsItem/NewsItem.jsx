import styles from "./styles.module.scss";
import { formatTimeAgo } from "../helpers/formatTimeAgo";

const NewsItem = ({ item }) => {
  return (
    <li className={styles.item}>
    <div className={styles.wrapper} style={{backgroundImage: `url(${item.image})`}}></div>
      <div className={styles.info}>
        <h3>{item.title}</h3>
        <p>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </li>
  );
};

export default NewsItem;
