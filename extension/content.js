//<script src="https://code.jquery.com/jquery-3.3.1.min.js" type="text/javascript"></script>
//<script src="/assets/js/jquery.js" type="text/javascript"></script>
//<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>


var assigntypes = ["paper","essay","assignment","project","homework","read"];
var keywords = ["due", "completed by", "finished by", "before"];
var datewords = ["tomorrow","this week", "next week"];
var weekdates = ["mon","tues","wed","thurs","frid","satur","sund"];
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
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js">
  $(document).ready(function(){
    $("p").each(function(i,v){
      console.log(v);
    });
  });

</script>
  /**var arrylen = paragraphs.length;
  while(arrylen != 0){
    //CONVERT ENTIRE STRING TO LOWER CASE TO AVOID
    //CASE SENSITIVE COMPARSION
    var tmp_rstring = paragraphs[arrylen].toLowerCase();

    //STORE POSITION OF ASSIGNMENT AND KEY POSITION
    //akey_pos = temp_rstring.search(assigntype.keys().value);
    //key_pos = temp_rstring.search(tmp_key.keys().value);

    //SEARCH FOR KEYWORDS IN PARAGRAPH
    if(findKey(assigntypes.keys().value, tmp_rstring)){
      if(findKey(keywords.keys().value, tmp_rstring)){
        if(findKey(weekdates.keys().value, tmp_rstring) || findKey(datewords.keys().value, tmp_rstring)){

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
    }

    arrylen-=1;
  }
}

function findKey(word, str){
  return str.split(' ').some(function(w){return w === word})
}**/
