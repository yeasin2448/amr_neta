import Alpine from "alpinejs";

document.addEventListener('alpine:init', () => {
  Alpine.store('darkMode', {
      dark: false,

      toggle() {
          this.dark = ! this.dark
          if (this.dark) {
            document.documentElement.classList.add("dark")
          } else {
            document.documentElement.classList.remove("dark")
          }
      }
  })
})

window.Alpine = Alpine;

Alpine.start();
