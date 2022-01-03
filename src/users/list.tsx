import { Col, Row, Spin } from 'antd';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const List = () => {
    let [users, setUsers] = useState([]);
    let [loading, setLoading] = useState(false);

    useEffect(() => {
        const getUsers = async () => {
            setLoading(true);
            fetch('https://fakestoreapi.com/users')
                .then(res => res.json())
                .then(json => {
                    setUsers(json);
                    setLoading(false);
                })
        }
        getUsers();
    }, []);

    return (
        <div>
            {
                loading ? <Spin spinning={loading} /> :
                    users.map((user: any) => {
                        return (
                            <Row key={user.id}>
                                <Col span={2}>{user.id}</Col>
                                <Col span={4}>{user.name.firstname + " " + user.name.lastname}</Col>
                                <Col span={6}> {user.phone}</Col>
                                <Col span={6}>{user.username}</Col>
                                <Col span={6}>
                                    <Link to={`/users/${user.id}?name=${user.username}`}>View</Link>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </Col>
                            </Row>
                        )
                    }
                    )
            }
        </div>
    )
}

export default List
