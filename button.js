var button, tbl;
function addTagsAndMore() {
	console.log('addTagsAndMore dziala');
	var link = document.createElement('link');
	link.setAttribute('rel', 'stylesheet');
	link.setAttribute('type', 'text/css');
	link.setAttribute('href', './button.css')

	var js = document.createElement('script');
	js.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.5.3/clipboard.min.js');
	document.body.appendChild(js);
	js.onload = clipboardReady;

	var div = document.createElement('div');
	button = document.createElement('button'); 

	button.textContent = 'copy';	
	button.setAttribute('id', 'copyButton');
	button.setAttribute('class', 'copyButton');

	var tables = document.querySelectorAll('table');
	document.body.appendChild(div);
	div.appendChild(button);
	tables[8].appendChild(div);

	// button = document.getElementById('copyButton');
	button.appendChild(link);
	tbl = document.getElementById('table');
}

var out = [];

function giveElementsToOut(){
	console.log('giveElementsToOut dziala');
	for(var i = 0; i < tbl.rows.length - 5; i++){
		var row = tbl.rows[i];
		if(i === 4 || i === 0) {continue}	
		var child = row.childNodes; // [a]
		var text = child[3];
		// console.log('children: ', i, child[3].textContent);
		// console.log(i, text.textContent);
		// console.log(text.textContent.trim());
		if(text.textContent.trim() !== ''){
			if(i === 2 || i === 7 || i === 8){
				// replace(i);
				out.push(text.textContent.trim() + ' ');
			}else{
				out.push(text.textContent.trim() + '\n');
			}
		}

	}
	var holder = out[4];
	out.splice(4, 1);
	out.splice(3, 0, holder);
}

addTagsAndMore();
giveElementsToOut();

function clipboardReady() {
	console.log('clipboardReady dziala', button);
	new Clipboard(button, {
		text: function(trigger) {
		console.log('output ', out);
			return out.join(' ');
		}
	});
}