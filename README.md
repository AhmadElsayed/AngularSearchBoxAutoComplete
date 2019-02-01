# SearchBox

![Searchbox](/search.gif)

# Description
The sample represents a simple search box with an autocomplete facility with the following features

* Search in dynamic objects array [the dictionary] of structure 
`[{ sentence: "" }]`
  * it was meant to be capsulated in an object instead of using simple arrays to be able to add flags to it later on such as (visited before, rank, ...)

* Search in the text as a whole in a word level, so it should not matter if the entered words are written in the exact order
  * for example the result of "ant man" is the same as "man ant", the result from the array may be "the man who looks like ant"

* Both the search text and the dictionary are not case sensitive, if you want to change that you can do from the pipe file

* The seach discards any html tags or special charachters, if you want to change that you can do from the pipe file

* The search keywords are hilighted on run time, check the attached picture

**The idea was inspired by that video**

https://www.youtube.com/watch?v=9MN-pi2GMw4
