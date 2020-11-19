
let parts = [];

class part {
	
	constructor(kind, maker, model, imgUrl) {
		this.kind = kind;
		this.maker=maker;
		this.model=model;
		this.imgUrl = imgUrl;
	}
	
	print = (tableId) => {
		let partsTable = document.getElementById(tableId);
		for (let i = 0; i < 4; i++) {
			let newTr = document.createElement('tr');
			newTr.innerHTML = '<td>' + this.kind + '</td><td>' + this.maker + '</td><td>' + this.model + '</td><td><img src="' + this.imgUrl + '" /></td>';
			partsTable.appendChild(newTr);
		}
	}
}

let voodoo = new part('Video Card', '3dfx', 'Voodoo', 'https://tpucdn.com/gpu-specs/images/c/3570-front.jpg');
let soundblaster = new part('Sound/Game Card', 'Creative', 'SoundBlaster', 'https://i.ebayimg.com/images/g/um8AAOSw7speQjQ1/s-l640.jpg');

parts[0] = voodoo;
parts[1] = soundblaster;

function printParts(tableId) {
	/*for (let i = 0; i < parts.length; i++) {
		parts[i].print(tableId);
	}*/
	parts.forEach(part => part.print(tableId));
}
