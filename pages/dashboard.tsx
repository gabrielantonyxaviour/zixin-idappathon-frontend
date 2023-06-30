import React, { FunctionComponent } from "react";
import HomeOffers1 from "../src/components/HomeOffers1";
import NoSSR from "../src/components/NoSSR";

const Dashboard: FunctionComponent = () => {
  return (
    <NoSSR>
      <HomeOffers1 />
    </NoSSR>
  );
};
export default Dashboard;
