import React from 'react'
import Matrix from './Matrix'




export default class Cell extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      color: props.value
    }
  }

  changeColor = () => {
    this.setState({
      color: '#333'
    })
  }

  renderColorBackground = () => {
    return {backgroundColor: this.state.color}
  }
  render(){
    return(
      <div className="cell" style={this.renderColorBackground()} onClick={this.changeColor}>

      </div>
    )
  }
}