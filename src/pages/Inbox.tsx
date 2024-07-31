import dayjs from "dayjs";
import mails from "./mails";
import { Link } from "react-router-dom";
import DefaultUserIcon from "../components/DefaultUserIcon";

function Inbox() {
  return (
    <div>
      <h1 className="mb-8 ml-8">Inbox</h1>
      <div className="ml-auto mr-0 px-2 md:w-[85%]">
        <div className="divide-y divide-border-color dark:divide-dark-border-color">
          {mails.map((mail) => (
            <Link
              to="/"
              className={`relative flex flex-col px-4 py-2 md:flex-row md:items-center ${mail.read ? "bg-secondary-background dark:bg-dark-secondary-background" : "bg-border-color dark:bg-dark-highlighted-background"}`}
              key={mail.id}
            >
              <div
                className="mb-2 flex flex-shrink-0 items-center gap-2 md:mb-0"
                title={mail.sender.name}
              >
                {mail.sender.icon ? (
                  <img src={mail.sender.icon} width={35} height={35} alt="" />
                ) : (
                  <DefaultUserIcon />
                )}
                <p className="truncate md:w-[10%] md:min-w-[140px]">
                  {mail.sender.name}
                </p>
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
              <div className="absolute right-3 top-5 flex-shrink-0 -translate-y-1/2 text-sm sm:-translate-y-0 md:static md:right-4 md:top-1/2 md:w-[200px] md:px-4 md:text-base">
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
