import { useState,useRef } from "react";
import FirstCard from "../components/FirstCard";
import SecondCard from "../components/SecondCard";
import ThirdCard from "../components/ThirdCard";
import FourthCard from "../components/FourthCard";
import FifthCard from "../components/FifthCard";
import SixthCard from "../components/SixthCard";


const Home = () => {
  const [start, setStart] = useState(false);
  const [startContainer, setStartContainer] = useState(true);
  let [cardNumber,setCardNumber] = useState(0)
  let [total,setTotal] = useState(0)
  const disableYesBtn = useRef(null)
  const disableNoBtn = useRef(null)

  const gameStart = () => {
    if(cardNumber < 6){
      setStartContainer(false)
      setStart(true)
    }else{
      setTotal(0)
      setCardNumber(0)
    }
  };
  
  function cardHidingLogic(value){
    cardNumber++
    setCardNumber(cardNumber)
    if(!disableYesBtn.current.disabled){
      disableYesBtn.current.disabled = true;
      disableNoBtn.current.disabled = true;
    }
    if(value === 'yes'){
      switch(cardNumber){
        case 1:
          total+=1
          setTotal(total)
          break;
        case 2:
          total+=2
          setTotal(total)
          break;
        case 3:
          total+=4
          setTotal(total)
          break;
        case 4:
          total+=8
          setTotal(total)
          break;
        case 5:
          total+=16
          setTotal(total)
          break;
        case 6:
          total+=32
          setTotal(total)
          break;
      }
    }
    
    if(cardNumber<6){
      setTimeout(()=>{
        disableYesBtn.current.disabled = false
        disableNoBtn.current.disabled = false
      },3000)
    }
  }

  return (
    <div className="p-4 w-screen h-screen bg-gradient-to-tr from-lime-300 to-lime-700">
      <div className="bg-white rounded flex flex-col items-center mx-auto">
        <h1 className="text-4xl text-center py-4 m-4">Magic Cards</h1>
        {startContainer ? (<>
        <p className="mx-4">
        Choose a number between 1 and 60, and indicate with a "yes" if the number is displayed on each card. If the number is not shown on a card, click "no." After six cards, I will tell you the number you chose.
        </p>
        <button
          onClick={()=>gameStart()}
          className="bg-green-500 rounded-sm w-fit px-5 py-1 m-4 hover:bg-green-600 hover:text-white"
        >
          Start
        </button>
        </>) : null
        }

        {start ? (
          <div className="flex justify-center items-center m-2 flex-col">
            <div className="relative h-64 w-96 top-0 -left-5">
              
              {cardNumber < 6 ? <FirstCard/> : (<div className="flex flex-col items-center justify-center ml-8">
              {total>60 || total===0 ? <h1 className="text-xl mb-12">I know you are smart. Don't be oversmart</h1> : (<div className="bg-green-500 w-44 h-44 rounded-full flex justify-center items-center my-4 animate-bounce">
                <h1 className="text-9xl text-white">{total}</h1>
              </div>)
              }
              <button onClick={()=>gameStart()} className="bg-green-500 rounded w-fit px-5 py-1 m-2 hover:bg-green-600 hover:text-white">Restart</button>
              </div>
            )}
              {cardNumber < 5 ? <SecondCard/> : null}
              {cardNumber < 4 ? <ThirdCard/> : null}
              {cardNumber < 3 ? <FourthCard/> : null}
              {cardNumber < 2 ? <FifthCard/> : null}
              {cardNumber < 1 ? <SixthCard/> : null}
            </div>

            {cardNumber < 6 ? (
            <div className="my-12 p-3 flex flex-col items-center justify-center max-w-4xl rounded">
              
              <div className="text-center">{cardNumber === 0 ? "Let's begin with the first card." : null} Please indicate with a 'Yes' if the chosen number is displayed on the card, and click 'No' if it is not.</div>
              <div className="flex m-2">
                <button onClick={()=>cardHidingLogic('yes')} ref={disableYesBtn} className="bg-green-500 rounded-md w-fit px-5 py-1 m-4 hover:bg-green-600 hover:text-white">
                  Yes
                </button>
                <button onClick={()=>cardHidingLogic('no')} ref={disableNoBtn} className="bg-green-500 rounded-md w-fit px-5 py-1 m-4 hover:bg-green-600 hover:text-white">
                  No
                </button>
              </div>
            </div>) : null
            }
        </div>
        ) : null
        }
        </div>

    </div>
  );
};
export default Home;
