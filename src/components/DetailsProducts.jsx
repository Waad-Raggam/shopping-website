import MainLayout from "../layouts/MainLayout";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const DetailsProducts = () =>{

    const data = useLocation()

    const dispatch = useDispatch()

    // const itemID = data.state.id;
    const [itemName, setItemName ] = useState("")
    const [itemPrice, setItemPrice ] = useState("")
    const [itemImage, setItemImage ] = useState("")

    useEffect(()=>(
        setItemName(data.state.name),
        setItemPrice(data.state.price),
        setItemImage(data.state.img)
    ))

    return(
        <>
        <MainLayout>
        <div className="container">
            <div className="row d-flex justify-content-center mt-5">
                <div className="col">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <img src={itemImage} height={150}></img>
                                        </div>
                                        <div className="col">
                                            <div className="card">
                                                <div className="card-body">
                                                    {itemName} : اسم المنتج
                                                    <br/>
                                                    {itemPrice} : السعر
                                                    <br/>
                                                    <button onClick={()=>dispatch({type:'INCREMENT'})}>أضف الى السلة</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </MainLayout>
        
        </>
    )
}

export default DetailsProducts;