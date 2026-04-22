export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-xl shadow-sm p-6 border border-gray-200 ${className}`}>
      {children}
    </div>
  );
}