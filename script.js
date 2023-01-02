const music = [
    new Audio('audio/1.mp3'),
    new Audio('audio/top songs/[iSongs.info] 01 - Tillu Anna DJ Pedithe.mp3'),
    new Audio('audio/top songs/[iSongs.info] 02 - Digu Digu Digu Naaga.mp3'),
    new Audio('audio/top songs/[iSongs.info] 01 - Bullettu Bandi.mp3'),
    new Audio('audio/top songs/[iSongs.info] 02 - Akhanda Title Song.mp3'),
    new Audio('audio/top songs/[iSongs.info] 03 - SarangaDariya.mp3'),
    new Audio('audio/top songs/[iSongs.info] 05 - Naatu Naatu.mp3'),
    new Audio('audio/top songs/[iSongs.info] 05 - Oo Antava..Oo Oo Antava.mp3'),
    new Audio('audio/songs/[iSongs.info] 01 - Chitti.mp3'),
    new Audio('audio/songs/[iSongs.info] 01 - Ee Raathale.mp3'),
    new Audio('audio/songs/[iSongs.info] 01 - Kalaavathi.mp3'),
    new Audio('audio/songs/[iSongs.info] 01 - Maguva Maguva.mp3'),
    new Audio('audio/songs/[iSongs.info] 01 - Nee Kannu Neeli Samudram.mp3'),
    new Audio('audio/songs/[iSongs.info] 01 - Next Enti.mp3'),
    new Audio('audio/songs/[iSongs.info] 01 - Ninnila.mp3'),
    new Audio('audio/songs/[iSongs.info] 01 - Puttene Prema.mp3'),
    new Audio('audio/songs/[iSongs.info] 01 - Samajavaragamana.mp3'),
    new Audio('audio/songs/[iSongs.info] 01 - Tharagathi Gadhi.mp3'),
    new Audio('audio/songs/[iSongs.info] 01 - Yentha Sakkagunnaave.mp3'),
    new Audio('audio/songs/[iSongs.info] 02 - Arere Yekkada.mp3'),
    new Audio('audio/songs/[iSongs.info] 02 - Guruvaram.mp3'),
    new Audio('audio/songs/[iSongs.info] 02 - Hey Idi Nenena.mp3'),
    new Audio('audio/songs/[iSongs.info] 02 - Hoyna Hoyna.mp3'),
    new Audio('audio/songs/[iSongs.info] 02 - Priyathama Priyathama.mp3'),
    new Audio('audio/songs/[iSongs.info] 02 - Ramuloo Ramulaa.mp3'),
    new Audio('audio/songs/[iSongs.info] 02 - Undiporaadhey.mp3'),
    new Audio('audio/songs/[iSongs.info] 03 - Disturb Chestha Ninnu.mp3'),
    new Audio('audio/songs/[iSongs.info] 03 - Rangamma Mangamma.mp3'),
    new Audio('audio/songs/[iSongs.info] 04 - Aa Gattununtaava.mp3'),
    new Audio('audio/songs/[iSongs.info] 04 - Allasani Vaari.mp3'),
    new Audio('audio/songs/[iSongs.info] 04 - ButtaBomma.mp3'),
    new Audio('audio/songs/[iSongs.info] 04 - Champesaave Nannu.mp3'),
]

