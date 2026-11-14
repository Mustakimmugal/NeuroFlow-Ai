import { useEffect, useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'

export default function Contact() {
    const [sent, setSent] = useState(false)
    const [toastVisible, setToastVisible] = useState(false)
    const [toastMessage, setToastMessage] = useState('')
    const [toastType, setToastType] = useState('success')

    useEffect(() => {
        if (!toastVisible) return undefined

        const timer = setTimeout(() => {
            setToastVisible(false)
        }, 3000)

        return () => clearTimeout(timer)
    }, [toastVisible])
    return (
        <section
            id="contact"
            className="wrap block contact"
        >
            <div>
                <small>CONTACT</small>
                <h2>Explore your team’s workspace.</h2>
                <p>Try the demo request form. Details stay in this browser.</p>
            </div>
            <form
                noValidate
                onChange={() => {
                    setSent(false)
                    setToastVisible(false)
                }}
                onSubmit={e => {
                    e.preventDefault()

                    const values = [...new FormData(e.currentTarget).values()]
                    const hasEmptyField = values.some(value => !String(value).trim())
                    const email = String(new FormData(e.currentTarget).get('email') || '')

                    if (hasEmptyField) {
                        setToastMessage('All fields are required.')
                        setToastType('error')
                        setToastVisible(true)
                        return
                    }

                    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                        setToastMessage('Please enter a valid email address.')
                        setToastType('error')
                        setToastVisible(true)
                        return
                    }

                    setSent(true)
                    setToastMessage('Demo request received successfully.')
                    setToastType('success')
                    setToastVisible(true)
                }}
            >
                {
                    [
                        ['Name', 'text'],
                        ['Email', 'email'],
                        ['Company', 'text']
                    ].map(([label, type]) => (
                        <label key={label}>
                            {label}
                            <input
                                required
                                type={type}
                                name={label.toLowerCase()}
                                pattern={
                                    type === 'text'
                                        ? '.*\\S.*'
                                        : undefined
                                }
                            />
                        </label>
                    ))
                }
                <label>
                    Message
                    <textarea
                        required
                        name="message"
                        rows="3"
                        onChange={e =>
                            e.target.setCustomValidity(
                                e.target.value.trim()
                                    ? ''
                                    : 'Please enter a message.'
                            )
                        }
                    />
                </label>
                <button className="btn primary">
                    Request demo
                    <FiArrowRight />
                </button>
                <div role="status">
                    {
                        sent
                            ? 'Thank you! Your demo form was completed successfully.'
                            : ''
                    }
                </div>
                {
                    toastVisible && (
                        <div className={'toast toast-' + toastType} role="status" aria-live="polite">
                            {toastMessage}
                        </div>
                    )
                }
            </form>
        </section>
    )
}
