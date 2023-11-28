import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setcharacter } from "../features/displaySlice";
export default function NumPad (prop) {
    
    const dispatch = useDispatch()

    function handleDispatch(key) {
        dispatch(setcharacter(key))
    }

    function handleKeyUp() {
        dispatch(setcharacter(""))
    }

    useEffect(() => {
        function handleEvent(event) {
            let key = event.key
            if("1234567890+-*/.=".includes(key)){
                prop.handleClick(key)
                handleDispatch(key) 
            }
            if(key === "Enter"){
                prop.handleClick('=')
                handleDispatch(key) 
            }
            if(key === "Backspace") {
                prop.handleClick('<')
                handleDispatch(key) 
            }
            if(key === "Delete") {
                prop.handleClick('C')
                handleDispatch(key) 
            }
            
        }


        window.addEventListener("keydown", handleEvent)
        window.addEventListener("keyup", handleKeyUp)
        return () => {
            window.removeEventListener("keydown", handleEvent)
            window.removeEventListener("keyup", handleKeyUp)
        };
    }, )

    return <div/>
}