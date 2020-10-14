import React from "react"

const div = {
  width: "450px",
  height:"auto",
}

function Project(props){
    return (<>
      <div>
       {props.name}
      </div>

      <div>
      <a href ={props.git}> Github </a>
      </div>

      <div>
      <a href ={props.live}> Live site </a>
      </div>

      <div >
       <img style={div} src={props.img} alt={props.name}/>
      </div>
      
    </>
    )

    
  }



export default Project 
