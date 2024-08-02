import { CaretLeft, CaretRight } from "@phosphor-icons/react";

type Props = {
  rowCount: number;
  rowPerPage: number;
  page: number;
  onPageChange: (v: number) => void;
};

function TablePagination({ rowCount, rowPerPage, page, onPageChange }: Props) {
  if (rowCount === 0) return;

  const seenFrom = (page - 1) * rowPerPage + 1;
  const seenTo = Math.min(page * rowPerPage, rowCount);

  return (
    <div className="flex gap-4">
      <p>{`${seenFrom} - ${seenTo} of ${rowCount}`}</p>
      <div className="flex gap-2">
        <button
          onClick={() => onPageChange(page - 1)}
          className="cursor-pointer text-dark-disabled-text disabled:cursor-default disabled:text-disabled-text dark:text-disabled-text dark:disabled:text-dark-disabled-text"
          disabled={page === 1}
        >
          <CaretLeft size={26} />
        </button>
        <button
          onClick={() => onPageChange(page + 1)}
          className="cursor-pointer text-dark-disabled-text disabled:cursor-default disabled:text-disabled-text dark:text-disabled-text dark:disabled:text-dark-disabled-text"
          disabled={seenTo === rowCount}
        >
          <CaretRight size={26} />
        </button>
      </div>
    </div>
  );
}
export default TablePagination;
