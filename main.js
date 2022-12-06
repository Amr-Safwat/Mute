let icons = document.getElementsByTagName('i');
let video = document.querySelector('video');


icons[0].onclick = () => {
  icons[1].style.display = 'inline';
  icons[0].style.display = 'none';
  video.muted = true;
}
icons[1].onclick = () => {
  icons[0].style.display = 'inline';
  icons[1].style.display = 'none';
  video.muted = false;
}