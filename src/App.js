import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import publicRoutes from "./routes";
import DefaultLayout from "./components/layouts/DefaultLayout/DefaultLayout";
import { Fragment } from "react";

import "./assets/css/global.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((item, index) => {
            let Layout = DefaultLayout;
            if (item.layout) {
              Layout = item.layout;
            } else {
              if (item.layout === null) {
                Layout = Fragment;
              }
            }
            const Page = item.component;
            return (
              <Route
                key={index}
                path={item.Path}
                element={
                  <Layout>
                    <Page data={item.Path}></Page>
                  </Layout>
                }
              ></Route>
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
