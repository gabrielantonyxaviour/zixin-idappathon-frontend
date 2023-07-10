import React, { FunctionComponent } from "react";
import NoSSR from "../src/components/NoSSR";
import HomeOffers2 from "../src/components/HomeOffers2";

const Dashboard: FunctionComponent = () => {
  return (
    <NoSSR>
      <HomeOffers2 />
    </NoSSR>
  );
};
export default Dashboard;
