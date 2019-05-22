import React, { Component } from 'react'
import data from './data'
import './data.css'
import Info from './Info';

export default class Body extends Component {
    constructor(props){
        super(props)

        this.state = {
            
        }
    }
    render(){

        let person = this.props.data.map((element) => {
    {return <Info key={element[id]} card={element} />}
    })
        return(
            <div className="body">
                





            </div>
        )
    }
}