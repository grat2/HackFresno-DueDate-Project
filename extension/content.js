var assigntypes = ["paper","essay","assignment","project","homework","read"];
var keywords = ["due", "completed by", "finished by", "before"];
var weekwords = ["tomorrow","this week", "next week"];
var dayweek = {
  "mon" : 1,
  "tues" : 2,
  "wed" : 3,
  "thurs" : 4,
  "fri" : 5,
  "sat" : 6,
  "sun" : 7
};
var paragraphs = [];
var createevent = [];
var numpara = document.getElementsByTagName('p');

//RUN THIS FUNCTION before reading paragraph content
//SCAN HTML TAG <p> CONTENTS AND STORES INTO
//PARAGRAPHS ARRAY
function scanHTML(){
  for (elt of numpara) {
      paragraphs.push(document.getElementsByTagName('p').textContext);
  }
}

//READ EACH PARAGRAPH CONTENT FOR KEYWORDS,
//DUE DATES, AND TIME
function searchPcontent(){
  var tmp_arry = [];
  var tmp_wk = ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"];
  var arrylen = paragraphs.length;
  var d = new date();
  var today = d.getday() + 1;
  while(arrylen != 0){

    //CONVERT ENTIRE STRING TO LOWER CASE TO AVOID
    //CASE SENSITIVE COMPARSION
    var tmp_rstring = paragraphs[arrylen].toLowerCase();

    //STORE POSITION OF ASSIGNMENT AND KEY POSITION
    //akey_pos = temp_rstring.search(assigntype.keys().value);
    //key_pos = temp_rstring.search(tmp_key.keys().value);

    //SEARCH FOR KEYWORDS IN PARAGRAPH -- weekwords.keys().value
    if(findKey(assigntypes.keys().value, tmp_rstring)){
      if(findKey(keywords.keys().value, tmp_rstring)){
<<<<<<< HEAD
        if(tmp_rstring.match(/tmp_wk.forEach(function(day))/g) == tmp_wk.forEach(function(day)) || findKey(weekwords.forEach(function(terms)), tmp_rstring)){
          if(today > dayweek.tmp_rstring.match(/tmp_wk.forEach(function(day))/g)){
            tmp_arry.push(assigntypes.keys().value.concat(" ",keywords.keys().value.));
            var addDate = 7 - today + dayweek.tmp_rstring.match(/tmp_wk.forEach(function(day))/g);
            tmp_arry.push(today + addDate);
            createevent.push(tmp_arry);
            console.log("Assignment due ".concat(" ", today + subDate));
          }
          else{
            var subDate = dayweek.tmp_rstring.match(/tmp_wk.forEach(function(day))/g) - today;
            tmp_arry.push(assigntypes.keys().value.concat(" ",keywords.keys().value.));
            tmp_arry.push(today + subDate);
            createevent.push(tmp_arry);
            console.log("Assignment due ".concat(" ", today + subDate));
          }
=======
        if(findKey(weekdates.keys().value, tmp_rstring) || findKey(datewords.keys().value, tmp_rstring)){

>>>>>>> 986a5ca662d0000d608a75d6839de7b583528241
        }
      }
    }

    //OTHERWISE, LOOK FOR SIMILAR ASSIGNMENT NAMES
    //AND KEYWORDS
    else{
      temp_akey.next();
      temp_key.next();
      weekdates.next();
      datewords.next();
      console.log("No assignment or due date found.");
    }

    arrylen-=1;
  }
}

function findKey(word, str){
  return str.split(' ').some(function(w){return w === word})
}
