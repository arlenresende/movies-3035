import React,{useState} from 'react'


const Rate = () => {
  const [value, setValue] = useState(5);
  return(
      <div>
        <input
        type="range"
        min='1'
        max='5'
        value={value}
        onChange={e => setValue(e.currentTarget.value)}
        
        />
        {value}
      
      </div>
    
  )
}
export default Rate ;