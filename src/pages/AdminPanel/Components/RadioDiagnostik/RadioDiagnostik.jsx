import React from 'react'
import "./RadioDiagnostik.scss"
import { RadioChart } from '../Radiochart/Radiochart'
import { AreaChart } from 'recharts';


export const chart1 = {
  labels:false,
  datasets: [
    {
      label: '# of Votes',
      data: [500, 450,],
      backgroundColor: [
        '#4897D1',
        '#EF476F',
        
     
      ],
      borderColor: [
        '#4897D1',
        '#EF476F',
      
      ],
      borderWidth: 1,
    },
  ],
};
export const chart2 = {
  labels:false,
  datasets: [
    {
      label: '# of Votes',
      data: [450, 500,500],
      backgroundColor: [
        '#4897D1',
        '#C6E4FB',
        '#EF476F',
        
     
      ],
      borderColor: [
        '#4897D1',
        '#C6E4FB',
        '#EF476F',
      
      ],
      borderWidth: 1,
    },
  ],
};



const RadioDiagnostik=()=> {
  return (
    <div className='RadioDiagnostik'>
        <div className="radiopart1">
          <div className="name_andchart">
              <p className='namechart'>Студенты по полу</p>
              <RadioChart chart1={chart1}/>
              <p className='chartnum'>1440</p>
          </div>
          <div className="chart_people">
              <div className="part">
                <div className="box"></div>
                <p>Мужчины</p>
                <p>450</p>
              </div>
              <div className="part">
                <div className="box"></div>
                <p>Женщина</p>
                <p>450</p>
              </div>
          </div>
        </div>
        <div className="radiopart1">
          <div className="name_andchart">
              <p className='namechart'>Студенты по полу</p>
              <RadioChart chart1={chart2}/>
              <p className='chartnum'>3</p>
          </div>
          <div className="chart_people">
              <div className="part3">
                <div className="box"></div>
                <p>Русский</p>
                <p>450</p>
              </div>
              <div className="part">
                <div className="box"></div>
                <p>Турецкий</p>
                <p>450</p>
              </div>
              <div className="part1">
                <div className="box"></div>
                <p>Узбекский</p>
                <p>450</p>
              </div>
          </div>
        </div>
        <div className="radiopart2">
            <AreaChart/>
        </div>
    </div>
  )
}

export default RadioDiagnostik