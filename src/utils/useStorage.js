import {useState,useEffect} from 'react'


function useStorage(key,initValue)
{

const [value,setValue]=useState(()=>{

const storedValue=localStorage.getItem(key)

return storedValue?JSON.parse(storedValue):initValue

})

useEffect(
()=>{
localStorage.setItem(key,JSON.stringify(value))
},[key,value])

const deleteValue=()=>{
localStorage.removeItem(key);
setValue(null)
}

return [value,setValue,deleteValue]
}

export default useStorage
