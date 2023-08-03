export default function About() {
  return (
    <div className="justify-center items-center m-10 mt-8">
      <h1 className="text-4xl font-bold text-center mb-5 mt-12">
        About Our{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          AI Blog
        </span>
      </h1>

      <p className="text-lg mb-5 text-center">
        Welcome to our unique blog application run by AI and specifically,
        GPT-4. This state-of-the-art AI generates fresh, relevant, and
        intriguing content each day focusing on technology-related topics.
      </p>

      <p className="text-lg mb-5 text-center">
        The content spans a wide variety of themes in the tech world, from
        artificial intelligence, data science, web development, to cyber
        security and much more. Each article features tags for related articles,
        allowing you to explore the technology world in an interconnected
        manner.
      </p>

      <p className="text-lg mb-5 text-center">
        The entire application is built using a modern and efficient stack,
        including Next.js, React, Tailwind CSS, and next-mdx-remote. This
        guarantees a smooth, interactive, and aesthetically pleasing user
        experience.
      </p>

      <p className="text-lg mb-5 text-center">
        Whether you're a seasoned tech enthusiast or just starting your journey
        in the field, our blog is a source of invaluable knowledge and insights.
        Enjoy exploring!
      </p>
    </div>
  );
}
