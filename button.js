var button, tbl;
function addTagsAndMore() {
	console.log('addTagsAndMore dziala');
	var link = document.createElement('link');
	link.setAttribute('rel', 'stylesheet');
	link.setAttribute('type', 'text/css');
	link.setAttribute('href', './button.css')

	var div = document.createElement('div');
	button = document.createElement('button'); 

	button.textContent = 'copy';	
	button.setAttribute('id', 'copyButton');
	button.setAttribute('class', 'copyButton');

	var tables = document.querySelectorAll('table');
	document.body.appendChild(div);
	div.appendChild(button);
	tables[8].appendChild(div);

	button.appendChild(link);
	tbl = tables[8];
}

var out = [];

function giveElementsToOut(){
	console.log('giveElementsToOut dziala');
	for(var i = 0; i < tbl.rows.length - 6; i++){
		var row = tbl.rows[i];
		if(i === 4 || i === 0) {continue}	
		var child = row.childNodes; // [a]
		var text = child[3];
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

console.log("TES0XXXXT", document.querySelectorAll('table'));

new Clipboard(button, {
		text: function(trigger) {
		console.log('output ', out);
			return out.join(' ');
		}
	});