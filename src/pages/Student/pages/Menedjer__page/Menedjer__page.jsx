import React from "react";

import "./Menedjer__page.css"

const Menedjer__page = () => {
  return(
      <div className="Menedjer__page">

        <p className="pmenedjer">
        Персональный менеджер
        </p>

        <div className="Menedjer__page2">
           <div className="nimadir">
              <div className="imgname">
               <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5lr2uxXdbKkcJ0dGlev6nGlWlMMoy4pim5g&usqp=CAU" alt="Picture" />
              </div>
          
              <div className="nameabout">
                <p className="m_name">Наргиза Ахмедова</p> 
                <p className="m_about"> Chief Recruiter, Education </p>
              </div>
            </div>
      

          <div className="Menedjer__page3">
            <p className="about">
             <span className="ism"> Наргиза Ахмедова </span> является ветераном в деле 
             рекруитинга и подбора университетов. Она вам все досколнально
             объяснит и всему научит. Наргиза Ахмедова является ветераном в 
             деле рекруитинга и подбора университетов. Она вам все досколнально 
             объяснит и всему научит. 
            </p>
          </div>
         <div  className="numberemail">
            <span className="number">
              Номер телефона: <p className="numbe">+998 (99) 607 - 74 - 40</p>
            </span>
            <span className="email">
              Email адрес: <p className="numbe">Nargiza.education@gmail.com</p>
            </span>
          </div>
         </div>
        </div>
     
)
} 

export default Menedjer__page