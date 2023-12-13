export type WorkExperience = {
  time: string
  role: string
  location: string
  description: string[]
}

export type Project = {
  name: string
  description: string
  url: string
  stack: string[]
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
  email: string;
  github: string
  linkedin: string
  resume: string
  workExperience: WorkExperience[]
  projects: Project[]
  testimonials: Testimonial[]
}
