import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-4xl">We hit a brick wall.</h2>
      <p>The page you are looking for does not exist.</p>
      <p>
        Go back to the <Link href="/">dashboard</Link>
      </p>
    </main>
  );
}
