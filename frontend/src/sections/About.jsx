import SectionTitle from "../components/SectionTitle";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="min-h-screen flex items-center justify-center bg-white text-black px-6 py-20"
      >
        <div className="max-w-4xl text-center">
          <SectionTitle
            title="About Me"
            subtitle="Who I am and what I love to build"
          />
          <p className="text-lg leading-relaxed">
            I'm Prem Poudel, a backend-focused developer with strong experience
            in building scalable APIs using Django REST Framework. While my core
            strength lies in web development with Django, I'm actively learning
            Machine Learning and AI to broaden my impact as a developer. My
            portfolio highlights real-world, data-driven applications, and I'm
            driven by the vision of building innovative tech solutions with
            long-term value and entrepreneurial purpose.
          </p>
        </div>
      </section>
    </>
  );
}