// songs (name,image) for changing on the bottom
const songs = [
    {
        id: '1',
        song_name: `On my way
        <div class="subtitle">Alan Walker</div>`,
        poster: 'img/1.jpg'
    },
    {
        id: '2',
        song_name: `Tillu Anna DJ Pedithe
        <div class="subtitle">DJ Tillu</div>`,
        poster: 'img/Dj_Tillu.png'
    },
    {
        id: '3',
        song_name: `Digu Digu Digu Naaga
        <div class="subtitle">Varudu Kavalenu</div>`,
        poster: 'img/Digu_Digu_Naaga.png'
    },
    {
        id: '4',
        song_name: `Bullettu Bandi
        <div class="subtitle">Private song</div>`,
        poster: 'img/Bullettu_Bandi.png'
    },
    {
        id: '5',
        song_name: `Akhanda Title
        <div class="subtitle">Akhanda</div>`,
        poster: 'img/Akhanda_Title.png'
    },
    {
        id: '6',
        song_name: `Saranga Dariya
        <div class="subtitle">Love Story</div>`,
        poster: 'img/Saranga_Dariya.png'
    },
    {
        id: '7',
        song_name: `Naatu Naatu
        <div class="subtitle">RRR</div>`,
        poster: 'img/Naatu_Naatu.png'
    },
    {
        id: '8',
        song_name: `Oo Antava
        <div class="subtitle">Pushpa</div>`,
        poster: 'img/Oo_Antava.png'
    },
    {
        id: '9',
        song_name: `Chitti
        <div class="subtitle">Alan Walker</div>`,
        poster: 'img/songs/chitti.png'
    },
    {
        id: '10',
        song_name: `Ee Raathale
        <div class="subtitle">Alan Walker</div>`,
        poster: 'img/songs/ee_rathaley.png'
    },
    {
        id: '11',
        song_name: `Kalaavathi
        <div class="subtitle">Alan Walker</div>`,
        poster: 'img/songs/Kalavathi.png'
    },
    {
        id: '12',
        song_name: `Maguva Maguva
        <div class="subtitle">Alan Walker</div>`,
        poster: 'img/songs/maguva_maguva.png'
    },
    {
        id: '13',
        song_name: `Nee Kannu Neeli
        <div class="subtitle">Alan Walker</div>`,
        poster: 'img/songs/uppena.png'
    },
    {
        id: '14',
        song_name: `Next Enti
        <div class="subtitle">Alan Walker</div>`,
        poster: 'img/songs/Nenu_Local.png'
    },
    {
        id: '15',
        song_name: `Ninnila
        <div class="subtitle">Alan Walker</div>`,
        poster: 'img/songs/Tholiprema.png'
    },
    {
        id: '16',
        song_name: `Puttene Prema
        <div class="subtitle">Alan Walker</div>`,
        poster: 'img/songs/Gully_rowdy.png'
    },
    {
        id: '17',
        song_name: `Samajavaragamana
        <div class="subtitle">Alan Walker</div>`,
        poster: 'img/songs/smajavagma.png'
    },
    {
        id: '18',
        song_name: `Tharagathi Gadhi
        <div class="subtitle">Alan Walker</div>`,
        poster: 'img/songs/Color_photo.png'
    },
    {
        id: '19',
        song_name: `Yentha Sakkaga
        <div class="subtitle">Alan Walker</div>`,
        poster: 'img/songs/rangasthalam.png'
    },
    {
        id: '20',
        song_name: `Arere Yekkada
        <div class="subtitle">Alan Walker</div>`,
        poster: 'img/songs/Nenu_Local.png'
    },
    {
        id: '21',
        song_name: `Guruvaram
        <div class="subtitle">Alan Walker</div>`,
        poster: 'img/songs/Kirrak_party.png'
    },
    {
        id: '22',
        song_name: `Hey idi Nenena
        <div class="subtitle">Alan Walker</div>`,
        poster: 'img/songs/hey_idi_nenena.png'
    },
    {
        id: '23',
        song_name: `Hoyna Hoyna
        <div class="subtitle">Alan Walker</div>`,
        poster: 'img/songs/gang_leader.png'
    },
    {
        id: '24',
        song_name: `Priyathama
        <div class="subtitle">Alan Walker</div>`,
        poster: 'img/songs/majili.png'
    },
    {
        id: '25',
        song_name: `Ramulo Ramula
        <div class="subtitle">Alan Walker</div>`,
        poster: 'img/songs/ramulo_ramula.png'
    },
    {
        id: '26',
        song_name: `Undiporadey
        <div class="subtitle">Alan Walker</div>`,
        poster: 'img/songs/husharu.png'
    },
    {
        id: '27',
        song_name: `Disturb Chestha
        <div class="subtitle">Alan Walker</div>`,
        poster: 'img/songs/Nenu_Local.png'
    },
    {
        id: '28',
        song_name: `Rangamma Mangamma
        <div class="subtitle">Alan Walker</div>`,
        poster: 'img/songs/rangasthalam.png'
    },
    {
        id: '29',
        song_name: `Aa Gattununtaava
        <div class="subtitle">Alan Walker</div>`,
        poster: 'img/songs/rangasthalam.png'
    },
    {
        id: '30',
        song_name: `Allasani Vaari
        <div class="subtitle">Alan Walker</div>`,
        poster: 'img/songs/tholiprema.png'
    },
    {
        id: '31',
        song_name: `ButtaBomma
        <div class="subtitle">Alan Walker</div>`,
        poster: 'img/songs/buttabomma.png'
    },
    {
        id: '32',
        song_name: `Champesave Nannu
        <div class="subtitle">Alan Walker</div>`,
        poster: 'img/songs/Nenu_Local.png'
    },
]
// this array changes the img and name for everything(not bottom on)basically without mentioning in HTML
Array.from(document.getElementsByClassName('song-item')).forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].song_name;
})
// Start of changing(playlist,favourites,newsongs)songs list
let playlist0 = document.getElementById('playlist');
let favourite0 = document.getElementById('favourite');
let newsongs0 = document.getElementById('NewSongs');
let active1 = document.getElementById('active1');
let active2 = document.getElementById('active2');
let active3 = document.getElementById('active3');
let top_name = document.getElementById('top_name');
function playlist() {
    playlist0.style.display = 'grid';
    favourite0.style.display = 'none';
    newsongs0.style.display = 'none';
    active1.classList.add('active');
    active2.classList.remove('active');
    active3.classList.remove('active');
    top_name.innerText = ' Playlist';
}
function favourite() {
    playlist0.style.display = 'none';
    favourite0.style.display = 'grid';
    newsongs0.style.display = 'none';
    active1.classList.remove('active');
    active2.classList.add('active');
    active3.classList.remove('active');
    top_name.innerText = ' Favourite';
}
function newsongs() {
    playlist0.style.display = 'none';
    favourite0.style.display = 'none';
    newsongs0.style.display = 'grid';
    active1.classList.remove('active');
    active2.classList.remove('active');
    active3.classList.add('active');
    top_name.innerText = ' New Songs';
}
// End of changing songs list

