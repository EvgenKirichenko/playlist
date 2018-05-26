;(function () {
	"use strict";
	var playList = [{
			author: "Винник",
			song: "Вовчиця",
			duration: "3:45"
		},
		{
			author: "Queen",
			song: "we will rock you",
			duration: "3:02"
		},
		{
			author: "Scorpions",
			song: "wind of change",
			duration: "4:43"
		},
		{
			author: "Scorpions",
			song: "Still Loving You",
			duration: "4:47"
		},
		{
			author: "Баста",
			song: "Мама",
			duration: "4:14"
		},
		{
			author: "Був’є",
			song: "Голова",
			duration: "2:43"
		},
		{
			author: "ЯрмаК ft. Лев, Фир, Тоф",
			song: "Улетай",
			duration: "4:20"
		}
	];


	var playListEl = document.getElementById('playlist'),
		playListTmpl = document.getElementById('playlist-li').innerHTML,
		playListHTML = '';

	console.log(playListTmpl);

	playList.forEach(function (item) {

		playListHTML += playListTmpl
			.replace(/{{author}}/ig, item.author)
			.replace(/{{duration}}/ig, item.duration)
			.replace(/{{song}}/ig, item.song);
	});

	playListEl.innerHTML = playListHTML;

})();
