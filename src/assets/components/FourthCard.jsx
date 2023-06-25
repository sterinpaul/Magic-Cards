import { card4 } from "../components/Constants";

const FourthCard = ()=>{
    return(
        <ul className="absolute h-64 w-96 top-3 left-6 rounded-lg bg-pink-500 p-2 shadow-red-900/40 shadow-lg border-4 flex flex-wrap items-center justify-center list-none">
        {card4.map((number) => {
          return (
            <li key={number} className="text-center text-2xl w-14 text-white">
              {number}
            </li>
          );
        })}
      </ul>
    )
}
export default FourthCard