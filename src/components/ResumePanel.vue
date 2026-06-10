<script setup lang="ts">
import type { Experience } from '../types'

const experiences: Experience[] = [
  {
    role: 'SQL / Microsoft Dynamics Business Analyst',
    company: 'Archipelago International (Remote)',
    period: 'Oct 2024 – Present',
    bullets: [
      'Analyse business requirements and validate ERP enhancements using SQL.',
      'Conduct manual QA validation before release deployment.',
      'Support production validation and issue investigation.',
      'Utilise AI tools to assist in documentation, query refinement, and test preparation.',
    ],
  },
  {
    role: 'Senior Software Tester',
    company: 'Credenxia / CredEntry (Remote – Australia-based SaaS)',
    period: 'Aug 2019 – Present',
    bullets: [
      'Owned end-to-end regression testing cycles prior to release.',
      'Coordinated UAT sessions with business stakeholders.',
      'Performed backend validation using SQL queries.',
      'Executed API testing using Postman; logged defects in Azure DevOps.',
      'Leveraged AI tools to generate structured test cases and improve documentation quality.',
      'Collaborated with distributed Agile teams across time zones.',
    ],
  },
  {
    role: 'Software Test Engineer',
    company: 'GroundProbe (Orica Subsidiary)',
    period: '2021 – 2023',
    bullets: [
      'Conducted structured manual testing for mining monitoring systems.',
      'Created and executed test cases in TestRail; tracked issues in Jira.',
    ],
  },
  {
    role: 'Application Consultant – Microsoft Dynamics NAV & BC',
    company: 'PT GITS',
    period: '2017 – 2019',
    bullets: [
      'Gathered requirements and configured ERP modules.',
      'Created UAT scripts and supported go-live validation.',
    ],
  },
]
</script>

<template>
  <div class="content-card">
    <h2 class="section-title">Experience</h2>
    <div v-for="(exp, index) in experiences" :key="index" class="exp-item" :style="{ marginBottom: index === experiences.length - 1 ? '0' : '24px' }">
      <div class="exp-role">{{ exp.role }}</div>
      <div class="exp-company">{{ exp.company }}</div>
      <div class="exp-period">{{ exp.period }}</div>
      <ul class="exp-bullets">
        <li v-for="(bullet, bi) in exp.bullets" :key="bi">{{ bullet }}</li>
      </ul>
    </div>
  </div>
</template>
