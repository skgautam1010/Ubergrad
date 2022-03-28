import React, { Component } from 'react'
import './Introduction.css'

class Introduction extends Component {
  render() {
    return (
    <div>
        <div className="row row-content bg-image backgroundstyling">
            <h1 className='col-12 main-header'>MASTERS IN <span className='design-text'>COMPUTER</span> SCIENCE IN US</h1>
            <p className='col-12 sub-header1'>Grow Your Skills to Advance<br></br> Your Career Path.</p>
        </div>
        <div className='row row-content'>
            <p className='col-12 second-main-header'>In<span className='text-design1'>troducti</span>on</p>
        <div className='col-12 paragraph'>
            <p className='col-12 second-content-1'>Computer Science is the study of processes to develop mathematical models that bridge human interaction
            with computers by writing <br></br>programs for software, application or a website. In this age of computers and technology and given the field's broad range
            and flexibility,<br></br> it has become one of the most preferred courses in the world. </p>
            <p className='col-12 second-content-2'>With Computer Science being the most popular course, Masters in Computer Science in USA is naturally 
            one of the preferred choices <br></br>for aspiring Indian students. The US is home to some of the top tech companies like Microsoft,IBM,Google,and many 
            others, and this <br></br>provides Computer Science graduates in the US with innumerable job options in this field.</p>
            <p className='col-12 second-content-3'>Here you will be finding all the details you will need to puruse your MS in Computer Science in the USA. </p>
        </div>
        </div>
    </div>
    )
  }
}

export default Introduction;