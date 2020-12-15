import React, { Component } from "react";

export default class Hog extends Component {

    handleClick = (e) => {
        let children = e.target.children
        for(const i of children) {
            if(i.className === 'hidden') {
                i.className = ''
            }
        }
      }

    render() {
        return(
            <div onClick={this.handleClick} className='pigTile'>
                <h3>Name: {this.props.hog.name}</h3>
                <h3 className='hidden'>Weight: {this.props.hog.weight}</h3>
                <h3 className='hidden'>Specialty: {this.props.hog.specialty}</h3>
            </div>
        )
    }
}