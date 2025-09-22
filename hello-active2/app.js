App({
  globalData: {},
  onCreate(options) {
    console.log("Hello Active 2 app created", options);
  },
  onDestroy(options) {
    console.log("Hello Active 2 app destroyed", options);
  }
});
