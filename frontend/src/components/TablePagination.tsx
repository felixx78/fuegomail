import { CaretLeft, CaretRight } from "@phosphor-icons/react";

type Props = {
  rowCount: number;
  rowPerPage: number;
  page: number;
  onPageChange: (v: number) => void;
};

function TablePagination({ rowCount, rowPerPage, page, onPageChange }: Props) {
  if (rowCount === 0) return;

  const total = rowCount * page;
  const seenTo = rowPerPage * page > total ? total : rowPerPage * page;
  const seenFrom = seenTo - page >= 0 ? 1 : seenTo - page;

  return (
    <div className="flex gap-4">
      <p>{`${seenFrom} - ${seenTo} of ${total}`}</p>
      <div className="flex gap-2">
        <button
          onClick={() => onPageChange(page - 1)}
          className="cursor-pointer text-disabled-text disabled:cursor-default disabled:text-dark-disabled-text"
          disabled={page === 1}
        >
          <CaretLeft size={26} />
        </button>
        <button
          onClick={() => onPageChange(page + 1)}
          className="cursor-pointer text-disabled-text disabled:cursor-default disabled:text-dark-disabled-text"
          disabled={seenTo === total}
        >
          <CaretRight size={26} />
        </button>
      </div>
    </div>
  );
}
export default TablePagination;
