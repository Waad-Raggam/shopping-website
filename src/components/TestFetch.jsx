import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import axios from "axios";

const TestFetch = () => {
    const[data, setData] = useState([])

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(response=>setData(data))
        .catch(error=>console.error(error));
        // .then(data=>setData(data));
    }, []); 

    return(
        <>
        <MainLayout>
        <div className="container">
        {
            data.map(post=>(
                <div className="container">
                    <div className="row d-flex justify-content-center">
                    <div className="col ">
                        <div className="card">
                            <div className="card-body border-1">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <img src={post.image} height={100}></img>
                                    </div>
                                    <div className="col-sm-4">
                                        <ul class="list-group list-group-flush ">
                                            <li class="list-group-item">
                                                {post.title}
                                            </li>
                                            <li class="list-group-item">
                                                {post.price}
                                            </li>
                                            <li class="list-group-item">
                                                {post.description}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div> 
                
            ))
        }
        </div>
        </MainLayout>
       
       
        </>
    );
}

export default TestFetch;