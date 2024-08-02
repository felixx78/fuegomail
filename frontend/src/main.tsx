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
import messages_es from "./locales/messages_es.json";
import { Provider, useSelector } from "react-redux";
import store, { RootState } from "./redux/store.ts";
import { QueryClient, QueryClientProvider } from "react-query";

const messages = {
  en: messages_en,
  es: messages_es,
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

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <LanguageProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </LanguageProvider>
    </Provider>
  </React.StrictMode>,
);
