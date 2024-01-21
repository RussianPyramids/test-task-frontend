import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages";
import { CardPage } from "./pages/card";
import store from "./store";
import { Provider } from "react-redux";

export const App: FC = () => (
  <Provider store={store}>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="card/:id" element={<CardPage />} />
    </Routes>
  </Provider>
);
