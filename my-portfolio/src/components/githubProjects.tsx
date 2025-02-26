"use client";
import { useEffect, useState } from "react";

interface Repo {
    id: number;
    name: string;
    html_url: string;
    description: string;
    language: string;
}

export default function GithubRepos() {
    const [repos, setRepos] = useState<Repo[]>([]);
    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch("/api/github");
                console.log("dreseponsea", response);
                const data = await response.json();
                console.log("dataatata", data);
                setRepos(data);
            } catch (error) {
                console.error("Failed to fetch repositories", error);
            }
        };

        fetchRepos();
    }, []);

    return (
        <section className="project-grid">
            {
                repos.map((x) => (
                    <div key={x.id} className="card-border">
                            <p className="project-title">{x.name}</p>
                            <p className="project-desc">
                                {x.description}
                            </p>                        
                            <p className="language-pill">{x.language}</p>
                    </div>
                ))
            }
        </section>
    )

}