var chatcount = 0;

document.getElementById('add-iframe-button').onclick = function() {
	var parent_div = document.createElement('div');
	parent_div.style += "height: 300px; width: 300px;";

	parent_div.className += "panel panel-primary";
 	parent_div.className += " draggable ui-draggable ui-draggable-handle";

	chatcount ++;
    var heading = document.createElement('div');
    heading.className += "panel-heading";
    heading.innerHTML = "Chatbox # " + chatcount + '<i class="fa fa-arrows pull-right" aria-hidden="true"></i>'

    var body = document.createElement('div');
    body.className += "panel-body";
    body.style = "padding: 10px;"
 
	var iframe = document.createElement('iframe');
	iframe.src = 'chat-template.html';
	iframe.id = "iframe_" + chatcount;
	iframe.name = "Chatbox_" + chatcount
	iframe.width="280";
	iframe.height="250";
	iframe.style="border=0px;"

	var textme = document.createElement('p');
	textme.innerHTML = "Hello";

	parent_div.appendChild(heading);
	parent_div.appendChild(body);

 	body.appendChild(iframe);
	document.getElementById("main-panel").appendChild(parent_div);
	$('.draggable').draggable()

};

function listenMessage(msg) {
	console.log(msg);

    var count;
	for(count = 1; count <= chatcount; count++){
		var iframe = document.getElementById('iframe_' + count).contentWindow;
		iframe.postMessage(msg.data, "*"); //send the message and target URI
	}
}

if (window.addEventListener) {
    window.addEventListener("message", listenMessage, false);

} else {
    window.attachEvent("onmessage", listenMessage);
}