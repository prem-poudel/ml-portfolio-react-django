export default function Hero() {
  const blogs = [
    // { title: "How I Built My First ML Model", link: "#" },
    // { title: "React + Django: Fullstack Synergy", link: "#" },
    // { title: "Top 5 AI Tools in 2025", link: "#" },
    {title: "Still in Development", link: "#"},
  ];

  return (
<section
  id="hero"
  className="min-h-screen px-6 md:px-16 py-12 text-black flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 max-w-7xl mx-auto"
>

      {/* Hero Content */}
      <div className="flex-1 text-center md:text-left space-y-6 max-w-full md:max-w-none mt-16 md:mt-0">
  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
    Hi, I'm{" "}
    <span
      className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400"
      style={{
        backgroundSize: "200% auto",
        animation: "shine 3s linear infinite",
        display: "inline-block",
      }}
    >
      Prem Poudel
    </span>
  </h1>
  <p className="text-lg md:text-2xl text-gray-700 max-w-xl mx-auto md:mx-0">
    Django REST Developer | Aspiring ML/AI Engineer | Entrepreneurial Technologist
  </p>
  <a
    href="#projects"
    className="inline-block px-6 py-3 bg-teal-600 text-white rounded-full shadow hover:bg-teal-700 transition-all text-base font-medium"
  >
    🚀 View My Work
  </a>
</div>


      {/* Blog Aside */}
      <aside className="flex-1 w-full max-w-md bg-gray-50 p-6 rounded-3xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
          📚 Latest Blog Posts
        </h2>
        <ul className="space-y-4">
          {blogs.map((blog, index) => (
            <li key={index}>
              <a
                href={blog.link}
                className="block text-lg font-medium text-teal-700 hover:text-teal-900 transition"
              >
                {blog.title}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}
