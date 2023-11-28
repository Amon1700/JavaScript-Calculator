import { useSelector } from "react-redux"

export default function Display () {
    const display = useSelector(state => state.display)
    
    return (
        <div id="display" className="bg-indigo-700 sm:m-4 m-2 sm:w-[319px] w-[220px] sm:h-20 h-14 text-right rounded-lg">
        <div className="no-scrollbar sm:m-6 m-4  overflow-x-scroll flex flex-row-reverse">
            {display}
        </div>
        </div>
    )
}