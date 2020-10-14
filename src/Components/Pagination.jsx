import React from "react";

const Pagination = ({ next, prev }) => {
  return (
    <>
      {/* <p className="actual-page">Actual page: {page}</p> */}
      <nav aria-label="Page">
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => prev()}
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => next()}
              aria-label="Next"
            >
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;