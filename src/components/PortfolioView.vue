<template>
  <v-container>
    <!-- Portfolio Header -->
    <header>
      <h2 class="text-h4 font-weight-bold text-start mb-4 text-white">
        Portfolio
      </h2>
    </header>

    <!-- Project List -->
    <v-row>
      <v-col
        v-for="(project, index) in projects"
        :key="index"
        cols="12"
        md="6"
        lg="6"
        class="mb-4"
      >
        <v-card class="project-item" variant="text" :href="project.link">
          <v-img
            :src="require(`@/assets/${project.image}`)"
            alt="Project Image"
            class="project-img"
          >
            <v-icon dark class="project-item-icon-box">mdi-eye-outline</v-icon>
          </v-img>
          <v-card-title class="project-title">{{ project.title }}</v-card-title>
          <v-card-subtitle class="project-category">{{
            project.category
          }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Alseraj Platform",
          category: "Web development (Team Project)",
          image: "alseraj.png",
          link: "https://alseraj.vercel.app/",
        },
        {
          title: "Awon Platform",
          category: "Web development (Team Project)",
          image: "awon.png",
          link: "https://awon-template.vercel.app/",
        },
        {
          title: "Real-Estate",
          category: "Web development (Team Project)",
          image: "real-estate.png",
          link: "https://real-estate-salem-team.vercel.app/",
        },
        {
          title: "Restaurant",
          category: "Web development",
          image: "restaurant.png",
          link: "https://restaurant-ruddy-ten.vercel.app/",
        },
        {
          title: "To-Do-List",
          category: "Web development",
          image: "To-Do.png",
          link: "https://nada689.github.io/To_Do-list/",
        },
        {
          title: "CRUD",
          category: "Web development",
          image: "crud.jpg",
          link: "https://crud-green-five.vercel.app/",
        },
        {
          title: "LEON",
          category: "Web development",
          image: "leon.jpg",
          link: "https://leon-azure.vercel.app/",
        },
        {
          title: "Medcare",
          category: "Web development",
          image: "medcare.jpg",
          link: "https://med-care-website.vercel.app/",
        },
        {
          title: "Novel",
          category: "Web development",
          image: "novel.jpg",
          link: "https://novel-wine.vercel.app/",
        },
      ],
    };
  },
};
</script>

<style scoped>
.project-item {
  cursor: pointer;
  transition: transform 0.3s ease;
}
.project-item .project-img:hover {
  transform: scale(1.05);
  .project-item-icon-box {
    background-color: grey;
    border-radius: 8px 8px;
    color: var(--secound-color);
    opacity: 1;
  }
}

.project-img {
  border-radius: 10px 10px;
  position: relative;
}
.project-item-icon-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  font-size: 2rem;
}
.project-title {
  font-weight: bold;
  margin-top: 8px;
  text-align: start;
  color: var(--fourth-color);
}
.project-category {
  text-align: start;
  color: grey;
}
</style>
