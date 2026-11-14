import { FiEdit3, FiFileText, FiSearch, FiGitBranch, FiUsers, FiBarChart2 } from 'react-icons/fi'
import { features } from '../data'

const icons = [
    FiEdit3,
    FiFileText,
    FiSearch,
    FiGitBranch,
    FiUsers,
    FiBarChart2
]

export default function Features() {
    return (
        <section id="features" className="wrap block">
            <small>FEATURES</small>
            <h2>One workspace, from draft to decision.</h2>
            <div className="card-grid">
                {
                    features.map(([title, desc], i) => {
                        const Icon = icons[i]
                        return (
                            <article
                                className="card feature"
                                key={title}
                            >
                                <span className="icon">
                                    <Icon />
                                </span>
                                <h3>
                                    {title}
                                </h3>
                                <p>
                                    {desc}
                                </p>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}
