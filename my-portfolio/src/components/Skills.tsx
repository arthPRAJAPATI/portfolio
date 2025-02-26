"use client"
import { useEffect, useState } from "react";
import SkillList from "@/data/resume.json";
import { h2 } from "framer-motion/client";

interface SkillSet {
    title: string,
    description: string
}

export default function name() {
const [skills, setData] = useState<SkillSet[]>([]);

    useEffect(() => {
        setData(SkillList.Skills);
    }, []);

    return (
        <section>
            {
                skills.map((x, index) => (
                    <div key={index} className="skillsDiv">
                    <h2> {x.title}</h2>
                    <h3>{x.description}</h3>
                    </div>
                ))
            }
        </section>
    )
}