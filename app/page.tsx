import DatePicker from "@/app/(shared)/date-picker";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen  items-center justify-center p-24 bg-gray-100 w-full">
      <DatePicker />
    </main>
  );
}
