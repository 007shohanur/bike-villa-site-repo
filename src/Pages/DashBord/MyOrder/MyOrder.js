import React, {useState,useEffect} from 'react';
import { Container, Row } from 'react-bootstrap';

import useAuth from '../../../Hooks/useAuth';



const MyOrder = () => {

    const {user} = useAuth()

    const [allOrders,setAllOrders] = useState([])

    useEffect(()=> {
        fetch(`https://vast-tor-10730.herokuapp.com/order/${user?.email}`)
        .then(res => res.json())
        .then(data => setAllOrders(data))
    },[user?.email])


    const deleteBtn = id => {
        const confirm = window.confirm('Are you sure to cancel this order? Think again...')
        if (confirm) {
            fetch(`https://vast-tor-10730.herokuapp.com/order/${id}`,{
            method:'DELETE'
        }).then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                alert('Successfully removed item')
                const newOrders = allOrders.filter(order => order._id !== id)
                setAllOrders(newOrders)
            }
        })
        }
    }


    return (
        <Container>
            <Row xs={1} md={2} className="g-4 py-5">
                {
                    allOrders.map(order => <div key={order._id}>
                        <div className="d-flex justify-content-around p-2">
                            <div className="mx-2">
                                <h5>{order?.productName}</h5>
                                <h5>${order?.price}</h5>
                            </div>
                            <div>
                                <button btn-success onClick={()=>deleteBtn(order?._id)} className="fs-3 bg-success ">Delete</button>
                            </div>
                        </div>
                    </div>)
                }
                </Row>
        </Container>
    );
};

export default MyOrder;