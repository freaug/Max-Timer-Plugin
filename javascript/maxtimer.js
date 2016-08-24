autowatch = 1;

if(max.version <"502")
	post("Max Timer : Your version of Max/MSP needs to be at least 5.0.2, please update it. \n");
else
	post("Max Timer Version 1 by Eddie Farr\n");

var g = new Global("glob");
g.loaded = 1;

function loaded(){
	g.sendnamed("mtl_loaded", "loaded");
}

notifydeleted.local = 1;

function notifydeleted()
{
	post("Max Timer : Unloaded\n");
}
