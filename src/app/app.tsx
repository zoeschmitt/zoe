import jsonData from '../assets/data.json'
import ExternalLink from '../components/external-link'
import { Data } from '../types/data'
import './app.scss'

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
            <img src='./headshot.jpeg' className='logo' alt='Profile picture' />
            <h1 className='text-title'>{data.name}</h1>
            <div className='intro'>
              <p className='text-body text-body--light'>{data.role}</p>{' '}
              <div className='intro-links'>
                {links.map(link => (
                  <ExternalLink
                    key={link.label}
                    href={link.href}
                    label={link.label}
                    className='text-body--small'
                  />
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
              <h3 className='text-subtitle'>
                {exp.role} at{' '}
                {exp.url ? <ExternalLink href={exp.url} label={exp.company} /> : exp.company}
              </h3>
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
              <div className='project-details'>
                <ExternalLink href={project.url} label={project.name} />
                <p className='text-body text-body--small'>{project.stack.join(', ')}</p>
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
              <ExternalLink
                key={link.label}
                href={link.href}
                label={link.label}
                className='text-body--small'
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
