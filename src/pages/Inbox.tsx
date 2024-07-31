import dayjs from "dayjs";
import mails from "./mails";
import { Link } from "react-router-dom";

function Inbox() {
  return (
    <div>
      <h1 className="mb-8 ml-8">Inbox</h1>
      <div className="ml-auto mr-0 px-2 md:w-[80%]">
        <div>
          {mails.map((mail) => (
            <Link
              to="/"
              className={`relative flex flex-col px-4 py-2 md:flex-row ${mail.read ? "bg-secondary-background dark:bg-dark-secondary-background" : "bg-border-color dark:bg-dark-highlighted-background"}`}
              key={mail.id}
            >
              <div
                className="flex-shrink-0 truncate md:w-[10%] md:min-w-[130px]"
                title={mail.recipient.name}
              >
                {mail.recipient.name}
              </div>
              <div
                className="flex-shrink-0 truncate text-[15px] md:w-[18%] md:min-w-[160px] md:px-4 md:text-base"
                title={mail.subject}
              >
                {mail.subject}
              </div>
              <div className="flex-shrink-1 w-full truncate text-sm text-secondary-text dark:text-dark-secondary-text md:max-w-[60%] md:text-base">
                {mail.snippet}
              </div>
              <div className="absolute right-3 top-5 flex-shrink-0 -translate-y-1/2 text-sm sm:-translate-y-0 md:static md:right-4 md:top-1/2 md:px-4 md:text-base">
                {dayjs(mail.timestamp).format("MMMM D, YYYY h:mm A")}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Inbox;
