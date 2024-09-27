import {Component} from "react";

class Hero extends Component{
    render(){
        return<div>
        <h1> this is my Hero Section </h1>
        <h3>Message : {this.props.message}</h3></div>
    }

}

export default Hero;

