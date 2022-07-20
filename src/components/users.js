import {Link} from "react-router-dom";

import Map from "./map";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Users({data}){
  return(
    <Container className="my-4">
      <Row xs={4}>
        {data.map((user) =>
        <Col key={user.id}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title as="h2"><Link to={"/user/" + user.id} state={user}>{user.name}</Link></Card.Title>

                <address>
                  <a href={"//" + user.website} target="_blank" rel="noreferrer">{user.website}</a>
                </address>
                
                <Card.Text>{user.company.name}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        )}
      </Row>

      <Map mapData={data} mapOrigin={[0, 0]} mapZoom="1" />
    </Container>
  );
}

export default Users;
