<script setup lang="ts">
import type { ContactItem } from '../types'

const items: ContactItem[] = [
  { icon: '📞', label: 'Phone', value: '+62 838 3046 8532' },
  { icon: '✉️', label: 'Email', value: 'teresa.pangjaya92@gmail.com' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/teresa-pangjaya' },
  { icon: '📍', label: 'Location', value: 'Balikpapan, Indonesia · Open for Remote' },
]
</script>

<template>
  <div class="content-card">
    <h2 class="section-title">Contact</h2>
    <div class="contact-grid">
      <div v-for="item in items" :key="item.label" class="contact-item">
        <div class="contact-icon">{{ item.icon }}</div>
        <div>
          <div class="contact-label">{{ item.label }}</div>
          <div class="contact-value">{{ item.value }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
