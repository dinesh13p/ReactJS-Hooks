import React,{useState} from 'react'

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    // console.log(event)
  };

  const handlePasswordChange = (something) => {
    setPassword(something.target.value);
  };
  const handleSubmit = (event) => {
  event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      
      <input onChange={handleEmailChange} type="email" placeholder='Enter your email' /> <br />
      <input type="password" placeholder='Enter your password' />
       <br />

      <button type='submit'>Submit</button>
      
      
      </form>
    </div>
  )
}

export default App
