import React, { Component } from 'react';
import "./Card.css";
class Button extends Component{
    
    render(){
        let { title , task, backg } = this.props;
        return(
            <div>
                <button onClick = { task }  className = "btn">
                    {title}
                </button>
            </div>
        )
    }
}
export default Button;

