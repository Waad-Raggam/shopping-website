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
                <section>
                <div id="carouselExampleDark" class="carousel slide carousel-dark carousel-fade" data-bs-ride="carousel" >
                    <div class="carousel-inner">
                        <div class="carousel-item active" dir="rtl">
                            <img src="https://m.media-amazon.com/images/I/71yc5A1EavL._AC_UY218_.jpg" class="m-block" height="100"></img>
                            <span className="badge bg-body-secondary text-dark">   سامسونج جوال جالكسي S24+  </span>
                        </div>
                        <div class="carousel-item" dir="rtl">
                            <img src="https://m.media-amazon.com/images/I/51mABhlKICL._AC_UY218_.jpg" class="m-block" height="100"></img>
                            <span className="badge bg-body-secondary text-dark"> جوجل هاتف ذكي بيكسل 6 </span>
                        </div>
                        <div class="carousel-item" dir="rtl">
                            <img src="https://m.media-amazon.com/images/I/716dMJ9stNL._AC_UY218_.jpg " class="m-block" height="100"></img>
                            <span className="badge bg-body-secondary text-dark"> سامسونج جوال جالكسي S23 FE بالذكاء الاصطناعي </span>
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
                </section>
                {/* About us */}
                <section class="py-5">
                    <div class="container">
                        <div class="row  gx-4 text-end">
                            
                            <div class="col-md-6 ">
                                <div class="ms-md-2 ms-lg-5">
                                    <span class="text-muted"> أهلا بكم في متجرنا الإليكتروني</span>
                                    <h2 class="display-5 fw-bold"> من نحن </h2>
                                    <p class="lead"> شركة رائدة في مجال التجارة الإليكترونية نعتز بعملائنا وبثقتهم بنا .</p>
                                    
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="ms-md-2 ms-lg-5">
                                    <img class="img-fluid rounded-3" src="https://freefrontend.dev/assets/square.png" /></div>
                            </div>
                        </div>
                    </div>
                </section>
            </MainLayout>
        </>
    );
}

export default Landing;