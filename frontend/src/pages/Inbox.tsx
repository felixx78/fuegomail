import dayjs from "dayjs";
import { Link, useSearchParams } from "react-router-dom";
import UserIcon from "../components/UserIcon";
import { useQuery } from "react-query";
import Emails from "../api/emails";
import Spinner from "../components/Spinner";
import { useEffect, useState } from "react";
import TablePagination from "../components/TablePagination";
import clsx from "clsx";

function Inbox() {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = parseInt(searchParams.get("page") || "1") || 1;
  const setPage = (v: number) => {
    setSearchParams({ ...searchParams, page: String(v) });
  };

  const { data: emails } = useQuery({
    queryKey: ["emails", page],
    queryFn: () => Emails.paged(page),
  });

  const [rowCount, setRowCount] = useState(0);

  useEffect(() => {
    if (emails && !rowCount) setRowCount(emails.rowCount);
  }, [emails]);

  if (!emails) return <Spinner screen />;

  return (
    <div>
      <h1 className="mb-8 ml-4">Inbox</h1>

      {emails.content.length === 0 && (
        <p className="text-center text-3xl">No Mails</p>
      )}

      <div className="mb-4 divide-y divide-border-color dark:divide-dark-border-color">
        {emails.content.map((mail) => (
          <Link
            to={`/inbox/${mail.id}?page=${page}`}
            className={`relative flex flex-col px-4 py-2 md:flex-row md:items-center ${mail.readed ? "bg-border-color dark:bg-dark-secondary-background" : "bg-secondary-background dark:bg-dark-highlighted-background"}`}
            key={mail.id}
          >
            <div className="flex flex-shrink-0 justify-between md:w-[22%]">
              <div
                className="mb-2 flex w-[80%] flex-shrink-0 items-center gap-2 sm:pt-0 md:mb-0 md:w-full"
                title={mail.sender_name || mail.sender_email}
              >
                <UserIcon name={mail.sender_name} />
                <p className="truncate">
                  {mail.sender_name || mail.sender_email}
                </p>
              </div>

              <div className="flex-shrink-0 text-xs md:hidden">
                {dayjs(mail.time).format("MMMM D")}
              </div>
            </div>

            <div
              className="flex-shrink-0 truncate text-[15px] md:w-[18%] md:min-w-[160px] md:px-4 md:text-base"
              title={mail.subject}
            >
              {mail.subject}
            </div>
            <div className="flex-shrink-1 w-full truncate text-sm text-secondary-text dark:text-dark-secondary-text sm:text-xs md:max-w-[60%] md:text-base">
              {mail.snippet}
            </div>
            <div className="hidden w-[170px] flex-shrink-0 px-4 text-base md:block">
              {dayjs(mail.time).format("MMMM D, h:mm A")}
            </div>
          </Link>
        ))}
      </div>

      <div
        className={clsx(
          "justify-end pr-4",
          emails.content.length === 0 ? "hidden" : "flex",
        )}
      >
        <TablePagination
          rowCount={rowCount}
          rowPerPage={20}
          page={page}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}

export default Inbox;
