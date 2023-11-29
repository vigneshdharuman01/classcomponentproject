import { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

class Model extends Component{
 
    constructor(props) {
        super(props)
      this.state = {
        //   name: "",
        //   pass: "",
        //   data: {},
      }
      this.update = this.update.bind(this);
      this.create=this.create.bind(this);
  }

  update = () => {
    fetch(
      `https://trackappt.desss-portfolio.com/dynamic/dynamicapi.php?action=update&table=crud_table&id=${this.props.modelData.id}&name=${this.props.modelData.name}&email=${this.props.modelData.email}&password=${this.props.modelData.password}&dob=${this.props.modelData.dob}&gender=${this.props.modelData.gender}&language=${this.props.modelData.language}&state=${this.props.modelData.state}`,
      {
        method: "POST",
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((task) => {
        // console.log(task);
        console.log(task);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        this.props.setRefresh(!this.props.refresh);
      });

    this.props.modelClose();
  };

   create = () => {
    fetch(
      ` https://trackappt.desss-portfolio.com/dynamic/dynamicapi.php?action=create&table=crud_table&name=${this.props.modelData.name}&email=${this.props.modelData.email}&password=${this.props.modelData.password}&dob=${this.props.modelData.dob}&gender=${this.props.modelData.gender}&language=${this.props.modelData.language}&state=${this.props.modelData.state}`,
      {
        method: "POST", // or PATCH
        // headers: { "content-type": "application/json" },
        // body: JSON.stringify(props.modelData)
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((task) => {
        // console.log(task);
        console.log(task);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        // props.setRefresh(!props.refresh);
      });
    this.props.modelClose();
  };

    render(){
        console.log(this.props);
        return(
            <>
            {/* <Button variant="primary" onClick={handleShow}>
              Launch demo modal
            </Button> */}
      
            <Modal
              show={this.props.modelShow}
              onHide={this.props.modelClose}
              size="lg"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title className="fs-2"> Edit Data ✍ </Modal.Title>
              </Modal.Header>
      
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="fw-bold">First Name</Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={this.props.modelData ? this.props.modelData.name : false}
                      onChange={(e) =>
                        this.props.setModelData({
                          ...this.props.modelData,
                          name: e.target.value,
                        })
                      }
                      placeholder="Enter your name..."
                      autoFocus
                    />
                  </Form.Group>
      
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="fw-bold">EmailId</Form.Label>
                    <Form.Control
                      type="email"
                      defaultValue={this.props.modelData ? this.props.modelData.email : false}
                      onChange={(e) =>
                        this.props.setModelData({
                          ...this.props.modelData,
                          email: e.target.value,
                        })
                      }
                      placeholder="Enter your Email..."
                    />
                  </Form.Group>
      
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="fw-bold">Password</Form.Label>
                    <Form.Control
                      type="password"
                      defaultValue={
                        this.props.modelData ? this.props.modelData.password : false
                      }
                      onChange={(e) =>
                    this.props.setModelData({
                          ...this.props.modelData,
                          password: e.target.value,
                        })
                      }
                      placeholder="Enter your password..."
                    />
                  </Form.Group>
      
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="fw-bold">Date Of Birth</Form.Label>
                    <Form.Control
                      type="date"
                      defaultValue={this.props.modelData ? this.props.modelData.dob : false}
                      onChange={(e) =>
                        this.props.setModelData({
                          ...this.props.modelData,
                          dob: e.target.value,
                        })
                      }
                      placeholder="Enter your Date Of Birth..."
                    />
                  </Form.Group>
      
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="fw-bold">Gender</Form.Label>
                    <Form.Control
                      defaultValue={this.props.modelData ? this.props.modelData.gender : false}
                      onChange={(e) =>
                        this.props.setModelData({
                          ...this.props.modelData,
                          gender: e.target.value,
                        })
                      }
                      type="text"
                      placeholder="Enter your Gender..."
                    />
                  </Form.Group>
      
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="fw-bold">Language</Form.Label>
                    <Form.Control
                      defaultValue={
                        this.props.modelData ? this.props.modelData.language : false
                      }
                      onChange={(e) =>
                        this.props.setModelData({
                          ...this.props.modelData,
                          language: e.target.value,
                        })
                      }
                      type="text"
                      placeholder="Enter your Language..."
                    />
                  </Form.Group>
      
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="fw-bold">State</Form.Label>
                    <Form.Control
                      defaultValue={this.props.modelData ? this.props.modelData.state : false}
                      onChange={(e) =>
                        this.props.setModelData({
                          ...this.props.modelData,
                          state: e.target.value,
                        })
                      }
                      type="text"
                      placeholder="Enter your State..."
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
      
              <Modal.Footer>
                <Button variant="danger" onClick={this.props.modelClose}>
                  Close
                </Button>
                {this.props.modelData.id === "" ? (
                  <Button variant="warning" onClick={()=>this.create()}>
                    Insert Data
                  </Button>
                ) : (
                  <Button variant="warning" onClick={()=>this.update()}>
                    Save Changes
                  </Button>
                )}
              </Modal.Footer>
            </Modal>

          </>
        )
    }
}
export default Model