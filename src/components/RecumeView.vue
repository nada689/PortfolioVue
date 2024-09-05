<template>
  <div class="container">
    <!-- Resume Header -->
    <v-card class="mb-4" variant="text">
      <v-card-title>
        <h2 class="h2 article-title">Resume</h2>
      </v-card-title>
    </v-card>

    <!-- Education Timeline -->
    <v-card class="mb-4 text-start" variant="text">
      <v-card-title class="d-flex align-end justify-end">
        <h3 class="h3 ml-2">Education</h3>
        <v-icon>mdi-school</v-icon>
      </v-card-title>
      <v-card-text>
        <v-timeline
          side="end"
          style="justify-content: start"
          line-color="var(--secound-color)"
          line-thickness="1"
          truncate-line="end"
          fill-dot
        >
          <v-timeline-item
            v-for="(item, index) in educationTimeline"
            :key="index"
            size="x-small"
            dot-color="var(--secound-color)"
          >
            <v-card variant="text">
              <v-card-title>
                <h4 class="h4">{{ item.title }}</h4>
              </v-card-title>
              <v-card-subtitle>
                <span>{{ item.period }}</span>
              </v-card-subtitle>
              <v-card-text v-html="item.description"></v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>

    <!-- Experience Timeline -->
    <v-card class="mb-4 text-start" variant="text">
      <v-card-title class="d-flex align-center justify-end">
        <h3 class="h3 ml-2">Experience</h3>
        <v-icon>mdi-briefcase</v-icon>
      </v-card-title>
      <v-card-text>
        <v-timeline
          side="end"
          line-color="var(--secound-color)"
          line-thickness="1"
          style="justify-content: start"
          truncate-line="end"
          fill-dot
        >
          <v-timeline-item
            v-for="(item, index) in experienceTimeline"
            :key="index"
            size="x-small"
            dot-color="var(--secound-color)"
          >
            <v-card variant="text">
              <v-card-title>
                <h4 class="h4" v-html="item.title"></h4>
              </v-card-title>
              <v-card-subtitle>
                <span>{{ item.period }}</span>
              </v-card-subtitle>
              <v-card-text v-html="item.description"></v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>

    <!-- Skills Section -->
    <v-card variant="text">
      <v-card-title>
        <h3 class="h3 skills-title">My skills</h3>
      </v-card-title>

      <v-list>
        <v-list-item v-for="(skill, index) in skills" :key="index">
          <v-list-item>
            <div class="d-flex justify-space-between">
              <span>{{ skill.value }}%</span>
              <h5 class="h5">{{ skill.name }}</h5>
            </div>
            <v-progress-linear
              :model-value="skill.value"
              color="var(--secound-color)"
              :value="skill.value"
              height="6"
            ></v-progress-linear>
          </v-list-item>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      educationTimeline: [
        {
          title: "Arab Open University ",
          period: "2019 — 2023",
          description: `Computer Science studies.<br />
            Very good overall grade and a GPA of 3.21.`,
        },
      ],
      experienceTimeline: [
        {
          title: "Remotely Front End developer ,Team Leader  <br />Salem Team",
          period: "2024/03 - Present",
          description: `•Developing and maintaining web applications using Vue.js.
          <br />
•Implemented dynamic and responsive user interfaces adaptable to various devices.
<br />
•Worked within a team to develop JavaScript-based web applications with frontend technologies.
<br />
•Integrated Firebase services for authentication and real-time data storage.
<br />
•Enhanced user experience by implementing interactive and attractive interface designs.`,
        },
        {
          title:
            "President of the Employment Committee<br />Arab Open University Alumni Council",
          period: "2023/11 - present",
          description: `•Providing job opportunities and offers to fresh graduates through collection and coordination with many companies.
          <br />
•Vice President of the Finance Committee
Fund-raising and efficient allocation to different student's activities.`,
        },
        {
          title: "Organiser <br /> Egyptian Programmers Academy",
          period: "2023/10 - 2024/02",
          description:
            "•Organized, and supervised 130 trainees. in addition to providing general assistance to the director.",
        },
        {
          title: "Digital Marketer <br /> Oriflame Company",
          period: "2023/06 - 2023/07",
          description:
            "•Advertisement projects and campaigns, team formation, applicant management, and collaborative work.",
        },
        {
          title: "Member <br /> Arab Open University Student Union",
          period: "2022/10 - 2023/03",
          description:
            "•Organized multiple interactive events and students activities such as inviting famous speakers, field trips, and others.",
        },
      ],
      skills: [
        { name: "Html", value: 90 },
        { name: "CSS", value: 80 },
        { name: "JS", value: 70 },
        { name: "Vue.js", value: 80 },
        { name: "Vuetify", value: 80 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.v-card,
.v-list {
  background-color: var(--third-color) !important;
  color: var(--fourth-color) !important;
}
.container {
  text-align: end !important;
}
.h2 {
  font-size: 2rem;
  font-weight: bold;
}

.h3 {
  font-size: 1.5rem;
  font-weight: bold;
}

.h4 {
  font-size: 1.25rem;
  font-weight: bold;
}

.ma-3 {
  margin: 1rem;
}

.mb-4 {
  margin-bottom: 1.5rem;
}

.skills-title {
  margin-bottom: 1rem;
}
</style>
