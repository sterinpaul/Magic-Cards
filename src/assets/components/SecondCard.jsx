import { card2 } from "../components/Constants";

const SecondCard = ()=>{
    return(
        <ul className="absolute h-64 w-96 top-1 left-2 rounded-lg bg-blue-500 p-2 shadow-red-900/40 shadow-lg border-4 flex flex-wrap items-center justify-center list-none">
            {card2.map((number) => {
                return (
                  <li key={number} className="text-center text-2xl w-14 text-white">
                    {number}
                  </li>
                );
            })}
        </ul>
    )
}
export default SecondCard