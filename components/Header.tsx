import Image from 'next/image'
import Logo from '../public/img/H2o_Logo.svg'

export default function Header() {
  return (
    <div className="flex justify-between items-center py-2 px-4">
      <Image 
        src={Logo}
        height={93}
        width={375}
      />
      <p>Something else</p>
    </div>
  )
}
