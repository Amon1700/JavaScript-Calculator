import { numbers_operators } from "./number";
import { useSelector, useDispatch } from "react-redux";
import { pushDisplay, popDisplay, clearDisplay, ansDisplay } from "../features/displaySlice";
import NumPad from "./NumPad";

export default function NumPadOperator() {
    
    const dispatch = useDispatch()
    const input = useSelector(state => state.display)
    const character = useSelector(state => state.character)

    function calcuate(input) {
        for (let i = 0; i < input.length; i++) {
            if (["+", "-", "*", "/",].includes(input[i]) && ["+", "*", "/",].includes(input[i + 1])) {
                input = input.slice(0, i) + input.slice(i + 1)
                i--
            }
            if (["+", "-", "*", "/",].includes(input[i - 1]) && ["+", "*", "/",].includes(input[i])) {
                input = input.slice(0, i - 1) + input.slice(i)
                i--
            }
        }
        return eval(input);
    }

    function click(val) {
        switch (val) {
            case "C": dispatch(clearDisplay())
                break;
            case "<": dispatch(popDisplay())
                break;
            case "=": dispatch(ansDisplay(calcuate(input)))
                break;
            case ".": if (!input.split(/[-+/*]/g).slice(-1)[0].includes("."))
                dispatch(pushDisplay(val))
                break;
            default: dispatch(pushDisplay(val))
                break;
        }
    }

    return (
        <div>
            <NumPad handleClick={click} />
            <div className="grid grid-cols-4 grid-row-4 sm:gap-4 gap-2">
                {numbers_operators.map(num => <button className={`bg-blue-600 border-2 border-blue-600 hover:bg-slate-900 ${character == num.val && " bg-slate-900 "}
                 sm:p-6 p-4 rounded-lg ${num.val == "<" || num.val == "C" ? " col-span-2 " : "col-span-1 "}`} key={num.str} id={num.str}
                 onClick={() => { click(num.val) }} >{num.val}</button>)}
            </div>
        </div>
    )
}