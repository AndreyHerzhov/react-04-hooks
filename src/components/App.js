import React, {Component} from "react";
import Counter from "./Counter";
// import Dropdown from "./Dropdown"
// import ColorPicker from "./ColorPicker"
// import TodoList from "./TodoList";
// import Form from "./Form";
// import TodoEditor from './TodoEditor'
// import Filter from "./Filter/Filter";
// import Filter from "./Filter/Filter";
import shortid from "shortid";
// import Modal from './Modal/Modal'
// import Tabs from "./Tabs/Tabs";
// import Clock from "./Clock";
// import Container from "./Container";
// import IconButton from "./IconButton";
// import { ReactComponent as AddIcon} from "../icons/add.svg"
// import tabs from './tabs.json';
// import { ThemeProvider } from 'styled-components';
// import { GlobalStyle } from 'components/GlobalStyle';
// import { Reader } from './Reader/Reader.jsx'
// import publication from '../publications.json'
// import { Example1 } from './Example1.jsx';
// import   SignupForm   from "./SignupForm/SignupForm";
// import './index.css';
// import publications from './publications.json';
import   Clicker   from "./UseEfect/UseEffect";
// import PokemonView from "views/PokemonView"; 


// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

 

class App extends Component {
  state = {
    todos: [
      {id: 'id-1', text: 'Выучить основы React', completed: true},
      {id: 'id-2', text: 'Разобраться с React Router', completed: true},
      {id: 'id-3', text: 'Пережить Redux', completed: false},
      {id: 'id-4', text: 'Подготовитсья к собеседованию', completed: true}
    ],
    inputValue: 'Empty',
    filter: '',
    showModal: false
    
  };

  componentDidMount() {
    // console.log('componentDidMount')
    const todos = localStorage.getItem('todos')
    const parsedTodos = JSON.parse(todos)
    if(parsedTodos){
      this.setState({todos: parsedTodos})
    }
    // console.log(parsedTodos)
     
  }
  
  componentDidUpdate( prevProps ,prevState ) {
    // console.log("App componentDidUpdate")
    const nextTodos = this.state.todos
    const prevTodos = prevState.todos
    if(nextTodos !==  prevTodos) {
      console.log('Todos has been updated')

      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    }
    // console.log(prevState)
    // console.log(this.state)
  }

  

   addTodo = message => {
     
    const todo = {
      id: shortid.generate(),
      text: "",
      completed: false,
    }
    todo.text = message
    // console.log(todo)

    this.setState(({todos}) => ({
      todos: [todo, ...todos]
    }))
    this.toggleModal()
  }

  deleteTodo = (todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId)
    }))
  }

  toggleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  formSubmitHandler = data => {
    // console.log(data)
    
  }

  changeFilter = (e) => {
    this.setState({filter: e.currentTarget.value})
  }

  getVisiblesTodos = () => {
    const { filter , todos } = this.state
    const normalizedFilter = filter.toLocaleLowerCase()

    return  todos.filter(todo => 
      todo.text.toLowerCase().includes(normalizedFilter)) 
  }

  getCompletedTodos = () => {
    const { todos } = this.state
    return todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0,
      )
  }
 

//   handleInputChange = event => {
//      this.setState({inputValue: event.target.value})
//   }

//   handleNameChange = event => {
//      this.setState({name: event.target.value})
//   }

//   handleNickChange = event => {
//     this.setState({nick: event.target.value})
//  }

  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal
    }))
  }



  render() {
    // const { todos, filter, showModal} = this.state
    // const visibleTodos = this.getVisiblesTodos()
    // const completedTodos = this.getCompletedTodos()


    


     return (
      <>
          {/* <Container> */}

          {/* <Clock/> */}
        <Clicker/>

          {/* <SignupForm/> */}
          

          {/* <Reader items={publication} /> */}
          {/* <ThemeProvider theme={{}}>
            <GlobalStyle />
           
            <Example1></Example1>
          </ThemeProvider> */}
         
           
         {/* <IconButton onClick={this.toggleModal}>
           <AddIcon width='40' height='40' fill='red'/> 
         </IconButton> */}

           {/* <Tabs items={tabs}/> */}
          {/* <h1>Состояние компонента</h1> */}
          {/* <button type="button" onClick={this.toggleModal}>Open Modal</button> */}
          {/* {showModal &&  
              <Modal onClose={this.toggleModal}>
                  <TodoEditor onSubmit={this.addTodo} value={this.state.inputValue}/>
              </Modal> 
              } */}
          
          
          {/* <Form onSubmit={this.formSubmitHandler}/> */}
 
          {/* <input type="text" value={this.state.inputValue} onChange={this.handleInputChange}/> */}
          
          <Counter initialValue={0}/>
          {/* <Dropdown/> */}
          {/* <ColorPicker options={colorPickerOptions}/> */}

         


          {/* <PokemonView/> */}

          {/* <div>
            <p>Общее кол-во: {todos.length}</p>
            <p>Кол-во выполненых: {completedTodos}</p>
          </div> */}
          {/* <Filter value={filter} onChange={this.changeFilter}/> */}
{/* 
          <TodoList 
            todos={visibleTodos} 
            onDeleteTodo={this.deleteTodo}
            onToggleCompleted={this.toggleCompleted}/> */}
     {/* </Container> */}
      </>
    );
  }
}

export default App;

 