export const useLayoutStore = defineStore('layout', {
  state: () => ({
      drawerLeftIsOpened: false,
      drawerRightIsOpened: false,
      modal: {
        isOpened: false,
        content: "",
      }
  }),

  actions: {
    toggleLeftDrawer() {
      this.drawerLeftIsOpened = !this.drawerLeftIsOpened;
    },

    toggleRightDrawer() {
      this.drawerRightIsOpened = !this.drawerRightIsOpened;
    },

    openModal(content) {
      this.modal.isOpened = true;
      this.modal.content = content;
    },

    closeModal() {
      this.modal.isOpened = false;
      this.modal.content = "";
    },
  },
})
