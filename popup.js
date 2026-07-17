const button = document.getElementById("toggleBtn");
const img = document.getElementById("img1");
const v1 = document.getElementById("video-background");
const heading = document.getElementById("heading");
let isDarkMode = false;

button.addEventListener("click", async () => {
  isDarkMode = !isDarkMode;

  button.textContent = isDarkMode ? "Enable Light Mode" : "Enable Dark Mode";
  heading.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
  let tabs = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });

  chrome.tabs.sendMessage(tabs[0].id, {
    action: isDarkMode ? "darkMode" : "lightMode",
  });
  if(isDarkMode){
    img.src = "icons/night-mode.png";
    v1.src = "video/v1.mp4";
  }else{
    img.src = "icons/day-mode.png";
    v1.src = "video/v2.mp4";
  }
  
});

