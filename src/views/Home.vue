<template>
  <div class="text-center">
    <v-snackbar v-model="snackbar" class="snackbar" color="#fff" top>
      Request is created!
    </v-snackbar>
    <v-dialog class="dialog" v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <a class="click-me" v-on="on">
          <span>Click Me</span>
          <div class="wave" />
          <div class="wave2" />
          <div class="wave3" />
        </a>
      </template>

      <v-card class="card">
        <v-card-title
          style="color: #363636"
          class="card-title headline"
          primary-title
        >
          Form for your request
        </v-card-title>

        <v-form ref="form">
          <v-text-field
            v-model.trim="name"
            :rules="nameRules"
            label="name"
            type="text"
            required
            class="input"
            rounded
            dense
          />
          <v-text-field
            v-model.trim="tel"
            :rules="telRules"
            label="Phone number"
            type="tel"
            required
            class="input"
            rounded
            dense
          />
          <v-textarea
            v-model="comment"
            label="Your comment"
            type="text"
            class="input"
            rounded
            dense
          />
        </v-form>
        <v-card-actions>
          <v-spacer />
          <v-btn
            type="submit"
            @click.prevent="createRequest"
            class="btn-submit"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    id: "",
    name: "",
    tel: "",
    comment: "",
    snackbar: false,
    nameRules: [v => !!v || "Name is required"],
    telRules: [v => !!v || "Phone number is required"]
  }),
  watch: {
    dialog() {
      if (this.name != "" && this.tel != "" && this.comment != "") this.$refs.form.reset();
    }
  },
  methods: {
    createRequest() {
      if (this.name != "" && this.tel != "") {
        this.$store
          .dispatch("createRequest", {
            id: this.id,
            name: this.name,
            tel: this.tel,
            comment: this.comment
          })
          .then(() => {
            this.snackbar = true;
            this.$refs.form.reset();
          });
      }
    }
  }
};
</script>

<style scoped>
.snackbar {
  color: #000;
  box-shadow: none;
}

.click-me {
  margin: auto;
  margin-top: 40vh;
  padding-top: 5px;
  width: 150px;
  height: 40px;
  background: #fff;
  border-radius: 20px;
  box-shadow: none;
  position: relative;
  display: block;
  text-transform: uppercase;
  letter-spacing: 4px;
  /* overflow: hidden; */
}
.click-me span {
  width: 100%;
  height: 100%;
  padding: 8px 20px;
  background: #f28dcd;
  /* border: 2px solid #f28dcd; */
  border-radius: 30px;
  color: #fff;
  position: relative;
  z-index: 3;
}
.click-me .wave {
  position: absolute;
  top: -7px;
  left: -3px;
  width: 155px;
  height: 50px;
  /* background: #00aeff; */
  border: 1px solid #00aeff;
  border-radius: 30px;
  transition: 1s;
  overflow: hidden;
  animation: animate 3s linear infinite;
  overflow: hidden;
  z-index: 2;
  transition: 1s;
}
.click-me .wave2 {
  position: absolute;
  top: -7px;
  left: -3px;
  width: 155px;
  height: 50px;
  border: 1px solid #00aeff;
  border-radius: 30px;
  transition: 1s;
  overflow: hidden;
  animation: animate2 3s linear infinite;
  overflow: hidden;
  z-index: 2;
  transition: 1s;
}
.click-me .wave3 {
  position: absolute;
  top: -7px;
  left: -3px;
  width: 150px;
  height: 50px;
  border: 1px solid #00aeff;
  border-radius: 30px;
  transition: 1s;
  overflow: hidden;
  animation: animate3 3s linear infinite;
  overflow: hidden;
  z-index: 2;
  transition: 1s;
}
@keyframes animate {
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.3);
  }
}
@keyframes animate2 {
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.4);
  }
}
@keyframes animate3 {
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.5);
  }
}

.card {
  padding: 10px;
}

.card-title {
  margin-bottom: 23px;
  background: none;
}
.input {
  margin: 20px 15px;
  background: #f5f5f5;
}

/* button for submit in form */
.btn-submit {
  width: 450px;
  background: none !important;
  /* border-radius: 30px; */
  box-shadow: none;
  color: #8bf759;
  letter-spacing: 4px;
  position: relative;
  display: inline-block;
  overflow: hidden;
  transition: 0.5s;
}
.btn-submit:hover {
  background-color: #8bf759 !important;
  border-radius: 0;
  /* box-shadow: 0 0 5px #8bf759,
              0 0 20px #8bf759,
              0 0 30px #8bf759; */
  color: #fff !important;
}
.btn-submit span {
  position: absolute;
  display: block;
}
.btn-submit span:nth-child(1) {
  top: -10px;
  left: -50%;
  width: 50%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #8bf759);
  animation: animate-submit 1s linear infinite;
}
@keyframes animate-submit {
  0% {
    left: -50%;
  }
  50%,
  100% {
    left: 50%;
  }
}
.btn-submit span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #8bf759);
  animation: animate-submit2 1s linear infinite;
  animation-delay: 0.25s;
}
@keyframes animate-submit2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}
.btn-submit span:nth-child(3) {
  bottom: -10px;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #8bf759);
  animation: animate-submit3 1s linear infinite;
  animation-delay: 0.25s;
}
@keyframes animate-submit3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}
.btn-submit span:nth-child(4) {
  bottom: -100px;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #8bf759);
  animation: animate-submit4 1s linear infinite;
  animation-delay: 0.25s;
}
@keyframes animate-submit4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}
</style>
