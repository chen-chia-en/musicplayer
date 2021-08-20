window.onload=function(){  
let song = document.getElementById('song')
let singer = document.getElementById('singer')
let audio = document.getElementById('audio')

let image = document.getElementById('image')

let repeat_btn = document.getElementById('repeat_btn')

let play_btn = document.getElementById('play_btn')
let next_btn = document.getElementById('next_btn')
let prev_btn = document.getElementById('prev_btn')

let music = [
    {
        songName: 'Take it',
        artist: 'LiQWYD',
        song:'video/listen.mp3',
        song_img:'image/pink.jpg'
    },
    {
        songName: 'Sweet',
        artist: 'LiQWYD',
        song:'video/love-you.mp3',
        song_img:'image/yellow.jpg'
    },
    {
        songName: 'Views',
        artist: 'iksonmusic',
        song:'video/still-young.mp3',
        song_img:'image/blue.jpg'
    }
]

// initial
let current_song_index;
let next_song_index;

let updateSong = (current_song_index)=>{
    song.innerHTML = music[current_song_index].songName
    singer.innerHTML = music[current_song_index].artist
    audio.src = music[current_song_index].song
    image.src = music[current_song_index].song_img

    audio.play()
    play_btn.classList.remove('fa-play-circle')
    play_btn.classList.add('fa-pause-circle')
}

let initial = () =>{
    current_song_index = 0
    updateSong(current_song_index)
}
initial()

// playsong playbtn
 function playsong() {
    if (audio.paused) {
        audio.play()
        play_btn.classList.remove('fa-play-circle')
        play_btn.classList.add('fa-pause-circle')
    }
    else {
        audio.pause()
        play_btn.classList.remove('fa-pause-circle')
        play_btn.classList.add('fa-play-circle')
    }
};
// next song
function nextsong(){
    current_song_index++;
    next_song_index = current_song_index + 1

    if(current_song_index === music.length){
        current_song_index = 0
    }
    updateSong(current_song_index)
}
// note current_song_index === music.length 用===代表等於
function prevsong(){
    current_song_index--;
    next_song_index = current_song_index + 1

    if(current_song_index < 0){
        current_song_index = music.length - 1
        next_song_index = 0
    }
   updateSong(current_song_index)
}

let repeatSong = () =>{
    audio.currentTime = 0;
    audio.play();
    play_btn.classList.remove('fa-play-circle')
    play_btn.classList.add('fa-pause-circle')
}

next_btn.addEventListener('click', nextsong)
prev_btn.addEventListener('click', prevsong)
play_btn.addEventListener('click', playsong)
audio.addEventListener('ended', nextsong);
// audio.addEventListener('ended', nextsong);
repeat_btn.addEventListener('click', repeatSong);

// note: volumn
// audio.volume的數值從0 ~ 1，所以當volumeslider.value為最大值 100時，
// audio.volume的值是1，因此計算方式audio.volume = volumeslider.value / 100
let volumeslider = document.querySelector('#volumn-slide')
volumeslider.addEventListener('mousemove', function(){
    audio.volume = volumeslider.value / 100
})

//timeline
let durationTime = document.querySelector('.duration-time')
let totalTime =  document.querySelector('.end-time')
let timeLine = document.querySelector('#timeline')


audio.addEventListener('timeupdate',function(){
    let durmins = Math.floor(audio.currentTime / 60 )
    let dursecs = Math.floor(audio.currentTime % 60) 

    let totalmins = Math.floor(audio.duration / 60 );
    let totalsecs = Math.floor(audio.duration % 60 );
// normal state
timeLine.value = (audio.currentTime / audio.duration)*100

//time 00:00
    if(totalsecs < 10){
        totalTime.innerHTML = `0${totalmins}:0${totalsecs}`
    }else{
        totalTime.innerHTML = `0${totalmins}:${totalsecs}`
    }

    if(dursecs < 10){
        durationTime.innerHTML = `0${durmins}:0${dursecs}`
    }else{
        durationTime.innerHTML = `0${durmins}:${dursecs}`
    }

});


// offsetleft 從最近的相對定位的父元素向左的偏移量 


//like-btn
let like_btn = document.querySelector('#like_btn')
like_btn.addEventListener('click', function(){
   if(like_btn.classList.contains('far')){
    like_btn.classList.remove('far')
    like_btn.classList.add('fas')
   }else{
    like_btn.classList.add('far')
    like_btn.classList.remove('fas')
   }

})
// search
let search = document.querySelector('.fa-search')
let searchBar = document.querySelector('#search-bar')
search.addEventListener('click', ()=>{
    searchBar.classList.toggle('active')
})
}
