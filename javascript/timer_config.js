autowatch = 1;

var initpath;
var f, tf;

function anything(){
	initpath = messagename + "/";
}

function create_file(){
	tf = new File("timer_start.txt", "read");
	f = new File(initpath+"timer-start.maxpat", "write");

	f.writebytes(tf.readbytes(tf.eof));

	f.close();
	tf.close();
}

function clear_file(){
	f = new File(initpath + "timer-start.maxpat", "write");
	for (var i=0; i < 139; i++){
		f.writeline("                                                        ");
	}
	f.close();
}


