//Length limit 150
//The program convert string with binary number to number of decimal representation.

_$=(_,__=+[])=>_[__]?_$(_,__+(+!'')):__-+!''//find string length minus 1
$=(_,
    $$=_$(_), // iterator that goes from 0 string.length -1
    $_=+[] // iterator that goes from string.length to 0
)=>_[$$]?(_[$$]*((!+[]+!+[])**$_))+$(_,$$-!+[],$_+!+[]):+[] // iterate over string from the back converting converting every bit to decimal and adding to sum.

module.exports = {$}