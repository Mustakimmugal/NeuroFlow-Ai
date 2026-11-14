import Brand from './Brand'
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiTwitter
} from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-intro">
          <Brand />
          <p>
            A calmer workspace for turning ideas, notes and documents into
            clear team decisions.
          </p>
          <div className="social-icons" aria-label="Social media icons">
            <span aria-hidden="true"><FiGithub /></span>
            <span aria-hidden="true"><FiLinkedin /></span>
            <span aria-hidden="true"><FiTwitter /></span>
          </div>
        </div>

        <div className="footer-links">
          <h3>Product</h3>
          <a href="#features">Features</a>
          <a href="#workflow">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>

        <div className="footer-links">
          <h3>Company</h3>
          <a href="#contact">Contact</a>
          <a href="#home">About NeuroFlow</a>
          <a href="#contact">Request a demo</a>
        </div>

        <div className="footer-cta">
          <span className="footer-label">READY WHEN YOU ARE</span>
          <h3>Make space for better work.</h3>
          <a className="btn primary" href="#contact">
            Get started <FiArrowUpRight />
          </a>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <p>© 2026 NeuroFlow AI · Frontend concept</p>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  )
}
