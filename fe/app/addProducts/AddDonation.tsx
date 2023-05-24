import React, { useEffect, useState } from "react";
import {motion} from 'framer-motion'
import UploadImage from "./UploadImages";
import Goals from "./Goals";
import { province } from "@/data/home/category";
import { useDashboardType } from "@/context/dashboard";
import SaveBtn from "./SaveBtn";

const AddDonation = () => {
  const {addProductAndDonationEvent, setAddProductAndDonationEvent, setPrevDashboardTypeState, dashboardTypeState} = useDashboardType()
  const [addDonationData, setAddDonationData] = useState({})
  const [ isGoalsClicked, setIsGoalsClicked] = useState(false)

  function dataFromInput (e : any){
    const obj :any = {};
    
    
    const {name, value} = e.target;
    console.log(name, value)
    obj[name] = value;
    setAddDonationData({...addDonationData, ...obj })
  }

  // useEffect(()=>{
  //   setPrevDashboardTypeState('donation')
  // },[dashboardTypeState])

  return (
    <motion.div onClick={()=>{
      setIsGoalsClicked(false)
    }} initial={{scale:0.99, opacity :0, y:-100}} animate={{scale:1, opacity:1,y:0}} >
      <div className="grid grid-cols-6 gap-8 ">
        <div className="py-4 col-span-2">
          <div>
            <h1 className="text-black text-sm font-medium">Бүтээгдэхүүний нэр</h1>
            <input placeholder="Бүтээгдэхүүний нэр ээ оруулна уу..." onChange={setAddProductAndDonationEvent} name='title' className="w-full border-[#7373ff] bg-transparent border-2 rounded-lg mt-2 p-2 text-black outline-none" />
          </div>
          <div className="mt-5">
            <h1 className="text-black text-sm font-medium">Юуны тухай пост вэ?</h1>
            <textarea
            placeholder="Хандивын хүсэлтйин товч танилцуулага аа бичнэ үү..."
            onChange={setAddProductAndDonationEvent}
              name='aboutUs'
              className="w-full border-[#7373ff] border-2 bg-transparent rounded-lg mt-2 p-2 text-black outline-none"
              rows={3}
            />
          </div>
          <div className="mt-5 flex flex-col gap-5">
              <div>
                <h1 className="text-black text-sm font-medium">Хэр их тусламж авах хэмжээ</h1>
                <div className="border-[#7373ff] border-2 rounded-lg mt-2 flex items-center p-2 ">
                  <input
                    type='number'
                    name='goal'
                    className="w-full text-black outline-none border-none bg-transparent"
                    placeholder="Тусламжийн дээд утга"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h1 className="text-black text-sm font-medium">Хандив эхлэх өдөр</h1>
                  <input onChange={setAddProductAndDonationEvent} 
                    name='startDate'
                    className="w-full border-[#7373ff] border-2 rounded-lg bg-transparent mt-2 p-2 text-black outline-none"
                    type="date"
                  />
                </div>
                <div>
                  <h1 className="text-black text-sm font-medium">Хандив дуусах өдөр</h1>
                  <input onChange={setAddProductAndDonationEvent} 
                    name='endDate'
                    className="w-full border-[#7373ff] border-2 rounded-lg mt-2 p-2 text-black outline-none bg-transparent"
                    type="date"
    
                  />
                </div>
              </div>
            
          </div>
        </div>

          <div className="py-4 col-span-2 grid grid-cols-2">
            <div className="grid grid-cols-2 gap-10 col-span-2">
              <div className="">
                <h1 className="text-black text-sm font-medium">Хаана болох?</h1>
                <select name="location" onChange={setAddProductAndDonationEvent}  className="w-full border-[#7373ff] border-2 rounded-lg mt-2  p-2 text-black outline-none bg-transparent">
                  {province.map((province, idx) => <option key={idx} value={province.value}>{province.title}</option>)}
                </select>
              </div>
              <div className="">
                <h1 className="text-black text-sm font-medium">Ямар категори вэ?</h1>
                <select name="category" onChange={setAddProductAndDonationEvent} className="w-full border-[#7373ff] border-2 rounded-lg mt-2  p-2 text-black outline-none bg-transparent">
                  {province.map((province, idx) => <option key={idx} value={province.value}>{province.title}</option>)}
                </select>
              </div>
            </div>
            
            <div className="col-span-2">
              <UploadImage />
            </div>


          </div>

            <div className="col-span-2">
                <div className="mt-5">
                  <h1 className="text-black text-sm font-medium">Тайлбар</h1>
                  <textarea
                    placeholder="Дэлгэрэнгүй тайлбар аа бичээрэй..."
                    onChange={setAddProductAndDonationEvent}
                    name="description"
                    className="w-full border-[#7373ff] border-2 rounded-lg mt-2 p-2 text-black outline-none bg-transparent"
                    rows={5}
                  />
                </div>
                <div className="mt-5">
                  <h1 className="text-black text-sm font-medium">Бусдыг татах үг</h1>
                  <textarea
                    onChange={setAddProductAndDonationEvent}
                    name='quotes'
                    placeholder="Тухайн хүнийг яагаад хандив өгөх ёстойг батлах, уран өгүүлбэр бичих..."
                    className="w-full border-[#7373ff] border-2 rounded-lg mt-2 p-2 text-black outline-none bg-transparent"
                    rows={3}
                  />
                </div>
                <div className="mt-5">
                  <h1 className="text-black text-sm font-medium">Цугларсан хандиваар юу хийх вэ?</h1>
                  <Goals setIsGoalsClicked={setIsGoalsClicked} isGoalsClicked={isGoalsClicked} type='donation'/>
                </div>
                <div className="text-end mt-10 group">
                    <SaveBtn/>
                </div>
            </div>



      </div>

    </motion.div>
  );
};

export default AddDonation;
