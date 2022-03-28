import React from 'react'
import './Specialization.css';

class Specialization extends React.Component {
  
    constructor(props){
        super(props)
        this.state={
            categories:[]
        }
    }

    componentDidMount(){
        fetch("https://ubergradbackend.herokuapp.com/specializeview")
        .then((response)=>response.json())
        .then((data)=>this.setState({categories:data}))
    }
  
    render() {
    return (
        <div className="button-box col-12">
            <p className='col-12 main-header1'>Popular<span className='text-design2'> Special</span>izations</p>
            <p className='col-12 sub-header-specialization'>Below are some of the popular specializations of Computer Science</p> 
            {this.state.categories.map((categories,i)=>(
                    <button className="btn btn-block col-3 col-sm-3 col-md-3 button-name" key={categories.id}>{categories.domain} </button>
                    
                    ))}   
                    
                
        </div>
    )
  }
}


export default Specialization;