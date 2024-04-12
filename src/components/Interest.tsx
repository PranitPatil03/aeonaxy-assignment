import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

import { Graph, Earth, Target, Something, Math } from "@/assets";

const data = [
  {
    name: "Graph",
    icon: Graph,
    description: " Leaning specific skills to advance my career",
  },
  {
    name: "Earth",
    icon: Earth,
    description: " Exploring new topic's I'm interested in",
  },
  {
    name: "Math",
    icon: Math,
    description: " Refreshing my math foundations",
  },
  {
    name: "Target",
    icon: Target,
    description: " Exercising my brain to stay sharp",
  },
  {
    name: "Something",
    icon: Something,
    description: " Something else",
  },
];

const Interest = ({ onCardSelection }) => {
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

                  {icon.description}
                </p>
              </CardContent>
            </Card>
          </button>
        ))}
      </div>
    </>
  );
};

export default Interest;
