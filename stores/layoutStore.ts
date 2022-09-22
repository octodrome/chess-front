export const useLayoutStore = defineStore('layout', {
  state: () => ({
    drawerLeftIsOpened: false,
    drawerRightIsOpened: false,
  }),

  actions: {
    toggleLeftDrawer() {
      this.TOGGLE_LEFT_DRAWER();
    },

    toggleRightDrawer() {
      this.TOGGLE_RIGHT_DRAWER();
    },

    setDrawerLeft(value: boolean) {
      this.SET_DRAWER_LEFT(value);
    },

    setDrawerRight(value: boolean) {
      this.SET_DRAWER_RIGHT(value);
    },

    TOGGLE_LEFT_DRAWER() {
      this.drawerLeftIsOpened = !this.drawerLeftIsOpened;
    },
    
    TOGGLE_RIGHT_DRAWER() {
      this.drawerRightIsOpened = !this.drawerRightIsOpened;
    },
    
    SET_DRAWER_LEFT(value) {
      this.drawerLeftIsOpened = value;
    },
    
    SET_DRAWER_RIGHT(value) {
      this.drawerRightIsOpened = value;
    },
  },
})
