import jsonData from '../assets/data.json'
import externalLink from '../assets/external-link.svg'
import profilePicture from '../assets/headshot.jpeg'
import { Data } from '../types/data'
import './app.scss'

/// TODO: project images, dark mode, footer, contacts

function App() {
  const data: Data = jsonData

  const links = [
    {
      label: 'Email',
      href: `mailto:${data.email}`,
    },
    {
      label: 'LinkedIn',
      href: data.linkedin,
    },
    {
      label: 'Github',
      href: data.github,
    },
  ]

  return (
    <div className='app'>
      <div>
        <div>
          <div>
            <img src={profilePicture} className='logo' alt='Profile picture' />
            <h1 className='text-title'>{data.name}</h1>
            <div className='intro'>
              <p className='text-body text-body--light'>{data.role}</p>{' '}
              <div className='intro-links'>
                {links.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    className='text-body--small'
                    target='_blank'
                    rel='noopener noreferrer'>
                    {link.label} <span className='visually-hidden'>(opens in a new tab)</span>
                    <img aria-hidden='true' src={externalLink} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='description'>
          <p className='text-body'>{data.description}</p>
          <br />
          <p>{data.secondaryDescription}</p>
        </div>
      </div>
      <div>
        <h2 className='text-title text-title--small'>Work Experience</h2>
        {data.workExperience.map(exp => (
          <div key={exp.role} className='work-experience'>
            <div className='work-experience-period'>
              <p>{exp.time}</p>
            </div>
            <div className='work-experience-description'>
              <h3 className='text-subtitle'>{exp.role}</h3>
              <p className='work-experience-description-location text-gray'>{exp.location}</p>
              <ul>
                {exp.description.map(desc => (
                  <li key={desc}>
                    <p className='text-body text-body--light'>{desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2 className='text-title text-title--small'>Projects</h2>
        <div className='projects'>
          {data.projects.map(project => (
            <div key={project.name} className='project'>
              <div className='image'></div>
              <div className='project-details'>
                <p className='text-body text-body--small'>{project.name}</p>
                <p className='text-body text-body--small text-gray'>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className='text-title text-title--small'>Testimonials</h2>
        {data.testimonials.map(test => (
          <div key={test.name} className='testimonial'>
            <p className='text-body text-body--light'>“ {test.quote} ”</p>
            <p className='text-body text-body--small'>{test.name}</p>
            <p className='text-body text-body--small text-gray'>{test.role}</p>
          </div>
        ))}
      </div>
      <div>
        <hr />
        <div className='footer'>
          <div>
            <p className='text-body--small text-gray'>2023 &copy; {data.name}</p>
          </div>
          <div className='footer-links'>
            {links.map(link => (
              <a
                key={link.label}
                href={link.href}
                className='text-body--small'
                target='_blank'
                rel='noopener noreferrer'>
                {link.label} <span className='visually-hidden'>(opens in a new tab)</span>
                <img aria-hidden='true' src={externalLink} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
