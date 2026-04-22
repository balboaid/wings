export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white shadow-lg p-6 flex flex-col gap-6">
      <h2 className="title-red text-xl font-semibold tracking-tight text-red">Wings Admin</h2>

      <nav className="flex flex-col gap-3">
        <a className="title-red hover:text-black transition">Dashboard</a>
        <a className="title-red hover:text-black transition">Employees</a>
        <a className="title-red hover:text-black transition">Events</a>
      </nav>
    </aside>
  )
}