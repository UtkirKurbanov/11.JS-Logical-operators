/*
    &&      | true  | false
    true    | true  | false
    false   | false | false

    ||      | true  | false
    true    | true  | false
    false   | false | false

    && (AND) - true если все значение true
    || (OR)  - true если хоть одно значение true
    ! (NOT)  - инвертирует true или false 
*/

console.log(true && true);
console.log(true && false);

console.log(true || false);
console.log(false || false);

console.log(!!!true);
console.log(!false);

console.log((false && true) || true || false || !true);
//          false || true || false => true
