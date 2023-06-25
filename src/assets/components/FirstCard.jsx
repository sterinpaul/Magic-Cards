import { card1 } from "../components/Constants";


const FirstCard = ()=>{
    return(
        <ul className="absolute h-64 w-96 top-0 left-0 rounded-lg bg-red-500 p-2 shadow-red-900/40 shadow-lg border-4 flex flex-wrap items-center justify-center list-none">
            {card1.map((number) => {
                return (
                  <li key={number} className="text-center text-2xl w-14 text-white">
                    {number}
                  </li>
                );
            })}
        </ul>
    )
}
export default FirstCard