import styles from './SignupForm.module.css'
import useLocalStorage from "components/hooks/useLocalStorage";


export default function SignupForm() {
    const [email, setEmail] = useLocalStorage('email', '')
    const [password, setPasswrod] = useLocalStorage('password', '')
 

    const handleChange = event => {
        console.log(event.target.name)
        const {name, value} = event.target 
        
        switch(name) {
            case 'email':
                setEmail(value)
                break;

            case 'password':
                setPasswrod(value);
                break;

                default: 
                    return;
        }
    }

 
    return (
            <form className={styles.form} autoComplete="off">
              <label className={styles.label}>
                <span>Почта</span>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={email}
                />
              </label>
              <label className={styles.label}>
                  <span>Пароль</span>
                  <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={password}
              />
              </label>
      
              <button type="submit">Зарегистрироваться</button>
            </form>
          )
}

 

// export class OldSignupForm extends Component {
//       state = {
//         email: '',
//         password: '',
//       };
    
//       handleChange = evt => {
//         const { name, value } = evt.target;
//         this.setState({ [name]: value });
//       };
    
//       render() {
//         return (
//           <form className={styles.form} autoComplete="off">
//             <label className={styles.label}>
//               <span>Почта</span>
//               <input
//                 type="email"
//                 name="email"
//                 onChange={this.handleChange}
//                 value={this.state.email}
//               />
//             </label>
    
//     <label className={styles.label}>
//       <span>Пароль</span>
//       <input
//         type="password"
//         name="password"
//         onChange={this.handleChange}
//         value={this.state.password}
//       />
//     </label>
    
//             <button type="submit">Зарегистрироваться</button>
//           </form>
//         );
//       }
//     }