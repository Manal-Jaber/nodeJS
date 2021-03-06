
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
  var args = process.argv;
function startApp(name){ 
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
if (args[2]=="" || args[2] == 'database.json'){
  const fs = require('fs');
  fs.readFile('database.json', 'utf-8', (err, data) => {
      if (err) {
          throw err;
      }
      const user = JSON.parse(data.toString());
      console.log(user);
  });
}else{
  const fs = require('fs');

      const newdata = JSON.stringify(arr);
      fs.writeFileSync(args[2], newdata, (err) => {
      if (err) {
      throw err;
      }
       console.log("JSON data is saved.");
});  
  fs.readFile(args[2], 'utf-8', (err, data) => {
  if (err) {
      throw err;
  }
  const user = JSON.parse(data.toString());
  console.log(user);
  });
}
}



/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  text= text.replace("\n", "");
  text =text.trim();
  text = text.split( " " );
  if (text[0] === 'quit') {
    quit();
  }
  else if(text[0] === 'hello'){
    hello(text[1]);
  }else if (text[0] === 'exit') {
    quit();
  }else if (text[0] === 'help') {
    help();
  }else if (text[0] === 'list') {
    list();
  }else if (text[0] === 'add') {
    add(text.slice(1).join(" "));
  }else if (text[0] === 'remove') {
    remove(text.slice(1));
  }else if (text[0] === 'edit') {
    edit(text.slice(1,2).join(" "), text.slice(2).join(" "));
  }else if (text[0] === 'check') {
    check(text.slice(1));
  }else if (text[0] === 'uncheck') {
    uncheck(text.slice(1));
  }else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(t){
  if(t==null){
    console.log('hello!')
  }else{
  console.log('hello '+t+"!")
  }
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
const fs = require('fs');
const data = JSON.stringify(arr);
if (args[2]=="" || args[2] == 'database.json'){
fs.writeFileSync('database.json', data, (err) => {
  if (err) {
      throw err;
  }
  console.log("JSON data is saved.");
});
}else{
  fs.writeFileSync(args[2], data, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
  });
}
process.exit();
}
/**
 * Shows help
 *
 * @returns {void}
 */
function help(){
  console.log('you can enter\nhello\nhello "your name"\nquit\nexit\nhelp\nadd "item"\nremove\nremove "item"\nedit "item"\ncheck/uncheck "item"');
}
/**
 * Makes list
 *
 * @returns {void}
 */
arr=['buy bread','do the exercises'];
arrcheck = [true, false];
function list(){
 for(let i=0; i<arr.length; i++){
   if(arrcheck[i] == true){
  console.log("[✓] "+ (i+1) +" "+ arr[i]);
   }else{
  console.log("[] "+ (i+1) +" "+ arr[i]);
   }
}
}
/**
 * Adds to list
 *
 * @returns {void}
 */
function add(t){
  if(t == ""){
    console.log("Error! Please add some task");
  }else{
    arr.push(t);
    arrcheck.push(false);
  for(let i=0; i<arr.length; i++){
  console.log(i+1 +" "+ arr[i]);
  }
}
}
/**
 * Removes from list
 *
 * @returns {void}
 */
function remove(t){
  if(t == ""){
    arr.splice(arr.length-1,1);
  }else if(t<0 || t>= arr.length){
    console.log("Error! Enter a number indicating an existing index");
  }else{
    arr.splice(t,1);
  }
}
/**
 * Edits list
 *
 * @returns {void}
 */
function edit(n, t){
  if(n=="" && t==""){
    console.log("Error! You must enter a value!")
  }else if(isNaN(n)){
    arr[arr.length-1]= n+ " " + t;
  }else{
    arr[n-1]=t;
  }
}
/**
 * Checks list
 *
 * @returns {void}
 */
function check(n){
  if(n==""){
    console.log("Error! You must enter a value after check!")
  }else{
    arrcheck[n-1]=true;
  }
}
/**
 * Checks list
 *
 * @returns {void}
 */
function uncheck(n){
  if(n==""){
    console.log("Error! You must enter a value after uncheck!")
  }else{
    arrcheck[n-1]=false;
  }
}
// The following line starts the application
startApp("Manal Jaber")