import Link from 'next/link'
import { navigations } from '@/utils/constant'

const Navbar = ({ className }) => {
  return (
    <nav className={`${className}`}>
      {navigations.map((n, i) => (
        <Link
          key={i}
          href={n.href}
          className='text-blue-500 font-medium px-4 hover:text-blue-900 uppercase'
        >
          {n.title}
        </Link>
      ))}
    </nav>
  )
}

export default Navbar
