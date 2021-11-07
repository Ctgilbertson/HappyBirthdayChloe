import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../../Layout";
import Card from 'react-bootstrap/Card';

const RoadTrips = () => {
  return (
    <div>
      <Layout>
        <div className="container">
            <div class="text-center">
                <h1 class="display-4 font-italic">Road trip</h1>
                <h3 class="font-italic">6,000 Miles of fun</h3>
                <p>
                    We had a ton of fun because we are in love
                </p>
            </div>
        </div>
      </Layout>

    </div>
  );
};

export default RoadTrips;
