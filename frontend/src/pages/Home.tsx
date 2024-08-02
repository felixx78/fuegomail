import { useIntl } from "react-intl";
import { Link } from "react-router-dom";

function Home() {
  const intl = useIntl();

  const user = localStorage.getItem("user");

  return (
    <div className="mx-auto flex max-w-[1300px] items-start justify-between gap-2 px-4 pt-24 lg:justify-center lg:gap-24">
      <div className="pt-0 md:pt-8 lg:pt-20">
        <h1 className="mb-4">{intl.formatMessage({ id: "home.title" })}</h1>
        <p className="mb-6 max-w-[600px] text-secondary-text dark:text-dark-secondary-text">
          {intl.formatMessage({ id: "home.subtitle" })}
        </p>

        {!user ? (
          <div className="flex items-center gap-6">
            <Link
              to="/sign-in"
              className="rounded-full bg-primary-button-background px-8 py-2 text-dark-primary-text"
            >
              Sign in
            </Link>
            <Link
              to="/sign-up"
              className="text-secondary-text dark:text-dark-secondary-text"
            >
              Sign up
            </Link>
          </div>
        ) : (
          <Link
            to="/inbox"
            className="rounded-full bg-primary-button-background px-8 py-3 text-dark-primary-text"
          >
            Go to app
          </Link>
        )}
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
