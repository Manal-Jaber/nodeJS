
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
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
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
  process.exit();
}
/**
 * Shows help
 *
 * @returns {void}
 */
function help(){
  console.log('you can enter\nhello\nhello "your name"\nquit\nexit\nhelp\nadd "item"\nremove\nremove "item"');
}
/**
 * Makes list
 *
 * @returns {void}
 */
arr=['buy bread','do the exercises'];
function list(){
 for(let i=0; i<arr.length; i++){
  console.log(i+1 +" "+ arr[i]);
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
  }else{
    arr.splice(t,1);
  }
}
// The following line starts the application
startApp("Manal Jaber")
