// import { useEffect } from "react";
// import "./index.css";

// const OurTeam = () => {
//     useEffect(() => {
//         console.log("Component Mounted: Radio buttons are hidden but functional.");
//     }, []);

//     const handleSelection = (event) => {
//         console.log("Selected:", event.target.id);
//     };

//     return (
//         <div className="wrapper">
//             <h1 className="our-team-heading">“ One Place for All Your Beauty & Wellness Needs."</h1>
//             <div className="container">
//                 <input type="radio" name="slide" id="c1" defaultChecked onChange={handleSelection} />
//                 <label htmlFor="c1" className="card">
//                     <div className="row">
//                         <div className="icon">1</div>
//                         <div className="description">
//                             <h4>Salon</h4>
//                         </div>
//                     </div>
//                 </label>

//                 <input type="radio" name="slide" id="c2" onChange={handleSelection} />
//                 <label htmlFor="c2" className="card">
//                     <div className="row">
//                         <div className="icon">2</div>
//                         <div className="description">
//                             <h4>Spa</h4>
//                         </div>
//                     </div>
//                 </label>

//                 <input type="radio" name="slide" id="c3" onChange={handleSelection} />
//                 <label htmlFor="c3" className="card">
//                     <div className="row">
//                         <div className="icon">3</div>
//                         <div className="description">
//                             <h4>Clinic</h4>
//                         </div>
//                     </div>
//                 </label>
//             </div>
//         </div>
//     );
// };

// export default OurTeam;


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
            image: "https://cdn.pixabay.com/photo/2020/05/14/12/37/barber-5194406_1280.jpg"
        },
        {
            id: 2,
            title: "Spa",
            image: "https://img.freepik.com/free-photo/woman-getting-treatment-hairdresser-shop_23-2149230917.jpg?t=st=1739961334~exp=1739964934~hmac=7d3e09ae5a4ca8a390d0bcda8ce4c3692bcb0188277eef7ddaa910a60d92af3e&w=996"
        },
        {
            id: 3,
            title: "Clinic",
            image: "https://img.freepik.com/free-photo/portrait-smiling-owner-hairdresser-salon_329181-1953.jpg?ga=GA1.1.297041213.1730542032&semt=ais_hybrid"
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
