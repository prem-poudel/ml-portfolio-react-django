export default function Hero() {
    return (
        <>
        <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center text-black text-center"
        >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Prem Poudel</h1>
      <p className="text-xl md:text-2xl mb-6 max-w-xl">
        Aspiring ML/AI Engineer · React & Django Developer · Entrepreneurial Thinker
      </p>
      <a
        href="#projects"
        className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-2xl shadow-md transition-all"
      >
        View My Work
      </a>
        </section>
        </>
    )
}