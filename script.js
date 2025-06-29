document.addEventListener("DOMContentLoaded", () => {
  const tombol = document.getElementById("tombol");

  // Set awal berdasarkan class yang ada
  tombol.textContent = document.body.classList.contains("dark")
    ? "🌙 Dark Mode"
    : "☀️ Light Mode";

  tombol.addEventListener("click", () => {
    // Toggle class dark/light
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");

    // Ganti isi tombol
    const isDark = document.body.classList.contains("dark");
    tombol.textContent = isDark ? "🌙 Dark Mode" : "☀️ Light Mode";
  });
});

