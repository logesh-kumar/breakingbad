import React from "react";
import logo from "./images/logo.png";
import Layout from "./components/Layout";
import Home from "./components/Home";

const Header = () => {
  return <img alt="logo" src={logo} />;
};

function App() {
  return (
    <Layout header={<Header />}>
      <Home />
    </Layout>
  );
}

export default App;
