// VIDEO OF BANNER 3
const openBtn = document.getElementById('openVideo');
  const closeBtn = document.getElementById('closeVideo');
  const popup = document.getElementById('videoPopup');
  const iframe = document.getElementById('youtubeFrame');

  openBtn.onclick = () => {
    popup.classList.add('active');
    iframe.src += "&autoplay=1";
  };

  closeBtn.onclick = () => {
    popup.classList.remove('active');
    iframe.src = iframe.src.split('&')[0]; // Reset autoplay
  };