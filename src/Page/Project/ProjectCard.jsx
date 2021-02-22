import React from "react";
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const CustomCard = props => {
  const project = props.project

  let image = project.imgUrl === "" ? 'heliosIcon' : project.imgUrl;
  return (
    <div>
      <Card className="item">
        <Row className="cardText">
          <Col className="stuff">
          <img className="cardImg" src={require('../../static/images/' + image + ".jpg")}></img>
          </Col>
          <Col>
          <h4 className="cardTitle">{project.title}</h4>
          <Card.Text>
            {project.summary}
          </Card.Text>
          </Col>
        </Row>
      </Card>

    </div>
  )
};

export default CustomCard;
