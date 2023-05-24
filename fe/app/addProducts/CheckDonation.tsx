import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

interface DonateItem {
  title: string;
  description: string;
  reached: number;
  img: string;
}

const donate: DonateItem[] = [
  {
    title: "alnadaa",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates earum impedit, dolore, voluptatibus quos, delectus amet distinctio pariatur consectetur consequuntur nobis repellendus quasi omnis unde veritatis perferendis corrupti repellat esse.",
    reached: 20000,
    img: "data:image/jpeg;base64,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",
  },
  {
    title: "Donation",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates earum impedit, dolore, voluptatibus quos, delectus amet distinctio pariatur consectetur consequuntur nobis repellendus quasi omnis unde veritatis perferendis corrupti repellat esse.",
    reached: 10000,
    img: "data:image/jpeg;base64,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",
  },
];

const CheckDonation: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [selectedDonation, setSelectedDonation] = useState<DonateItem | null>(
    null
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    setSelectedDonation(null);
  };

  const handleDonationClick = (donation: DonateItem) => {
    setSelectedDonation(donation);
  };

  const filteredDonations = searchInput
  // ireh postuudiin type donation deer filterdeh!!!
    ? donate.filter((donation) =>
        donation.title.toLowerCase().includes(searchInput.toLowerCase())
      )
    : [];

  return (
    <div>
      <h1 className="text-black text-sm font-medium">Ямар нэг хандивын постнд хамаарах уу?</h1>
      <div>
        <input
          type="text"
          placeholder="Постны нэрээр хайх..."
          className="w-full border-[#7373ff] border-2 rounded-lg mt-2 p-2 text-black outline-none bg-transparent"
          value={searchInput}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <AnimatePresence>
        {selectedDonation ? (
          <motion.div initial={{opacity:0, y: -100}} animate={{opacity:1, y:0}} exit={{opacity:0}} className="w-full mt-5 flex flex-col gap-4">

            <img
              src={selectedDonation.img}
              alt={selectedDonation.title}
              className="rounded-lg w-full h-[30vh] mt-2"
            />
            <h2 className="text-start text-xl font-medium">
              {selectedDonation.title}
            </h2>
            <p className="text-indigo-700 text-base font-medium">
              Reached: {selectedDonation.reached}
            </p>
            <div className="mt-5">
              <input type="radio" />
              <label className="text-base ms-2">Цугларсан мөнгийг бүрэн уг хандивын постод өгнө </label>
            </div>
          </motion.div>
        ) : filteredDonations.length > 0 ? (
          filteredDonations.map((donation: any) => (
            <motion.div 
            initial={{opacity:0, y: -100}} animate={{opacity:1, y:0}} exit={{opacity:0}}
              key={donation.title}
              onClick={() => handleDonationClick(donation)}
              style={{ cursor: "pointer" }}
            >
              <h2 className="text-slate-700 text-base">{donation.title}</h2>
            </motion.div>
          ))
        ) : filteredDonations.length == 0 ? (
          <motion.p initial={{scale:0.7, opacity:0}} animate={{scale:1, rotateZ:0, opacity:1}} className="text-slate-700 text-sm">Хайлт олдсонгүй...</motion.p>
        ) : ''}
        </AnimatePresence>
      </div>
      
    </div>
  );
};

export default CheckDonation;
