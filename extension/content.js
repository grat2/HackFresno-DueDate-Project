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
var createevents = [];


var el = document.createElement( 'html' );
el.innerHTML = "";
el.getElementsByTagName( 'p' ); // Live NodeList of your anchor elements



var numpara = el.getElementsByTagName('p');
console.log(el.getElementsByTagName('p'));
//RUN THIS FUNCTION before reading paragraph content
//SCAN HTML TAG <p> CONTENTS AND STORES INTO
//PARAGRAPHS ARRAY
function scanHTML(){
  for (elt of numpara) {
      paragraphs.push(el.getElementsByTagName('p').textContent);
      console.log(paragraphs);
  }
}

//READ EACH PARAGRAPH CONTENT FOR KEYWORDS,
//DUE DATES, AND TIME
function searchPcontent(){
  var tmp_arry = [];
  var tmp_wk = ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"];
  var arrylen = paragraphs.length;
  var d = new Date();
  var today = d.getDay();
  today += 1;
}

scanHTML();
searchPcontent();
/**  while(arrylen != 0){

    //CONVERT ENTIRE STRING TO LOWER CASE TO AVOID
    //CASE SENSITIVE COMPARSION
    var tmp_rstring = paragraphs[arrylen].toLowerCase();

    //STORE POSITION OF ASSIGNMENT AND KEY POSITION
    //akey_pos = temp_rstring.search(assigntype.keys().value);
    //key_pos = temp_rstring.search(tmp_key.keys().value);

    //SEARCH FOR KEYWORDS IN PARAGRAPH -- weekwords.keys().value
/**    if(findKey(assigntypes.keys().value, tmp_rstring)){
      if(findKey(keywords.keys().value, tmp_rstring)){
        if(tmp_rstring.match(/tmp_wk.forEach(function(day))/g) == tmp_wk.forEach(function(day)) || findKey(weekwords.forEach(function(terms)), tmp_rstring)){
          if(today > dayweek.tmp_rstring.match(/tmp_wk.forEach(function(day))/g)){
            tmp_arry.push(assigntypes.keys().value.concat(" ",keywords.keys().value.));
            var addDate = 7 - today + dayweek.tmp_rstring.match(/tmp_wk.forEach(function(day))/g);
            tmp_arry.push(today + addDate);
            createevents.push(tmp_arry);
            console.log("Assignment due ".concat.apply(" ", today + subDate));
          }
          else{
            var subDate = dayweek.tmp_rstring.match(/tmp_wk.forEach(function(day))/g) - today;
            tmp_arry.push(assigntypes.keys().value.concat(" ",keywords.keys().value.));
            tmp_arry.push(today + subDate);
            createevents.push(tmp_arry);
            console.log("Assignment due ".concat.apply(" ", today + subDate));
          }
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
}**/
