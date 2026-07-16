const button = document.getElementById("toggleBtn");
let isDarkMode = false;

button.addEventListener("click", async () => {
  isDarkMode = !isDarkMode;

  button.textContent = isDarkMode ? "Enable Light Mode" : "Enable Dark Mode";

  let tabs = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });

  chrome.tabs.sendMessage(tabs[0].id, {
    action: isDarkMode ? "darkMode" : "lightMode",
  });
//   button.textContent = "Successfully Start...";
});
