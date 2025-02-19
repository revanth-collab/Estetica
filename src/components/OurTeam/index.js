import "./index.css"

const OurTeam = () => {

    return (
        <div className="wrapper">
            <h1>“ One Place for All Your Beauty & Wellness Needs."</h1>
            <div className="container">
                <input type="radio" name="slide" id="c1" defaultChecked />
                <label htmlFor="c1" className="card">
                    <div className="row">
                        <div className="icon">1</div>
                        <div className="description">
                            <h4>Salon</h4>
                            {/* <p>Who has been Working As Operation Manager -
                            creative activities</p> */}
                        </div>
                    </div>
                </label>
                <input type="radio" name="slide" id="c2" />
                <label htmlFor="c2" className="card">
                    <div className="row">
                        <div className="icon">2</div>
                        <div className="description">
                            <h4>Spa</h4>
                            {/* <p>Sales Executive -
                            stay tuned for Oppurtunity</p> */}
                        </div>
                    </div>
                </label>
                <input type="radio" name="slide" id="c3" />
                <label htmlFor="c3" className="card">
                    <div className="row">
                        <div className="icon">3</div>
                        <div className="description">
                            <h4>Clinic</h4>
                            {/* <p>Human Resource - Help people all over the Company</p> */}
                        </div>
                    </div>
                </label>
            </div>
        </div>
    )
}

export default OurTeam;