import { Nav, NavButton, NumberButton } from "../components/searchStyles";

const Pagination = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit);

  return (
    <>
      <Nav>
        <NavButton onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </NavButton>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <NumberButton
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </NumberButton>
          ))}
        <NavButton
          onClick={() => setPage(page + 1)}
          disabled={page === numPages}
        >
          &gt;
        </NavButton>
      </Nav>
    </>
  );
};

export default Pagination;
