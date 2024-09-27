import {Component} from "react";

class HandlingClass extends Component{

    handleclass() {
        console.log("I am the Class!")
    }
    render(){
        return(
            <>
                <h1>This is how to handle events in Class Components </h1>
                <button onClick={this.handleclass}>Click me now!</button>
            </>
        ) 
    }

}

export default HandlingClass;