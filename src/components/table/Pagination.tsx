
const Pagination = ({currentPage, totalPages, limit, setPageNumber, setLimit}: {currentPage: number, totalPages: number, limit: number, setPageNumber: (page: number) => void, setLimit: (limit: number) => void}) => {
  return (
    <div className="pagination">
      <button className="pagination-button" onClick={() => setPageNumber(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>
      <span className="pagination-info">Page {currentPage} of {totalPages}</span>
      <button className="pagination-button" onClick={() => setPageNumber(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </button>
      <select className="pagination-limit" value={limit} onChange={(e) => setLimit(Number(e.target.value))}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
      </select>
    </div>
  );
};

export default Pagination;