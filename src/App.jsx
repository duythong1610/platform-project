import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { routes } from "./routes";
import React, { Fragment } from "react";
import DefaultLayout from "./components/DefaultLayout";

function App() {
  return (
    <>
      <Router>
        <React.Suspense fallback={<h1>Fallback Component</h1>}>
          <Routes>
            {routes.map((route, index) => {
              const Page = route.component;
              const Layout = route.isDefaultLayout ? DefaultLayout : Fragment;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </React.Suspense>
      </Router>
    </>
  );
}

export default App;
