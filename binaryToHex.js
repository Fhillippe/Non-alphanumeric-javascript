//Length limit 500, not even close for now :(
//Converts string with binary number to hexadecimal string representation
//My idea was to use recursion and convert every 4 bits into 1 hexadecimal number,
//thus function works only when input string length is divisable by 4. Also the letters are in lower case.

_$=(![]+[])[+!![]]//a
___=({}+[])[!![]+!![]]//b
$_$=({}+[])[!![]+!![]+!![]+!![]+!![]]//c
$$$=([][[]]+[])[!![]+!![]]//d
$_=[![]+[]][+[]][+!''+!+[]+!+[]+!+[]]//e
__=[![]+[]][+[]][+[]]//f


$=(_,$$=+[], //iterator
    )=>_[$$]?
    ''+_[+[]+$$]+_[+!''+$$]+_[+!''+!+[]+$$]+_[+!''+!+[]+!+[]+$$]==''+(+[])+(+[])+(+[])+(+[])?//check 0
    ''+(+[])+$(_,$$+!+[]+!+[]+!+[]+!+[]): //return 0
    ''+_[+[]+$$]+_[+!''+$$]+_[+!''+!+[]+$$]+_[+!''+!+[]+!+[]+$$]==''+(+[])+(+[])+(+[])+(+!+[])?//check one
    +!''+$(_,$$+!+[]+!+[]+!+[]+!+[]): //return one
    ''+_[+[]+$$]+_[+!''+$$]+_[+!''+!+[]+$$]+_[+!''+!+[]+!+[]+$$]==''+(+[])+(+[])+(+!+[])+(+[])?//check 2
    !![]+!![]+$(_,$$+!+[]+!+[]+!+[]+!+[])://return 2
    ''+_[+[]+$$]+_[+!''+$$]+_[+!''+!+[]+$$]+_[+!''+!+[]+!+[]+$$]==''+(+[])+(+[])+(+!+[])+(+!+[])?//check 3
    !![]+!![]+!![]+$(_,$$+!+[]+!+[]+!+[]+!+[])://return 3
    ''+_[+[]+$$]+_[+!''+$$]+_[+!''+!+[]+$$]+_[+!''+!+[]+!+[]+$$]==''+(+[])+(+!+[])+(+[])+(+[])?//check 4
    !![]+!![]+!![]+!![]+$(_,$$+!+[]+!+[]+!+[]+!+[])://return 4
    ''+_[+[]+$$]+_[+!''+$$]+_[+!''+!+[]+$$]+_[+!''+!+[]+!+[]+$$]==''+(+[])+(+!+[])+(+[])+(+!+[])?//check 5
    !![]+!![]+!![]+!![]+!![]+$(_,$$+!+[]+!+[]+!+[]+!+[])://return 5
    ''+_[+[]+$$]+_[+!''+$$]+_[+!''+!+[]+$$]+_[+!''+!+[]+!+[]+$$]==''+(+[])+(+!+[])+(+!+[])+(+[])?//check 6
    (!![]+!![]+!![])*(!![]+!![])+$(_,$$+!+[]+!+[]+!+[]+!+[])://return 6
    ''+_[+[]+$$]+_[+!''+$$]+_[+!''+!+[]+$$]+_[+!''+!+[]+!+[]+$$]==''+(+[])+(+!+[])+(+!+[])+(+!+[])?//check 7
    ((!![]+!![]+!![])*(!![]+!![]))+!![]+$(_,$$+!+[]+!+[]+!+[]+!+[])://return 7
    ''+_[+[]+$$]+_[+!''+$$]+_[+!''+!+[]+$$]+_[+!''+!+[]+!+[]+$$]==''+(+!+[])+(+[])+(+[])+(+[])?//check 8
    (!![]+!![]+!![]+!![])*(!![]+!![])+$(_,$$+!+[]+!+[]+!+[]+!+[])://return 8
    ''+_[+[]+$$]+_[+!''+$$]+_[+!''+!+[]+$$]+_[+!''+!+[]+!+[]+$$]==''+(+!+[])+(+[])+(+[])+(+!+[])?//check 9
    (!![]+!![]+!![])*(!![]+!![]+!![])+$(_,$$+!+[]+!+[]+!+[]+!+[])://return 9
    ''+_[+[]+$$]+_[+!''+$$]+_[+!''+!+[]+$$]+_[+!''+!+[]+!+[]+$$]==''+(+!+[])+(+[])+(+!+[])+(+[])?//check 10
    _$+$(_,$$+!+[]+!+[]+!+[]+!+[])://return 10
    ''+_[+[]+$$]+_[+!''+$$]+_[+!''+!+[]+$$]+_[+!''+!+[]+!+[]+$$]==''+(+!+[])+(+[])+(+!+[])+(+!+[])?//check 11
    ___+$(_,$$+!+[]+!+[]+!+[]+!+[])://return 11
    ''+_[+[]+$$]+_[+!''+$$]+_[+!''+!+[]+$$]+_[+!''+!+[]+!+[]+$$]==''+(+!+[])+(+!+[])+(+[])+(+[])?//check 12
    $_$+$(_,$$+!+[]+!+[]+!+[]+!+[])://return 12
    ''+_[+[]+$$]+_[+!''+$$]+_[+!''+!+[]+$$]+_[+!''+!+[]+!+[]+$$]==''+(+!+[])+(+!+[])+(+[])+(+!+[])?//check 13
    $$$+$(_,$$+!+[]+!+[]+!+[]+!+[])://return 13
    ''+_[+[]+$$]+_[+!''+$$]+_[+!''+!+[]+$$]+_[+!''+!+[]+!+[]+$$]==''+(+!+[])+(+!+[])+(+!+[])+(+[])?//check 14
    $_+$(_,$$+!+[]+!+[]+!+[]+!+[])://return 14
    __+$(_,$$+!+[]+!+[]+!+[]+!+[])//return 15
    :''

    module.exports = {$}