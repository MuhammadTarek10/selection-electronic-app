import Link from "next/link";

export default async function Home() {
  return (
    <div className="h-screen w-screen bg-home bg-cover flex flex-col justify-center items-end p-6 gap-4">
      <h1 className="text-5xl text-white font-bold">الانتقاء والتوجيه</h1>
      <Link href="/dashboard">
        <button className="text-2xl px-4 py-2 bg-teal-500 hover:bg-teal-700 transition-colors rounded-lg">ابدأ الآن</button>
      </Link>
    </div>
  );
}
