import { useState } from "react";
import styles from './ColorPicker.module.css'


export default function ColorPicker({options}) {
    const [activeOptionIndex, setactiveOptionIndex] = useState(0)

    
    const makeOptionClassName = index => {
        return index === activeOptionIndex
            ? styles.activeOption
            : styles.option
    }
    return (
        <div className="ColorPicker">
            <h2 className="ColorPicker__title">Color Pircker</h2>
            <p>Color: {options[activeOptionIndex].label}</p>
            <div>
                {options.map(({ label, color}, index) => (
                        <button 
                        key={label}
                        className={makeOptionClassName(index)}
                        style={{ backgroundColor: color }}
                        onClick={() =>  setactiveOptionIndex(index)}
                        ></button>
                    ))
                   }
            </div>
        </div>
    )
}

// class ColorPicker extends Component {
//     state = {
//         activeOptionIndex: 1 
//     }
    
//     setActiveIndex = (index) => {
//         this.setState({ activeOptionIndex: index})
//     }

//     makeOptionClassName = (index) => {

//         return classNames("ColorPicker__option", "q", "b", {
//             "ColorPicker__option--active": index === this.state.activeOptionIndex,
//         })

//         // console.log(clsx)


//         // const optionClasses = ["ColorPicker__option"]

//         // if (index === this.state.activeOptionIndex) {
//         //     optionClasses.push('ColorPicker__option--active')
//         // }
//         // return optionClasses.join(' ')
//     }
    
//     render() {
//         const { activeOptionIndex } = this.state
//         const { options } = this.props
//         const {label} = options[activeOptionIndex]

//         // console.log(label)

//         return (
//             <div className="ColorPicker">
//                 <h2 className="ColorPicker__title">Color Pircker</h2>
//                 <p>Color: {label}</p>
//                 <div>
//                     {options.map(({ label, color}, index) => (
//                             <button 
//                             key={label}
//                             className={this.makeOptionClassName(index) }
//                             style={{ backgroundColor: color }}
//                             onClick={() => this.setActiveIndex(index)}
//                             ></button>
//                         ))
//                        }
//                 </div>
//             </div>
//         )
//     }
// }

 

// export default ColorPicker;