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
    period: 'Aug 2019 – 2024',
    image: '/credenxia.png',
    bullets: [
      'Owned end-to-end regression testing cycles prior to release.',
      'Coordinated UAT sessions with business stakeholders.',
      'Performed backend validation using SQL queries.',
      'Executed API testing using Postman; logged defects in Azure DevOps.',
      'Leveraged AI tools to generate structured test cases and improve documentation quality.',
      'Collaborated with distributed Agile teams across time zones.',
    ],
    skills: ['Azure DevOps', 'Agile Software Development', 'SQL', 'API', 'C#'],
  },
  {
    role: 'Software Test Engineer',
    company: 'GroundProbe (Orica Subsidiary)',
    period: '2021 – 2023',
    image: '/gp.png',
    bullets: [
      'Performed manual testing on a desktop-based mining monitoring and blasting application used for analyzing geotechnical data and supporting operational decision-making in the mining industry.',
      'Created and executed test cases in TestRail; tracked issues in Jira.',
    ],
    skills: ['Jira', 'Atlassian Confluence', 'TestRail'],
  },
  {
    role: 'Application Consultant – Microsoft Dynamics NAV & BC',
    company: 'PT GITS',
    period: '2017 – 2019',
    image: '/gits.png',
    bullets: [
      'Consult and testing all custom ERP dynamic NAV and BC for several customers including PT. Wahana Tirtasari and PT. BIMA.',
      'Gathered requirements and configured ERP modules.',
      'Created UAT scripts and supported go-live validation.',
    ],
    skills: ['ERP Software', 'Microsoft Dynamics ERP', 'Microsoft Word', 'Microsoft Excel', 'Microsoft SQL Server Administration'],
  },
  {
    role: 'Software Tester',
    company: 'Bank Maspion',
    period: '2019 – 2021',
    image: '/maspion.png',
    bullets: [
      'Owned regression testing cycles and supported release validation to ensure stable product delivery across multiple projects and environments.',
    ],
    skills: ['SQL', 'Microsoft Excel'],
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
      <img v-if="exp.image" :src="exp.image" :alt="exp.company" class="exp-image" />
      <ul class="exp-bullets">
        <li v-for="(bullet, bi) in exp.bullets" :key="bi">{{ bullet }}</li>
      </ul>
      <div v-if="exp.skills" class="exp-skills">
        <span v-for="skill in exp.skills" :key="skill" class="skill-chip">{{ skill }}</span>
      </div>
    </div>
  </div>
</template>
