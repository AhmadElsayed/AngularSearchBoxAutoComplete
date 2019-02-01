# SearchBox

![Searchbox](/search.gif)

# Somethings to say here and there

The sample represents a simple search box with an autocomplete facility with the following features

* Search in dynamic objects array [the dictionary] of structure 
`[{ sentence: "" }]`
  * it was meant to be capsulated in an object instead of using simple arrays to be able to add flags to it later on such as (visited before, rank, ...)

* Search in the text as a whole in a word level, so it should not matter if the entered words are written in the exact order
  * for example the result of "ant man" is the same as "man ant", the result from the array may be "the man who looks like ant"

* Both the search text and the dictionary are not case sensitive, if you want to change that you can do from the pipe file

* The seach discards any html tags or special charachters, if you want to change that you can do from the pipe file

* The search keywords are hilighted on run time, check the attached picture

* The result shown are the first four matched results, if you want to change you can pass the maxLimit parameter to the pipe

* It show a text that there are no matchings in case it did not file

* The dictionary automatically and randomly generated online from https://randomwordgenerator.com/sentence.php

* Further plan is to use a Language Processing APIs such as DialogFlow or Luis to identify what did the user want and return the entities and intents

**The idea is inspired by that video**

https://www.youtube.com/watch?v=9MN-pi2GMw4
