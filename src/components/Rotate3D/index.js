import "./index.css";

const Rotate3D = () => {
    return (

        <div className="banner">
            {/* <h1 data-content="ESTETICA" className="title">
                    ESTETICA
            </h1> */}
            <div className="model">
                <img src="/images/rotate-logo.png" alt="model" className="model-image"/>
            </div>
            <div className="slider" style={{ "--quantity": 10 }}>
                <div className="item" style={{"--position": 1}}><img src="https://cdn.pixabay.com/photo/2022/12/10/12/43/orange-7647073_1280.jfif" alt=""/></div>
                <div className="item" style={{"--position": 2}}><img src="/images/barber-5194406_1280.jpg" alt=""/></div>
                <div className="item" style={{"--position": 3}}><img src="https://cdn.pixabay.com/photo/2015/12/17/09/53/hair-1097115_1280.jpg" alt=""/></div>
                <div className="item" style={{"--position": 4}}><img src="https://cdn.pixabay.com/photo/2016/12/18/18/25/pedicure-1916495_1280.jpg" alt=""/></div>
                <div className="item" style={{"--position": 5}}><img src="https://img.freepik.com/free-photo/woman-relaxing-spa_329181-13152.jpg?t=st=1739942553~exp=1739946153~hmac=7ef6896224b57f6c7600e2fc7773c9f55c028eb122fdd6f36a9bc1b6ee8ab91a&w=996" alt=""/></div>
                <div className="item" style={{"--position": 6}}><img src="https://img.freepik.com/free-photo/young-woman-mask-face-relaxing-spa-salon_176420-7580.jpg?t=st=1739942601~exp=1739946201~hmac=77651bfba4e38887ba2a72fd3e176ee99b5e2b5a0bd20a66976c509631197372&w=996" alt=""/></div>
                <div className="item" style={{"--position": 7}}><img src="https://img.freepik.com/free-photo/medium-shot-man-helping-boy-with-lice_23-2149541821.jpg?t=st=1739942683~exp=1739946283~hmac=1b87da8c5ba41295918d950b28e1a90e4a55d96992079ba6484c5a592a74bcd4&w=996" alt=""/></div>
                <div className="item" style={{"--position": 8}}><img src="https://img.freepik.com/free-photo/attractive-young-woman-beauty-salon_197531-1288.jpg?t=st=1739942527~exp=1739946127~hmac=6a6e69780accccf164ebb1aa7be515ed979d5d18f17e392a128414f90d1d6fe0&w=996" alt=""/></div>
                <div className="item" style={{"--position": 9}}><img src="https://img.freepik.com/free-photo/make-up-artist-getting-model-ready-photoshootin_23-2149305131.jpg?t=st=1739942767~exp=1739946367~hmac=673c7f4314cf3c4d00ea1cc4798d6e9cb961c696bb6eb5012ef74264fdaaa618&w=996" alt=""/></div>
                <div className="item" style={{"--position": 10}}><img src="https://img.freepik.com/free-photo/woman-washing-head-hairsalon_1157-27179.jpg?t=st=1739942801~exp=1739946401~hmac=68d39b332d07236b7499d6177c27f6719a9be436c2baf1b239405862e164327b&w=996" alt=""/></div>
            </div>
            <div className="content">
                 <h1 data-content="ESTETICA">
                    ESTETICA
                </h1> 
                {/* <div className="model"></div> */}

                {/* <div className="author">
                    <p className="author_para">
                    Your all-in-one appointment and service booking app tailored for the beauty and wellness
                    </p>
                </div> */}
                {/* <div className="model"></div> */}
            </div>
        </div>

        // <div className="banner">
        //     <div className="slider">
        //         <div className="item">
        //             <img
        //                 src="https://cdn.pixabay.com/photo/2022/12/10/12/43/orange-7647073_1280.jfif"
        //                 alt="image1"
        //             />
        //             <img
        //                 src="https://img.freepik.com/free-photo/woman-washing-head-hairsalon_1157-27179.jpg?t=st=1739942801~exp=1739946401~hmac=68d39b332d07236b7499d6177c27f6719a9be436c2baf1b239405862e164327b&w=996"
        //                 alt="image2"
        //             />
        //             <img
        //                 src="https://img.freepik.com/free-photo/make-up-artist-getting-model-ready-photoshootin_23-2149305131.jpg?t=st=1739942767~exp=1739946367~hmac=673c7f4314cf3c4d00ea1cc4798d6e9cb961c696bb6eb5012ef74264fdaaa618&w=996"
        //                 alt="image3"
        //             />
        //             <img
        //                 src="https://img.freepik.com/free-photo/woman-relaxing-spa_329181-13152.jpg?t=st=1739942553~exp=1739946153~hmac=7ef6896224b57f6c7600e2fc7773c9f55c028eb122fdd6f36a9bc1b6ee8ab91a&w=996"
        //                 alt="image4"
        //             />
        //             <img
        //                 src="../../../public/images/barber-5194406_1280.jpg"
        //                 alt="image5"
        //             />
        //             <img
        //                 src="https://cdn.pixabay.com/photo/2015/12/17/09/53/hair-1097115_1280.jpg"
        //                 alt="image6"
        //             />
        //             <img
        //                 src="https://cdn.pixabay.com/photo/2016/12/18/18/25/pedicure-1916495_1280.jpg"
        //                 alt="image7"
        //             />
        //             <img
        //                 src="https://img.freepik.com/free-photo/attractive-young-woman-beauty-salon_197531-1288.jpg?t=st=1739942527~exp=1739946127~hmac=6a6e69780accccf164ebb1aa7be515ed979d5d18f17e392a128414f90d1d6fe0&w=996"
        //                 alt="image8"
        //             />
        //         </div>
        //     </div>
        // </div>
    );
}

export default Rotate3D;
