export default function Header() {
  return (
    <header className="w-full flex items-center justify-between mb-10">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

      <div className="flex items-center gap-4">
        <span className="text-gray-600">Miguel N.</span>

        <div className="w-10 h-10 rounded-full bg-gray-300" />
      </div>
    </header>
  )
}