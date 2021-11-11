import React from "react";
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import { useHistory } from "react-router-dom";
import Layout from "../../Layout";
import Carousel from 'react-bootstrap/Carousel';

export default function About() {
  let history = useHistory();

  return (
    <Layout>
     <div className="container">

        
      <div class="row featurette" onClick={() => history.push("/RoadTrip")}>
          <div class="col-md-7">
            <h2 class="featurette-heading">Boobs, Booze and Break-ins  <span class="text-muted">Our Graduation Road Trip</span></h2>
            <p class="lead">15 days of never being more than 15ft apart from eachother :)</p>
          </div>
          <div class="col-md-5">
          <a onClick={() => history.push("/RoadTrip")}>
            <Image className="featurette-image mx-auto" src={require("../../static/images/IMG_2749.jpg")} fluid rounded/>
            </a>
          </div>
        </div>

        <hr class="featurette-divider"/>

        <div class="row featurette" onClick={() => history.push("/LA")}>
          <div class="col-md-7">
            <h2 class="featurette-heading">LA Baby <span class="text-muted">Land of Beaches and Fame</span></h2>
            <p class="lead">Our Beachfront Weekend Getaway</p>
          </div>
          <div class="col-md-5">
          <a onClick={() => history.push("/LA")}>
            <Image className="featurette-image mx-auto" src={require("../../static/images/IMG_3350.jpg")} fluid rounded/>
            </a>
          </div>
        </div>

        <hr class="featurette-divider"/>

        <div class="text-center">
          <h1 class="display-4">Many More to Come</h1>
        </div>
        </div>
    </Layout>
  );
}
