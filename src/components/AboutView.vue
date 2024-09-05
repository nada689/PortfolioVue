<template>
  <v-container class="pa-8" fluid>
    <!-- About Me Section -->
    <v-row>
      <v-col cols="12">
        <header>
          <h2 class="text-h4 font-weight-bold text-start mb-4 text-white">
            About Me
          </h2>
        </header>

        <v-card class="about-section" variant="text">
          <v-card-text>
            <p class="text-start">
              I'm experienced software developer with one year of expertise in
              web application development using technologies such as JavaScript,
              and Vue.js. Proficient in UI development and database integration,
              adept at problem-solving and delivering innovative software
              solutions.
            </p>
            <p class="text-start">
              My job is to build your website so that it is functional and
              user-friendly but at the same time attractive. Moreover, I add a
              personal touch to your product and make sure that it is
              eye-catching and easy to use. My aim is to bring across your
              message and identity in the most creative way. I created web
              design for many famous brand companies.
            </p>
            <v-btn
              class="mt-4"
              style="
                width: 50%;
                font-weight: bold;
                background-color: #e6ad58;
                color: var(--fourth-color);
              "
              variant="text"
              href="https://drive.google.com/file/d/1M3qoZfRaGz4nXqUvsEV95VyzuHDvpGu0/view?usp=drive_link"
              >My CV</v-btn
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- What I'm Doing Section -->
    <v-row>
      <v-col cols="12">
        <v-card class="pa-5 service-section" variant="text">
          <v-card-title class="text-h5 font-weight-bold text-start"
            >What I'm Doing</v-card-title
          >
          <v-row>
            <v-col
              cols="12"
              md="6"
              v-for="(service, index) in services"
              :key="index"
            >
              <v-card class="pa-4 service-card" variant="text">
                <v-row>
                  <v-col cols="2" class="py-6">
                    <v-img
                      :src="require(`@/assets/${service.icon}`)"
                      alt="service icon"
                      width="50"
                    ></v-img>
                  </v-col>
                  <v-col cols="10" class="text-start">
                    <v-card-title class="text-h6">{{
                      service.title
                    }}</v-card-title>
                    <v-card-text>{{ service.description }}</v-card-text>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <!-- Testimonials Section -->
    <v-row>
      <v-col cols="12">
        <v-card class="pa-5 mt-5 testimonials-section" variant="text">
          <v-card-title class="text-h5 font-weight-bold text-start"
            >Testimonials</v-card-title
          >
          <v-divider class="my-4"></v-divider>
          <v-row>
            <v-col
              cols="12"
              md="6"
              v-for="(testimonial, index) in testimonials"
              :key="index"
            >
              <v-card class="pa-4 testimonial-card" variant="text">
                <v-row align="center">
                  <v-col cols="2">
                    <v-avatar size="60">
                      <v-img
                        :src="require(`@/assets/${testimonial.avatar}`)"
                        alt="Avatar"
                      ></v-img>
                    </v-avatar>
                  </v-col>
                  <v-col cols="10" class="text-start">
                    <v-card-title class="text-h6">{{
                      testimonial.name
                    }}</v-card-title>
                    <v-card-text>{{ testimonial.text }}</v-card-text>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <!-- Clients Section -->
    <v-row>
      <v-col cols="12">
        <v-card class="pa-5 mt-5 clients-section" variant="text">
          <v-card-title class="text-h5 font-weight-bold text-start"
            >Clients</v-card-title
          >
          <v-divider class="my-4"></v-divider>
          <v-slide-group>
            <v-slide-group-item v-for="(client, index) in clients" :key="index">
              <img
                :src="require(`@/assets/${client.logo}`)"
                alt="Client logo"
                class="client-logo"
              />
            </v-slide-group-item>
          </v-slide-group>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          icon: "icon-design.svg",
          title: "Web Design",
          description:
            "The most modern and high-quality design made at a professional level.",
        },
        {
          icon: "icon-dev.svg",
          title: "Web Development",
          description:
            "High-quality development of sites at the professional level.",
        },
      ],
      testimonials: [
        {
          name: "Daniel Lewis",
          text: "Richard was hired to create a corporate identity. We were very pleased with the work done.",
          avatar: "avatar-1.png",
        },
        {
          name: "Jessica Miller",
          text: "Richard was hired to create a corporate identity. We were very pleased with the work done.",
          avatar: "avatar-3.png",
        },
      ],
      clients: [
        { logo: "logo-1.png" },
        { logo: "logo-2.png" },
        { logo: "logo-3.png" },
        { logo: "logo-4.png" },
      ],
    };
  },
};
</script>

<style scoped>
.about-section,
.service-section,
.testimonials-section,
.clients-section {
  color: var(--fourth-color);
  border-radius: 8px;
}

.service-card,
.testimonial-card {
  background-color: var(--grey-color);
  color: var(--fourth-color);
  border-radius: 8px;
}

.client-logo {
  max-width: 100%;
  height: auto;
  filter: grayscale(1);
}
.client-logo:hover {
  filter: grayscale(0);
}
</style>
