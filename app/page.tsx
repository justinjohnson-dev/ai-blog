import Posts from "@/components/Posts";

export const revalidate = 86400;

export default function Home() {
  return (
    <div className="mx-auto">
      <h1 className="mb-4 text-5xl font-extrabold text-gray-900 dark:text-white md:text-6xl lg:text-6xl mt-10">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Welcome
        </span>{" "}
        to the AI Tech Blog.
      </h1>
      <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        Discover the future today with our AI-driven blog! Cutting-edge insights
        on tech, powered by GPT-4, delivered daily.
      </p>
      <Posts />
    </div>
  );
}
