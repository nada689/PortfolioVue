<template>
  <v-row
    class="px-2 pt-4"
    style="margin: auto !important; text-align: center !important"
  >
    <v-col cols="12" md="4" lg="3">
      <v-card color="var(--third-color)">
        <Info />
      </v-card>
    </v-col>

    <v-col
      cols="12"
      md="8"
      lg="9"
      style="
        overflow: auto !important;
        min-height: 560px;
        max-height: calc(100vh - 64px);
      "
    >
      <v-card color="var(--third-color)">
        <v-toolbar color="var(--grey-color)" collapse class="menu">
          <v-tabs v-model="tab">
            <v-tab value="contact">Contact</v-tab>
            <v-tab value="blog">Blog</v-tab>
            <v-tab value="portfolio">Portfolio</v-tab>
            <v-tab value="resume">Resume</v-tab>
            <v-tab value="about">About</v-tab>
          </v-tabs>
        </v-toolbar>
        <v-card-text>
          <v-tabs-window v-model="tab">
            <v-tabs-window-item value="contact">
              <Contact />
            </v-tabs-window-item>
            <v-tabs-window-item value="blog"> <Blog /> </v-tabs-window-item>
            <v-tabs-window-item value="resume">
              <Resume />
            </v-tabs-window-item>
            <v-tabs-window-item value="portfolio">
              <Portfolio />
            </v-tabs-window-item>
            <v-tabs-window-item value="about"><About /> </v-tabs-window-item>
          </v-tabs-window>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Info from "../components/InfoView";
import Resume from "../components/RecumeView";
import About from "../components/AboutView";
import Blog from "../components/BlogView";
import Portfolio from "../components/PortfolioView";
import Contact from "../components/ContactView";
export default {
  components: {
    Info,
    About,
    Contact,
    Portfolio,
    Blog,
    Resume,
  },
  data() {
    return {
      tab: "about",
    };
  },
};
</script>
<style lang="scss" scoped>
.v-card {
  border-radius: 10px !important;
  direction: rtl;
}
.menu {
  direction: rtl;
  max-width: 550px !important;
  font-size: 10px !important;
}

.v-tabs {
  .v-tab {
    text-decoration: none !important;
    color: var(--fourth-color);

    &.v-tab-item--selected {
      color: var(--secound-color);
    }
  }
}
</style>
