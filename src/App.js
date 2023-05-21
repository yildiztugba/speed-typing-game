
import './App.css';
import useWordGame from "./Hooks/Usewordgame"
function App() {
  const {text, changeHandle,count,calculateWord,timeRemaining} = useWordGame()
  return (
    <div>
            <h1>How fast do you type?</h1>
            <textarea 
            value={text}
            onChange={changeHandle}/>
            <h4>Time remaining: {timeRemaining}</h4>
            <button onClick={calculateWord}>
                Start
            </button>
            <h1>Word count: {count}</h1>
        </div>
  );
}

export default App;
