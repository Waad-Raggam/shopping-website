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
                                        <h6>أجدد الهواتف الذكية</h6>
                                    </i>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card" class="rounded card2">
                                <div className="card-body">
                                    <i className="bi bi-phone text-center">
                                        <h6>ملحقات الهواتف</h6>
                                    </i>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card" class="rounded card3">
                                <div className="card-body">
                                    <i className="bi bi-phone text-center">
                                        <h6>قسم الهواتف المستعملة</h6>
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <h4>أفضل الإختيارات لك</h4>
                {/* Carousel */}
                <div id="carouselExampleDark" class="carousel slide carousel-dark carousel-fade" data-bs-ride="carousel" >
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://m.media-amazon.com/images/I/71yc5A1EavL._AC_UY218_.jpg" class="m-block" height="100"></img>
                        </div>
                        <div class="carousel-item">
                            <img src="https://m.media-amazon.com/images/I/51mABhlKICL._AC_UY218_.jpg" class="m-block" height="100"></img>
                        </div>
                        <div class="carousel-item">
                            <img src="https://m.media-amazon.com/images/I/716dMJ9stNL._AC_UY218_.jpg " class="m-block" height="100"></img>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </MainLayout>
        </>
    );
}

export default Landing;