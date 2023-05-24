import React, { useState } from "react";
import ColorRegex from "./ColorRegex";
import SelectSize from "./SelectSize";
import Goals from "./Goals";
import UploadImage from "./UploadImages";
import CheckDonation from "./CheckDonation";
import {motion} from 'framer-motion'
import { province } from "@/data/home/category";
import SaveBtn from "./SaveBtn";

const AddProduct = () => {
  const [isColorClicked, setIsColorClicked] = useState(false);
  const [isSizeClicked, setIsSizeClicked] = useState(false)
  const [isGoalsClicked, setIsGoalsClicked] = useState(false)
  const [isClickedUploadImg, setIsClickedUploadImg] = useState(false);



  const [addProductData, setAddProductData] = useState({})
  function dataFromInput (e : any){
    const obj :any = {};
                
    const {name, value} = e.target;
    console.log(name, value)
    obj[name] = value;
    setAddProductData({...addProductData, ...obj })
  }

  return (
    <motion.div onClick={()=>{
      setIsSizeClicked(false)
      setIsGoalsClicked(false)
      setIsColorClicked(false)
      setIsClickedUploadImg(false)
    }} initial={{scale:0.99, opacity :0, y:-100}} animate={{scale:1, opacity:1,y:0}} >
      <div className="grid grid-cols-3">
        <div className="p-8">
          <div>
            <h1 className="text-black text-sm font-medium">Бүтээгдэхүүний нэр</h1>
            <input placeholder="Бүтээгдэхүүний нэр ээ оруулна уу..." onChange={dataFromInput} name='title' className="w-full border-[#7373ff] bg-transparent border-2 rounded-lg mt-2 p-2 text-black outline-none" />
          </div>
          <div className="mt-5">
            <h1 className="text-black text-sm font-medium">Юуны тухай пост вэ?</h1>
            <textarea
            placeholder="Сайн дурын ажилгааныхаа товч танилцуулага аа бичнэ үү..."
            onChange={dataFromInput}
              name='aboutUs'
              className="w-full border-[#7373ff] border-2 bg-transparent rounded-lg mt-2 p-2 text-black outline-none"
              rows={3}
            />
          </div>
          <div className="mt-5">
            <div className="grid grid-cols-2 gap-10">

              <div>
                <h1 className="text-black text-sm font-medium">Start Date</h1>
                <input onChange={dataFromInput} name='startDate'
                  className="w-full border-[#7373ff] border-2 rounded-lg bg-transparent mt-2 p-2 text-black outline-none"
                  type="date"
                />
              </div>
              <div>
                <h1 className="text-black text-sm font-medium">End Date</h1>
                <input onChange={dataFromInput} name='startDate'
                  className="w-full border-[#7373ff] border-2 rounded-lg mt-2 p-2 text-black outline-none bg-transparent"
                  type="date"
                />
              </div>
              <div>
                <h1 className="text-black text-sm font-medium">Үнэ</h1>
                <div className="border-[#7373ff] border-2 rounded-lg mt-2 flex items-center p-2 ">
                  <input 
                        placeholder="Үнэ"
                        onChange={dataFromInput} name='unit_amount' className="w-full text-black outline-none border-none bg-transparent" />
                  <span className="text-black font-medium">₮</span>
                </div>
              </div>
              <div>
                <h1 className="text-black text-sm font-medium">Ямар категори вэ?</h1>
                <div className="border-[#7373ff] border-2 rounded-lg mt-2 flex items-center p-2 ">
                  <input 
                        placeholder="Категори"
                        onChange={dataFromInput} name='category' className="w-full text-black outline-none border-none bg-transparent" />
                  {/* <span className="text-black font-medium">₮</span> */}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div className="grid grid-cols-2 gap-8">
               <div>
                <p className="text-black text-sm font-medium">Бүтээгдэхүүний өнгө</p>
                <ColorRegex setIsColorClicked={setIsColorClicked} isColorClicked={isColorClicked} />
              </div> 
              <div>
                <h1 className="text-black text-sm font-medium">Хэмжээ</h1>
                <SelectSize setIsSizeClicked={setIsSizeClicked} isSizeClicked={isSizeClicked} />
              </div>
            </div>
            <div className="mt-4">
              <h1 className="text-black text-sm font-medium">Зорилт</h1>
              <Goals setIsGoalsClicked={setIsGoalsClicked} isGoalsClicked={isGoalsClicked} type='payment' />
            </div>
          </div>
        </div>
        <div className="p-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="">
              <h1 className="text-black text-lg font-medium">Хаана болох?</h1>
              <select className="w-full border-[#7373ff] border-2 rounded-lg mt-2  p-2 text-black outline-none bg-transparent">
                {province.map((province, idx) => <option key={idx} value={province.value}>{province.title}</option>)}
              </select>
            </div>
            <div className="">
              <h1 className="text-black text-lg font-medium">Тоо хэмжээ</h1>
              <input    
                        
                        placeholder="21"
                        onChange={dataFromInput} name='category' 
                        className="w-full border-[#7373ff] border-2 rounded-lg mt-2  p-[6px_8px] text-black outline-none bg-transparent" />
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-black text-lg font-medium">Тайлбар</h1>
            <textarea
              placeholder="Дэлгэрэнгүй тайлбар аа бичээрэй..."
              className="w-full border-[#7373ff] border-2 rounded-lg mt-2 p-2 text-black outline-none bg-transparent"
              rows={5}
            />
          </div>
          <div className="mt-5">
            <UploadImage setIsClickedUploadImg={setIsClickedUploadImg} isClickedUploadImg={isClickedUploadImg} />
          </div>
        </div>
        <div className="p-8">
          <CheckDonation />
      <div className="text-end mt-10 group">
        <SaveBtn/>
      </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AddProduct;
