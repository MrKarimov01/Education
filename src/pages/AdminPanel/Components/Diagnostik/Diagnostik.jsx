

const Diagnostik =()=>{


    return(
        <div className="Diagnostik">
            <div className="filter_dia">
                <p>Динамика роста или спада</p>
                <select >
                    <option value="Показатьвсе" selected>Показать все</option>
                    <option value="Студенты">Студенты</option>
                    <option value="Университеты">Университеты</option>
                    <option value="Страны">Страны</option>
                    <option value="Факультеты">Факультеты</option>
                </select>
                
            </div>
            <Diagnostik_chart/>
        </div>
    )
}

export default Diagnostik