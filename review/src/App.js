import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import Body from './Body'
import data from './data'

export default class App extends Component {



    render() {
        return(
            <div>

            <Header/>
            <Body data={data}/>
            </div>
        )
    }
}