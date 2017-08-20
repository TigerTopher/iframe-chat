var chatcount = 0;

document.getElementById('add-iframe-button').onclick = function() {
	var parent_div = document.createElement('div');
	parent_div.style += "height: 300px; width: 300px;";
	parent_div.style.position = "absolute";
	parent_div.style.top = (Math.random()*400).toString() + "px";
	parent_div.style.left = (Math.random()*400).toString() + "px";
	parent_div.style.margin = '0px';

	parent_div.className += "panel panel-primary";
 	parent_div.className += " draggable ui-draggable ui-draggable-handle";
	// parent_div.className += " ui-widget-content";

	chatcount ++;
    var heading = document.createElement('div');
    heading.className += "panel-heading";
    heading.innerHTML = "Chatbox # " + chatcount + '<i class="fa fa-arrows pull-right" aria-hidden="true"></i>'

    var body = document.createElement('div');
    body.className += "panel-body";
    body.style = "padding: 10px;"
    // body.innerHTML = "This is the body"


	var iframe = document.createElement('iframe');
	iframe.src = 'chat-template.html';
	iframe.id = "Topher";

	iframe.width="280";
	iframe.height="250";
	iframe.style="border=0px;"

	// iframe.style = "position:absolute;"
	var textme = document.createElement('p');
	textme.innerHTML = "Hello";

	parent_div.appendChild(heading);
	parent_div.appendChild(body);

 	body.appendChild(iframe);
	document.getElementById("main-panel").appendChild(parent_div);
	$('.draggable').draggable()

//    var text_to_edit = "some text"; window.frames['Topher'].document.body.innerHTML = text_to_edit;

// var fra = document.getElementById('Topher');
// // following will work on same domain (or subdomain with document.domain set) only
// var fraContent = fra.contentDocument || fra.contentWindow.document;
// myLinkHref = fraContent.getElementById('myLinkId').href;
};


