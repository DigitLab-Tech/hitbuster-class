import Person from "@/models/Person";
import LoginForm from "./LoginForm";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex justify-center items-center">
      <div className="space-y-3">
        <h1 className="text-xl font-bold">Login</h1>
        <LoginForm />
        <div>
          <h3 className="text-lg font-bold">Read</h3>
          <p>Usercode: USR002</p>
          <p>Password: securePass456</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Write</h3>
          <p>Usercode: USR001</p>
          <p>Password: password123</p>
        </div>
      </div>
    </main>
  );
}