// Start of changing main section(discover,library and more....)
let marker = document.getElementById('marker');
let item = document.querySelectorAll('#nav0 li');
let markerNone = document.querySelector('#markerNone');

function indicator(e) {
    marker.style.left = e.offsetLeft+'px';
    marker.style.width = e.offsetWidth+'px';
}
item.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        markerNone.style.display = 'none';
        indicator(e.target);
    })
})
// End of changing main section(discover,library and more....)
// 
// 
let main_previous = document.getElementById('main_previous');
let main_paly = document.getElementById('main_play22');
let main_next = document.getElementById('main_next');
let wave = document.getElementById('e1234');
let motham = document.getElementsByClassName('playListPlay');
let c4ms1 = document.getElementById('c4ms1');
let c4ms2 = document.getElementById('c4ms2');
let c4ms3 = document.getElementById('c4ms3');
let c4ms4 = document.getElementById('c4ms4');
let id_number = 1;
let id_number0 = true;

// main play button on the bottom
main_paly.addEventListener('click',()=>{
    if(id_number0){
        id_number0 = false;
        manirey(1);
    }
    if(music[id_number-1].paused || music[id_number-1].currentTime <= 0){
        music[id_number-1].play();
        main_paly.classList.remove('bi-play-fill');
        main_paly.classList.add('bi-pause-fill');
        wave.classList.add('running');
        motham[id_number-1].classList.remove('bi-play-circle-fill');
        motham[id_number-1].classList.add('bi-pause-circle-fill');
    }
    else{
        music[id_number-1].pause();
        main_paly.classList.add('bi-play-fill');
        main_paly.classList.remove('bi-pause-fill');
        wave.classList.remove('running');
        motham[id_number-1].classList.add('bi-play-circle-fill');
        motham[id_number-1].classList.remove('bi-pause-circle-fill');
    }
})
// End of pay button

