import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";
const ListPhone = () => {
    const Phone = [
        {
            id: 1,
            name: "Nothing Phone",
            price: 2500,
            img: "./phones/Nothing.png"
        }, {
            id: 2,
            name: "iPhone",
            price: 2500,
            img: "./phones/iPhone.png"
        }, {
            id: 3,
            name: "Huwaei",
            price: 2500,
            img: "./phones/Huawei.png"
        }
    ];
    return (
        <>
        <MainLayout>
        <div className="container">
            <div className="row">
                <div className="col-sm-8">{
                    Phone.map((item)=>(
                        <div className="card mt-3">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <img src={item.img} height={300}></img>
                                    </div>
                                    <div className="col-sm-9">
                                        <h1 className="alert alert-success">{item.name}</h1>
                                        <h1 className="badge bg-danger">{item.price}</h1>
                                        <div className="row">
                                            <div className="col">
                                                <button className="btn btn-primary">تفاصيل</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col"></div>
                                </div>
                            </div>
                        </div>
                    ))
                }</div>
            </div>
        </div>
        </MainLayout>
        </>
    );
}

export default ListPhone;
