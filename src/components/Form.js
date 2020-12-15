import React, { Component } from "react";

export default class Form extends Component {



    handleChange = (e) => {
        this.props.setFilter(e.target.value)
    }


    render() {

        return(
            <div>
                <form onChange={this.handleChange}>
                    <input name='greasy' type='radio' value='true'></input>
                    <label htmlFor='true'>Greased </label>
                    <input name='greasy' type='radio' value='false'></input>
                    <label htmlFor='false'>Ungreased </label>
                        <select >
                        <option value='All'>All</option>
                        <option value='name'>Name</option>
                        <option value='weight'>Weight</option>
                        </select>
                </form>
            </div>
        )

    }

}