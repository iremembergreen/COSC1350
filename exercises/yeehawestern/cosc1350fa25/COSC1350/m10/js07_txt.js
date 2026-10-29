"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Chapter case   

      Word Cloud   Generator
      Author: Blair Kovacs
      Date:       10/22/26

      Filename:       js07.js
 */


document.getElementById("getFile").onchange = function() { 
      // get info on selected file
      let userFile = this.files[0];
      
      // checks if correct file is selected
      try {
            let isText = userFile.type.startsWith("text"); 
            if (!isText) {
                  throw userFile.name + " is not a text file.";
            }
            
            // reads content of file
            let fr = new FileReader();
            fr.readAsText(userFile);
            
            // displays page in file
            let sourceDoc = document.getElementById("wc_document");
            fr.onload = function() {
                  sourceDoc.innerHTML = fr.result;
                  let sourceText = sourceDoc.textContent;
                  wordCloud(sourceText);
            }

      }

      catch(err) {
            window.alert(err);
      }

      function wordCloud(sourceText) {
            //to lowercase
            sourceText = sourceText.toLowerCase();
            //remove whitespace
            sourceText = sourceText.trim();
            //leave only alphabet + whitespace
            let alphaRegex = /[^a-zA-Z\s]/g;
            sourceText = sourceText.replace(alphaRegex, " ");
            //remove stop
            for (let i = 0; i < stopWords.length; i++) {
                  let stopRegx = new RegExp("\\b" + stopWords[i] + "\\b", "g");
                  sourceText = sourceText.replace(stopRegx, "");
            }
            //array words
            let words = sourceText.split(/\s+/g);
            
            //sort words in alpha order
            words.sort();

            //2d array
            let unique = [ [words[0], 1] ];

            //indexes unique words
            let uniqueIndex = 0;

            for (let i = 1; i < words.length; i++) {
                  if (words[i] === words[i-1] ) {

                        //increase dupe by 1
                        unique[uniqueIndex] [1]++;
                  } else {
                        //adds new word to array
                        uniqueIndex++;
                        unique[uniqueIndex] = [words[i], 1];
                  }

            }
            //sorts by dupe count
            unique.sort(byDuplicate);
            function byDuplicate(a, b) {
                  return b[1]-a[1];
                  }

            //keeep top 100 words
            unique = unique.slice(0, 100);
            //find most repeated words
            let maxCount = unique[0] [1];
            //sort in alpha order
            unique.sort();

            //ref wordcloud box
            let cloudBox = document.getElementById("wc_cloud");
            cloudBox.innerHTML = " ";

            //sizes word based on amt
            for (let i = 0; i < unique.length; i++) {
                  let word = document.createElement("span");
                  word.textContent = unique[i][0];
                  word.style.fontSize = unique[i] [1]/maxCount + "em";
                  cloudBox.appendChild(word);
            }
      }
};

// sourceText = sourceText.toLowerCase();
// sourceText = sourceText.trim()





/*--- ----------------------------------------------*/
/* Array of words to NOT include in the word cloud */
/*-------------------------------------------------*/

let stopWords = ["a", "about", "above", "across", "after", "afterwards", "again", "against", 
                 "ago", "all", "almost", "alone", "along", "already", "also", "although", 
                 "always", "am", "among", "amongst", "amoungst", "amount", "an", "and", 
                 "another", "any", "anyhow", "anyone", "anything", "anyway", "anywhere", 
                 "are", "around", "as", "at", "back", "be", "became", "because", "become", 
                 "becomes", "becoming", "been", "before", "beforehand", "behind", "being", 
                 "below", "beside", "besides", "between", "beyond", "bill", "both", "bottom", 
                 "but", "by", "call", "came", "can", "cannot", "cant", "case","cases","cause", 
                 "co", "computer", "con", "could", "couldnt", "cry", "de", "describe", "detail", 
                 "do", "does", "doing", "done", "down", "due", "during", "each", "eg", "eight", 
                 "either", "eleven", "else", "elsewhere", "empty", "enough", "etc", "even", 
                 "ever", "every", "everyone", "everything", "everywhere", "except", "few", "fie",
                 "fifteen", "fify", "fill", "find", "fire", "first", "five", "for", "former", 
                 "formerly", "forty", "found", "four", "from", "front", "full", "further", 
                 "get", "give", "go", "had", "has", "hasnt", "have", "he", "held", "having", 
                 "hence", "her", "here", "hereafter", "hereby", "herein", "hereupon", "hers", 
                 "herself", "him", "himself", "his", "how", "however", "hundred", "i", "ie", 
                 "if", "in", "inc", "indeed", "interest", "into", "is", "it", "its", "itself", 
                 "keep", "know", "knows", "knew", "last", "latter", "latterly", "least", "less", 
                 "let", "ltd", "made", "make","many", "may", "me", "meanwhile", "might", "mill", 
                 "mine", "more", "moreover", "most", "mostly", "move", "much", "must", "my", 
                 "myself", "name", "namely", "neither", "never", "nevertheless", "next", 
                 "nine", "no", "nobody", "none", "noone", "nor", "not", "nothing", "now", 
                 "nowhere", "of", "off", "often", "on", "once", "one", "only", "onto", "or", 
                 "other", "others", "otherwise", "our", "ours", "ourselves", "out", "over", 
                 "own", "part", "per", "perhaps", "plainly", "please", "precisely", "put", 
                 "rather", "re", "same", "said", "say", "says", "see", "seem", "seemed", 
                 "seeming", "seems", "serious", "several", "shall", "she", "should", "show", 
                 "side", "since", "sincere", "six", "sixty", "so", "some", "somehow", "someone", 
                 "something", "sometime", "sometimes", "somewhere", "st", "sts", "still", "such", 
                 "system", "take", "ten", "th", "ths", "thx", "than", "that", "the", "their", 
                 "them", "themselves", "then", "thence", "there", "thereafter", "thereby", 
                 "therefore", "therein", "thereupon", "these", "they", "thick", "thin", 
                 "third", "this", "those", "though", "three", "through", "throughout", 
                 "thru", "thus", "to", "together", "too", "top", "toward", "towards", 
                 "twelve", "twenty", "two", "un", "unless", "under", "until", "up", 
                 "upon", "us", "very", "via", "was", "we", "well", "were", "weve", "what", 
                 "whatever", "when", "whence", "whenever", "where", "whereafter", "whereas", 
                 "whereby", "wherein", "whereupon", "wherever", "whether", "which", "while", 
                 "whither", "who", "whoever", "whole", "whom", "whose", "why", "will", 
                 "with", "within", "without", "would", "year", "years", "yet", "you", 
                 "your", "yours", "yourself", "yourselves"];
                 