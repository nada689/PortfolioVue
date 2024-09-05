<template>
  <div class="about">
    <v-card class="sidebar-info" color="var(--third-color)">
      <v-card-title class="mt-10 mb-4">
        <div>
          <img src="@\assets\avatar.png" alt="avatar" width="100px" />
        </div>
        <div class="info-content">
          <h1 class="name">Nada Khaled</h1>
          <p class="title">Front-End developer</p>
        </div>
      </v-card-title>

      <div class="sidebar-info_more">
        <v-divider style="min-width: 80%; margin: auto"></v-divider>

        <v-row class="mt-4 px-2">
          <v-col cols="12" class="d-flex align-center justify-end">
            <div class="ml-4 text-end">
              <p>Email</p>
              <a href="mailto:nadakhaled658@yahoo.com"
                >nadakhaled658@yahoo.com</a
              >
            </div>
            <v-icon class="icon">mdi-email-outline</v-icon>
          </v-col>

          <v-col cols="12" class="d-flex align-center justify-end">
            <div class="ml-4 text-end">
              <p>Birthday</p>

              <time datetime="2001-01-20">January 20, 2001</time>
            </div>
            <v-icon class="icon">mdi-calendar-outline</v-icon>
          </v-col>

          <v-col cols="12" class="d-flex align-center justify-end">
            <div class="ml-4 text-end">
              <p>Location</p>
              <p>Cairo, Egypt</p>
            </div>

            <v-icon class="icon">mdi-map-marker-outline</v-icon>
          </v-col>
        </v-row>

        <v-list dense>
          <v-list-item
            link
            href="https://linkedin.com/in/nada-khaled-b02705251"
          >
            <v-icon>mdi-linkedin</v-icon>
          </v-list-item>
          <v-list-item link href="https://github.com/nada689">
            <v-icon>mdi-github</v-icon>
          </v-list-item>
          <v-list-item link href="https://vercel.com/nada-khaleds-projects">
            <v-icon
              ><svg
                data-testid="geist-icon"
                height="16"
                stroke-linejoin="round"
                viewBox="0 0 16 16"
                width="16"
                style="color: currentcolor"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 1L16 15H0L8 1Z"
                  fill="currentColor"
                ></path></svg
            ></v-icon>
          </v-list-item>
        </v-list>
      </div>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
.name {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--fourth-color);
}

.title {
  font-size: 0.8rem;
  color: var(--fourth-color);
  width: 50%;
  min-height: 25px;
  margin: auto !important;
  border-radius: 5px;
  background-color: var(--grey-color);
}
.sidebar-info {
  color: var(--fourth-color);
}
.sidebar-info_more {
  .v-col {
    text-align: center !important;
  }
}
a {
  text-decoration: none;
  color: var(--fourth-color);
}
.v-list {
  background-color: var(--third-color);
  color: var(--fourth-color);
  display: flex !important;
  flex-direction: row !important;
  justify-content: center;
}
.icon {
  color: var(--secound-color);
  width: 50px;
  min-height: 50px;
  border-radius: 10px;
  box-shadow: 2px 3px var(--grey-color);
}
</style>
