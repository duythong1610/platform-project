import React from "react";

const Dashboard = React.lazy(() => import("../pages/Dashboard"));
const MeetingAppointMent = React.lazy(() =>
  import("../pages/MeetingAppointMent")
);

const Requirement = React.lazy(() => import("../pages/Requirement"));
const ProcessDefinition = React.lazy(() =>
  import("../pages/ProcessDefinition")
);
const ProjectResource = React.lazy(() => import("../pages/ProjectResource"));

export const routes = [
  {
    path: "/",
    component: Dashboard,
    isDefaultLayout: true,
  },

  {
    path: "meeting-appointment",
    component: MeetingAppointMent,
    isDefaultLayout: true,
  },

  {
    path: "requirement",
    component: Requirement,
    isDefaultLayout: true,
  },

  {
    path: "process-definition",
    component: ProcessDefinition,
    isDefaultLayout: true,
  },

  {
    path: "project-resource",
    component: ProjectResource,
    isDefaultLayout: true,
  },
];
