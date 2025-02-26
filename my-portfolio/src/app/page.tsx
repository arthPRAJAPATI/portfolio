import data from "@/data/resume.json";
import GithubRepos from "@/components/githubProjects";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <div className="home-page">
      <div className="main-container">
        <section className="title">
          <h1 className="text-8xl">{data.Name.First}</h1>
          <h1 className="text-8xl">{data.Name.Last}</h1>
          <h2 className="text-7xl opacity-50">{data.Description}</h2>
        </section>
        <section className="summary">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos doloremque nobis perspiciatis, pariatur culpa sit fuga natus voluptas similique. Quisquam maxime distinctio laborum, suscipit qui beatae vel dolorem laudantium sint.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, consequatur cum harum quis quidem laudantium debitis veritatis laborum aperiam inventore dolores a deleniti aliquam error? Facilis ex consectetur ullam quo!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid eius omnis saepe dolore blanditiis id aliquam veniam voluptatibus, illo tenetur earum minima unde architecto quasi eum corporis. Aperiam, dolorum nulla!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quo minus commodi, quia ipsum beatae totam maiores quaerat distinctio esse enim quod ipsa, assumenda mollitia a, iure obcaecati magnam nostrum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur cumque voluptatum officiis. Cum omnis et a cumque, quod iure hic ullam iusto autem quo officiis sed consectetur quos illo?
          </p>
        </section>
      </div>
      <div className="roadmap">
        <Timeline />
        <Skills />
      </div>
      <div className="project-container">
        <GithubRepos />
      </div>
    </div>
  );
}
