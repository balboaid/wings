import Card from "./components/Card";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#F5F7FA]">
      <h1>VERSION 2 - TEST LIVE</h1>;
      <Sidebar />

      <section className="flex-1 px-12 py-10 overflow-y-auto">
        <Header />

        <div className="grid grid-cols-3 gap-6 mt-10">
          <Card className="col-span-2">
            <h3 className="title-red font-semibold mb-3">Daily Goal</h3>
            <div className="w-full bg-gray-200 h-3 rounded-full">
              <div
                className="h-3 bg-green-500 rounded-full"
                style={{ width: "100%" }}
              />
            </div>
            <p className="mt-2 text-sm text-gray-600">20 / 20 XP</p>
          </Card>

          <Card>
            <h3 className="title-red font-semibold mb-3">Today's Streak</h3>
            <p className="text-3xl font-bold text-orange-500">🔥 12</p>
          </Card>
        </div>

        <Card className="mt-10">
          <h3 className="title-red font-semibold mb-4 text-lg">Continue Learning</h3>

          <div className="p-5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white">
            <p className="text-sm opacity-90">Unit 3</p>
            <h4 className="text-xl font-semibold">Business Meetings</h4>
            <p className="text-sm opacity-90 mt-1">Lesson 2 of 6</p>

            <div className="w-full bg-white/40 h-2 rounded-full mt-4">
              <div
                className="h-2 bg-white rounded-full"
                style={{ width: "60%" }}
              />
            </div>

            <Link href="/lesson">
              <button className="mt-4 bg-white text-indigo-600 font-semibold px-4 py-2 rounded-lg">
                Continue
              </button>
            </Link>
          </div>
        </Card>
      </section>
    </main>
  );
}