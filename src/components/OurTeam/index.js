import { useEffect } from "react";
import "./index.css";

const OurTeam = () => {
    useEffect(() => {
        const inputs = document.querySelectorAll('input[type="radio"]');

        const handleSelection = (event) => {
            console.log(`Selected: ${event.target.id}`);
        };

        inputs.forEach((input) => {
            input.addEventListener("change", handleSelection);
        });

        // Cleanup event listeners when the component unmounts
        return () => {
            inputs.forEach((input) => {
                input.removeEventListener("change", handleSelection);
            });
        };
    }, []); // Empty dependency array means it runs only once after mount

    return (
        <div className="wrapper">
            <h1 className="our-team-heading">“ One Place for All Your Beauty & Wellness Needs."</h1>
            <div className="container">
                <input type="radio" name="slide" id="c1" defaultChecked />
                <label htmlFor="c1" className="card">
                    <div className="row">
                        <div className="icon">1</div>
                        <div className="description">
                            <h4>Salon</h4>
                        </div>
                    </div>
                </label>

                <input type="radio" name="slide" id="c2" />
                <label htmlFor="c2" className="card">
                    <div className="row">
                        <div className="icon">2</div>
                        <div className="description">
                            <h4>Spa</h4>
                        </div>
                    </div>
                </label>

                <input type="radio" name="slide" id="c3" />
                <label htmlFor="c3" className="card">
                    <div className="row">
                        <div className="icon">3</div>
                        <div className="description">
                            <h4>Clinic</h4>
                        </div>
                    </div>
                </label>
            </div>
        </div>
    );
};

export default OurTeam;
