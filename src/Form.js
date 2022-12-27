import React,{useState} from 'react';

export const Form=() => {
    const [Name,setName]= useState("")
    const [Email,setEmail]=useState("")
    const [data, setData]=useState([])
  
    const submit=(e)=>{
      e.preventDefault()
      const New ={Name:Name, Email:Email}
      setData([...data,New])
      setName('')
      setEmail('')
    }
  return (
   <div className='container'>
     <form onSubmit={submit}>
      <div>
        <label>Username</label>
        <input type='text' placeholder='Enter your name' 
        value={Name} onChange={(e)=>{
          setName(e.target.value)}}/>
        <label>Email</label>
        <input type='email' placeholder='Enter your email address' 
        value={Email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <button>Submit</button>
      </div>
     </form>
    
    <div className='output'>
      {data.map((values)=>{
        return(
          <>
        <h3>{values.Name}</h3>
        <h4>{values.Email}</h4>  
          </>
        )
        })}
      
    </div>
    </div>
  )
}
export default Form;