<script setup lang="ts">
import { ref } from 'vue'
import ProfileCard from './components/ProfileCard.vue'
import InfoCard from './components/InfoCard.vue'
import NavTabs from './components/NavTabs.vue'
import AboutPanel from './components/AboutPanel.vue'
import ResumePanel from './components/ResumePanel.vue'
import SkillsPanel from './components/SkillsPanel.vue'
import ContactPanel from './components/ContactPanel.vue'

const activeTab = ref('about')
</script>

<template>
  <div class="blob blob-1"></div>
  <div class="blob blob-2"></div>
  <div class="blob blob-3"></div>

  <div class="topbar">
    <div class="logo"><span>T</span>eresa</div>
  </div>

  <div class="layout">
    <aside class="sidebar">
      <ProfileCard />
      <InfoCard />
    </aside>

    <main class="main">
      <NavTabs v-model:activeTab="activeTab" />

      <div class="panel" :class="{ active: activeTab === 'about' }" id="about">
        <AboutPanel />
      </div>
      <div class="panel" :class="{ active: activeTab === 'resume' }" id="resume">
        <ResumePanel />
      </div>
      <div class="panel" :class="{ active: activeTab === 'skills' }" id="skills">
        <SkillsPanel />
      </div>
      <div class="panel" :class="{ active: activeTab === 'contact' }" id="contact">
        <ContactPanel />
      </div>
    </main>
  </div>
</template>
