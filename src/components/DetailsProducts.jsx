import MainLayout from "../layouts/MainLayout";
import { useLocation } from "react-router-dom";
const DetailsProducts = () =>{
    const location = useLocation()
    const itemID = location.state.id;
    const itemName = location.state.name;
    const itemPrice = location.state.price;
    const itemImage = location.state.img;
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
                                                    <button>أضف الى السلة</button>
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