import React, { useState } from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import axios from "axios";
import { useAlert } from "react-alert";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const alert = useAlert();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = { name, email, message };
    try {
      const { status } = await axios.post("/api/contact", data);
      if (status === 200) {
        alert.success("Message sent successfully 🎉");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert.error("Message not sent. Please try again!");
      }
    } catch (err) {
      console.log(err, " is err");
    }
  };

  return (
    <div style={{ paddingTop: "77px" }}>
      <div className="container">
        <div className="well well-sm" style={{ marginTop: "5%" }}>
          <Row>
            <Col>
              <Image
                src="assets/green.jpeg"
                thumbnail
                style={{ height: 400, width: 400 }}
              ></Image>
            </Col>
            <Col>
              <h4>
                <strong>Contact Us</strong>
              </h4>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <textarea
                  cols="30"
                  rows="3"
                  className="form-control"
                  placeholder="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
                <Button
                  variant="light"
                  type="submit"
                  className="btn btn-outline-danger text-uppercase mt-1"
                >
                  Send
                </Button>
              </form>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Contact;
