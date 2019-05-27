import React, { Component } from 'react'
import Info from './Info';

export default class Body extends Component {
    constructor(props){
        super(props)

        this.state = {
            index: 0
        }
    }

    handlePrevious=()=>{
        if(this.state.index>0){
            this.setState({index: this.state.index-1})
        }
    }

    handleNext=()=>{
        console.log(this.props.data.length, this.props.data.length-1)
        if(this.state.index<this.props.data.length-1){
            this.setState({index: this.state.index+1})
        }
    }


    render(){
        let employees = this.props.data.map((person) => {
           let movies = person.favoriteMovies.map(movie=>{
                return(
                    <ol>
                        <li>{movie}</li>
                    </ol>
                )
            })
    return (
        <div key={person.id}>
            <h1>{person.name.first} {person.name.last}</h1>
            <h3>From: {person.city}, {person.country}</h3>
            <h3>Job Title: {person.title}</h3>
            <h3>Employee: {person.employer}</h3>
            <h3>Favorite Movies:</h3>
            <ol>
            {movies}
            </ol>
        </div>
    )
    })
        return(
            <div className="body">
                {employees[this.state.index]}
                <Info handlePrevious={this.handlePrevious} handleNext={this.handleNext}/>
            </div>
        )
    }
}