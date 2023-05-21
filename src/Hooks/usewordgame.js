import {useState, useEffect} from "react"

function useWordGame(){
    const STARTING_TIME = 5
    const [text, setText] = useState("")
    const [count, setCount] = useState(0)
    const [timeRemaining,setTimeRemaining] = useState(STARTING_TIME)
    const [isRunning,setIsRunning] = useState(false)

    useEffect(()=>{
        if(isRunning && timeRemaining>0){
            setTimeout(() => {
                setTimeRemaining(prev=>prev-1)
                },1000);
        }
        else if (timeRemaining === 0)
        {
            endGame()
        }
    
    },[timeRemaining,isRunning])


    function changeHandle(event){
        const {value} = event.target
        setText(value)
        console.log(text)
    }

    function calculateWord(){
        
        setCount((prev)=>{
            return text.trim().split(" ").length
        })
        
    }

    function startGame(){
        setIsRunning(true)
        setText("")
        setTimeRemaining(STARTING_TIME)
    }

    function endGame(){
        setIsRunning(false)
        calculateWord()
    }

    return(
        {text,changeHandle,count,startGame,timeRemaining,isRunning}
    )
}
export default useWordGame