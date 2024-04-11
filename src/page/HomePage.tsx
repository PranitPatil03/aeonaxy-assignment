/* eslint-disable @typescript-eslint/no-unused-vars */
import Info from "@/components/Info";
import Interest from "@/components/Interest";
import Last from "@/components/Last";
import Quote from "@/components/Quote";
import Select from "@/components/Select";
import UserProfile from "@/components/UserProfile";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";

export default function Home() {
  const pages: React.ReactNode[] = [
    <UserProfile />,
    <Interest />,
    <Info />,
    <Select />,
    <Quote />,
    <Last />,
  ];

  const [progressValue, setProgressValue] = useState(20);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [showPrevIcon, setShowPrevIcon] = useState(false);

  const handlePageChange = () => {
    setProgressValue((prev) => prev + 20);

    if (currentPageIndex < pages.length - 1) {
      setCurrentPageIndex((prevIndex) => prevIndex + 1);
    }
    setShowPrevIcon(true);
  };

  const handlePrevPage = () => {
    if (progressValue > 0) {
      setProgressValue((prev) => prev - 20);

      if (currentPageIndex > 0) {
        setCurrentPageIndex((prevIndex) => prevIndex - 1);
      } else {
        setShowPrevIcon(false);
      }
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="flex gap-3 w-full items-center justify-center h-6">
          {showPrevIcon ? (
            <ChevronLeftIcon
              className="w-6 h-6 font-bold"
              onClick={handlePrevPage}
            ></ChevronLeftIcon>
          ) : (
            ""
          )}
          <Progress value={progressValue} className="h-1" />
        </div>

        {pages[currentPageIndex]}

        <div className="">
          <Button onClick={handlePageChange}>Continue</Button>
        </div>
      </div>
    </>
  );
}
