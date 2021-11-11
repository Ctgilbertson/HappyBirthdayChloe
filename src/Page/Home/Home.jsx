import React from "react";
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import { useHistory } from "react-router-dom";
import Layout from "../../Layout";
import "./home.scss";
import Carousel from 'react-bootstrap/Carousel';

export default function Home() {
  let history = useHistory();

  return (
    <Layout>
      <Carousel>
        <Carousel.Item>
          <Image className="d-block center"  style={{height: '50%', width: '100%'}} src={require("../../static/images/ChloeUnderPier.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <Image className="d-block center" style={{height: '50%', width: '100%'}} src={require("../../static/images/ChloeCliff.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <Image className="d-block center" style={{height: '50%', width: '100%'}} src={require("../../static/images/ChloeSunset.jpg")}/>
        </Carousel.Item>
      </Carousel>

      <div className="container">

        <hr class="featurette-divider"/>

        <div class="row featurette" onClick={() => history.push("/RoadTrip")}>
          <div class="col-md-7">
            <h2 class="featurette-heading">Boobs, Booze and Break-ins  <span class="text-muted">Our Graduation Road Trip</span></h2>
            <p class="lead">15 days of never being more than 15ft apart from eachother :)</p>
          </div>
          <div class="col-md-5">
          <a onClick={() => history.push("")}>
            <Image className="featurette-image mx-auto" src={require("../../static/images/IMG_2749.jpg")} fluid rounded/>
            </a>
          </div>
        </div>

        <hr class="featurette-divider"/>

        <div class="row featurette" onClick={() => history.push("/LA")}>
          <div class="col-md-7">
            <h2 class="featurette-heading">LA Baby <span class="text-muted">City of Stars</span></h2>
            <p class="lead">Sandy Beaches and Strange Star Wars Bars</p>
          </div>
          <div class="col-md-5">
          <a onClick={() => history.push("")}>
            <Image className="featurette-image mx-auto" src={require("../../static/images/IMG_3350.jpg")} fluid rounded/>
            </a>
          </div>
        </div>

      </div>
    </Layout>
  );
}
