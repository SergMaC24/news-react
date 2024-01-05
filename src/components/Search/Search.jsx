import styles from "./styles.module.scss";

const Search = ({ keywords, setKeywords }) => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="React"
        value={keywords}
        className={styles.input}
        onChange={(e) => setKeywords(e.target.value)}
      />
    </div>
  );
};

export default Search;
