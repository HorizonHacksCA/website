async function getJSON(url) {
	const response = await fetch(url, {
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

function addContributor(user) {
	elem = document.getElementById("contributors");
	getJSON(user["url"]).then((userdata) => {
		elem.innerHTML += '<a class="person" href="' + user["html_url"] + '" target="_blank"><img src="' + user["avatar_url"] + '"/><div class="name" id="user-' + user["login"] + '"><p class="goofy">' + user["login"] + "</p><i>" + userdata["name"] + "</i></div>";
	});
}

getJSON("https://api.github.com/repos/GTOHacks/website/contributors").then((users) => {
	for(i = 0; i < users.length; i++) {
		addContributor(users[i]);
	}
});

particlesJS.load('particles-js', 'particlesjs/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

