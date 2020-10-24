import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Loader from 'react-loader-spinner';
import User from './User';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../../layouts/NavBar';



const Users = () => {
    const [loading,setLoading] =  useState(true)
    const [users,setUsers] = useState([])

    const sortByFirstName = () =>{
        let sortedUsers = [...users].sort((a,b)=>a.first_name > b.first_name ?1:-1)
        setUsers(sortedUsers)
    }
    const sortByLastName = () =>{
        let sortedUsers = [...users].sort((a,b)=>a.last_name > b.last_name ?1:-1)
        setUsers(sortedUsers)
    }
    useEffect(()=>{
        Axios.get("https://reqres.in/api/users?delay=3").then(response=>{
            if (response.status===200){
                setUsers(response.data.data)
                setLoading(false)
            }
        })
    },[])
    return(
        <>
            <NavBar sortByFirstName={sortByFirstName} sortByLastName={sortByLastName}/>
            <Container fluid>
                {/* <Row>
                    <Col className="sorthead float-right">
                        <Button className="float-right" onClick={sortByFirstName}>First Name </Button> 
                        {" "}
                        <Button onClick={sortByLastName}>Last Name </Button>
                    </Col>
                </Row> */}
                <Row className="bg-white pl-4 pr-4">
                    { loading ?
                        <>
                            <Container>
                                <Row>
                                    <h2>Loading</h2>
                                </Row>
                                <Row>
                                    <Loader
                                    type="Puff"
                                    color="#00BFFF"
                                    width={"50%"}
                                    height={"50%"}
                                    style={{"margin" : "auto"}}
                                    />
                                </Row>
                            </Container>
                        </>
                        :
                        <>
                            <Row>
                                { users.map(user=>
                                    <Col md="4" className="content-body">
                                        <User user={user} key={user.id}/>
                                    </Col>
                                )}
                            </Row>
                        </>
                    }
                </Row>
            </Container>
        </>
    )
}
export default Users