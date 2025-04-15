import CustomersTable from "@/components/CustomersTable";
import { cookies } from "next/headers";

export default function Home() {
  return (
    <main className="px-6 w-full">
      <CustomersTable access={""} />
    </main>
  );
}
