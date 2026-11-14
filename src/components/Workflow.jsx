const steps = [
    'Create a team workspace',
    'Add your documents',
    'Review the AI summary',
    'Share the next steps'
]

export default function Workflow() {
    return (
        <section id="workflow" className="band">
            <div className="wrap block">
                <small>HOW IT WORKS</small>
                <h2>From notes to next steps.</h2>
                <ol className="steps">
                    {
                        steps.map((step, i) => (
                            <li key={step}>
                                <span>
                                    0{i + 1}
                                </span>
                                {step}
                            </li>
                        ))
                    }
                </ol>
            </div>
        </section>
    )
}
