import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import privateRoutes from "./routes/privateRoutes.tsx";
import publicRoutes from "./routes/publicRoutes.tsx";
import PublicLayout from "./layouts/PublicLayout.tsx";
import PrivateLayout from "./layouts/PrivateLayout.tsx";
import { IntlProvider } from "react-intl";
import messages_en from "./locales/messages_en.json";
import { Provider, useSelector } from "react-redux";
import store, { RootState } from "./redux/store.ts";

const messages = {
  en: messages_en,
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: publicRoutes,
  },
  {
    path: "/",
    element: <PrivateLayout />,
    children: privateRoutes,
  },
]);

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const language = useSelector((state: RootState) => state.language);

  return (
    <IntlProvider
      locale={language}
      messages={messages[language as keyof typeof messages]}
    >
      {children}
    </IntlProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </Provider>
  </React.StrictMode>,
);
