import { useState } from 'react'
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi'
import Brand from './Brand'

const links = [
    ['Features', 'features'],
    ['How it works', 'workflow'],
    ['Pricing', 'pricing'],
    ['FAQ', 'faq'],
    ['Contact', 'contact']
]

export default function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <header>
            <div className="wrap nav">
                <Brand />
                <button
                    aria-label="Toggle navigation"
                    aria-expanded={open}
                    aria-controls="navigation"
                    className="menu"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <FiX /> : <FiMenu />}
                </button>
                <nav id="navigation" onKeyDown={event => {
                    if (event.key === 'Escape') {
                        setOpen(false)
                        event.currentTarget.previousElementSibling.focus()
                    }
                }} className={open ? 'open' : ''}>
                    {
                        links.map(([name, id]) =>
                            <a
                                key={id}
                                href={'#' + id}
                                onClick={() => setOpen(false)}
                            >
                                {name}
                            </a>
                        )
                    }
                </nav>
                <a className="btn dark navcta" href="#pricing">
                    Get started <FiArrowUpRight />
                </a>
            </div>
        </header>
    )
}
