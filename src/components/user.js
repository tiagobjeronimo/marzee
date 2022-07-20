import {Link, useLocation} from "react-router-dom";

import Map from "./map";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function User(){
    const location = useLocation();
    const user = location.state;
    
    return(
        <Container className="my-4">
            <Link to="/">Back</Link>

            <Row className="mt-4">
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title as="h1" className="h2">{user.name}</Card.Title>

                            <Card.Text>
                                Username: {user.username}<br />
                                ID: {user.id}
                            </Card.Text>
                            
                            <Card.Subtitle as="h2" className="h5">Contacts</Card.Subtitle>

                            <address>
                                Phone: <a href={"tel:" + user.phone}>{user.phone}</a><br />
                                Email: <a href={"mailto:" + user.email}>{user.email}</a><br />
                                Website: <a href={"//" + user.website} target="_blank" rel="noreferrer">{user.website}</a>
                            </address>
                            
                            <Card.Subtitle as="h2" className="h5">Address</Card.Subtitle>
                            
                            <address>
                                {user.address.street}, {user.address.suite}<br />
                                {user.address.zipcode} {user.address.city}<br />
                                Lat: {user.address.geo.lat} / Lng: {user.address.geo.lng}
                            </address>

                            <Card.Subtitle as="h2" className="h5">Company</Card.Subtitle>
                            
                            <Card.Text>
                                {user.company.name}<br />
                                <span className="text-muted">{user.company.catchPhrase}</span><br />
                                <span className="text-muted"><small>{user.company.bs}</small></span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Map mapData={user} mapOrigin={[user.address.geo.lat, user.address.geo.lng]} mapZoom="5" />
                </Col>
            </Row>
        </Container>
    );
}

export default User;