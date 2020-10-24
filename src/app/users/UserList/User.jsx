import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function User({user}){
    return(
        <>
            <Card as={Link} to={`/user/${user.id}`}>
                <Card.Img src={user.avatar} variant="top" />
                <Card.Body>
                    <Card.Title>{user.first_name} {user.last_name}</Card.Title>
                </Card.Body>
            </Card>
        </>
    )
}