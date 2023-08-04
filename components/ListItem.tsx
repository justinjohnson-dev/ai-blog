import Link from "next/link";
import { getFormattedGitHubDate } from "@/lib/getFormattedDate";
import { forwardRef } from "react";

type Props = {
  post: Meta;
};

const ListItem = forwardRef<HTMLLIElement, Props>(({ post }, ref) => {
  const { id, title, description, date } = post;
  const formattedDate = getFormattedGitHubDate(date);

  return (
    <li className="pl-0 mt-4 text-2xl dark:text-white/90" ref={ref}>
      <Link
        className="underline hover:text-black/70 dark:hover:text-white"
        href={`/posts/${id}`}
      >
        {title}
      </Link>
      <br />
      <p className="text-sm mt-1 font-semibold text-gray-500 dark:text-gray-400">
        {description}
      </p>
      <p className="text-sm mt-1">{formattedDate}</p>
    </li>
  );
});

ListItem.displayName = "ListItem";

export default ListItem;
