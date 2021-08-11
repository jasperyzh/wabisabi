/**
 * https://javascript.info/
 * 
 * Going through the basic again!
 */

export const javascript_info = (): void => {

    javascript_fundamental();

}



function javascript_fundamental(): void {

    // number
    const test_number = 1 / 0;
    console.log('infinity? ', test_number);

    // bigint
    const bigInt = 1234567890123456789012345678901234567890n;
    console.log('bigInt? ', bigInt);

    // string
    const str = "Hello";
    const phrase = `can embed another ${str}`;
    console.log('phrase? ', phrase);

    // boolean
    const check_bool = true;
    console.log('check_bool? ', check_bool);

    // null
    const check_null = null;
    console.log('check_null? ', check_null);

    // undefined
    const check_undefined = undefined;
    console.log('check_undefined? ', check_undefined);

    // symbol
    console.log('typeof Symbol("id")? ', typeof Symbol("id"));

    // prompt/alert
    // const age = prompt('How old are you?', "100");
    // alert(`You are ${age} years old!`);

    // confirm
    // const isBoss = confirm("Are you the boss?");
    // alert(isBoss);

    // type conversion
    let value: string | boolean = true;
    console.log("typeof value? ", typeof value); // boolean

    value = String(value); // now value is a string "true"
    console.log("typeof value? ", typeof value); // string

    // Addition +
    // Subtraction -
    // Multiplication *
    // Division /

    // Remainder %
    console.log("5 % 2", 5 % 2); // 1, a remainder of 5 divided by 2
    console.log("8 % 3", 8 % 3); // 2, a remainder of 8 divided by 3

    // Exponentiation **
    console.log("2 ** 2", 2 ** 2); // 2² = 4
    console.log("2 ** 3", 2 ** 3); // 2³ = 8
    console.log("2 ** 4", 2 ** 4); // 2⁴ = 16

    // tertary operator
    const age = 33;
    const accessAllowed = (age > 18) ? true : false;
    console.log('accessAllowed? ', accessAllowed);

    //nullish coalescing operator ??
    const user = undefined;
    console.log('user ?? "Anonymous"   ', user ?? "Anonymous");

    const height = 0;
    console.log("height = 0;")
    console.log("height || 100", height || 100); // 100
    console.log("height ?? 100", height ?? 100); // 0

    // do/while
    let tick = 0;
    do {
        console.log("do/while tick", tick)
        tick++;
    } while (tick < 3);

    // forloop
    let tick_i = 0;
    for (tick_i = 0; tick_i < 3; tick_i++) { // use an existing variable
        console.log("forloop", tick_i); // 0, 1, 2
    }
    console.log("forloop", tick_i); // 3, visible, because declared outside of the loop

}