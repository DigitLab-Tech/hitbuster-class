import CustomersTable from "@/components/CustomersTable";
import { cookies } from "next/headers";
import Link from "next/link";

export default function Home() {
  const access = cookies().get("access");

  return (
    <main className="px-6 w-full h-screen grid items-center justify-items-center">
      <div className="grid justify-items-center gap-3">
        <h1 className="fw-bold text-7xl">HitBuster</h1>
        <Link href="/login">Login</Link>
      </div>
    </main>
  );
}
