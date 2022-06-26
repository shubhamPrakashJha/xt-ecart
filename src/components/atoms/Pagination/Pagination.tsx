import React from 'react';

import './Pagination.scss';

type Props = {
  pageCount: number;
  current: number;
  onClickHandler: (index: number) => void;
};

export function Pagination({ pageCount, current, onClickHandler }: Props) {
  const pages = new Array(pageCount || 1).fill(null);
  return (
    <nav aria-label="pagination">
      <ul className="pagination">
        <li>
          <button>
            <span aria-hidden="true">«</span>
            <span className="visually-hidden">previous set of pages</span>
          </button>
        </li>
        {pages.map((_, i) => (
          <li key={i}>
            <button
              onClick={() => onClickHandler(i + 1)}
              aria-current={i + 1 === current && 'true'}
            >
              <span className="visually-hidden">page </span>
              {i + 1}
            </button>
          </li>
        ))}
        <li>
          <button>
            <span className="visually-hidden">next set of pages</span>
            <span aria-hidden="true">»</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
