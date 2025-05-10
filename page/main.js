
window.onload = function () {
  const welcome = document.getElementById('welcomeScreen');

  // Wait 2 seconds, then fade out over 1 second
  setTimeout(() => {
    welcome.style.opacity = '0';
    setTimeout(() => {
      welcome.style.display = 'none';
    }, 1000); // 1 second after fade starts
  }, 1000); // visible for 2 seconds
};

function showSection(section) {
  const sections = ['home', 'videos', 'contact'];
  sections.forEach(sec => {
    document.getElementById(`${sec}-section`).style.display = sec === section ? 'block' : 'none';
  });
}

function showContact() {
  const info = document.getElementById('contact-info');
  info.style.display = info.style.display === 'block' ? 'none' : 'block';
}
// Show/hide contact info
function showContact() {
  const info = document.getElementById('contact-info');
  info.style.display = info.style.display === 'block' ? 'none' : 'block';
}
