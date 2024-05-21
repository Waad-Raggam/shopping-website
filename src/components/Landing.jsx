import MainLayout from "../layouts/MainLayout";
const Landing = () => {
    return (
        <>
        <MainLayout>
        <div className="container">
                <div className="row text-center d-flex justify-content-center-mt-5">
                    <div className="col-sm-4">
                        <div className="card" class="card1">
                            <div className="card-body">
                                <i className="bi bi-phone text-center">
                                    <h6 className="align-middle">smart phones</h6>
                                </i>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <i className="bi bi-phone text-center">
                                    <h6 className="align-middle">smart phones</h6>
                                </i>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <i className="bi bi-phone text-center">
                                    <h6 className="align-middle">smart phones</h6>
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