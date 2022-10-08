import React, {useState} from 'react';

export default function  Form() {

  let [user, setUser] = useState({username: "", password: ""})
  let [errorUser, setErrorUser] = useState('')
  let [errorPassword, setErrorPassword] = useState('')

  function handleChangeUsername(e){
      if(!/\S+@\S+\.\S+/.test(e.target.value)) {
        setErrorUser('el usuario tiene que ser un email');
      } else {
        setErrorUser('');
      }
    setUser({...user, [e.target.name]: e.target.value})
  }

  function handleChangePassword(e){
    if(!/.*[0-9].*/.test(e.target.value)) {
      setErrorPassword('La contraseña debe contener al menos un numero');
    } else {
      setErrorPassword('');
    }
    setUser({...user, [e.target.name]: e.target.value})
  }
  


  function consola(e){
    e.preventDefault()
    console.log(user)
  }

  return (
      <form onSubmit={consola}>
        <div>
            <label>Username:   </label>
            <input 
                type="text" 
                name="username"
                value={user.username}
                onChange={handleChangeUsername}
                className={errorUser && 'danger'}
            /><p className={errorUser && 'danger'}>{errorUser}</p>
        </div>
        <div>
            <label>Password:   </label> 
            <input 
                type="text" 
                name="password"
                value={user.password}
                onChange={handleChangePassword}
                className={errorPassword && 'danger'}
            /><p className={errorPassword && 'danger'}>{errorPassword}</p>
        </div>
        
          <input 
            type="submit"
            value="Submit"
          />
      </form> 
  )
}
