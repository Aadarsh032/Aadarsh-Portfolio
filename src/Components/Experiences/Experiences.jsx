import React from 'react'
import './Experiences.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
import experience_data from'../../assets/experiences_data'
import arrow_icon from '../../assets/arrow_icon.svg'



const Experiences = () => {
  return (
    <div className='experiences' id='Experiences'>
        
        <div className="experiences-title">
            <h1>Previous Experiences</h1>
            {/* <img src={theme_pattern} alt="" /> */}
        </div>
        <div className='experiences-container'>
        <hr className='experiences-container-line' />
        <div className='experiences-container-content'>
          {experience_data.map((experience,index)=>{
            return (<div key={index} className='experiences-format'>
                 <h1>{experience.company_name}</h1>
                 <h2>{experience.designation}</h2>
                 <p>{experience.date}</p>
                 {
                    experience.experience.map((achievements)=>{
                      return(
                        <>
                        <p>{achievements}</p>
                        <br/>
                        </>
                      )
                    })
                 }
            </div>)
          })}
          </div>
        </div>
        
    </div>
  )
}

export default Experiences