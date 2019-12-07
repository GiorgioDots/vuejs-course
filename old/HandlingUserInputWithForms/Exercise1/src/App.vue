<template>
  <!-- Exercise 1 -->
  <!-- Create a Signup Form where you retrieve the following Information -->
  <!-- Full Name (First Name + Last Name) -->
  <!-- Mail -->
  <!-- Password -->
  <!-- Store Data? Yes/No -->

  <!-- Exercise 2 -->
  <!-- Only display the Form if it has NOT been submitted -->
  <!-- Display the Data Summary ONCE the Form HAS been submitted -->

  <!-- Exercise 3 -->
  <!-- Edit the Example from above and create a custom "Full Name" Control -->
  <!-- which still holds the First Name and Last Name Input Field -->
  <div class="container">
    <div v-if="!isSubmitted">
      <form>
        <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <h1>Signup</h1>
            <hr />
            <div class="form-group">
              <label for="fullname">Full name</label>
              <input type="text" id="fullname" class="form-control" v-model.lazy="fullname" />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="text" id="email" class="form-control" v-model.lazy="email" />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" id="email" class="form-control" v-model.lazy="password" />
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
              <div class="form-group">
                <label for="storedata">
                  <input type="radio" id="storedata" value="Yes" v-model="storedata" />Yes
                </label>
              </div>
              <div class="form-group">
                <label for="notstoredata">
                  <input type="radio" id="notstoredata" value="No" v-model="storedata" />No
                </label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <div class="form-group">
                <button class="btn btn-primary" @click.prevent="submitted">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <hr />
    </div>
    <div v-else>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4>Your Data</h4>
            </div>
            <div class="panel-body">
              <p>Full Name: {{ fullname }}</p>
              <p>Mail: {{ email }}</p>
              <p>Password: {{ password }}</p>
              <p>Store in Database?: {{ storedata }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSubmitted: false,
      fullname: "",
      email: "",
      password: "",
      storedata: "Yes"
    };
  },
  methods: {
    submitted() {
      this.isSubmitted = true;
    }
  }
};
</script>

<style>
</style>
