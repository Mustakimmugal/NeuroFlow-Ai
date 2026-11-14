const stories = [
    [
        'Maya',
        'Product lead',
        'The brief and the next steps finally live together.'
    ],
    [
        'Leo',
        'Designer',
        'I can pick up a project without digging through old notes.'
    ],
    [
        'Anika',
        'Team lead',
        'Our weekly handoff starts with one shared summary.'
    ]
]

export default function Testimonials() {
    return (
        <section className="band">
            <div className="wrap block">
                <small>ILLUSTRATIVE TEAM STORIES</small>
                <h2>Inside the workflow.</h2>
                <div className="card-grid">
                    {
                        stories.map(([name, role, quote]) => (
                            <figure
                                className="card"
                                key={name}
                            >
                                <blockquote>
                                    “{quote}”
                                </blockquote>
                                <figcaption>
                                    {name} · {role}
                                    <br />Fictional example</figcaption>
                            </figure>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
