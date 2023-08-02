import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { routes } from "./routes";
import { Fragment } from "react";

function App() {
  return (
    <>
      <Router>
        {/* <React.Suspense fallback={<FallBackComponent />}> */}
        <Routes>
          {routes.map((route, index) => {
            const Page = route.component;
            // const Layout = route.isDefaultLayout ? DefaultLayout : Fragment;
            const Layout = Fragment;
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
        {/* </React.Suspense> */}
      </Router>
    </>
  );
}

export default App;
