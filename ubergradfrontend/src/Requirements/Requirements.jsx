import React from 'react'
import './Requirements.css'

class Requirements extends React.Component {

  constructor(props){
    super(props)
    this.state={
        requirements:[],
    }
  }

  componentDidMount(){
    fetch("https://ubergradbackend.herokuapp.com/requirementsview")
    .then((response)=>response.json())
    .then((data)=>this.setState({requirements:data}))
    }
  render() {
    return (
    <div className='row row-content m-4'>
        <p className='col-12 main-header2'>Req<span className='text-design3'>uireme</span>nts</p>
        <div className='row contents'>
          <div className='content-title col-md-2'>
          {this.state.requirements.map((requirements)=>(
                    <button className="btn btn-block button-name-head-design" key={requirements.id}>{requirements.title} </button>
                    ))}
          </div>
          <div className='content-body col-md-10'>
          {this.state.requirements.map((requirements)=>(
                    <button className="btn btn-block button-name-content-design" key={requirements.id}>{requirements.body} </button>
                    ))}
          </div>
        </div>
    </div>
    )
  }
}


export default Requirements;