// for going to previous song
main_previous.addEventListener('click',()=>{
    if (id_number == 1){
        console.log("This is first one bro");
    }
    else{
        manirey(id_number-1);
    }
})
// End of previous button
// for going to next song
main_next.addEventListener('click',()=>{
    if (id_number == 18){
        console.log("This is first one bro");
    }
    else{
        manirey(id_number+1);
    }
})
// End of next button
// play button on middle with name
function pasching() {
    if(id_number0){
        id_number0 = false;
        manirey(1);
    }
    if(music[id_number-1].paused || music[id_number-1].currentTime <= 0){
        music[id_number-1].play();
        main_paly.classList.remove('bi-play-fill');
        main_paly.classList.add('bi-pause-fill');
        wave.classList.add('running');
        motham[id_number-1].classList.remove('bi-play-circle-fill');
        motham[id_number-1].classList.add('bi-pause-circle-fill');
    }
    else{
        music[id_number-1].pause();
        main_paly.classList.add('bi-play-fill');
        main_paly.classList.remove('bi-pause-fill');
        wave.classList.remove('running');
        motham[id_number-1].classList.add('bi-play-circle-fill');
        motham[id_number-1].classList.remove('bi-pause-circle-fill');
    }
}
// end of play button with text
let background_clor,abc;
let stoping = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,];
// this function for making all play buttons to pause buttons
const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
        element.classList.remove('bi-pause-circle-fill');
        element.classList.add('bi-play-circle-fill');
    })
}
// main funtion that play song when click on it
function manirey(i) {
    let k = 0;
    id_number = i;
    // this loop is for making all songs pause and start over
    for(k ; k < music.length ; k++){
        abc = `0${k+1}`;
        background_clor = document.getElementById(abc);
        // music[k].play();
        music[k].pause();
        music[k].currentTime = 0;
        background_clor.style.backgroundColor = 'transparent';
    }
    id_number0 = false;
    background_clor = document.getElementById(`0${i}`);
    makeAllPlay();
    // below 2 lines change botttom song img and name
    c4ms1.src = songs[i-1].poster;
    c4ms2.innerHTML = songs[i-1].song_name;
    background_clor.style.backgroundColor = 'rgba(105, 105, 170, 0.1)';
    if(stoping[i-1]){
        music[i-1].pause();
        main_paly.classList.add('bi-play-fill');
        main_paly.classList.remove('bi-pause-fill');
        wave.classList.remove('running');
        motham[i-1].classList.add('bi-play-circle-fill');
        motham[i-1].classList.remove('bi-pause-circle-fill');
        stoping = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,];
        stoping[i-1] = false;
    }
    else if(music[i-1].paused || music[i-1].currentTime <= 0){
        music[i-1].play();
        main_paly.classList.remove('bi-play-fill');
        main_paly.classList.add('bi-pause-fill');
        wave.classList.add('running');
        motham[i-1].classList.remove('bi-play-circle-fill');
        motham[i-1].classList.add('bi-pause-circle-fill');
        stoping = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,];
        stoping[i-1] = true;
    }
    else{
        music[i-1].pause();
        main_paly.classList.add('bi-play-fill');
        main_paly.classList.remove('bi-pause-fill');
        wave.classList.remove('running');
        motham[i-1].classList.add('bi-play-circle-fill');
        motham[i-1].classList.remove('bi-pause-circle-fill');
        stoping = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,];
        stoping[i-1]= true;
    }
    // seek bar
    let currentStart = document.getElementById('currentStart')
    let currentEnd = document.getElementById('currentEnd');
    let seek = document.getElementById('seek');
    let bar2 = document.getElementById('bar2');
    let dot0 = document.getElementsByClassName('dot')[0];
    music[i-1].addEventListener('timeupdate',()=>{
        seek.addEventListener('change',()=>{
            music[i-1].currentTime = seek.value * music[i-1].duration / 100;
        })
        let curr = music[i-1].currentTime;
        let dur = music[i-1].duration;
        if (curr == dur){
            manirey(id_number+1);
        }
        let min_durr = Math.floor(dur/60);
        let sec_durr = Math.floor(dur%60);
        currentEnd.innerText = `${min_durr}:${sec_durr}`;
        if (sec_durr < 10){
            currentEnd.innerText = `${min_durr}:0${sec_durr}`;
        }
        else{
            currentEnd.innerText = `${min_durr}:${sec_durr}`;
        }
    
        let min = Math.floor(curr/60);
        let sec = Math.floor(curr%60);
        if (sec < 10){
            currentStart.innerText = `${min}:0${sec}`;
        }
        else{
            currentStart.innerText = `${min}:${sec}`;
        }

        let progressbar = parseInt((curr/dur)*100);
        seek.value = progressbar;
        let seekbar = seek.value;
        bar2.style.width = `${seekbar}%`;
        dot0.style.left = `${seekbar}%`;

        // volume bar
        let vol_icon = document.getElementById('vol_icon');
        let vol = document.getElementById('vol');
        let vol_dot = document.getElementById('vol_dot');
        let vol_bar = document.getElementsByClassName('vol_bar')[0];
        
        vol.addEventListener('change',()=>{
            if (vol.value == 0) {
                vol_icon.classList.remove('bi-volume-down-fill');
                vol_icon.classList.add('bi-volume-mute-fill');
                vol_icon.classList.remove('bi-volume-up-fill');
            }
            if (vol.value > 0) {
                vol_icon.classList.add('bi-volume-down-fill');
                vol_icon.classList.remove('bi-volume-mute-fill');
                vol_icon.classList.remove('bi-volume-up-fill');
            }
            if (vol.value > 50) {
                vol_icon.classList.remove('bi-volume-down-fill');
                vol_icon.classList.remove('bi-volume-mute-fill');
                vol_icon.classList.add('bi-volume-up-fill');
            }
        
            let vol_a = vol.value;
            vol_bar.style.width = `${vol_a}%`;
            vol_dot.style.left = `${vol_a}%`;
            music[i-1].volume = vol_a/100;
        })
    })
}
// scrolling popular songs and artists
let arrow_left_short = document.getElementById('arrow-left-short');
let arrow_right_short = document.getElementById('arrow-right-short');
let arrow_left_short_down = document.getElementById('arrow-left-short-down');
let arrow_right_short_down = document.getElementById('arrow-right-short-down');
let scroll_thing = document.getElementById('scroll_thing');
let scroll_thing_down = document.getElementById('scroll_thing_down');
arrow_left_short.addEventListener('click',()=>{
    scroll_thing.scrollLeft -= 200;
})
arrow_right_short.addEventListener('click',()=>{
    scroll_thing.scrollLeft += 200;
})
arrow_left_short_down.addEventListener('click',()=>{
    scroll_thing_down.scrollLeft -= 200;
})
arrow_right_short_down.addEventListener('click',()=>{
    scroll_thing_down.scrollLeft += 200;
})
// End of scrolling

