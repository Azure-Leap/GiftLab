import React, { useState } from "react";
import {AnimatePresence, motion} from 'framer-motion'
const SelectSize = ({isSizeClicked, setIsSizeClicked} : any) => {
  const [size, setSize] = useState<any>([]);
  const [input, setInput] = useState<string>("");

  const handleInputChange = (event: any) => {
    const enteredSize = event.target.value;
    setInput(enteredSize);
  };

  const onAddSize = () => {
    const arr = size.filter((c: string) => c !== input);
    arr.push(input);
    setSize(arr);
  };
  const onDeleteSize = (sizes: string) => {
    const updatedSize = size.filter((c: string) => c !== sizes);
    setSize(updatedSize);
  };
  return (
    <div onClick={(e) : any=> {
      e.stopPropagation();
      setIsSizeClicked(true)
    }} className="relative ">
      <div className="w-full border-[#7373ff] border-2 rounded-lg mt-2 p-2 text-black outline-none flex justify-between">
        <input
          type="text"
          onChange={handleInputChange}
          onClick={(e) : any=>{
            // e.stopPropagation()
          }}
          className="w-full border-none text-black outline-none bg-transparent"
          placeholder="X... 2XL..."
        />
        <button
          onClick={(e) : any=>{
            e.stopPropagation()
            onAddSize()
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
      <AnimatePresence>
        {isSizeClicked && (
                <motion.div onClick={(e:any) => e.stopPropagation()} initial={{scale : 0.5}} animate={{scale:1, transformOrigin : 'top'}} exit={{scale : 0.5, opacity:0}}  className="flex mt-[5px] absolute bg-white rounded-lg p-4 w-[400px] -left-[200px] flex-col gap-3">
                  <div className="flex justify-between items-center ">
                    <p>Таны размерүүд</p>
                    <span
                      className="cursor-pointer"
                      onClick={()=>{
                      setIsSizeClicked(false)
                    }}>X</span>
                  </div>
                  <div className="flex gap-4">
                    {!size.length && <motion.p initial className="text-[14px] opacity-[0.6]">Одоогоор размер алга байна.</motion.p>}
                    <AnimatePresence>
                      {size.length > 0 && 
                        size.map((size: string, index: number) => (
                          <motion.div initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} exit={{opacity:0, y:10}} key={index} className="relative flex gap-1">
                            <div className="bg-indigo-300 rounded-full w-7 h-7 text-sm flex justify-center items-center">
                              {size}
                            </div>
                            <button
                              className="absolute -top-[6px] -right-1 rounded-full bg-[#7373ff] w-4 h-4  text-white text-[10px] flex justify-center items-center"
                              onClick={(e : any) => {
                                // e.stopPropagation()
                                onDeleteSize(size)
                              }}
                            >
                              X
                            </button>
                          </motion.div>
                        ))
                      }
                    </AnimatePresence>
                  </div>
              </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SelectSize;
