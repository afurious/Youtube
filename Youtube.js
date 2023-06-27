const main_video = document.querySelector ('.right video');
const main_title = document.querySelector ('.right .title');
const leftside = document.querySelector ('.leftside ');

let data = [
  {
    id: '1',
    title: '1',
    name: '1.mp4',
    duration: '1:12',
  },
  {
    id: '2',
    title: '2',
    name: '2.mp4',
    duration: '1:12',
  },
  {
    id: '3',
    title: '3',
    name: '3.mp4',
    duration: '1:12',
  },
  {
    id: '4',
    title: '4',
    name: '4.mp4',
    duration: '1:12',
  },
  {
    id: '5',
    title: '5',
    name: '5.mp4',
    duration: '1:12',
  },
  {
    id: '6',
    title: '6',
    name: '6.mp4',
    duration: '1:12',
  },
  {
    id: '7',
    title: '7',
    name: '7.mp4',
    duration: '1:12',
  },
  {
    id: '8',
    title: '8',
    name: '8.mp4',
    duration: '1:12',
  },
];

data.forEach ((video, i) => {
  let video_element = `
  <div class="video" data-id=${video.id}>
  <img src="store/images/play.png" alt="">
  <p>0${i + 1}.</p>
  <h3 class="title">${video.title}</h3>
  <p class="time">${video.duration}</p>   
</div>
      `;
  leftside.innerHTML += video_element;
});

let videos = document.querySelectorAll ('.video');

videos[0].classList.add ('active');
videos[0].querySelector ('img').src = `store/images/pause.png`;

videos.forEach (selected_video => {
  selected_video.onclick = () => {
    for (all_videos of videos) {
      all_videos.classList.remove ('active');
      all_videos.querySelector ('img').src = `store/images/play.png`;
    }
    selected_video.classList.add ('active');
    selected_video.querySelector ('img').src = `store/images/pause.png`;

    let match_video = data.find (
      video => video.id == selected_video.dataset.id
    );
    main_video.src = 'store/video/' + match_video.name;
    main_title.innerHTML = 'store/video/' + match_video.title;
  };
});
