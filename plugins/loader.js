//Scratch Desktop Plugin Loader
//How to load a plugin?
//Use loadPlugin("pluginFilename.js")
//Plugins must be stored in the plugins folder
//Example :
//loadPlugin("test.js");

//Your plugins here



//DO NOT TOUCH
 function loadPlugin(plugin) {
spp.log("Loading plugin : " + plugin)
 fs.readFile("C:/Users/" + os.userInfo().username + "/AppData/Local/Programs/Scratch Desktop/resources/plugins/" + plugin, 'utf8', async function (err,data) {
  if (err) {
    return console.log(err);
  }
   eval(data)
})
spp.log("Injected : " + plugin);
}
