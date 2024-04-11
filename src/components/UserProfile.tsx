import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

import {
  Student,
  Leaner,
  Other,
  Parent,
  Professional,
  Teacher,
} from "@/assets";

const data = [
  {
    name: "Student",
    icon: Student,
    description: " or soon to be enrolled",
  },
  {
    name: "Professional",
    icon: Professional,
    description: " pursuing a career",
  },
  {
    name: "Parent",
    icon: Parent,
    description: " of a school-age child",
  },
  {
    name: "Lifelong Learner",
    icon: Leaner,
  },
  {
    name: "Teacher",
    icon: Teacher,
  },
  {
    name: "Other",
    icon: Other,
  },
];

const UserProfile = ({ onCardSelection }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    onCardSelection(true);
  };

  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center font-mono">
        <h1 className="text-4xl font-semibold">Which describes you best?</h1>
        <p className="text-lg">This will help us personalize your experience</p>

        {data.map((icon, index) => (
          <button
            key={index}
            onClick={() => handleCardClick(icon.icon)}
            className={`hover:outline-[#EADECB] hover:shadow-sm ${
              selectedCard === icon.icon ? "border-[#EADECB]" : ""
            }`}
          >
            <Card
              className={`w-[700px] mt-${index === 0 ? "10" : "0"} ${
                selectedCard === icon.icon ? "border-2 border-[#EADECB]" : ""
              }`}
            >
              <CardContent className="flex items-center gap-5">
                <img src={icon.icon} alt="icon" className="w-14 h-14" />
                <p className="font-mono text-xl font-semibold">
                  {icon.name}
                  <span className="font-thin text-neutral-400">
                    {icon.description}
                  </span>
                </p>
              </CardContent>
            </Card>
          </button>
        ))}
      </div>
    </>
  );
};

export default UserProfile;