// Mobile Version
let menu_side = document.getElementById('menu-side');
let song_side = document.getElementById('song-side');
let lib = document.getElementById('lib');
let rad = document.getElementById('rad');
let openClose = true;
let dis = 1;
// This function changes from songlist to main section
function ain_player() {
    if(openClose){
        menu_side.classList.add('menu-side970px');
        song_side.classList.add('song-side970px');
        openClose = false;
    }
    else{
        menu_side.classList.remove('menu-side970px');
        song_side.classList.remove('song-side970px');
        openClose = true;
    }
    if(dis == 1){
        lib.style.display = 'none !important';
        rad.style.display = 'none !important';
    }
    else if(dis == 2){
        song_side.style.display = 'none !important';
        rad.style.display = 'none !important';
    }
    else if(dis == 3){
        song_side.style.display = 'none !important';
        lib.style.display = 'none !important';
    }
}
let openClose0 = true
function reverseDiscover() {
    ain_player();
}
function Discover() {
    dis = 1;
    lib.style.display = 'flex';
    rad.style.display = 'flex';
    song_side.style.zIndex = '4';
    song_side.classList.remove('song-side-animation');
    lib.classList.add('lib');
    rad.classList.add('rad');
    setTimeout(()=>{
        song_side.style.zIndex = '5';
        lib.style.zIndex = '3';
        rad.style.zIndex = '3'
    },790);
}
function Library() {
    dis = 2;
    lib.style.display = 'flex';
    rad.style.display = 'flex';
    lib.style.zIndex = '4';
    song_side.classList.add('song-side-animation');
    lib.classList.remove('lib');
    rad.classList.add('rad');
    setTimeout(()=>{
        lib.style.zIndex = '5';
        song_side.style.zIndex = '3';
        rad.style.zIndex = '3'
    },790);
}
function Radio() {
    dis = 3;
    lib.style.display = 'flex';
    rad.style.display = 'flex';
    rad.style.zIndex = '4'
    song_side.classList.add('song-side-animation');
    lib.classList.add('lib');
    rad.classList.remove('rad');
    setTimeout(()=>{
        rad.style.zIndex = '5'
        song_side.style.zIndex = '3';
        lib.style.zIndex = '3';
    },790);
    
}
// Pure mobile version
// Pure mobile version
// Pure mobile version
// Pure mobile version
// Pure mobile version
// Pure mobile version