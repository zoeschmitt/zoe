import jsonData from '../assets/data.json'
import profilePicture from '../assets/headshot.jpeg'
import { Data } from '../types/data'
import './app.scss'

function App() {
  const data: Data = jsonData

  return (
    <div className='app'>
      <div>
        <img src={profilePicture} className='logo' alt='Profile picture' />
        <h1 className='text-title'>{data.name}</h1>
        <p className='text-body text-body--light'>{data.role}</p>
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
    </div>
  )
}

export default App
