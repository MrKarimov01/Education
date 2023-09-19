import React from "react";
import "./Reatings.scss"

const Reatings = ({student,universitet,startni,fakultet})=>{


    return(
        <div className="Reatings">
            <div className="Reatings_card">
                <p>Студенты</p>
                <p>{student}</p>
            </div>
            <div className="Reatings_card">
                <p>Университеты</p>
                <p>{universitet}</p>
            </div>
            <div className="Reatings_card">
                <p>Страны</p>
                <p>{startni}</p>
            </div>
            <div className="Reatings_card">
                <p>Факультеты</p>
                <p>{fakultet}</p>
            </div>
        </div>
    )
}
export default Reatings