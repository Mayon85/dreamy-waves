// MUSIC PLAYER FOR TOP#5

const song1 = {
	title: "Extrait de Mozart",
	subtitle: "Classical Music for brain power",
	cover: "top1.png",
	audio: "top1_mozart.mp3"
};

const song2 = {
	title: "Lonely Day",
	subtitle: "Lofi HipHop Mix",
	cover: "top2.png",
	audio: "top2_lofi.mp3"
};

const song3 = {
	title: "Good Night",
	subtitle: "Jazz Music",
	cover: "top3.png",
	audio: "top3_jazz.mp3"
};

const song4 = {
	title: "Prélude de Chopin",
	subtitle: "Classic music on piano",
	cover: "top4.png",
	audio: "top4_chopin.mp3"
};

const song5 = {
	title: "Guitare Acoustique",
	subtitle: "Musique Douce",
	cover: "top5.png",
	audio: "top5_guitare.mp3"
};

const songList = [song1, song2, song3, song4, song5];
const music = document.getElementById("music");

// Play the Audio
function playAudio() {
	music.load()
	music.play()
};

// Pause the Audio, Stop if close Modal
const pauseAudio = () => {
	music.pause()
};

const closeButton = document.getElementById('close-modal');
closeButton.onclick = function() {
	music.pause();
};



// Display the Cover Image + Titles + Get right song on each Modal
const openModal1 = document.getElementById('open-music-player-one');
const openModal2 = document.getElementById('open-music-player-two');
const openModal3 = document.getElementById('open-music-player-three');
const openModal4 = document.getElementById('open-music-player-four');
const openModal5 = document.getElementById('open-music-player-five');

openModal1.onclick = function () {
	let i = 0;
	const coverImg = document.getElementById('img-cover');
	const musicTitle = document.getElementById('music-title');
	const musicSubtitle = document.getElementById('music-subtitle');
	const source = document.getElementById('source');
	coverImg.setAttribute("src", './images/top5/' + songList[i].cover);
	musicTitle.innerHTML = songList[i].title;
	musicSubtitle.innerHTML = songList[i].subtitle;
	source.setAttribute("src", './audio/' + songList[i].audio);
};

openModal2.onclick = function () {
	let i = 1;
	const coverImg = document.getElementById('img-cover');
	const musicTitle = document.getElementById('music-title');
	const musicSubtitle = document.getElementById('music-subtitle');
	const source = document.getElementById('source');
	coverImg.setAttribute("src", './images/top5/' + songList[i].cover);
	musicTitle.innerHTML = songList[i].title;
	musicSubtitle.innerHTML = songList[i].subtitle;
	source.setAttribute("src", './audio/' + songList[i].audio);
};

openModal3.onclick = function () {
	let i = 2;
	const coverImg = document.getElementById('img-cover');
	const musicTitle = document.getElementById('music-title');
	const musicSubtitle = document.getElementById('music-subtitle');
	const source = document.getElementById('source');
	coverImg.setAttribute("src", './images/top5/' + songList[i].cover);
	musicTitle.innerHTML = songList[i].title;
	musicSubtitle.innerHTML = songList[i].subtitle;
	source.setAttribute("src", './audio/' + songList[i].audio);
};

openModal4.onclick = function () {
	let i = 3;
	const coverImg = document.getElementById('img-cover');
	const musicTitle = document.getElementById('music-title');
	const musicSubtitle = document.getElementById('music-subtitle');
	const source = document.getElementById('source');
	coverImg.setAttribute("src", './images/top5/' + songList[i].cover);
	musicTitle.innerHTML = songList[i].title;
	musicSubtitle.innerHTML = songList[i].subtitle;
	source.setAttribute("src", './audio/' + songList[i].audio);
};

openModal5.onclick = function () {
	let i = 4;
	const coverImg = document.getElementById('img-cover');
	const musicTitle = document.getElementById('music-title');
	const musicSubtitle = document.getElementById('music-subtitle');
	const source = document.getElementById('source');
	coverImg.setAttribute("src", './images/top5/' + songList[i].cover);
	musicTitle.innerHTML = songList[i].title;
	musicSubtitle.innerHTML = songList[i].subtitle;
	source.setAttribute("src", './audio/' + songList[i].audio);
};


// Volume fonction
const slider = document.getElementById('volumeSlider')
slider.oninput = (e) => {
	const volume = e.target.value
	music.volume = volume
}

//ProgressBar

// const updateProgress = () => {
// 		const progressBar = document.getElementById('progress')
// 		progressBar.value = (music.currentTime / music.duration) * 100
// };


// Update progress bar
function updateProgress(e) {
	const { duration, currentTime } = e.srcElement;
	const progressPercent = (currentTime / duration) * 100;
	progress.style.width = `${progressPercent}%`;
  }
  
  // Set progress bar
  function setProgress(e) {
	const width = this.clientWidth;
	const clickX = e.offsetX;
	const duration = music.duration;
  
	music.currentTime = (clickX / width) * duration;
  }




// VIDEO PLAY FOR ALBUMS
$(function () {
	// Auto play modal video
	$(".video").click(function () {
		var theModal = $(this).data("target"),
			videoSRC = $(this).attr("data-video"),
			videoSRCauto = videoSRC +
			"?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
		$(theModal + ' iframe').attr('src', videoSRCauto);
		$(theModal + ' button.close').click(function () {
			$(theModal + ' iframe').attr('src', videoSRC);
		});
	});
});

// SIDE MENU ANIMATION 
function openNav() {
	document.getElementById("slide-menu").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
	document.getElementById("slide-menu").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
}