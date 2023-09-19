import React from "react";
import "./Home.scss";

import Reatings from "../../Components/Reatings/Reatings";



const number = 1424;
const universitet = 58;
const startni = 8;
const fakultet = 740;

const Home = () => {
  return (
    <div className="glavni">
      <div className="glavni_user">
        <b>Главное</b>
        <div className="adminuser_info">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5lr2uxXdbKkcJ0dGlev6nGlWlMMoy4pim5g&usqp=CAU" alt="" />
          <p>Nargiza Akhmedova</p>
        </div>
      </div>
      <Reatings student={number} universitet={universitet} startni={startni} fakultet={fakultet}/>

    </div>
  );
};

export default Home;
