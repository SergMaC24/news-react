import styles from "./styles.module.scss";

const Skeleton = ({ count = 1, type = "banner" }) => {
  return (
    <div className={styles.list}>
      {count > 1 ? (
        <ul className={styles.list}>
          {[...Array(count)].map((_, index) => (
            <li
              key={index}
              className={type === "banner" ? styles.banner : styles.item}
            ></li>
          ))}
        </ul>
      ) : (
        <li
          className={type === "banner" ? styles.banner : styles.item}
        ></li>
      )}
    </div>
  );
};

export default Skeleton;
