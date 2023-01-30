function send() {
	var txt = document.querySelector("#link").value;
	let result =
		"http://chart.apis.google.com/chart?cht=qr&chl=" + txt + "&chs=200x200";
	document.querySelector("#img").setAttribute("src", result);
}


$(".inline button").on("click", function(){
	var deneme = $(this).parent().find("input").val();
	$(this).parent().parent().find("a").attr("href", deneme);
})