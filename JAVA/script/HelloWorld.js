document.writeln("Hello World");
document.writeln("<br/>");
document.writeln("NAMA : " + "  Dimas ");
document.write("<br/>");

let fullName = "Dimas Rizky Ramadhani";
let firstName = "Dimas";
let middleName = "Rizky";
let lastName = "Ramadhani";

document.writeln("Nama Lengakap : " + fullName);
document.write("<br/>");
document.writeln("Nama Pertama : " + firstName);
document.write("<br/>");
document.writeln("Nama Tengah : " + middleName);
document.write("<br/>");
document.writeln("Nama Akhir : " + lastName);
document.writeln("<br/>");

let result = 1 + 2;
document.writeln;

let counter = 1;
for (; counter <= 10; ) {
  document.writeln("<p>Perulangan</p>");
  counter++;
}

function segitiga1(baris) {
let pola = '';
for(let i=1; i <= baris; i++){
for (let j = 1; j <= i ; j++){
pola += '*';
}
pola += '</br>';
}
return pola;
}
document.writeln(segitiga1(5));

function segitiga3(baris) {
let pola = ''
;
for(let i=1; i <= baris; i++){
for (let j = baris - 1; j >= i; j--){
pola += "_"
;
}
for (let k=1; k <= i; k++){
pola += '*'
;
}
pola += '</br>'
;
}
return pola;
}
document.writeln(segitiga3(5));
    



    
    