import React,{useState} from 'react'

const Profile = (props) => {
    const [count,setCount] = useState(0)
  return (
    <>
      <h1>This is Profile Function</h1>
      <h3>Name:{props.name}</h3>
      <p>Count:- {count}</p>
            <button onClick={()=>{
                setCount(count+1)
            }}>count</button>
    </>
  )
}

export default Profile
