self.addEventListener('install', event =>{console.log("SW Install..")
	//puedo usar event.waitUntul() para ejecutar una promesa
});
self.addEventListener('activate', event =>{console.log("SW Activate..")
	//puedo usar event.waitUntul() para ejecutar una promesa
});
self.addEventListener('fetch', event =>{console.log("SW Fetch..")
	//puedo usar event.waitUntul() para ejecutar una promesa
	//personalizada
});
