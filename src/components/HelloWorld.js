import React, { Component } from "react";
import Hog from './Hog'
import Form from './Form'
// import hogImages from './hog-imgs'


class HelloWorld extends Component {

state = {
  filter: 'All',
  filteredHogs: []
}

componentDidMount() {
  this.filterHogs()
}

componentDidUpdate() {
  this.filterHogs()
}

filterHogs = () => {
  let filterType = this.state.filter
  let filteredHogsArr
  if(filterType !== 'All') {
    if(filterType === 'name') {
     this.setState({filteredHogs: this.props.hogsObj.sort((a,b) => {
      let nameA = a.name.toUpperCase()
      let nameB = b.name.toUpperCase() 
      if(nameA < nameB){return -1}
       if(nameA > nameB) {return 1}
    })}) 
    } else if(filterType === 'weight') {
      this.setState({filteredHogs: this.props.hogsObj.sort((a,b) => a.weight - b.weight)}) 
     } else if(filterType === true) {
       
      this.setState({filteredHogs: filteredHogsArr = this.props.hogsObj.filter(hog => 
        hog.greased === true)})
     } 
    else {
       this.setState({filteredHogs: filteredHogsArr = this.props.hogsObj.filter(hog => 
       hog.greased === false)})           
    //  this.setState({filteredHogs: filteredHogsArr})
      }
  } else {
    this.setState({filteredHogs: this.props.hogsObj})
  }
}

  renderHogs = () => {
    return this.state.filteredHogs.map((hog) => {
      return <Hog hog={hog}/>
    })
  }

  setFilter = (type) => {
    this.setState({
      filter: type
    })
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Form setFilter={this.setFilter}/>
        <br />
        <div className='ui grid container'>
          {this.renderHogs()}
        </div>
      </div>
    );
  }
}

export default HelloWorld;
