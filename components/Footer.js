export default function Footer() {
  return (
    <footer className="px-dynamic grid gap-1 py-4 text-right md:py-6">
      <div>
        <a
          href="https://en.wikipedia.org/wiki/A_Portrait_of_the_Artist_as_a_Young_Man"
          target="_blank"
          rel="noreferrer"
        >
          Oceanic Silence
        </a>
      </div>
      <div>
        <span>&copy; {new Date().getFullYear()} Dennis Eum</span>
      </div>
    </footer>
  )
}
