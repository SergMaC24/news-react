import React from "react";
import { formatDate } from "../helpers/formatDate";
import styles from "./styles.module.scss";

const Pagination = ({
  totalPages,
  handleNextPage,
  handlePreviousPage,
  handlePageClick,
  currentPage,
}) => {
  return (
    <div className={styles.pagination}>
      <button disabled={currentPage <= 1} onClick={handlePreviousPage} className={styles.arrow}>
        {"<"}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              onClick={() => handlePageClick(index + 1)}
              className={styles.pageNumber}
              disabled={index + 1 === currentPage}
              key={index}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button disabled={currentPage >= totalPages} onClick={handleNextPage} className={styles.arrow}>
        {">"}
      </button>
    </div>
  );
};
// 7.58

export default Pagination;
