import { useReducer } from 'react';
 
 
 
import styles from './Counter.module.css';

function countReducer (state, actions) {
  switch(actions.type){
    case 'increment':
      return {...state, count: state.count + actions.payload}

    case 'decrement':
      return {...state, count: state.count - actions.payload}
      
      default:
        return state;
  }
}


export default function Counter () {
    // const [counterA, setCounterA] = useState(0)
    // const [counterB, setCounterB] = useState(0)

    const [state, dispatch] = useReducer(countReducer, {count: 0})
 

    // useEffect(() => {
    //     const totalClicks = counterA + counterB
    //     document.title = `Total clicks ${totalClicks}`
    // }, [counterA, counterB])

    return (
        <>
          <button
            className={styles.btn}
            type="button"
            onClick={() => dispatch({type: 'increment', payload: 1})}
          >
           Increase 
          </button>
        <span>{state.count} </span>
          <button
            className={styles.btn}
            type="button"
            onClick={() => dispatch({type: 'decrement', payload: 1})}
          >
            Decrease    
          </button>
        </>
      );
    }



// class OldCounter extends React.Component{

//     static defaultProps = {
//         initialValue: 0,
//     }

//     static propTypes = {
//         //
//     }
    
//     state = {
//         value: this.props.initialValue, 
//     }

//     handleIncrement = (event) => {
//         this.setState((prevState) => {
//             return {
//                 value: prevState.value + 1 
//             }
//         } );
//         // const targetNodeName = event.target.nodeName
//         // setTimeout(() => {
//         //     console.log(targetNodeName)
//         // }, 1000);
//     }

//     handleDecrement = () => {
//         this.setState((prevState) => {
//             return {
//                 value: prevState.value - 1 
//             }
//         });
//     }

//     render() {
//         const { value } = this.state
//         return(
//             <div className="Counter">
//                <span className="Counter__value">{value}</span>
                      
//                 <Controls
//                     onIncrement={this.handleIncrement}
//                     onDecrement={this.handleDecrement}
//                 />
               
//             </div>
//         )
//     }
// }

// export default OldCounter;