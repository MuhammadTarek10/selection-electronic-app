import Link from "next/link";

export const NavButton = ({ name, url, color }: { name: string; url: string; color?: string }) => {
  const realColor = color || "teal";
  return (
    <li className="mb-4">
      <Link href={url}>
        <p className={`bg-${realColor}-500 hover:bg-${realColor}-700 transition-colors px-4 py-2 rounded-lg text-center`}>{name}</p>
      </Link>
    </li>
  );
};
