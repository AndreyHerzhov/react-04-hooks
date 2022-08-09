import { Component } from "react";
import { Controls } from "components/Reader/Controls";

export class Reader extends Component{
  state = {
    index: 0
  }
  
  handleClick= (value) => {
    this.setState(state => ({index: state.index + value}))
   
  }

  componentDidUpdate(_, prevState){
    if(prevState.index !== this.state.index){
      localStorage.setItem('reader_item_index', this.state.index)
    }
  }

  componentDidMount() {
    const savedItem = localStorage.getItem('reader_item_index')
    if(savedItem){
      this.setState({index: Number(savedItem)})
    }
  }
  render(){
    
    console.log(this.props.items[this.state.index].title)
    const currentItem = this.props.items[this.state.index]
    const length = this.props.items.length
    return(
        <div>
          {/* <!-- Разметка компонента <Controls> --> */}
          <Controls 
                  current={this.state.index + 1} 
                  total={length} 
                  onChange={this.handleClick}
            />
  

          {/* <!-- Разметка компонента <Progress> --> */}
          <p>{this.state.index + 1}/{this.props.items.length}</p>

          {/* <!-- Разметка компонента <Publication> --> */}
          <article>
            <h2>{currentItem.title}</h2>
            <p>
            {currentItem.text}
            </p>
          </article>
        </div>
    )
  }
}