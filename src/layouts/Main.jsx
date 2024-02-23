import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import NavbarHeader from "../components/NavbarHeader/NavbarHeader";


const Main = () => {
    return (
        <>
           <Container>
            <Row>
                <Col>
                    <NavbarHeader></NavbarHeader>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Outlet></Outlet>
                </Col>
            </Row>
           </Container>
        </>
    );
};

export default Main;