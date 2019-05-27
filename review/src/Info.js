import React, {Component} from 'react'

export default class Info extends Component {
    constructor(props){
        super(props)

    }
    render() {
        return(
            <div>
                <button onClick={this.props.handlePrevious}>Previous</button>
                <button onClick={this.props.handleNext}>Next</button>
            </div>

        )
    }
}