import SectionTitle from "../components/SectionTitle";

export default function About() {
    return (
        <>
         <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-white text-black px-6 py-20"
    >
      <div className="max-w-4xl text-center">
        <SectionTitle title="About Me" subtitle="Who I am and what I love to build" />
        <p className="text-lg leading-relaxed">
          I'm a passionate learner with a deep interest in Machine Learning, AI, and full-stack
          development. I build projects using React and Django, and I'm currently working on a
          portfolio that showcases my skills in data-driven applications. My goal is to create
          impactful tech solutions and grow into a highly skilled ML/AI engineer.
        </p>
      </div>
    </section>
        </>
    )
}