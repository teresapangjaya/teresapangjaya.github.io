<script setup lang="ts">
import type { Service } from '../types'

const services: Service[] = [
  { icon: '🧪', name: 'Manual Testing & Regression', description: 'Owning end-to-end regression cycles and production validation for fast-paced SaaS releases.', iconClass: 'icon-pink' },
  { icon: '🗄️', name: 'SQL & ERP Validation', description: 'Backend verification via SQL queries across Microsoft Dynamics NAV and Business Central environments.', iconClass: 'icon-sky' },
  { icon: '🤝', name: 'UAT Coordination', description: 'Facilitating UAT sessions, stakeholder communication, and go-live validation with business teams.', iconClass: 'icon-amber' },
  { icon: '🤖', name: 'AI-Enhanced QA', description: 'Leveraging AI tools for test case generation, documentation quality, and planning efficiency.', iconClass: 'icon-mint' },
]
</script>

<template>
  <div class="content-card">
    <h2 class="section-title">About Me</h2>
    <p class="about-text">
      Senior QA Engineer with 7+ years of experience in SaaS and ERP environments, specialising in manual testing, regression ownership, UAT coordination, production validation, and SQL-based backend verification.
    </p>
    <p class="about-text">
      Currently integrating AI tools to enhance QA productivity — including assistance in simple coding, test case generation, and structured test plan creation. Experienced working remotely with international teams across multiple time zones.
    </p>

    <div class="what-title">What I do!</div>
    <div class="services-grid">
      <div v-for="service in services" :key="service.name" class="service-card">
        <div class="service-head">
          <div class="service-icon" :class="service.iconClass">{{ service.icon }}</div>
          <div class="service-name">{{ service.name }}</div>
        </div>
        <p class="service-desc">{{ service.description }}</p>
      </div>
    </div>
  </div>
</template>
