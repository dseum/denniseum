export default function Footer() {
  return (
    <footer className="px-dynamic py-4 md:py-6 flex flex-col lg:flex-row text-center justify-end lg:gap-2 text-gray-600 text-lg sm:text-xl">
      <span>
        <a
          href="https://en.wikipedia.org/wiki/A_Portrait_of_the_Artist_as_a_Young_Man"
          target="_blank"
          rel="noreferrer"
        >
          Oceanic silence.
        </a>
      </span>
      <span>&copy; {new Date().getFullYear()} Dennis Eum.</span>
    </footer>
  )
}
