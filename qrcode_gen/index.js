const btn = document.getElementById("generatebtn");


const generate = (e) => {
	e.preventDefault();
	const qrdata = document.getElementById("content").value;

	const url = `https://api.qrserver.com/v1/create-qr-code/?data=${qrdata}&size=250*250`;

	document.getElementById("image-container").src = url;
};

btn.addEventListener("click", (e) => {
	generate(e);
});