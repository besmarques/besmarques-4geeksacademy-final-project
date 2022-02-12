import React from "react"

const HeroScene = () => {
    return(
        <>
            <div class="container col-xxl-8 px-4 py-5">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div class="col-10 col-sm-8 col-lg-6">
                        <img src="bootstrap-themes.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div class="col-lg-6">
                        <h1 class="display-5 fw-bold lh-1 mb-3 hero-h1">Dont waste time</h1>
                        <h2 className="hero-h2">Find the perfect <span className="hero-span">route</span> to all the <span className="hero-span">places</span> you want to <span className="hero-span">visit</span></h2>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 mt-5">Register now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroScene