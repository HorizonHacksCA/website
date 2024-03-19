async function getContributors(repo = "GTOHacks/website") {
	const response = await fetch("https://api.github.com/repos/"+repo+"/contributors", {
			method: "GET",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json",
			},
			redirect: "follow",
			referrerPolicy: "no-referrer"
		});
	return response.json();
}

function balls() {
	getContributors().then((data) => {
		elem = document.getElementById("contributors");
		for(i = 0; i < data.length; i++) {
			elem.innerHTML += '<a class="person" href="' + data[i]["html_url"] + '" target="_blank"><img src="' + data[i]["avatar_url"] + '"/><div class="name"><p class="goofy">' + data[i]["login"] + "</p></div>";
		}
	});
}
particlesJS.load('particles-js', 'particlesjs/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

