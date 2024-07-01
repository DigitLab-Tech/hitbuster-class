import Person from "@/models/Person";
import LoginForm from "./LoginForm";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex justify-center items-center">
      <div className="space-y-3">
        <h1 className="text-xl font-bold">Login</h1>
        <LoginForm />
      </div>
    </main>
  );
}
