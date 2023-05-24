import React, { useState } from "react";
import {AnimatePresence, motion} from 'framer-motion'
import { useDashboardType } from "@/context/dashboard";

const Goals = ({setIsGoalsClicked, isGoalsClicked, type} : any) => {
  const {addProductAndDonationEvent, setAddProductAndDonationEvent, setFilesInAddProduct} = useDashboardType()

  const [goals, setGoals] = useState<any>([]);
  const [input, setInput] = useState<string>("");
  const handleInputChange = (event: any) => {
    const enteredGoal = event.target.value;
    setInput(enteredGoal);
  };

  const onAddGoal = () => {
    const arr = goals.filter((c: string) => c !== input);
    arr.push(input);
    setGoals(arr);
    setFilesInAddProduct({goals : [...arr]})
    
    // setGoals iin araas {goals : [...arr]} geed ugchihud bolno  
  };
  const onDeleteGoal = (goal: string) => {
    const updatedSize = goals.filter((c: string) => c !== goal);
    setFilesInAddProduct({goals : [...updatedSize]})
    setGoals(updatedSize);
  };
  return (
    <motion.div onClick={(e)=>{
      e.stopPropagation()
      setIsGoalsClicked(true)
    }} initial={{scale : 0.7, opacity : 0, y : -100}} animate={{scale:1, opacity:1, y:0}} transition={{duration:0.2 }}>
      <div className="w-full border-[#7373ff] border-2 rounded-lg mt-2 p-2 text-black outline-none flex justify-between">
        <input
          type="text"
          // name="goals"
          onChange={(e)=>{
            handleInputChange(e)
            // setAddProductAndDonationEvent(e)
          }}
          className="w-full border-none text-black outline-none bg-transparent"
          placeholder="Товч зорилгуудаа бичнэ үү"
        />
        <button
          onClick={(e)=>{
            e.stopPropagation()
            onAddGoal()
          }}
          className="text-[#7373ff] font-bold text-lg"
        >
          <svg width="20" height="20" viewBox="0 -0.5 21 21" version="1.1">
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-179.000000, -600.000000)"
                fill="#7373ff"
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M137.7,450 C137.7,450.552 137.2296,451 136.65,451 L134.55,451 L134.55,453 C134.55,453.552 134.0796,454 133.5,454 C132.9204,454 132.45,453.552 132.45,453 L132.45,451 L130.35,451 C129.7704,451 129.3,450.552 129.3,450 C129.3,449.448 129.7704,449 130.35,449 L132.45,449 L132.45,447 C132.45,446.448 132.9204,446 133.5,446 C134.0796,446 134.55,446.448 134.55,447 L134.55,449 L136.65,449 C137.2296,449 137.7,449.448 137.7,450 M133.5,458 C128.86845,458 125.1,454.411 125.1,450 C125.1,445.589 128.86845,442 133.5,442 C138.13155,442 141.9,445.589 141.9,450 C141.9,454.411 138.13155,458 133.5,458 M133.5,440 C127.70085,440 123,444.477 123,450 C123,455.523 127.70085,460 133.5,460 C139.29915,460 144,455.523 144,450 C144,444.477 139.29915,440 133.5,440"
                    id="plus_circle-[#1427]"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </button>
      </div>
      <div className="mt-4 relative">
        <AnimatePresence>
          {isGoalsClicked && 
                   <motion.div  onClick={(e:any) => e.stopPropagation()} initial={{y:30, opacity:0}} animate={{y:0, transformOrigin : 'bottom',opacity:1}} exit={{ y:10, opacity:0}} 
                                className={`bg-white absolute ${type === 'payment' ? '-top-56 -right-[450px]' : type ='donation' ? 'top-0 right-0' : ''} w-[400px] h-[180px] rounded-lg p-4 overflow-y-scroll flex flex-col gap-4 z-20`}>
                      <div className="flex justify-between items-center">
                        <p>Таны үйл ажиллагааны товч зорилт</p>
                        <span className="cursor-pointer" onClick={()=>{
                          setIsGoalsClicked(false)
                        }}>X</span>
                      </div>
                      <AnimatePresence>
                          {goals.map((goal: string, index: number) => (
                            <motion.div key={index} initial={{opacity : 0}} animate={{opacity:1}} exit={{opacity:0}} className="relative">
                              <div className="bg-indigo-300 rounded-lg border mr-3 mb-2 p-2">
                                {goal}
                              </div>
                              <button
                                className="absolute -top-2 right-0 rounded-full bg-[#7373ff] px-2 text-white flex justify-center items-center"
                                onClick={() => onDeleteGoal(goal)}
                              >
                                X
                              </button>
                            </motion.div>
                      ))}
                      </AnimatePresence>
                   </motion.div>
          }
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Goals;
