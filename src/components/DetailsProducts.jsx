import MainLayout from "../layouts/MainLayout";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const DetailsProducts = () => {

    const data = useLocation()

    const dispatch = useDispatch()

    // const itemID = data.state.id;
    const [itemName, setItemName] = useState("")
    const [itemPrice, setItemPrice] = useState("")
    const [itemImage, setItemImage] = useState("")

    useEffect(() => (
        setItemName(data.state.name),
        setItemPrice(data.state.price),
        setItemImage(data.state.img)
    ))

    const [itemCount, setItemCount] = useState(0);

    const itemIncrement = () => {
        setItemCount(prevCount => prevCount + 1);
    };

    const itemDecrement = () => {
        setItemCount(prevCount => prevCount - 1);
    };


    console.log("the state from details " + data.state.name);
    return (
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
                                                            <br />
                                                            {itemPrice} : السعر
                                                            <br />
                                                            <button onClick={() => {
                                                                itemIncrement();
                                                                dispatch({ type: 'INCREMENT' });
                                                            }}>+</button>
                                                            <span className="badge bg-body-secondary text-dark">   {itemCount}  </span>
                                                            <button onClick={() => {
                                                                itemDecrement();
                                                                dispatch({ type: 'DECREMENT' })
                                                            }}>-</button>
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