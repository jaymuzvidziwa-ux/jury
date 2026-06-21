const host = document.location.origin;

function getDependency(){
	try{

		let depends = document.querySelectorAll('details')[0];
		if (depends.length < 1){
			return;
		}
		let link = depends.querySelector('a').href 
	}catch{
		console.log("ERROR: Links follow error on -",document.location.href);
		return;
	}
}

function getVersion(){
	try{
		let categories = document.querySelectorAll("tr");
		let version = "";
		let e;

		for (let i = 0;i < categories.length;i ++){
			e = categories[i];
			if (e.querySelector("th").innerText.toLowerCase() == "Version".toLowerCase()){
				version = e.querySelector("strong").innerText;
				return version;
			};	
		};
		return null;
	}catch{	
		console.log("ERROR: Version extraction error on -",document.location.href);
		return null;
	}
}

'pure-menu-list'

`https://pkgs.alpinelinux.org/package/v3.24/main/x86_64/${name}`

`https://dl-cdn.alpinelinux.org/v3.24/main/x86_64/${name}-${version}.apk`


const origins = [];
i
const tarball_href = [];




