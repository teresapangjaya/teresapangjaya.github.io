<script setup lang="ts">
import type { SkillCategory } from '../types'

const categories: SkillCategory[] = [
  {
    title: 'Testing & QA',
    chipClass: '',
    skills: ['Manual Testing', 'Regression Cycle Ownership', 'UAT Coordination', 'Production Validation', 'API Testing (Postman)'],
  },
  {
    title: 'Data & Systems',
    chipClass: 'sky',
    skills: ['SQL Database Validation', 'MS Dynamics NAV', 'Business Central', 'ERP Configuration'],
  },
  {
    title: 'Tools & Methodology',
    chipClass: 'mint',
    skills: ['Azure DevOps', 'Jira', 'Confluence', 'TestRail', 'Agile / Scrum'],
  },
  {
    title: 'AI & Development',
    chipClass: 'lav',
    skills: ['AI-Assisted Test Generation', 'Basic Java / C#', 'ISTQB Foundation (2026)'],
  },
]
</script>

<template>
  <div class="content-card">
    <h2 class="section-title">Core Skills</h2>
    <div v-for="cat in categories" :key="cat.title">
      <div class="what-title" :style="{ marginTop: cat === categories[0] ? '0' : undefined }">{{ cat.title }}</div>
      <div class="skills-grid">
        <span v-for="skill in cat.skills" :key="skill" class="skill-chip" :class="cat.chipClass">{{ skill }}</span>
      </div>
    </div>
  </div>
</template>
