import {useState, useEffect} from "react"

function useWordGame(){
    
    const [text, setText] = useState("")
    const [count, setCount] = useState(0)

    function changeHandle(event){
        const {value} = event.target
        setText(value)
        console.log(text)
    }

    function calculateWord(){
        setCount((prev)=>{
            return text.split(" ").length
        })
        console.log(count)
    }
  
    return(
        {text,changeHandle,count,calculateWord}
    )
}
export default useWordGame