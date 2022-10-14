export const useLayoutStore = defineStore('layout', {
  state: () => ({
      drawerLeftIsOpened: false,
      drawerRightIsOpened: false,
  }),

  actions: {
    toggleLeftDrawer() {
      this.drawerLeftIsOpened = !this.drawerLeftIsOpened;
    },

    toggleRightDrawer() {
      this.drawerRightIsOpened = !this.drawerRightIsOpened;
    },
  },
})
