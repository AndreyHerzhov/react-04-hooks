import { useState, useEffect } from 'react';
import styles from './Counter.module.css';


export default function Counter () {
    const [counterA, setCounterA] = useState(0)
    const [counterB, setCounterB] = useState(0)

    const handleCounterAIncrement = () => {
        setCounterA(s => s + 1)
    }

    const handleCounterBIncrement = () => {
        setCounterB(s => s - 1)
    }

    useEffect(() => {
        const totalClicks = counterA + counterB
        document.title = `Total clicks ${totalClicks}`
    }, [counterA, counterB])

    return (
        <>
          <button
            className={styles.btn}
            type="button"
            onClick={handleCounterAIncrement}
          >
            Кликнули counterA {counterA} раз
          </button>
    
          <button
            className={styles.btn}
            type="button"
            onClick={handleCounterBIncrement}
          >
            Кликнули counterB {counterB} раз
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