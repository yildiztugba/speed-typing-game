import {useState, useEffect} from "react"

function useWordGame(){
    
    const [text, setText] = useState("")
    
    function changeHandle(event){
        const {value} = event.target
        setText(value)
        console.log(text)
    }
    return(
        {text,changeHandle}
    )
}
export default useWordGame