import Image from 'next/image'
import Logo from '../public/img/H2o_Logo.svg'
import StickyContact from './StickyContact'

export default function Header() {
  return (
    <>
    <div className="flex justify-between items-center py-2 px-4">
      <Image 
        src={Logo}
        height={93}
        width={375}
      />
      <ul className="flex space-x-3 uppercase font-semibold font-roboto tracking-wide text-colorDarkGrey pt-20">
        <li className="active:text-colorMainBlue">Fake Nav</li>
        <li>Fake Nav</li>
        <li>Fake Nav</li>
        <li>Fake Nav</li>
        <li>Fake Nav</li>
        <li>Fake Nav</li>
      </ul>
    </div>
    <StickyContact />
    </>
  )
}
