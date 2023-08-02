import React from "react";

const Dashboard = React.lazy(() => import("../pages/Dashboard"));

export const routes = [
  {
    path: "/",
    component: Dashboard,
    isDefaultLayout: true,
  },
];
