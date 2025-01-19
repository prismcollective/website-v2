import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="w-full bg-pink-200 px-4 py-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 relative">
            <Image
              src="/prism-logo.svg" // You'll need to add your logo to public folder
              alt="Prism Collective Logo"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h1 className="text-xl font-medium">PRISM</h1>
            <p className="text-sm">COLLECTIVE</p>
          </div>
        </div>

        <nav className="flex gap-4">
          <Link 
            href="/projects" 
            className="px-6 py-2 bg-white rounded-full hover:bg-gray-50 transition-colors"
          >
            PROJECTS
          </Link>
          <Link 
            href="/contact" 
            className="px-6 py-2 bg-white rounded-full hover:bg-gray-50 transition-colors"
          >
            CONTACT
          </Link>
          <Link 
            href="/join" 
            className="px-6 py-2 bg-blue-200 rounded-full hover:bg-blue-300 transition-colors"
          >
            JOIN US
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header