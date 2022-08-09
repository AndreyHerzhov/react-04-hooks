import React, {Component} from "react"
import shortid from "shortid"


class Form extends Component {
    state = {
        name: '',
        nick: '',
        experience: 'senior',
        license: false
    }

    nameInputId = shortid.generate()
    nickInputId = shortid.generate()
    

    handleChange = event => {
        const { name, value } = event.target
    
        this.setState({
          [name] : value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        // console.log(this.state)
        this.props.onSubmit(this.state)

        this.reset()
    }

    handleLicenceChange = e => {
      // console.log(e.currentTarget.checked)

      this.setState({license: e.currentTarget.checked})
    }

    reset = () => {
        this.setState({ name: '', nick: ''})
      }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label htmlFor={this.nameInputId} >
                Name 
                <input 
                type="text" 
                name="name"
                value={this.state.name} 
                onChange={this.handleChange}
                id={this.nameInputId} 
                >
                   
              </input>
            </label>
            <label htmlFor={this.nickInputId} >
                Nick 
                <input 
                type="text" 
                name="nick"
                value={this.state.nick} 
                onChange={this.handleChange}
                id={this.nickInputId}   
                >
                
              </input>
            </label>

            <p>Your level</p>
            <label>
                    Junior:
                    <input type="radio" 
                    name="experience" 
                    value="junior"
                    onChange={this.handleChange}
                    checked={this.state.experience === "junior"}
                    ></input>
            </label>
            <label>
                    Middle:
                    <input type="radio"
                     name="experience"
                     value="middle"
                     onChange={this.handleChange}
                     checked={this.state.experience === "middle"}
                     ></input> 
            </label>
            <label>
                    Senior:
                    <input type="radio" 
                    name="experience" 
                    value="senior"
                    onChange={this.handleChange}
                    checked={this.state.experience === "senior"}
                    ></input>     
            </label>

            <label>
              <input  type="checkbox" 
                      name="license" 
                      checked={this.state.license}
                      onChange={this.handleLicenceChange}
                      />
                      Agree
            </label>
          

            <button type="submit" disabled={!this.state.license}>Send</button>
          </form>
        )
    }
}

export default Form