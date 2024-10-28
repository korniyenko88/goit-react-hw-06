import styles from './SearchBox.module.css';

const SearchBox = ({ searchTerm, onSearchChange }) => {
  return (
    <div className={styles.divsearch}>
    <label className={styles.searchinput}>
      <span className={styles.tex}>find contacts by name</span>
      <input
        className={styles.input}
        type="text"
        name="name"
        required
        value={searchTerm}
        onChange={onSearchChange}
      />
      </label>
      </div>
  );
};

export default SearchBox;
