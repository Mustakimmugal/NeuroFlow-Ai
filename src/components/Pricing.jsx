import { FiArrowRight, FiCheck } from 'react-icons/fi'
import { plans } from '../data'

export default function Pricing() {
    return (
        <section id="pricing" className="wrap block">
            <small>PRICING</small>
            <h2>A plan for every team.</h2>
            <div className="card-grid">
                {
                    plans.map(plan => (
                        <article
                            className={'card plan ' + (plan.name === 'Pro' ? 'pro' : '')}
                            key={plan.name}
                        >
                            <h3>
                                {plan.name}
                            </h3>
                            <strong>
                                {plan.price}
                            </strong>
                            <p>
                                {plan.unit}
                            </p>
                            <ul>
                                {
                                    plan.items.map(item => (
                                        <li key={item}>
                                            <FiCheck />
                                            {item}
                                        </li>
                                    ))
                                }
                            </ul>
                            <a
                                className="btn"
                                href="#contact"
                            >
                                Discuss {plan.name}
                                <FiArrowRight />
                            </a>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}
