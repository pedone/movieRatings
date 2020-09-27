<template>
  <v-app>
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">Login</h1>
      </v-card-title>
      <v-card-text>
    <div>
    </div>
        <v-form>
          <v-text-field label="Movie" prepend-icon="mdi-movie" outlined />
          <v-text-field
          label="Year" 
          type="number" 
          outlined/>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="success"
          @click="registerMovie">Register</v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  
  data: () => ({
  }),

  methods: {
    registerMovie: function() {
      console.log('register');
    }
  }
};
</script>
