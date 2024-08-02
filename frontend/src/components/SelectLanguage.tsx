import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useRef, useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { languageActions } from "../redux/languageReducer";

const languages = [
  {
    name: "English",
    code: "en",
    flag: "/uk.png",
  },
  {
    name: "Español",
    code: "es",
    flag: "/spain.png",
  },
];

function SelectLanguage() {
  const ref = useRef<HTMLButtonElement>(null);
  const dispatch = useDispatch();

  const selectedLanguageCode = useSelector(
    (state: RootState) => state.language,
  );

  const [isOpen, setIsOpen] = useState(false);
  const language =
    languages.find((i) => i.code === selectedLanguageCode) || languages[0];

  useEffect(() => {
    const handleOnClick = (e: MouseEvent) => {
      if (isOpen && ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleOnClick);
    return () => window.removeEventListener("click", handleOnClick);
  }, [ref, isOpen]);

  return (
    <div className="relative">
      <button
        ref={ref}
        onClick={() => setIsOpen(true)}
        className="flex cursor-pointer gap-3"
      >
        <LanguageItem data={language} />
        <CaretDown size={30} />
      </button>

      <div
        style={{ display: isOpen ? "block" : "none" }}
        className="absolute left-0 top-[140%] w-full divide-y-2 divide-dark-border-color rounded-md border-2 border-dark-border-color"
      >
        {languages.map((i) => (
          <button
            onClick={() => dispatch(languageActions.set(i.code))}
            key={i.code}
            className="w-full cursor-pointer bg-secondary-background px-4 py-3 hover:bg-highlighted-background dark:bg-dark-secondary-background dark:hover:bg-dark-highlighted-background"
          >
            <LanguageItem data={i} />
          </button>
        ))}
      </div>
    </div>
  );
}

const LanguageItem = ({ data }: { data: (typeof languages)[0] }) => {
  return (
    <div className="flex items-center gap-4">
      <img src={data.flag} width={50} alt="" />
      <p className="text-lg">{data.name}</p>
    </div>
  );
};

export default SelectLanguage;
