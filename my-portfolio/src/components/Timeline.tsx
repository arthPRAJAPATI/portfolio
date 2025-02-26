"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import roadmapData from "@/data/resume.json";

interface RoadmapItem {
    year: string;
    title: string;
    description: string;
}

export default function Roadmap() {
    const [data, setData] = useState<RoadmapItem[]>([]);
    var lineLength = 0;

    useEffect(() => {
        setData(roadmapData.Roadmap);
    }, []);

    return (
        <section className="timeline">
            <svg viewBox="0 0 80 50" xmlns="http://www.w3.org/2000/svg">
                {roadmapData.Roadmap.map((x) => (
                    <g key={x.id}> 
                    <circle key={x.id} cx="8" cy={x.id * 10 - 8} r="2" fill="white" />
                        <text
                            x="12"
                            y={(x.id * 10) - 7}
                            fill="white"
                            fontSize="2"
                            textAnchor="start"
                        >
                            {x.year}
                        </text>
                        <text
                            x="18"
                            y={(x.id * 10) - 7}
                            fill="white"
                            fontSize="2"
                            textAnchor="start"
                        >
                            {x.title}
                        </text>
                        <text
                            x="18"
                            y={(x.id * 10) - 4}
                            fill="white"
                            fontSize="1.5"
                            textAnchor="start"
                        >
                            {x.description}
                        </text>
                    </g>
                ))}
                <line x1="8" y1="0" x2="8" y2={(roadmapData.Roadmap.length * 10) - 8} stroke="white" />
            </svg>
            
        </section>
    );
}
