import React, { useState } from "react";
import {motion, AnimatePresence} from 'framer-motion'

const ColorRegex = ({isColorClicked, setIsColorClicked} : any) => {
  const [colors, setColors] = useState<any>([]);
  const [input, setInput] = useState<string>("");

  const handleInputChange = (event: any) => {
    const enteredColor = event.target.value;
    setInput(enteredColor);
  };

  const onAddColor = () => {
    const validHexCode = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    if (validHexCode.test(input)) {
      const arr = colors.filter((c: string) => c !== input);
      arr.push(input);
      setColors(arr);
      // color talbar deer nemeh uildel hiine 
    }
    setIsColorClicked(!isColorClicked);
  };

  const onDeleteColor = (color: string) => {
    const updatedColors = colors.filter((c: string) => c !== color);
    setColors(updatedColors);
  };

  const handleColorClick = (color: string) => {
    if (!colors.includes(color)) {
      const arr = [...colors, color];
      setColors(arr);
    } else {
      onDeleteColor(color);
    }
    // toggleModal();
  };

  // const toggleModal = () => {
  //   setIsColorClicked(!isColorClicked);
  // };

  return (
    <div className="relative">
      <div className="w-full border-[#7373ff] border-2 rounded-lg mt-2 p-2 text-black outline-none flex justify-between">
        <input
          type="text"
          onClick={(e :any)=>{
            e.stopPropagation()
            setIsColorClicked(true)
          }}
          onChange={handleInputChange}
          className="w-full border-none text-black outline-none bg-transparent"
          placeholder="#f9004d"
        />
        <button
          onClick={(e:any)=>{
            e.stopPropagation()
            onAddColor()
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
      {isColorClicked && (
              <motion.div 
              layout
              onClick={(e:any) => e.stopPropagation()} initial={{scale : 0.5}} animate={{scale:1, transformOrigin : 'top'}} exit={{scale : 0.5, opacity:0}}
                className=" w-[300px] absolute bg-white shadow-sm shadow-[#7373ff] mt-2 p-2 rounded-lg z-30"
                // onBlur={toggleModal}
              >
                <div className="flex justify-between items-center">
                  <p className="text-[14px] font-medium">Таны өнгөний сонголтууд</p>
                  <span className="cursor-pointer"
                        onClick={(e:any)=>{
                          e.stopPropagation()
                          setIsColorClicked(false)}
                        }
                        >X</span>

                </div>
                <div className="flex flex-wrap mt-2">
                 <AnimatePresence>
                  {colors.map((color: string, index: number) => (
                      
                      <motion.div
                      onClick={(e:any) => e.stopPropagation()} initial={{scale : 0.5}} animate={{scale:1, transformOrigin : 'top'}} exit={{scale : 0.5, opacity:0}}
                        key={index}
                        className="w-5 h-5 rounded-full mr-2 mb-2 border flex justify-center items-center"
                        style={{ backgroundColor: color }}
                      >
                        <button
                          className=" bg-transparent text-white flex justify-center items-center text-[10px]"
                          onClick={() => onDeleteColor(color)}
                        >
                          X
                        </button>
                      </motion.div>
                    ))}
                 </AnimatePresence>
                </div>
        </motion.div>
      )}
      </AnimatePresence>

      {/* <div className="flex flex-wrap mt-4">
        {colors.map((color: string, index: number) => (
          <div
            key={index}
            className="w-10 h-10 rounded-full mr-2 mb-2 border"
            style={{ backgroundColor: color }}
          >
            <button
              className="w-full h-full rounded-full bg-transparent text-white flex justify-center items-center"
              onClick={() => onDeleteColor(color)}
            >
              X
            </button>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default ColorRegex;
