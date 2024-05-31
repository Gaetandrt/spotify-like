"use client"

import { Play, StepBack, StepForward } from "lucide-react";
import React from "react";
import TimeSlider from "./TimeSlider";
import Image from "next/image";

const PlayerBar = () => {
    const [currentSeconds, setCurrentSeconds] = React.useState<number[]>([0])
    return (
        <div className="fixed bottom-0 w-full bg-[#1B191F] p-4 border-t border-gray-500">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 flex-1">
                    <Image src="/playlist-default.jpg" alt="Album Art" width={48} height={48} />
                    <div>
                        <p className="text-white text-sm">Titre de la chanson</p>
                        <p className="text-gray-400 text-xs">Nom de l'artiste</p>
                    </div>
                </div>
                <div className="flex flex-col items-center space-x-4 flex-1 gap-3">
                    <div className="flex items-center space-x-4">
                        <button className="text-white">
                            <StepBack />
                        </button>
                        <button className="text-white">
                            <Play />
                        </button>
                        <button className="text-white">
                            <StepForward />
                        </button>
                    </div>
                    <div className="w-full h-2 rounded-md">
                        <TimeSlider totalSeconds={100} currentSeconds={currentSeconds} onValueChange={setCurrentSeconds} />
                    </div>
                </div>
                <div className="flex-1">

                </div>
            </div>
        </div>
    );
};

export default PlayerBar;