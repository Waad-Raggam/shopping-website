import React from "react";

const MainLayouts = ({ children }) => {
    return (
        <>

            <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">

                <div class="container-fluid">

                    <button
                        data-mdb-collapse-init
                        class="navbar-toggler"
                        type="button"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i class="fas fa-bars"></i>
                    </button>

                    <div class="input-group rounded">
                        <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                        <span class="input-group-text border-0" id="search-addon">
                            <i class="fas fa-search"></i>
                        </span>
                    </div>

                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#">تسجيل حساب جديد</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">تسجيل الدخول</a>
                        </li>
                    </ul>

                    <div class="d-flex align-items-center">
                        <i class="bi bi-cart3"></i>
                    </div>

                </div>

            </nav>

            <main>
                {children}
            </main>
            <footer className="bg-body-tertiary text-center text-lg-start footer">
                <div className="text-center text-white p-3" style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', left: '0',
                    right: '0',
                }}>
                    here is my footer
                </div>
            </footer>

  
        </>
    );
};

export default MainLayouts;