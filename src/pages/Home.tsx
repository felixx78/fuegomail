import { useIntl } from "react-intl";

function Home() {
  const intl = useIntl();

  return (
    <div className="mx-auto flex max-w-[1300px] items-start justify-between gap-2 px-4 pt-24 lg:justify-center lg:gap-24">
      <div className="pt-0 md:pt-8 lg:pt-20">
        <h1 className="mb-4">{intl.formatMessage({ id: "home.title" })}</h1>
        <p className="text-secondary-text dark:text-dark-secondary-text max-w-[600px]">
          Secure, customizable, and built for the modern user. Experience the
          freedom of open-source email management with FuegoMail.
        </p>
      </div>

      <img
        src="/mailbox.svg"
        className="hidden w-[280px] sm:block md:w-[320px] lg:w-[380px]"
        alt=""
      />
    </div>
  );
}
export default Home;
