import { FiPlus } from 'react-icons/fi'
import { questions } from '../data'

export default function FAQ() {
    return (
        <section
            id="faq"
            className="wrap block faq"
        >
            <small>FAQ</small>
            <h2>A few common questions.</h2>
            {
                questions.map(([question, answer]) => (
                    <details key={question}>
                        <summary>
                            {question}
                            <FiPlus />
                        </summary>
                        <p>
                            {answer}
                        </p>
                    </details>
                ))
            }
        </section>
    )
}
