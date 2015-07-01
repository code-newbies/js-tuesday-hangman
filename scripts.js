
  var hangmanWords = [
 "the","of","and","a","to","in","is","you","that","it","he",
 "was","for","on","are","as","with","his","they","i","at","be",
 "this","have","from","or","one","had","by","word","but","not",
 "what","all","were","we","when","your","can","said","there",
 "use","an","each","which","she","do","how","their","if","will",
 "up","other","about","out","many","then","them","these","so",
 "some","her","would","make","like","him","into","time","has",
 "look","two","more","write","go","see","number","no","way",
 "could","people","my","than","first","water","been","call",
 "who","oil","its","now","find","long","down","day","did","get",
 "come","made","may","part"
];

var easyArray = hangmanWords.filter(function(word){
  return word.length <= 4;
});

var hardArray = hangmanWords.filter(function(word){
  return word.length > 4;
});

function wordSelect (array) {
var num = Math.floor(Math.random() * array.length);
var word = array[num];
return word;
}

function wordLetters (){
  
}
