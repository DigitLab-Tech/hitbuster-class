import CustomersTable from "@/components/CustomersTable";
import { cookies } from "next/headers";

export default function Home() {
  const access = cookies().get("access");

  return (
    <main className="px-6 w-full">
      <CustomersTable access={access?.value ?? ""} />
    </main>
  );
}
