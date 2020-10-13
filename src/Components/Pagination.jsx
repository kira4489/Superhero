  
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pagination = ({ heroPerPage, totalHero, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalHero / heroPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="py-2  w-100">
      <nav className="block">
        <ul className="flex pl-0 rounded list-none flex-wrap">
          <li>            
              <FontAwesomeIcon class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-teal-500 bg-teal-500 text-white" icon={faChevronCircleLeft}></FontAwesomeIcon>           
          </li>
          {pageNumbers.map((e) => {
            return (
              <li key={e} className="">
                <Link
                  to="/"
                  className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-teal-500 text-black bg-white hover:bg-gray-500"
                  onClick={() => paginate(e)}
                >
                  {e}
                </Link>
              </li>
            );
          })}
          <li>            
              <FontAwesomeIcon class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-teal-500 bg-teal-500 text-white" icon={faChevronCircleRight}></FontAwesomeIcon>           
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;