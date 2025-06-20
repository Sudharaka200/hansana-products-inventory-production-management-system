import React from 'react'
import MenuLink from './MenuLink'
import Logo from '../assets/logo.png'

function Navbar() {
    return (
        <div>
            <header className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex-1 md:flex md:items-center md:gap-12">
                            <a className="block text-teal-600" href="#">
                                <img src={Logo} alt="" className='w-10'/>
                            </a>
                        </div>

                        <div className="md:flex md:items-center md:gap-12">
                            <nav aria-label="Global" className="hidden md:block">
                                <ul className="flex items-center gap-6 text-sm">
                                    <MenuLink name="Home" url="/"/>
                                    <MenuLink name="About" url="/about"/>
                                    <MenuLink name="Products" url="/products"/>
                                    <MenuLink name="Gallery" url="/gallery"/>
                                    <MenuLink name="Login" url="/login"/>
                                </ul>
                            </nav>

                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar
