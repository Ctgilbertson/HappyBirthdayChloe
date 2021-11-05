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
                <h1 class="display-4 font-italic">Los Angeles</h1>
                <h3 class="font-italic">Relaxing Getaway Across the Country</h3>
                <p>
                    Again more fun because we are in love
                </p>
            </div>
        </div>
      </Layout>

    </div>
  );
};

export default RoadTrips;
