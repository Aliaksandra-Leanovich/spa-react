import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainTemplate } from "../components/MainTemplate/MainTemplate";
import { Home } from "../pages/Home";
import { Product } from "../pages/Product";
import { Users } from "../pages/Users";
import { routes } from "../routes";
import { PrivateRoute } from "../utils";

const CounterAppOne = React.lazy(() => import("app1/CounterAppOne"));
const CounterAppTwo = React.lazy(() => import("app2/textcomponent"));

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<MainTemplate />}>
        <Route index element={<Home />} />
      </Route>
      <Route
        path={routes.PRODUCT}
        element={
          <Product
            CounterAppOne={CounterAppOne}
            CounterAppTwo={CounterAppTwo}
          />
        }
      />
      <Route element={<PrivateRoute />}>
        <Route path={routes.USERS} element={<Users />} />
      </Route>
    </Routes>
  );
};
