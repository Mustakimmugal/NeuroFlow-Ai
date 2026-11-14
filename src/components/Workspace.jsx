import { useState } from 'react'
import {
  FiFileText,
  FiLayers,
  FiCheckCircle,
  FiCommand,
  FiChevronDown,
  FiActivity
} from 'react-icons/fi'
import { documents } from '../data'

export default function Workspace() {
  const [docIndex, setDocIndex] = useState(0)
  const [view, setView] = useState('Summary')
  const doc = documents[docIndex]
  return (
    <div className="stage">
      <div className="workspace">
        <div className="windowbar">
          <span className="dots">● ● ●</span>
          Workspace preview
          <FiCommand />
        </div>
        <div className="workspace-body">
          <aside className="rail">
            <FiLayers />
            <FiFileText />
            <FiActivity />
          </aside>
          <div className="desk">
            <div className="crumb">Workspace / Documents</div>
            <h3>Document studio</h3>
            <label className="picker">
              <FiFileText />
              <select
                aria-label="Select sample document"
                value={docIndex}
                onChange={e =>
                  setDocIndex(
                    Number(e.target.value)
                  )
                }
              >
                {
                  documents.map((item, index) => (
                    <option
                      key={item.name}
                      value={index}
                    >
                      {item.name}
                    </option>
                  ))
                }
              </select>
              <FiChevronDown />
            </label>
            <div className="switch">
              {
                [
                  'Summary',
                  'Action items'
                ].map(item => (
                  <button
                    key={item}
                    aria-pressed={view === item}
                    onClick={() => setView(item)}
                  >
                    {item}
                  </button>
                ))
              }
            </div>
            <div
              className="paper"
              aria-live="polite"
            >
              <div className="paper-label">
                <FiLayers />
                {
                  view === 'Summary'
                    ? 'DOCUMENT DIGEST'
                    : 'NEXT STEPS'
                }
              </div>
              <h4>
                {doc.title}
              </h4>
              {
                view === 'Summary'
                  ?
                  <p>
                    {doc.summary}
                  </p>
                  :
                  <ul>
                    {
                      doc.tasks.map(task => (
                        <li key={task}>
                          <FiCheckCircle />
                          {task}
                        </li>
                      ))
                    }
                  </ul>
              }
            </div>
            <div className="workspace-foot">
              <span className="status" />
              Sample workspace
              <span>
                {doc.date}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
