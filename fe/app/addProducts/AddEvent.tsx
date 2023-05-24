import React, { useEffect, useState } from "react";
import {AnimatePresence, motion} from 'framer-motion'
import Goals from "./Goals";
import UploadImage from "./UploadImages";
import { province } from "@/data/home/category";
import Checkbox from "../component/common/checkbox";
import SaveBtn from "./SaveBtn";

const AddEvent = () => {
  const [ isGoalsClicked, setIsGoalsClicked] = useState(false)
  const [checkBoxClicked, setCheckBoxClicked] = useState(false)

  function dataFromInput (e : any){
    const obj :any = {};
    
    
    const {name, value} = e.target;
    console.log(name, value)
    obj[name] = value;
    // setAddDonationData({...addDonationData, ...obj })
  }

  // useEffect(()=>{
  //   setPrevDashboardTypeState('donation')
  // },[])
  return (
    <motion.div onClick={()=>{
      setIsGoalsClicked(false)
    }} initial={{scale:0.99, opacity :0, y:-100}} animate={{scale:1, opacity:1,y:0}}>
      <div className="grid grid-cols-2 gap-10">
        <div className="py-4 px-32">
          <div>
            <h1 className="text-black font-medium">Сайн дурын үйл ажиллагааны</h1>
            <input 
                name="title" 
                className="w-full border-[#7373ff] border-2 rounded-lg mt-2 p-2 text-black outline-none bg-transparent"
                placeholder="Сайн дурын үйл ажиллагааны нэр..." />
          </div>
          <div className="mt-5">
            <h1 className="text-black font-medium">Юуны тухай пост вэ?</h1>
            <textarea
              placeholder="Хандивын хүсэлтйин товч танилцуулага аа бичнэ үү..."
              className="w-full border-[#7373ff] border-2 rounded-lg mt-2 p-2 text-black outline-none bg-transparent"
              rows={3}
            />
          </div>
          <div className="mt-5">
            <div className="grid grid-cols-2 gap-10">
              {/* <div>
                <h1 className="text-black font-medium">Нийт хүн</h1>
                <div className="border-[#7373ff] border-2 rounded-lg mt-2 flex items-center p-2  ">
                  <input
                    className="w-full text-black outline-none border-none bg-transparent"
                    placeholder="..."
                  />
                </div>
              </div> */}
              <motion.div className="flex items-center gap-2 col-span-2">
                <div onClick={()=>setCheckBoxClicked(!checkBoxClicked)}>
                  <Checkbox/>
                </div>
                <AnimatePresence>
                  
                    <motion.p  
                      initial={{opacity : 0, y:-20}}
                      animate={{opacity:1, y : 0}}
                      exit={{opacity:0, x : 10}} transition={{duration:0.1}} >Хязгаартай</motion.p>
                    
                </AnimatePresence>
                <AnimatePresence>
                  {checkBoxClicked && 
                  <motion.input
                    
                    transition={{duration:0.4}}
                    initial={{opacity : 0, y:-20}}
                    animate={{opacity:1, y : 0}}
                    exit={{opacity:0, y : 20}}
                    className="w-full border-[#7373ff] border-2 rounded-lg bg-transparent mt-2 p-2 text-black outline-none"
                    placeholder="Нийт хүний тоо..."/>}
                </AnimatePresence>

              </motion.div>
              <div className="col-span-2 flex items-center gap-2">
                <Checkbox/>
                <label id="hasLimit">Хүссэн хүн оролцож болно</label>
              </div>
              <div className="grid grid-cols-2 gap-8 col-span-2">
                <div>
                  <h1 className="text-black text-sm font-medium">Хандив эхлэх өдөр</h1>
                  <input onChange={dataFromInput} name='startDate'
                    className="w-full border-[#7373ff] border-2 rounded-lg bg-transparent mt-2 p-2 text-black outline-none"
                    type="date"
                  />
                </div>
                <div>
                  <h1 className="text-black text-sm font-medium">Хандив дуусах өдөр</h1>
                  <input onChange={dataFromInput} name='startDate'
                    className="w-full border-[#7373ff] border-2 rounded-lg mt-2 p-2 text-black outline-none bg-transparent"
                    type="date"
                  />
                </div>
              </div>
              <div className="col-span-2">
                  <h1 className="text-black text-sm font-medium">Тайлбар</h1>
                  <textarea
                    placeholder="Дэлгэрэнгүй тайлбар аа бичээрэй..."
                    className="w-full border-[#7373ff] border-2 rounded-lg mt-2 p-2 text-black outline-none bg-transparent"
                    rows={5}
                  />
                </div>
            </div>
          </div>


        </div>
        <div className="py-4 px-32">
          <div className="grid grid-cols-2 gap-10">
              <div className="">
                <h1 className="text-black text-sm font-medium">Хаана болох?</h1>
                <select className="w-full border-[#7373ff] border-2 rounded-lg mt-2  p-2 text-black outline-none bg-transparent">
                  {province.map((province, idx) => <option key={idx} value={province.value}>{province.title}</option>)}
                </select>
              </div>
              <div>
                <h1 className="text-black font-medium">Ямар категори вэ?</h1>
                <div className="border-[#7373ff] border-2 rounded-lg mt-2 flex items-center p-2  ">
                  <input
                    className="w-full text-black outline-none border-none bg-transparent"
                    placeholder="Категори"
                  />
                </div>
              </div>
            {/* <div>
              <h1 className="text-black font-medium">Duration</h1>
              <input
                className="w-full border-[#7373ff] border-2 rounded-lg mt-2 p-2 text-black outline-none"
                placeholder="4h"
              />
            </div> */}
          </div>
          <div className="mt-5">
            <div>
              <UploadImage />
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-black font-medium">Add Goals</h1>
            <Goals setIsGoalsClicked={setIsGoalsClicked} isGoalsClicked={isGoalsClicked} type='donation'/>
          </div>
          <div className="mt-5">
                  <h1 className="text-black text-sm font-medium">Бусдыг татах үг</h1>
                  <textarea
                    placeholder="Тухайн хүнийг яагаад хандив өгөх ёстойг батлах, уран өгүүлбэр бичих..."
                    className="w-full border-[#7373ff] border-2 rounded-lg mt-2 p-2 text-black outline-none bg-transparent"
                    rows={3}
                  />
          </div>
          <div className="text-end group">
             <SaveBtn/>
          </div>

        </div>

      </div>
    </motion.div>
  );
};

export default AddEvent;
