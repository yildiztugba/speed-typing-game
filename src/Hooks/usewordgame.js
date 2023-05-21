import {useState, useEffect} from "react"

function useWordGame(){
    
    const [text, setText] = useState("")
    const [count, setCount] = useState(0)
    const [timeRemaining,setTimeRemaining] = useState(10)

    useEffect(()=>{
        if(timeRemaining>0){
            setTimeout(() => {
                setTimeRemaining(prev=>prev-1)
                },1000);
        }
           
    },[timeRemaining])


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
        {text,changeHandle,count,calculateWord,timeRemaining}
    )
}
export default useWordGame