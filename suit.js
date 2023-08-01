var output = document.getElementById('hasil');
var skor_player = document.getElementById('skor-player')
var skor_computer = document.getElementById('skor-computer')
var hitung_mundur =document.getElementById('detik')
var output_computer = document.getElementById('output-computer')
var output_player = document.getElementById('output-player')
var output_hasil = document.getElementById('output-hasil')

const i = document.createElement('i')


function ClickButton(suit) {
    
    hitung_mundur.style.display = "block";
    output_hasil.style.display = "none";
    output.innerHTML = ''
    output_computer.innerHTML = ''
    output_player.innerHTML = ''
    
    var computer = Math.random();
        if(computer < 0.34) {
            computer = 'scissors'
        } else if(computer >= 0.34 && computer < 0.67) {
            computer = 'paper'
        } else {
            computer = 'rock'
        }

    if(suit == computer) {
        hasil = 'DRAW!!'
    } else if(suit == 'scissors') {
        hasil = (computer == 'paper') ? 'Player WON!!' : 'Computer WON!!'
    } else if(suit == 'paper') {
        hasil = (computer == 'rock') ? 'Player WON!!' : 'Computer WON!!'
    } else if(suit == 'rock') {
        hasil = (computer == 'scissors') ? 'Player WON!!' : 'Computer WON!!'
    }



    function score() {
        if(hasil == 'Player WON!!') {
            skor_player.innerText++
        } else if(hasil == 'Computer WON!!') {
            skor_computer.innerText++
        }
    }

    var detik = 3;
    var timer = setInterval(function(){ myTimer() }, 1000);
    function myTimer() {
        hitung_mundur.innerHTML = detik--;
        if(detik < 0) {
            score();
            hitung_mundur.style.display = "none";
            output_hasil.style.display = "block"
            hitung_mundur.innerHTML = "";

            output.innerHTML = hasil;
            output_player.innerHTML = `<i class='far fa-hand-${suit}'></i>`
            output_computer.innerHTML = `<i class='far fa-hand-${computer}'></i>`
            console.log(output_player)
            clearInterval(timer);
        }
    }
}