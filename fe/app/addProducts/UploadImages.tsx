import { useDashboardType } from "@/context/dashboard";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const UploadImage = ({isClickedUploadImg, setIsClickedUploadImg} : any) => {

  const {setFilesInAddProduct} = useDashboardType()

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      let newArr = [...selectedFiles];
      newArr[index] = file;
      setSelectedFiles(newArr);
      // console.log(newArr);
      const obj = {carouselImg : [...newArr]}
      setFilesInAddProduct(obj)
    }
  };

  const handleDelete = (index: number) => {
    let newArr = [...selectedFiles];
    newArr.splice(index, 1);
    setSelectedFiles(newArr);
    console.log(newArr)
    const obj = {carouselImg : [...newArr]}
    setFilesInAddProduct(obj)
  };
  const handleViewImages = () => {
    setIsClickedUploadImg(true);
  };

  const handleCloseModal = () => {
    setIsClickedUploadImg(false);
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-black text-lg font-medium">Зураг оруулах</h1>
        <button
          className="text-slate-700 border-b-2 border-[#7373ff] "
          onClick={(e)=>{
            e.stopPropagation()
            handleViewImages()
          }}
        >
          Зургуудаа харах
        </button>
      </div>
      <div className="border-dashed border-2 border-[#7373ff] w-full h-[30vh] flex justify-center items-center mt-2 rounded-lg">
        <span className="text-[#7373ff]">
          <svg
            className="w-8 h-8 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <span className="mt-2">Upload Image</span>
        </span>
        <input
          
          type="file"
          className="opacity-0 w-40 h-40 absolute"
          onChange={(e) => handleFileChange(e, selectedFiles.length)}
        />
      </div>

      <div className="mt-4">
        <AnimatePresence>
          {selectedFiles.map((file, index) => (
            <motion.div initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} exit={{opacity:0, y : 10}} key={index}>
              <div
                key={index}
                className="flex items-center bg-indigo-300 w-full justify-between mt-2 p-2 rounded-md"
              >
                <span>{file.name}</span>
                <button
                  className="ml-2 text-red-500"
                  onClick={() => handleDelete(index)}
                >
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/windows/32/trash.png"
                    alt="trash"
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {isClickedUploadImg && (
          <motion.div onClick={(e:any)=>e.stopPropagation()} initial={{opacity:0, scale:0.4}} animate={{opacity:1, scale:1}} exit={{opacity:0, y:20}} className="fixed inset-0 flex items-center justify-center">
            <div className="bg-white shadow-md border shadow-[#7373ff] w-1/2 h-1/2 p-8 rounded-lg">
              <div className="flex justify-between">
                <h1 className="text-black text-xl font-medium">Upload Images</h1>
                <button
                  className="bg-[#7373ff] hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
                  onClick={handleCloseModal}
                >
                  X
                </button>
              </div>
              <div className="flex flex-wrap gap-4 mt-5">
                {selectedFiles.map((file, index) => (
                  <motion.div initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} key={index} className="mb-2">
                    <motion.img
                      initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}}
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      className="w-20 h-20"
                    />
                    <span className="mt-2">{file.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UploadImage;
