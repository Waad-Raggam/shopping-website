import MainLayout from "../layouts/MainLayout";
const Landing = () => {
    return (
        <>
        <MainLayout>
        <div className="container mt-5">
                <div className="row text-center d-flex justify-content-center-mt-5">
                    <div className="col-sm-4">
                        <div className="card" class="rounded card1">
                            <div className="card-body">
                                <i className="bi bi-phone text-center">
                                    <h6 className="align-middle">الهواتف الذكية</h6>
                                </i>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card" class="rounded card2">
                            <div className="card-body">
                                <i className="bi bi-phone text-center">
                                    <h6 className="align-middle">قسم الأدوات المنزلية</h6>
                                </i>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card" class="rounded card3">
                            <div className="card-body">
                                <i className="bi bi-phone text-center">
                                    <h6 className="align-middle">قسم المفروشات</h6>
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
        </>
    );
}

export default Landing;