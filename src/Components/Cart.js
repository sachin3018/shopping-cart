import React from "react";
import {
  ListGroup,
  ListGroupItem,
  Button,
  CardHeader,
  CardBody,
  Card,
  CardFooter,
  Col,
  Row
} from "reactstrap";

const Cart = ({ cartItem, removeItem, buyNow }) => {
  return (
    <div className="text-center">
            <div className="bg-info p-3">
                <h3>Cart</h3>
            </div>
      <ListGroup>
        {cartItem.map(item => (
          <ListGroupItem key={item.id} className="bg-dark">
            <Row>
              <Col>
                <img height={80} src={item.tiny} alt=""/>
              </Col>
              <Col className="text-center">
                <div className="text-primary">
                <span className="text">{item.price} $</span>
                </div>
                <Button color="danger" className="m-3" onClick={() => removeItem(item)}>
                  Remove
                </Button>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
      {/* If everything is empty */}
      {cartItem.length >= 1 ? (
        <Card className="text-center mt-3 bg-dark">
          <CardHeader className="text">Grand Total</CardHeader>
          <CardBody className="text">
            Your cart have {cartItem.length}
          </CardBody>
          <CardFooter>
            <Button color="success" onClick={buyNow}>
              Pay Now
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <h1 className="text-warning">Cart is empty</h1>
      )}
    </div>
  );
};

export default Cart;
