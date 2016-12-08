var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";


//Add one song to the beginning
songs.unshift("Pachai Nirame > by A. R. Rahman on the album Alaipayuthey ");
//Add one song at the end of songs array
songs.push("Naan Oru Sindhu > by Ilayaraja on the album Sindhu Bairavi");

// Loop over the array and remove any words or characters that obviously don't belong.
//Students must find and replace the > character in each item with a - character.
var songsStr =songs.join();
for (var i = 0; i <= songsStr.length; i++ ) {
  songsStr = songsStr.split(">").join("-");
  songsStr = songsStr.split("*").join(" ");
  songsStr = songsStr.split("@").join(" ");
  songsStr = songs[4].split("(").join("");
  songsStr = songsStr.split("!").join("");

}



// var mainContent = "";
// for (var i = 0; i< songs.length; i++) {
//   mainContent += `<div>
//                     <p>${songs[i]}</p>
//                   </div`
// }
// console.log(mainContent)

//document.getElementById("mainContent").innerHTML = mainContent

document.getElementById("song_1").innerHTML =songs[0].split(" >",1);
document.getElementById("song1").innerHTML = songs[0].split(" by ")[1].split("on the album",1);
document.getElementById("album").innerHTML=songs[0].split( "on the album")[1];

document.getElementById("song_2").innerHTML = songs[1].split(" >",1);
document.getElementById("song2").innerHTML = songs[1].split(" by ")[1].split("on the album",1);
document.getElementById("album1").innerHTML=songs[1].split( "on the album")[1];

document.getElementById("song_3").innerHTML = songs[2].split(" >",1);
document.getElementById("song3").innerHTML = songs[2].split("@").join("").split(" by ")[1].split("on the album",1);
document.getElementById("album2").innerHTML=songs[2].split( "on the album")[1];

document.getElementById("song_4").innerHTML = songs[3].split(" >",1);
document.getElementById("song4").innerHTML = songs[3].split(" by ")[1].split("on the album",1);
document.getElementById("album3").innerHTML=songs[3].split( "on the album")[1];

document.getElementById("song_5").innerHTML = songs[4].split("(").join("").split(" >",1);
document.getElementById("song5").innerHTML = songs[4].split(" by ")[1].split("on the album",1);
document.getElementById("album4").innerHTML=songs[4].split( "on the album")[1];

document.getElementById("song_6").innerHTML = songs[5].split("!").join("").split(" >",1);
document.getElementById("song6").innerHTML = songs[5].split("*").join(" ").split(" by ")[1].split("on the album",1);
document.getElementById("album5").innerHTML=songs[5].split( "on the album")[1];

document.getElementById("song_7").innerHTML = songs[6].split(" >",1);
document.getElementById("song7").innerHTML = songs[6].split(" by ")[1].split("on the album",1);
document.getElementById("album6").innerHTML=songs[6].split( "on the album")[1];
