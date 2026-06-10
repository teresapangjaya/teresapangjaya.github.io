export interface Experience {
  role: string
  company: string
  period: string
  bullets: string[]
}

export interface Service {
  icon: string
  name: string
  description: string
  iconClass: string
}

export interface SkillCategory {
  title: string
  chipClass: string
  skills: string[]
}

export interface ContactItem {
  icon: string
  label: string
  value: string
}
