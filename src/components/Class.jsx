// import React, {Component} from "react";

// class Greetings extends Component{
//     render(){
//         return <h1>Hello {this.props.name}</h1>
//     }
// }
// export default Greetings;


///Q3
///class to functional component



import React from "react";

function Greetings({name}){
    return(
        <h2>Hello {name}</h2>
    )
}

export default Greetings