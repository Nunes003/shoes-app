import React from "react";
import Layout from "../components/Layout";
import NewArrivals from "../components/NewArrivals";
import HeadLine from "../components/Headline";

const Homepage = () => {
  return (
    <div className="mt-10">
      <Layout>
        <HeadLine />
        <NewArrivals />
      </Layout>
    </div>
  );
};

export default Homepage;
