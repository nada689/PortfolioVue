<template>
  <v-container class="my-12" style="min-height: 360px">
    <v-row class="m-auto pa-10">
      <!-- Left Section with Image and Circles -->
      <v-col cols="12" md="7" lg="6" class="mb-4">
        <div class="relative-container">
          <div class="circle top-left"></div>
          <h1 class="text-white">Thank You</h1>
          <div class="circle bottom-left"></div>
        </div>
      </v-col>

      <!-- Right Section with Contact Information -->
      <v-col cols="12" md="5" lg="6" class="text-start text-white">
        <h1 style="color: var(--secound-color)">Contact Us</h1>
        <p style="font-size: 18px">Looking forward to help you :)</p>
        <v-divider class="mt-4"></v-divider>
        <p class="mt-4"><strong>Phone:</strong> +201156903428</p>
        <p><strong>Location:</strong> Cairo , Egypt</p>
        <p><strong>Mail:</strong> nadakhaled658@yahoo.com</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      // Data or methods if needed
    };
  },
};
</script>

<style scoped>
.relative-container {
  position: relative;
}

.rounded-circle {
  border-radius: 50%;
}

.circle {
  position: absolute;
  background-color: orange;
  border-radius: 50%;
}

.top-left {
  width: 50px;
  height: 50px;
  top: -25px;
  left: -25px;
}

.bottom-left {
  width: 80px;
  height: 80px;
  bottom: -40px;
  left: 20px;
}
</style>
