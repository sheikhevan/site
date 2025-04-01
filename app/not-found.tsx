import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-center">Page Not Found</h2>
      <Link href="/">Go Back Home</Link>
    </div>
  );
}
