let bass_button = document.getElementById('bass_button');
let baritone_button = document.getElementById('baritone_button');
let tenor2_button = document.getElementById('tenor2_button');
let tenor1_button = document.getElementById('tenor1_button');
let all_button = document.getElementById('all_button');

let voice_options = document.getElementById('voice-options');
let bass = document.getElementById('bass');
let baritone = document.getElementById('baritone');
let tenor2 = document.getElementById('tenor2');
let tenor1 = document.getElementById('tenor1');
let all_parts = document.getElementById('all');
let speed_controls_container = document.getElementById('speed-controls-container');

let bass_audio = document.getElementById('bass_audio');
let baritone_audio = document.getElementById('baritone_audio');
let tenor2_audio = document.getElementById('tenor2_audio');
let tenor1_audio = document.getElementById('tenor1_audio');
let all_audio = document.getElementById('all_audio');

let playback_speed_text = document.getElementById('speed_text');

bass_button.addEventListener('click', function() {
    voice_options.classList.add('hidden');
    bass.classList.remove('hidden');
    speed_controls_container.classList.remove('hidden');
});

baritone_button.addEventListener('click', function() {
    voice_options.classList.add('hidden');
    baritone.classList.remove('hidden');
    speed_controls_container.classList.remove('hidden');
});

tenor2_button.addEventListener('click', function() {
    voice_options.classList.add('hidden');
    tenor2.classList.remove('hidden');
    speed_controls_container.classList.remove('hidden');
});

tenor1_button.addEventListener('click', function() {
    voice_options.classList.add('hidden');
    tenor1.classList.remove('hidden');
    speed_controls_container.classList.remove('hidden');
});

all_button.addEventListener('click', function() {
    voice_options.classList.add('hidden');
    all_parts.classList.remove('hidden');
    speed_controls_container.classList.remove('hidden');
});

all_audio.addEventListener('ratechange', function() {
    playback_speed_text.innerHTML = `Current Speed: ${all_audio.playbackRate}x`;
})
bass_audio.addEventListener('ratechange', function() {
    playback_speed_text.innerHTML = `Current Speed: ${bass_audio.playbackRate}x`;
})
baritone_audio.addEventListener('ratechange', function() {
    playback_speed_text.innerHTML = `Current Speed: ${baritone_audio.playbackRate}x`;
})
tenor2_audio.addEventListener('ratechange', function() {
    playback_speed_text.innerHTML = `Current Speed: ${tenor2_audio.playbackRate}x`;
})
tenor1_audio.addEventListener('ratechange', function() {
    playback_speed_text.innerHTML = `Current Speed: ${tenor1_audio.playbackRate}x`;
})


function back() {
    voice_options.classList.remove('hidden');
    bass.classList.add('hidden');
    baritone.classList.add('hidden');
    tenor2.classList.add('hidden');
    tenor1.classList.add('hidden');
    all_parts.classList.add('hidden');
    speed_controls_container.classList.add('hidden');

    bass_audio.pause();
    baritone_audio.pause();
    tenor2_audio.pause();
    tenor1_audio.pause();
    all_audio.pause();
}

function slow() {
    if(all_audio.playbackRate <= 0.1)
        return
    all_audio.playbackRate = Math.round((all_audio.playbackRate - 0.1) * 10) / 10;
    bass_audio.playbackRate = Math.round((bass_audio.playbackRate - 0.1) * 10) / 10;
    baritone_audio.playbackRate = Math.round((baritone_audio.playbackRate - 0.1) * 10) / 10;
    tenor2_audio.playbackRate = Math.round((tenor2_audio.playbackRate - 0.1) * 10) / 10;
    tenor1_audio.playbackRate = Math.round((tenor1_audio.playbackRate - 0.1) * 10) / 10;
}

function fast() {
    all_audio.playbackRate = Math.round((all_audio.playbackRate + 0.1) * 10) / 10;
    bass_audio.playbackRate = Math.round((bass_audio.playbackRate + 0.1) * 10) / 10;
    baritone_audio.playbackRate = Math.round((baritone_audio.playbackRate + 0.1) * 10) / 10;
    tenor2_audio.playbackRate = Math.round((tenor2_audio.playbackRate + 0.1) * 10) / 10;
    tenor1_audio.playbackRate = Math.round((tenor1_audio.playbackRate + 0.1) * 10) / 10;
}

function normal() {
    all_audio.playbackRate = 1;
    bass_audio.playbackRate = 1;
    baritone_audio.playbackRate = 1;
    tenor2_audio.playbackRate = 1;
    tenor1_audio.playbackRate = 1;
}