<template>
  <v-container>
    <header>
      <h2 class="text-h4 font-weight-bold text-start mb-4 text-white">Blog</h2>
    </header>

    <section class="blog-posts">
      <v-row>
        <v-col
          v-for="(post, index) in blogPosts"
          :key="index"
          cols="12"
          xs="12"
          sm="6"
          md="6"
          lg="6"
          xl="4"
        >
          <v-card class="blog-post-item">
            <v-img
              :src="require(`@/assets/${post.image}`)"
              alt="Blog Image"
              class="blog-banner-box"
              lazy-src
            ></v-img>

            <v-card-text class="blog-content">
              <div class="blog-meta">
                <p class="blog-category">{{ post.category }}</p>
                <span class="dot"></span>
                <time :datetime="post.date">{{ post.dateFormatted }}</time>
              </div>
              <h3 class="text-h6 font-weight-bold blog-item-title">
                {{ post.title }}
              </h3>
              <p class="blog-text">{{ post.text }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      blogPosts: [
        {
          title: "Design conferences in 2022",
          category: "Design",
          date: "2024-02-23",
          dateFormatted: "Feb 23, 2024",
          text: "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
          image: "blog-1.jpg",
        },
        {
          title: "Best fonts every designer",
          category: "Design",
          date: "2024-01-23",
          dateFormatted: "Jan 23, 2024",
          text: "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.",
          image: "blog-2.jpg",
        },
        {
          title: "Design digest #80",
          category: "Design",
          date: "2023-12-2",
          dateFormatted: "Dec 2, 2023",
          text: "Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.",
          image: "blog-3.jpg",
        },
        {
          title: "UI interactions of the week",
          category: "Design",
          date: "2022-02-23",
          dateFormatted: "Feb 23, 2022",
          text: "Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.",
          image: "blog-4.jpg",
        },
        {
          title: "The forgotten art of spacing",
          category: "Design",
          date: "2022-02-23",
          dateFormatted: "Feb 23, 2022",
          text: "Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          image: "blog-5.jpg",
        },
        {
          title: "Design digest #79",
          category: "Design",
          date: "2022-02-23",
          dateFormatted: "Feb 23, 2022",
          text: "Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.",
          image: "blog-6.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.blog-post-item .v-img::before {
  content: "";
  position: absolute;
  inset: 1px;
  border-radius: inherit;
  background: hsl(240, 2%, 13%);
  z-index: -1;
}
.blog-post-item .v-img:hover {
  transform: scale(1.1);
}
.blog-post-item {
  margin-bottom: 24px;
  background-color: var(--grey-color) !important;
  min-height: 400px;
  text-align: start;
}
.blog-post-item .v-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition-1);
}
.blog-banner-box {
  border-radius: 10px 10px 0 0;
}

.blog-content {
  padding: 16px;
}

.blog-meta {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  color: var(--light-grey);
}

.blog-category {
  color: var(--light-grey);
  font-weight: bold;
}

.dot {
  width: 6px;
  height: 6px;
  background-color: var(--light-grey);
  border-radius: 50%;
  margin: 0 8px;
}

.blog-item-title {
  margin-top: 0;
  margin-bottom: 8px;
  color: var(--fourth-color);
}

.blog-text {
  color: var(--fourth-color);
}
</style>
