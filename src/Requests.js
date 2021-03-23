import React, { Component, useState } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Table from 'react-bootstrap/Table';
import Fetch from './components/Fetch';

let userIdGiven = "";
let idGiven = "";
let titleGiven = "";
let bodyGiven = "";
let methodGiven = "";


class Requests extends Component {

    state = {
        isGetAll: false,
        isGet: false,
        isPut: false,
        isPost: false,
        isPatch: false,
        isDelete: false,
        // method: '',
        userId: '',
        id: '',
        title: '',
        body: '',
        visible: false,
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        // <Fetch   method= {this.state.method}
        // userId= {this.state.userId}
        // id= {this.state.id}
        // title= {this.state.title}
        // body= {this.state.body} />
        // console.log(methodGiven);
        // console.log(idGiven);
        // console.log(titleGiven);
        // console.log(bodyGiven);
        // console.log(userIdGiven);

        if (methodGiven === 'GET') {
            fetch(`https://jsonplaceholder.typicode.com/posts/${idGiven}`)
                .then((response) => response.json())
                .then((json) => {
                    console.log(json.body);
                    this.setState({
                        visible: true,
                        body: json.body,
                        title: json.title,
                        userId: json.userId,
                        id: json.id
                    });
                    console.log(this.state.visible);
                }
                );
        }
        else if (methodGiven === 'POST') {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: titleGiven,
                    body: bodyGiven,
                    userId: userIdGiven,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => {
                    console.log(json.body);
                    this.setState({
                        visible: true,
                        body: json.body,
                        title: json.title,
                        userId: json.userId,
                        id: json.id
                    });
                    console.log(this.state.visible);
                });
        }
        else if (methodGiven === 'PUT') {
            fetch(`https://jsonplaceholder.typicode.com/posts/${idGiven}`, {
                method: 'PUT',
                body: JSON.stringify({
                    id: idGiven,
                    title: titleGiven,
                    body: bodyGiven,
                    userId: userIdGiven,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => {
                    console.log(json.body);
                    this.setState({
                        visible: true,
                        body: json.body,
                        title: json.title,
                        userId: json.userId,
                        id: json.id
                    });
                    console.log(this.state.visible);
                });

        }
        else if (methodGiven === 'PATCH') {
            fetch(`https://jsonplaceholder.typicode.com/posts/${idGiven}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    title: titleGiven,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => {
                    console.log(json.body);
                    this.setState({
                        visible: true,
                        body: json.body,
                        title: json.title,
                        userId: json.userId,
                        id: json.id
                    });
                    console.log(this.state.visible);
                });
        }
        else {
            fetch(`https://jsonplaceholder.typicode.com/posts/${idGiven}`, {
                method: 'DELETE',
            });
            this.setState({
                visible: true,
                body: "Delete Succesful",
                title: "",
                userId: "",
                id: ""
            });
        }
    };

    onRequestChange = (e) => {
        const request = e.target.value;
        if (request === 'GETALL') {
            methodGiven = request;
            this.setState({
                isGetAll: true,
                isGet: false,
                isPut: false,
                isPost: false,
                isPatch: false,
                isDelete: false
            });
            console.log(methodGiven);
        }
        else if (request === 'GET') {
            methodGiven = request;
            this.setState({
                isGet: true,
                isGetAll: false,
                isPut: false,
                isPost: false,
                isPatch: false,
                isDelete: false
            });
            console.log(methodGiven);
        }
        else if (request === 'POST') {
            methodGiven = request;
            this.setState({
                isPost: true,
                isGetAll: false,
                isGet: false,
                isPut: false,
                isPatch: false,
                isDelete: false
            });
            console.log(methodGiven);
        }
        else if (request === 'PUT') {
            methodGiven = request;
            this.setState({
                isPut: true,
                isGetAll: false,
                isGet: false,
                isPost: false,
                isPatch: false,
                isDelete: false
            });
            console.log(methodGiven);
        }
        else if (request === 'PATCH') {
            methodGiven = request;
            this.setState({
                isPatch: true,
                isGetAll: false,
                isGet: false,
                isPut: false,
                isPost: false,
                isDelete: false
            });
            console.log(methodGiven);
        }
        else {
            methodGiven = "DELETE";
            this.setState({
                isDelete: true,
                isGetAll: false,
                isGet: false,
                isPut: false,
                isPost: false,
                isPatch: false
            });
            console.log(methodGiven);
        }
    };
    onUserIdChange = (e) => {
        userIdGiven = e.target.value;
        console.log(userIdGiven);
    };
    onIdChange = (e) => {
        idGiven = e.target.value;
        console.log(idGiven);
    };
    onTitleChange = (e) => {
        titleGiven = e.target.value;
        console.log(titleGiven);
    };
    onBodyChange = (e) => {
        bodyGiven = e.target.value;
        console.log(bodyGiven);
    };

    render() {
        return (
            <div>
                < Form onSubmit={this.onFormSubmit} >
                    <FormGroup>
                        <Label for="exampleSelect" sm={2}>Select Your Request</Label>
                        <Col sm={10}>
                            <Input type="select" name="request" id="exampleSelect" onChange={this.onRequestChange} >
                                <option>SELECT</option>
                                <option>GET</option>
                                <option>POST</option>
                                <option>DELETE</option>
                                <option>PUT</option>
                                <option>PATCH</option>
                            </Input>
                        </Col>
                    </FormGroup>

                    <div>{this.state.isGet ?
                        <div>
                            <FormGroup>
                                <Label for="exampleText" sm={2}>Id</Label>
                                <Col sm={10}>
                                    <Input type="text" name="userId" id="exampleText" onChange={this.onIdChange} />
                                </Col>
                            </FormGroup>
                        </div>
                        : null}
                    </div>

                    <div>{this.state.isPost ?
                        <div>
                            <FormGroup>
                                <Label for="exampleText" sm={2}>User Id</Label>
                                <Col sm={10}>
                                    <Input type="text" name="userId" id="exampleText" onChange={this.onUserIdChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleText" sm={2}>Label to change</Label>
                                <Col sm={10}>
                                    <Input type="text" name="title" id="exampleText" onChange={this.onTitleChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleText" sm={2}>New Content</Label>
                                <Col sm={10}>
                                    <Input type="text" name="body" id="exampleText" onChange={this.onBodyChange} />
                                </Col>
                            </FormGroup>

                        </div>
                        : null}
                    </div>

                    <div>{this.state.isPut ?
                        <div>
                            <FormGroup>
                                <Label for="exampleText" sm={2}>User Id</Label>
                                <Col sm={10}>
                                    <Input type="text" name="userId" id="exampleText" onChange={this.onUserIdChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleText" sm={2}>Id to chaange</Label>
                                <Col sm={10}>
                                    <Input type="text" name="id" id="exampleText" onChange={this.onIdChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleText" sm={2}>Label to change</Label>
                                <Col sm={10}>
                                    <Input type="text" name="title" id="exampleText" onChange={this.onTitleChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleText" sm={2}>New Content</Label>
                                <Col sm={10}>
                                    <Input type="text" name="body" id="exampleText" onChange={this.onBodyChange} />
                                </Col>
                            </FormGroup>

                        </div>
                        : null}
                    </div>

                    <div>{this.state.isPatch ?
                        <div>
                            <FormGroup>
                                <Label for="exampleText" sm={2}>User Id</Label>
                                <Col sm={10}>
                                    <Input type="text" name="userId" id="exampleText" onChange={this.onUserIdChange} />
                                </Col>
                            </FormGroup>
                            {/* <FormGroup>
                                <Label for="exampleText" sm={2}>Id to change</Label>
                                <Col sm={10}>
                                    <Input type="text" name="id" id="exampleText" onChange={this.onIdChange} />
                                </Col>
                            </FormGroup> */}
                            <FormGroup>
                                <Label for="exampleText" sm={2}>Label to change</Label>
                                <Col sm={10}>
                                    <Input type="text" name="title" id="exampleText" onChange={this.onTitleChange} />
                                </Col>
                            </FormGroup>
                            {/* <FormGroup>
                                <Label for="exampleText" sm={2}>New Content</Label>
                                <Col sm={10}>
                                    <Input type="text" name="body" id="exampleText" onChange={this.onBodyChange} />
                                </Col>
                            </FormGroup> */}

                        </div>
                        : null}
                    </div>

                    <div>{this.state.isDelete ?
                        <div>
                            {/* <FormGroup>
                                <Label for="exampleText" sm={2}>User Id</Label>
                                <Col sm={10}>
                                    <Input type="text" name="userId" id="exampleText" onChange={this.onUserIdChange} />
                                </Col>
                            </FormGroup> */}
                            <FormGroup>
                                <Label for="exampleText" sm={2}>Id to Delete</Label>
                                <Col sm={10}>
                                    <Input type="text" name="id" id="exampleText" onChange={this.onIdChange} />
                                </Col>
                            </FormGroup>

                        </div>
                        : null}
                    </div>

                    <Button type="submit">Submit</Button>
                </Form >

                {this.state.visible ?

                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>USER</th>
                                <th>ID</th>
                                <th>TITLE</th>
                                <th>BODY</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.userId}</td>
                                <td>{this.state.id}</td>
                                <td>{this.state.title}</td>
                                <td>{this.state.body}</td>
                            </tr>
                        </tbody>
                    </Table>

                    // <Card style={{ width: '18rem' }}>
                    //     <Card.Body>
                    //         <Card.Title>{this.state.title}</Card.Title>
                    //         <Card.Text>
                    //             {this.state.body}
                    //          </Card.Text>
                    //     </Card.Body>
                    // </Card>

                    // {/* <div><p>{this.state.userId}</p>
                    //     <p>{this.state.id}</p>
                    //     <p>{this.state.title}</p>
                    //     <p>{this.state.body}</p></div> */}

                    : null}
            </div>
        );
    }
}

export default Requests;