import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function PostSkeleton() {
  return (
    <SkeletonTheme baseColor="#eee" highlightColor="#444">
      {[...Array(3)].map((_, i) => (
        <li key={i} className="pl-0 mt-4 text-2xl dark:text-white/90 list-none">
          <p className="underline hover:text-black/70 dark:hover:text-white">
            <Skeleton height={50} />
          </p>
          <p className="text-sm mt-1 font-semibold text-gray-500 dark:text-gray-400">
            <Skeleton height={50} />
          </p>
          <p className="text-sm mt-1">
            <Skeleton />
          </p>
        </li>
      ))}
    </SkeletonTheme>
  );
}
