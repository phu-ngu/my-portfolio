export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 text-center text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} John Doe. Built with React and lots of ☕ | Advancing biology through
          computation
        </p>
      </div>
    </footer>
  )
}
