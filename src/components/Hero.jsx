import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import Workspace from './Workspace'

export default function Hero() {
    return (
        <section id="home" className="hero">
            <div className="wrap hero-inner">
                <div>
                    <small>
                        <i />AI PRODUCTIVITY WORKSPACE</small>
                    <h1>
                        Work smarter
                        <br />
                        <em>with AI.</em>
                    </h1>
                    <p>
                        Turn scattered notes into clear summaries,
                        shared decisions and next steps your team can act on.
                    </p>
                    <div className="actions">
                        <a className="btn primary" href="#pricing">
                            Get started <FiArrowUpRight />
                        </a>
                        <a className="btn" href="#contact">
                            Request demo <FiArrowRight />
                        </a>
                    </div>
                </div>
                <Workspace />
            </div>
        </section>
    )
}
