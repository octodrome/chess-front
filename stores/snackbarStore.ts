export const useSnackbarStore = defineStore('snackbar', {
  state: () => ({
    show: false,
    message: "",
    color: "",
    position: "top",
  }),

  getters: {
    showSnackbar: (state) => state.show,
  
    snackbarMessage: (state) => state.message,
  
    snackbarColor: (state) => state.color,
  },

  actions: {
    display(params) {
      this.message = params.message;
      this.color = params.color;
      this.position = params.position;
      this.show = true;
    },
  
    displayError(message) {
      this.message = message ? message : "Une erreur est survenue. Veuillez réessayer ulterieurement.",
      this.color = "error";
      this.position = "top";
      this.show = true;

    },
  
    displaySuccess(message) {
      this.message = message;
      this.color = "success";
      this.position = "top";
      this.show = true;

    },
  
    hide() {
      this.show = false;
    },
  }
})
