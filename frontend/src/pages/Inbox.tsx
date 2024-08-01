import dayjs from "dayjs";
import mails from "./mails";
import { Link } from "react-router-dom";
import UserIcon from "../components/UserIcon";

function Inbox() {
  return (
    <div>
      <h1 className="mb-8 ml-4">Inbox</h1>
      <div className="divide-y divide-border-color dark:divide-dark-border-color">
        {mails.map((mail) => (
          <Link
            to={`/inbox/${mail.id}`}
            className={`relative flex flex-col px-4 py-2 md:flex-row md:items-center ${mail.read ? "bg-secondary-background dark:bg-dark-secondary-background" : "bg-border-color dark:bg-dark-highlighted-background"}`}
            key={mail.id}
          >
            <div className="flex flex-shrink-0 justify-between">
              <div
                className="mb-2 flex flex-shrink-0 items-center gap-2 sm:pt-0 md:mb-0"
                title={mail.sender.name}
              >
                <UserIcon name={mail.sender.name} />
                <p className="truncate md:w-[10%] md:min-w-[140px]">
                  {mail.sender.name}
                </p>
              </div>

              <div className="flex-shrink-0 text-xs md:hidden">
                {dayjs(mail.timestamp).format("MMMM D")}
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
            <div className="hidden w-[160px] flex-shrink-0 px-4 text-base md:block">
              {dayjs(mail.timestamp).format("MMMM D, h:mm A")}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Inbox;
