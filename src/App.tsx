import "react-toastify/dist/ReactToastify.css";
import "./config/axios";
import "./style/global.css";

import { QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import { client } from "./react-query/client";
import { HomePage } from "./screens/HomePage";

export const App = () => {
  return (
    <QueryClientProvider {...{ client }}>
      <HomePage />
      <ToastContainer />
    </QueryClientProvider>
  );
};
