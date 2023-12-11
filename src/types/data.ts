export type WorkExperience = {
  time: string
  role: string
  location: string
  description: string[]
}

export type Project = {
  name: string
  image: string
  description: string
  url: string
}

export type Testimonial = {
  quote: string
  name: string
  role: string
}

export type Data = {
  name: string
  role: string
  description: string
  secondaryDescription: string
  github: string
  linkedin: string
  resume: string
  workExperience: WorkExperience[]
  projects: Project[]
  testimonials: Testimonial[]
}
