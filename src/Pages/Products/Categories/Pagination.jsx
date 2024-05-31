import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({
  data,
  pageNumber,
  pageSize,
  setPageSize,
  setPageNumber,
}) => {
  // Calculate the start and end indices of the items for the given page
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Slice the array to get the items for the given page
  const pageData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / pageSize);

  return (
    <div>
      {pageData &&
        pageData.map((category, idx) => (
          <ol key={idx} className="mt-8 flex justify-center">
            <Link
              className="text-xl font-semibold"
              to={`/category/${category}`}>
              {category}
            </Link>
          </ol>
        ))}
      <div className="flex justify-center gap-12 my-4">
        <button
          onClick={() => setPageNumber((prev) => (prev > 1 ? prev - 1 : prev))}
          disabled={pageNumber === 1}
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          Previous
        </button>
        <button
          onClick={() =>
            setPageNumber((prev) => (prev < totalPages ? prev + 1 : prev))
          }
          disabled={pageNumber === totalPages}
          className="flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
