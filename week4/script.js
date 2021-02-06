var names=new Array();
names[0]="peter";
names[1]="Jay";
names[2]="Jen";
names[3]="jason";
names[4]="Ram";
names[5]="rahul";
names[6]="larry";
names[7]="paula";
names[8]="archit";
names[9]="jim";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}