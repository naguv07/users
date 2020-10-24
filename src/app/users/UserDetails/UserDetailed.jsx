import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  Image, Media, Navbar, Row } from 'react-bootstrap';
import NavBar from '../../layouts/NavBar';

const UserDetailed = ({match}) =>{
    const [user,setUser] = useState([])

    useEffect(()=>{
        Axios.get(`https://reqres.in/api/users/${match.params.userid}`).then(response=>{
            if (response.status===200){
                setUser(response.data.data)
            }
        })
    },[])
    return(
        <>
            <Row>
                <NavBar/>
            </Row>
            <Row className="bg-white p-2">
                <Image src={user.avatar} width="100%" height="500px"/>
                <Media style={{"width" : "100%"}}>
                    <Media.Body className="p-2">
                        <h3>{user.first_name} {user.last_name} </h3>
                        <h4>Email : <b>{user.email}</b></h4>
                    </Media.Body>
                </Media>
            </Row>
        </>
    )
}
export default UserDetailed