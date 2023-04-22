import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom';


export default function BuyerVerifyEmail() {

    const params = useParams();

    axios.get(`http://localhost:7000/buyers/verify/${params.id}`)
        .then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        });

    return (
        <div>Email is verified</div>
    )
}