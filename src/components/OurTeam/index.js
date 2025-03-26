import { useState } from "react";
import "./index.css";

const OurTeam = () => {
    const [selectedCard, setSelectedCard] = useState(1); // Default to first card

    const handleSelection = (index) => {
        console.log("Selected Card:", index);
        setSelectedCard(index);
    };

    const cards = [
        {
            id: 1,
            title: "Salon",
            image: "/images/AllImages/our-team-1.avif"
        },
        {
            id: 2,
            title: "Spa",
            image: "/images/AllImages/our-team-22.jpg"
        },
        {
            id: 3,
            title: "Clinic",
            image: "/images/AllImages/our-team-33.jpg"
        }
    ];

    return (
        <div className="wrapper">
            <h1 className="our-team-heading">“ One Place for All Your Beauty & Wellness Needs."</h1>
            <div className="container">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className={`card ${selectedCard === card.id ? "active" : ""}`}
                        onClick={() => handleSelection(card.id)}
                        style={{ backgroundImage: `url(${card.image})` }}
                    >
                        <div className="row">
                            <div className="icon">{card.id}</div>
                            <div className="description">
                                <h4>{card.title}</h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurTeam;
