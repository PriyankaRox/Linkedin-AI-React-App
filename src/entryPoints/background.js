// export default DefineBackground(() => {
//   console.log(`Hello from ${browser.runtime.id}!`);
// });


export default defineBackground({
  // Set manifest options
  persistent: undefined | true | false,
  type: undefined | 'module',

  // Set include/exclude if the background should be removed from some builds
  include: undefined | string[],
  exclude: undefined | string[],

  // Executed when background is loaded
  main() {
    // ...
  },
});