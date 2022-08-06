var t = [
  {
    title: "Sum two numbers",
    series: "Javascript basics",
    difficulty: 1,
    titleUrl: "sum-two-numbers-javascript",
    description:
      "Write a function that takes two numbers (a and b) as argument. Sum a and b. Return the result",
    solution: ["function myFunction(a, b) {", "   return a + b;", "}"],
    params: "a, b",
    testCases: [
      { input: "myFunction(1,2)", output: "3" },
      { input: "myFunction(1,10)", output: "11" },
      { input: "myFunction(99,1)", output: "100" },
    ],
    id: "28576752417e53720e2e9746",
  },
  {
    title: "Comparison operators, strict equality",
    series: "Javascript basics",
    difficulty: 1,
    hint: "<div class='mt-4'> You have to differentiate between basic <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality' target='_blank' rel='noopener noreferrer' class='text-blue-400 hover:underline'>equality</a > (<code class='bg-blueGray-600 text-base py-1 px-1'>==</code>) and <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality' target='_blank' rel='noopener noreferrer' class='text-blue-400 hover:underline'>strict equality</a > (<code class='bg-blueGray-600 text-base py-1 px-1'>===</code>). Both operators check whether two values are equal. However, strict equality requires both values to have the same type. For example, the string <code class='bg-blueGray-600 text-base py-1 px-1'>'1'</code> and the number <code class='bg-blueGray-600 text-base py-1 px-1'>1</code> are equal, but not strictly equal. <div class='mt-4'>Equality:</div> <code class='bg-blueGray-600 text-base py-1 px-1 flex' >console.log('a' == 'b') <br /> // output: false<br /> console.log('a' == 'a')<br /> // output: true<br /> console.log('1' == 1)<br /> // output: true </code> <div class='mt-4'>Strict Equality:</div> <code class='bg-blueGray-600 text-base py-1 px-1 flex'> console.log('a' === 'b')<br /> // output: false<br /> console.log('a' === 'a')<br /> // output: true<br /> console.log('1' === 1)<br /> // output: false</code > </div>",
    titleUrl: "comparison-strict-equality",
    description:
      "Write a function that takes two values, say a and b, as arguments. Return true if the two values are equal and of the same type",
    solution: ["function myFunction(a, b) {", "  return a === b;", "}"],
    params: "a, b",
    testCases: [
      { input: "myFunction(2, 3)", output: "false " },
      { input: "myFunction(3, 3)", output: "true " },
      { input: "myFunction(1, '1')", output: "false " },
      { input: "myFunction('10', '10')", output: "true " },
    ],
    id: "5f5a4f600a27e25dcd4216a6",
  },
  {
    title: "Get type of value",
    series: "Javascript basics",
    difficulty: 1,
    hint: "<div class='mt-4'> To get the type of a value you can use the <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof' target='_blank' rel='noopener noreferrer' class='text-blue-400 hover:underline'>typeof</a > operator. <code class='bg-blueGray-600 text-base py-1 px-1 flex mt-4' >console.log(typeof 'a') <br /> // output: 'string'<br /> console.log(typeof false)<br /> // output: 'boolean'<br /> console.log(typeof 1)<br /> // output: number </code> </div>",
    titleUrl: "type-value-javascript",
    description:
      "Write a function that takes a value as argument. Return the type of the value.",
    solution: ["function myFunction(a) {", "   return typeof a;", "}"],
    params: "a",
    testCases: [
      { input: "myFunction(1)", output: "'number'" },
      { input: "myFunction(false)", output: "'boolean'" },
      { input: "myFunction({})", output: "'object'" },
      { input: "myFunction(null)", output: "'object'" },
      { input: "myFunction('string')", output: "'string'" },
      { input: "myFunction(['array'])", output: "'object'" },
    ],
    id: "bf71aec80d018fd31f9f263c",
  },
  {
    title: "Get nth character of string",
    series: "Javascript basics",
    difficulty: 1,
    hint: "<div class='mt-2'> In order to get the nth character of a given string, you have to know its index. An index describes the position of a character in a given string. Javascript strings are <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf#description' target='_blank' rel='noopener noreferrer' class='text-blue-400 hover:underline'>zero-indexed</a >. This means that the first character of a string has index <i>0</i>. The second character has index <i>1</i> and so on. </div> <div class='mt-2 flex flex-col'> <code class='bg-blueGray-600 text-base px-1 pt-1'>const string = 'abcdefg';</code> <code class='bg-blueGray-600 text-base px-1'>// get first character</code> <code class='bg-blueGray-600 text-base px-1'>console.log(string[0])</code> <code class='bg-blueGray-600 text-base px-1'>// output: 'a'</code> <code class='bg-blueGray-600 text-base px-1'>// get third character</code> <code class='bg-blueGray-600 text-base px-1'>console.log(string[2])</code> <code class='bg-blueGray-600 text-base px-1 pb-1'>// output: 'c'</code> </div>",
    titleUrl: "get-nth-character-string-javascript",
    description:
      "Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.",
    params: "a, n",
    solution: ["function myFunction(a, n) {", "   return a[n - 1];", "}"],
    testCases: [
      { input: "myFunction('abcd',1)", output: "'a'" },
      { input: "myFunction('zyxbwpl',5)", output: "'w'" },
      { input: "myFunction('gfedcba',3)", output: "'e'" },
    ],
    id: "d2fcd730c12b9be642b391c4",
  },
  {
    title: "Remove first n characters of string",
    series: "Javascript basics",
    difficulty: 3,
    hint: "<div class='mt-4'> There are two equally suitable and almost identical methods to remove characters from a string: <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring' target='_blank' rel='noopener noreferrer' class='text-blue-400 hover:underline'>substring</a > and <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice' target='_blank' rel='noopener noreferrer' class='text-blue-400 hover:underline'>slice</a >. My personal favorite is the <code class='bg-blueGray-600 text-base py-1 px-1'>slice()</code> method because you can use the same method when you want to remove elements from an array. That way, you only have to remember one. Also, I easily confuse the <code class='bg-blueGray-600 text-base py-1 px-1'>substring()</code> and the <code class='bg-blueGray-600 text-base py-1 px-1'>substr()</code> method. </div> <div class='mt-6'> Approach 1: <code class='bg-blueGray-600 text-base py-1 px-1'>slice()</code> </div> <div class='mt-2'> <code class='bg-blueGray-600 text-base py-1 px-1'>slice</code> extracts a part of a string and returns it without modifying the original string. To define the part that you want to extract, you can call it with two parameters. The first parameter defines the index of the first character in the string that you want to extract. The second parameter defines the index of the first character that you do <strong>not</strong> want to extract. </div> <code class='bg-blueGray-600 text-base py-1 px-1 flex mt-4' >console.log('abcd'.slice(1,3)) <br /> // output: 'bc' </code> <div class='mt-2'> The second parameter is optional. If not defined, <code class='bg-blueGray-600 text-base py-1 px-1'>slice</code > will simply return all characters starting from the start-index that you defined. </div> <code class='bg-blueGray-600 text-base py-1 px-1 flex mt-4' >console.log('abcd'.slice(1)) <br /> // output: 'bcd' </code> <div class='mt-2'>This way, you can easily remove the first n characters of a string.</div> <div class='mt-6'> Approach 2: <code class='bg-blueGray-600 text-base py-1 px-1'>substring()</code> </div> <div class='mt-2'> As I said above, <code class='bg-blueGray-600 text-base py-1 px-1'>substring</code> is almost identical to <code class='bg-blueGray-600 text-base py-1 px-1'>slice</code>. There are only very subtle differences in some edge cases, but they were never relevant for me. </div> <code class='bg-blueGray-600 text-base py-1 px-1 flex mt-4' >console.log('abcd'.substring(1,3)) <br /> // output: 'bc' <br />console.log('abcd'.substring(1)) <br /> // output: 'bcd' </code>",
    titleUrl: "remove-first-characters-string-javascript",
    description:
      "Write a function that takes a string (a) as argument. Remove the first 3 characters of a. Return the result",
    solution: ["function myFunction(a) {", "   return a.slice(3);", "}"],
    params: "a",
    testCases: [
      { input: "myFunction('abcdefg')", output: "'defg'" },
      { input: "myFunction('1234')", output: "'4'" },
      { input: "myFunction('fgedcba')", output: "'dcba'" },
    ],
    id: "fd7bc8070ee640a89657f16a",
  },
  {
    title: "Get last n characters of string",
    series: "Javascript basics",
    difficulty: 1,
    hint: "<div class='mt-4'> For this task, I recommend using again the <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice' target='_blank' rel='noopener noreferrer' class='text-blue-400 hover:underline'>slice</a > method. </div> <div class='mt-4'> With the <code class='bg-blueGray-600 text-base py-1 px-1'>slice</code> method, you can extract a part of a string without modifying the original string. You call it with two parameters (<i>startIndex</i> and <i>endIndex</i>). <i>startIndex</i> defines the index of the first character in the string that you want to extract. <i>endIndex</i> defines the first character that you do <strong>not</strong> want to extract. </div> <code class='bg-blueGray-600 text-base py-1 px-1 flex mt-4' >console.log('wxyz'.slice(1,3)); <br /> // output: 'xy' </code> <div class='mt-4'> You can omit the <i>endIndex</i> parameter. Then, <code class='bg-blueGray-600 text-base py-1 px-1'>slice</code> will simply return all characters beginning at <i>startIndex</i>. </div> <code class='bg-blueGray-600 text-base py-1 px-1 flex mt-4' >console.log('wxyz'.slice(1)); <br /> // output: 'xyz' </code> <div class='mt-4'> It is important to know, that you can call <code class='bg-blueGray-600 text-base py-1 px-1'>slice</code > with a <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice#using_slice_with_negative_indexes' target='_blank' rel='noopener noreferrer' class='text-blue-400 hover:underline'>negative <i>startIndex</i></a >. In this case, <i>startIndex</i> is not an index but identifies the starting position by counting backwards from the end of the string. </div> <code class='bg-blueGray-600 text-base py-1 px-1 flex mt-4'> // get last two characters of string: <br /> console.log('wxyz'.slice(-2); <br /> // output: 'xy' </code> <div class='mt-4'>This is all you need to solve this task.</div>",
    titleUrl: "get-last-characters-string-javascript",
    description:
      "Write a function that takes a string as argument. Extract the last 3 characters from the string. Return the result",
    solution: ["function myFunction(str) {", "   return str.slice(-3);", "}"],
    params: "str",
    testCases: [
      { input: "myFunction('abcdefg')", output: "'efg'" },
      { input: "myFunction('1234')", output: "'234'" },
      { input: "myFunction('fgedcba')", output: "'cba'" },
    ],
    id: "969172093455d39c4be7299f",
  },
  {
    title: "Get first n characters of string",
    series: "Javascript basics",
    difficulty: 2,
    titleUrl: "get-first-characters-string-javascript",
    description:
      "Write a function that takes a string (a) as argument. Get the first 3 characters of a. Return the result",
    solution: ["function myFunction(a) {", "   return a.slice(0, 3);", "}"],
    params: "a",
    testCases: [
      { input: "myFunction('abcdefg')", output: "'abc'" },
      { input: "myFunction('1234')", output: "'123'" },
      { input: "myFunction('fgedcba')", output: "'fge'" },
    ],
    id: "75e711d26d3e40627ae3e4f9",
  },
  {
    title: "Extract first half of string",
    series: "Javascript basics",
    difficulty: 2,
    titleUrl: "extract-first-half-string-javascript",
    description:
      "Write a function that takes a string (a) as argument. Extract the first half a. Return the result",
    solution: [
      "function myFunction(a) {",
      "   return a.slice(0, a.length / 2);",
      "}",
    ],
    params: "a",
    testCases: [
      { input: "myFunction('abcdefgh')", output: "'abcd'" },
      { input: "myFunction('1234')", output: "'12'" },
      { input: "myFunction('gedcba')", output: "'ged'" },
    ],
    id: "69d07c67bc9917df5206aa3d",
  },
  {
    title: "Remove last n characters of string",
    series: "Javascript basics",
    difficulty: 3,
    titleUrl: "remove-last-characters-string-javascript",
    description:
      "Write a function that takes a string (a) as argument. Remove the last 3 characters of a. Return the result",
    solution: ["function myFunction(a) {", "   return a.slice(0, -3);", "}"],
    params: "a",
    testCases: [
      { input: "myFunction('abcdefg')", output: "'abcd'" },
      { input: "myFunction('1234')", output: "'1'" },
      { input: "myFunction('fgedcba')", output: "'fged'" },
    ],
    id: "9854655dab8e34a320a60cea",
  },
  {
    title: "Return the percentage of a number",
    series: "Javascript basics",
    difficulty: 7,
    titleUrl: "return-percentage-of-number",
    description:
      "Write a function that takes two numbers (a and b) as argument. Return b percent of a",
    solution: [
      "function myFunction(a, b) {",
      "",
      "  return b / 100 * a",
      "}",
    ],
    params: "a, b",
    testCases: [
      { input: "myFunction(100,50)", output: "50" },
      { input: "myFunction(10,1)", output: "0.1" },
      { input: "myFunction(500,25)", output: "125" },
    ],
    id: "5f082fa739c6fe165eb9f593",
  },
  {
    title: "Basic JavaScript math operators",
    series: "Javascript basics",
    difficulty: 10,
    hint: "<div class='mt-4'> The operators you need are: <div class='mt-2'> Addition: <code class='bg-blueGray-600 text-base py-1 px-1'>1 + 2 === 3</code> </div> <div class='mt-2'> Subtraction: <code class='bg-blueGray-600 text-base py-1 px-1'>3 - 2 === 1</code> </div> <div class='mt-2'> Multiplication: <code class='bg-blueGray-600 text-base py-1 px-1'>3 * 2 === 6</code> </div> <div class='mt-2'> Division: <code class='bg-blueGray-600 text-base py-1 px-1'>9 / 3 === 3</code> </div> <div class='mt-2'> Exponent: <code class='bg-blueGray-600 text-base py-1 px-1'>3 ** 3 === 27</code> </div> <div class='mt-2'> Also, pay attention to the order of operations. You might have to include some parentheses. </div> </div>",
    titleUrl: "basic-math-operators-javascript",
    description:
      "Write a function that takes 6 values (a,b,c,d,e,f) as arguments. Sum a and b. Then substract by c. Then multiply by d and divide by e. Finally raise to the power of f and return the result. Tipp: mind the order.",
    solution: [
      "function myFunction(a, b, c, d, e, f) {",
      "   return (((a + b - c) * d) / e) ** f;",
      "}",
    ],
    params: "a, b, c, d, e, f",
    testCases: [
      { input: "myFunction(6,5,4,3,2,1)", output: "10.5" },
      { input: "myFunction(6,2,1,4,2,3)", output: "2744" },
      { input: "myFunction(2,3,6,4,2,3)", output: "-8" },
    ],
    id: "73ebc905fc3159a4bbc797e3",
  },
  {
    title: "Check if a number is even",
    series: "Javascript basics",
    difficulty: 15,
    titleUrl: "check-if-number-is-even",
    description:
      "Write a function that takes a number as argument. If the number is even, return true. Otherwise, return false",
    solution: ["function myFunction(a) {", "", "  return a % 2 === 0", "}"],
    params: "a",
    testCases: [
      { input: "myFunction(10)", output: "true" },
      { input: "myFunction(-4)", output: "true" },
      { input: "myFunction(5)", output: "false" },
      { input: "myFunction(-111)", output: "false" },
    ],
    hint: "<div class='mt-4'> The most common solution for this Javascript problem is to use the <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder' target='_blank' rel='noopener noreferrer' class='text-blue-400 hover:underline'>Remainder</a> operator <code class='bg-blueGray-600 text-base py-1 px-1'>%</code> (sometimes also referred to as <i>Modulo</i> operator). </div> <div class='mt-2'> The <i>Remainder</i> operator returns the remainder of an Integer division. For example:&nbsp;<code class='bg-blueGray-600 text-base py-1 px-1'>10 % 3</code > returns <i>1</i> because the number <i>3</i> fits no more than <i>3</i> times in <i>10</i>. <i>3x3</i> is <i>9</i>. Thus, the <i>Remainder</i> of <code class='bg-blueGray-600 text-base py-1 px-1'>10 % 3</code> is <i>10-9=1</i>. </div> <div class='mt-2'> Now, how do we make use of the <i>Remainder/Modulo</i> operator to find out if a number is even oder odd? Well, we have to account for the fact that every even number is divisible by <i>2</i> while every odd number is not. So, <code class='bg-blueGray-600 text-base py-1 px-1'>evenNumber % 2</code> will always return zero. <code class='bg-blueGray-600 text-base py-1 px-1'>oddNumber % 2</code> will always return a number different from zero. </div>",
    id: "5f082fa739c6fe165eb9f594",
  },
  {
    title: "How many times does a character occur?",
    series: "Javascript basics",
    difficulty: 21,
    titleUrl: "times-character-occurs-string",
    description:
      "Write a function that takes two strings (a and b) as arguments. Return the number of times a occurs in b.",
    solution: [
      "function myFunction(a, b) {",
      "",
      "  return b.split(a).length - 1",
      "}",
    ],
    params: "a, b",
    testCases: [
      {
        input:
          "myFunction('m', 'how many times does the character occur in this sentence?')",
        output: "2",
      },
      {
        input:
          "myFunction('h', 'how many times does the character occur in this sentence?')",
        output: "4",
      },
      {
        input:
          "myFunction('?', 'how many times does the character occur in this sentence?')",
        output: "1",
      },
      {
        input:
          "myFunction('z', 'how many times does the character occur in this sentence?')",
        output: "0",
      },
    ],
    id: "5f082fa739c6fe165eb9f595",
  },
  {
    title: "Check if a number is a whole number",
    series: "Javascript basics",
    difficulty: 20,
    titleUrl: "check-if-number-is-whole",
    description:
      "Write a function that takes a number (a) as argument. If a is a whole number (has no decimal place), return true. Otherwise, return false.",
    solution: [
      "function myFunction(a) {",
      "",
      "  return a - Math.floor(a) === 0",
      "}",
    ],
    params: "a",
    testCases: [
      { input: "myFunction(4)", output: "true " },
      { input: "myFunction(1.123)", output: "false " },
      { input: "myFunction(1048)", output: "true " },
      { input: "myFunction(10.48)", output: "false " },
    ],
    id: "5f082fa739c6fe165eb9f596",
  },
  {
    title: "Multiplication, division, and comparison operators",
    series: "Javascript basics",
    difficulty: 5,
    titleUrl: "multiplication-division-comparison-operators",
    description:
      "Write a function that takes two numbers (a and b) as arguments. If a is smaller than b, divide a by b. Otherwise, multiply both numbers. Return the resulting value",
    solution: [
      "function myFunction(a, b) {",
      "",
      "  return a < b ? a / b : a * b",
      "}",
    ],
    params: "a, b",
    testCases: [
      { input: "myFunction(10, 100)", output: "0.1" },
      { input: "myFunction(90, 45)", output: "4050" },
      { input: "myFunction(8, 20)", output: "0.4" },
      { input: "myFunction(2, 0.5)", output: "1" },
    ],
    id: "5f082fa739c6fe165eb9f597",
  },
  {
    title: "Check whether a string contains another string and concatenate",
    series: "Javascript basics",
    difficulty: 10,
    titleUrl: "check-if-string-contains-string",
    description:
      "Write a function that takes two strings (a and b) as arguments. If a contains b, append b to the beginning of a. If not, append it to the end. Return the concatenation",
    solution: [
      "function myFunction(a, b) {",
      "",
      "  return a.indexOf(b) === -1 ? a + b : b + a",
      "}",
    ],
    params: "a, b",
    testCases: [
      { input: "myFunction('cheese', 'cake')", output: "'cheesecake'" },
      { input: "myFunction('lips', 's')", output: "'slips'" },
      { input: "myFunction('Java', 'script')", output: "'Javascript'" },
      {
        input: "myFunction(' think, therefore I am', 'I')",
        output: "'I think, therefore I am'",
      },
    ],
    id: "5f0a061aa4b9e9786f669e62",
  },
  {
    title: "Round a number to 2 decimal places",
    series: "Javascript basics",
    difficulty: 25,
    titleUrl: "round-2-decimal-digits",
    description:
      "Write a function that takes a number (a) as argument. Round a to the 2nd digit after the comma. Return the rounded number",
    solution: [
      "function myFunction(a) {",
      "  return Number(a.toFixed(2));",
      "}",
    ],
    params: "a",
    testCases: [
      { input: "myFunction(2.12397)", output: "2.12" },
      { input: "myFunction(3.136)", output: "3.14" },
      { input: "myFunction(1.12397)", output: "1.12" },
      { input: "myFunction(26.1379)", output: "26.14" },
    ],
    id: "5f55c2f61b0005cc692b7b82",
  },
  {
    title: "Split a number into its digits",
    series: "Javascript basics",
    difficulty: 30,
    titleUrl: "split-number-into-digits",
    description:
      "Write a function that takes a number (a) as argument. Split a into its individual digits and return them in an array. Tipp: you might want to change the type of the number for the splitting",
    solution: [
      "function myFunction( a ) {",
      "  const string = a + '';",
      "  const strings = string.split('');",
      "  return strings.map(digit => Number(digit))",
      "}",
    ],
    params: "a",
    testCases: [
      { input: "myFunction(10)", output: "[1,0]" },
      { input: "myFunction(931)", output: "[9,3,1]" },
      { input: "myFunction(193278)", output: "[1,9,3,2,7,8]" },
    ],
    id: "5f09f9f963ad1074c98a7665",
  },
  {
    title: "Clear up the chaos behind these strings",
    series: "Javascript basics",
    difficulty: 70,
    titleUrl: "clean-sort-join-strings",
    description:
      "It seems like something happened to these strings. Can you figure out how to clear up the chaos? Write a function that joins these strings together such that they form the following words:. 'Javascript', 'Countryside', and 'Downtown'. You might want to apply basic JS string methods such as replace(), split(), slice() etc.",
    solution: [
      "function myFunction(a, b) {",
      "",
      "  const func = x => x.replace('%','');",
      "  const first = func(a);",
      "  const second = func(b).split('').reverse().join('');",
      "  return first.charAt(0).toUpperCase() + first.slice(1) + second;",
      "",
      "}",
    ],
    params: "a, b",
    testCases: [
      { input: "myFunction('java', 'tpi%rcs')", output: "'Javascript'" },
      { input: "myFunction('c%ountry', 'edis')", output: "'Countryside'" },
      { input: "myFunction('down', 'nw%ot')", output: "'Downtown'" },
    ],
    id: "5f082fa739c6fe165eb9f598",
  },
  {
    title: "Return the next higher prime number",
    series: "Javascript basics",
    difficulty: 90,
    titleUrl: "return-prime-number",
    description:
      "This challenge is a little bit more complex. Write a function that takes a number (a) as argument. If a is prime, return a. If not, return the next higher prime number.",
    solution: [
      "function myFunction( a ) {",
      "",
      "  function isPrime(num) {",
      "    for (let i = 2; i <= Math.sqrt(num); i++) {",
      "      if (num % i === 0) return false;",
      "    }",
      "    return num > 1;",
      "  }",
      "",
      " let n = a;",
      " while (!isPrime(n)) n++;",
      "",
      "return n",
      "}",
    ],
    params: "a",
    testCases: [
      { input: "myFunction(38)", output: "41" },
      { input: "myFunction(7)", output: "7" },
      { input: "myFunction(115)", output: "127" },
      { input: "myFunction(2000)", output: "2003" },
    ],
    id: "5f082fa739c6fe165eb9f599",
  },
  {
    title: "Find next higher natural number that is divisble by y",
    series: "Javascript basics",
    difficulty: 60,
    titleUrl: "find-next-higher-number",
    description:
      "Write a function that takes two numbers, say x and y, as arguments. Check if x is divisible by y. If yes, return x. If not, return the next higher natural number that is divisible by y",
    solution: [
      "function myFunction(x, y) {",
      "  while (x % y !== 0) x++;",
      "  return x;",
      "}",
    ],
    params: "x, y",
    testCases: [
      { input: "myFunction(1, 23)", output: "23" },
      { input: "myFunction(23, 23)", output: "23" },
      { input: "myFunction(7, 3)", output: "9" },
      { input: "myFunction(-5, 7)", output: "0" },
    ],
    id: "5f51ce458f4a8a78a2f9e238",
  },
  {
    title: "Insert character after every n characters (backwards)",
    series: "Javascript basics",
    difficulty: 65,
    titleUrl: "insert-character-after-every-characters-backwards-javascript",
    description:
      "Write a function that takes two strings (a and b) as arguments. Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'. Return the resulting string.",
    params: "a, b",
    solution: [
      "function myFunction(a, b) {",
      "   let result = [];",
      "   let rest = a;",
      "   while (rest.length) {",
      "   \tresult.push(rest.slice(-3));",
      "   \trest = rest.slice(0, -3);",
      "   }",
      "   return result.reverse().join(b);",
      "}",
    ],
    testCases: [
      { input: "myFunction('1234567','.')", output: "'1.234.567'" },
      { input: "myFunction('abcde','$')", output: "'ab$cde'" },
      {
        input: "myFunction('zxyzxyzxyzxyzxyz','w')",
        output: "'zwxyzwxyzwxyzwxyzwxyz'",
      },
    ],
    id: "791bda03c3d37812e69b168a",
  },
  {
    title: "Find the correct word by incrementing letters in alphabet",
    series: "Javascript basics",
    difficulty: 70,
    titleUrl: "incrementing-javascript-letters-alphabet",
    description:
      "Write a function that takes a string as argument. As it is, the string has no meaning. Increment each letter to the next letter in the alphabet. Return the correct word",
    solution: [
      "function myFunction(str) {",
      "  const arr = [...str];",
      "  const correctedArray = arr.map(e => String.fromCharCode(e.charCodeAt()+1));",
      "  return correctedArray.join('');",
      "}",
    ],
    params: "str",
    testCases: [
      { input: "myFunction('bnchmf')", output: "'coding'" },
      { input: "myFunction('bgddrd')", output: "'cheese'" },
      { input: "myFunction('sdrshmf')", output: "'testing'" },
    ],
    id: "5f6ca62dc850c82949f61ce0",
  },
],
e = [
  {
    title: "Get nth element of array",
    series: "Javascript arrays",
    difficulty: 2,
    hint: "<div class='mt-2'> In order to get the nth element of a given array, you have to know its index. An index describes the position of an element in a given array. Javascript arrays are <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#accessing_array_elements' target='_blank' rel='noopener noreferrer' class='text-blue-400 hover:underline'>zero-indexed</a >. This means that the first element of an array has index <i>0</i>. The second element has index <i>1</i> and so on. </div> <div class='mt-2 flex flex-col'> <code class='bg-blueGray-600 text-base px-1 pt-1'>const arr = [1,2,3,4,5];</code> <code class='bg-blueGray-600 text-base px-1'>// get first element</code> <code class='bg-blueGray-600 text-base px-1'>console.log(arr[0])</code> <code class='bg-blueGray-600 text-base px-1'>// output: 1</code> <code class='bg-blueGray-600 text-base px-1'>// get last element</code> <code class='bg-blueGray-600 text-base px-1'>console.log(arr[4])</code> <code class='bg-blueGray-600 text-base px-1 pb-1'>// output: 5</code> </div>",
    titleUrl: "get-nth-element-array-javascript",
    description:
      "Write a function that takes an array (a) and a value (n) as argument. Return the nth element of 'a'",
    solution: ["function myFunction(a, n) {", "   return a[n - 1];", "}"],
    params: "a, n",
    testCases: [
      { input: "myFunction([1,2,3,4,5],3)", output: "3" },
      { input: "myFunction([10,9,8,7,6],5)", output: "6" },
      { input: "myFunction([7,2,1,6,3],1)", output: "7" },
    ],
    id: "c8e4c12d8911bc6cf2039922",
  },
  {
    title: "Remove first n elements of an array",
    series: "Javascript arrays",
    difficulty: 3,
    hint: "<h3 class='mt-4 font-semibold'>Approach 1</h3> <div class='mt-2'> The most recommended and easy way to remove certain elements from an array is to use the <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice' target='_blank' rel='noopener noreferrer' class='text-blue-400 hover:underline' >slice</a > method. </div> <div class='mt-2'> The <i>slice</i> operator takes two optional parameters (start, end). You can use these parameters to define a range of elements that you want to keep from the original array. Consider the following array: <div class='mt-2'> <code class='bg-blueGray-600 text-base py-1 px-1'>const arr = [0,1,2,3,4];</code> </div> <div class='mt-2'> If we would want to have a new array that only has the third and the fourth element of <i>arr</i>, we would call: </div> <div class='mt-2'> <code class='bg-blueGray-600 text-base py-1 px-1'>arr.slice(2,4); <br />// output: [2,3]</code> </div> <div class='mt-2'> Our start parameter is <i>2</i> because this is the index of the third element - the first element that we want to include in the output. The end parameter is <i>4</i> because this is the index of the fifth element - the first element that we do <strong>not</strong> wish to be included in the outcome. </div> <div class='mt-2'> This method can be applied to our problem. If we want to remove some elements from the beginning of an array, then we only have to define the <i>start</i> parameter. </div> <div class='mt-2'> <code class='bg-blueGray-600 text-base py-1 px-1'>arr.slice(2); <br />// output: [2,3,4]</code> </div> <div class='mt-2'> I recommend this approach because it leaves the original array untouched and creates a new one instead. This is a good way to avoid bugs in your code. </div> <div class='mt-2 flex flex-col'> <code class='bg-blueGray-600 text-base py-1 px-1'> <div>const arr = [0,1,2,3,4];</div> <div>console.log(arr.slice(0,2));</div> <div>// output: [2,3,4]</div> <div>// the original array did not change:</div> <div>console.log(arr);</div> <div>// output: [0,1,2,3,4]</div> </code> </div> <h3 class='mt-4 font-semibold'>Approach 2</h3> <div class='mt-2'> Another way to remove the first n elements from an array is to use the <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice' target='_blank' rel='noopener noreferrer' class='text-blue-400 hover:underline' >splice</a > method. </div> <div class='mt-2'> It is used to remove or replace elements of an array (or even add new elements). It takes as first parameter the start index for your operation. The second (optional) parameter defines how many items you want to delete. Further (optional) parameters define the items you want to add to the array. </div> <div class='mt-2'>Consider the following array:</div> <div class='mt-2'> <code class='bg-blueGray-600 text-base py-1 px-1'>const arr = [0,1,2,3,4];</code> </div> <div class='mt-2'>To remove the first 2 elements from the array, we call:</div> <div class='mt-2'><code class='bg-blueGray-600 text-base py-1 px-1'>arr.splice(0,2);</code></div> <div class='mt-2'> The start parameter is <i>0</i> because we want to remove elements from the beginning of the array. The second parameter is <i>2</i> because we want to delete 2 elements. </div> <div class='mt-2'> It is important to consider that this method mutates the original array. </div> <div class='mt-2 flex flex-col'> <code class='bg-blueGray-600 text-base py-1 px-1'> <div>const arr = [0,1,2,3,4];</div> <div>console.log(arr.splice(0,2));</div> <div>// output: [0,1]</div> <div>// the original array changed:</div> <div>console.log(arr);</div> <div>// output: [2,3,4]</div> </code> </div> </div>",
    titleUrl: "remove-first-elements-array-javascript",
    description:
      "Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'. Return the result",
    solution: ["function myFunction(a) {", "   return a.slice(3);", "}"],
    params: "a",
    testCases: [
      { input: "myFunction([1,2,3,4])", output: "[4]" },
      { input: "myFunction([5,4,3,2,1,0])", output: "[2,1,0]" },
      { input: "myFunction([99,1,1])", output: "[]" },
    ],
    id: "62cd6d6ffee4c0cd71c1dfab",
  },
  {
    title: "Get last n elements of an array",
    series: "Javascript arrays",
    difficulty: 3,
    titleUrl: "get-last-elements-array-javascript",
    description:
      "Write a function that takes an array (a) as argument. Extract the last 3 elements of a. Return the resulting array",
    solution: ["function myFunction(a) {", "   return a.slice(-3);", "}"],
    params: "a",
    testCases: [
      { input: "myFunction([1,2,3,4])", output: "[2,3,4]" },
      { input: "myFunction([5,4,3,2,1,0])", output: "[2,1,0]" },
      { input: "myFunction([99,1,1])", output: "[99,1,1]" },
    ],
    id: "7a4d6b5330c1d81ad4cb6dc1",
  },
  {
    title: "Get first n elements of an array",
    series: "Javascript arrays",
    difficulty: 2,
    titleUrl: "get-first-elements-array-javascript",
    description:
      "Write a function that takes an array (a) as argument. Extract the first 3 elements of a. Return the resulting array",
    solution: ["function myFunction(a) {", "   return a.slice(0, 3);", "}"],
    params: "a",
    testCases: [
      { input: "myFunction([1,2,3,4])", output: "[1,2,3]" },
      { input: "myFunction([5,4,3,2,1,0])", output: "[5,4,3]" },
      { input: "myFunction([99,1,1])", output: "[99,1,1]" },
    ],
    id: "c68ccc6d4d973b70a6237ee7",
  },
  {
    title: "Return last n array elements",
    series: "Javascript arrays",
    difficulty: 10,
    titleUrl: "get-last-array-elements",
    description:
      "Write a function that takes an array (a) and a number (n) as arguments. It should return the last n elements of a.",
    solution: ["function myFunction(a, n) {", "  return a.slice(-n);", "}"],
    params: "a, n",
    testCases: [
      { input: "myFunction([1, 2, 3, 4, 5], 2)", output: "[ 4, 5 ]" },
      { input: "myFunction([1, 2, 3], 6)", output: "[ 1, 2, 3 ]" },
      {
        input: "myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3)",
        output: "[ 6, 7, 8 ]",
      },
    ],
    id: "5f5717679bc7de0d1528055d",
  },
  {
    title: "Remove a specific array element",
    series: "Javascript arrays",
    difficulty: 10,
    titleUrl: "remove-specific-array-element",
    description:
      "Write a function that takes an array (a) and a value (b) as argument. The function should clean a from all occurrences of b. Return the filtered array",
    solution: [
      "function myFunction( a, b ) {",
      "",
      "  return a.filter(cur => cur !== b)",
      "}",
    ],
    params: "a, b",
    testCases: [
      { input: "myFunction([1,2,3], 2)", output: "[1, 3]" },
      { input: "myFunction([1,2,'2'], '2')", output: "[1, 2]" },
      { input: "myFunction([false,'2',1], false)", output: "['2', 1]" },
      { input: "myFunction([1,2,'2',1], 1)", output: "[2, '2']" },
    ],
    id: "5f09fe992d9f417607423347",
  },
  {
    title: "Count number of elements in JavaScript array",
    series: "Javascript arrays",
    difficulty: 1,
    titleUrl: "count-number-elements-javascript-array",
    description:
      "Write a function that takes an array (a) as argument. Return the number of elements in a.",
    solution: ["function myFunction(a) {", "   return a.length;", "}"],
    params: "a",
    testCases: [
      { input: "myFunction([1,2,2,4])", output: "4" },
      { input: "myFunction([9,9,9])", output: "3" },
      { input: "myFunction([4,3,2,1,0])", output: "5" },
    ],
    id: "9bafbab4e736b80fef384d87",
  },
  {
    title: "Count number of negative values in array",
    series: "Javascript arrays",
    difficulty: 3,
    titleUrl: "count-number-negative-values-array",
    description:
      "Write a function that takes an array of numbers as argument. Return the number of negative values in the array.",
    solution: [
      "function myFunction(a) {",
      "   return a.filter((el) => el < 0).length;",
      "}",
    ],
    params: "a",
    testCases: [
      { input: "myFunction([1,-2,2,-4])", output: "2" },
      { input: "myFunction([0,9,1])", output: "0" },
      { input: "myFunction([4,-3,2,1,0])", output: "1" },
    ],
    id: "d5a5d83e9bbee20201e89f16",
  },
  {
    title: "Sort an array of numbers in descending order",
    series: "Javascript arrays",
    difficulty: 15,
    titleUrl: "sort-array-of-numbers",
    description:
      "Write a function that takes an array of numbers as argument. It should return an array with the numbers sorted in descending order.",
    solution: [
      "function myFunction( arr ) {",
      "",
      "  return arr.sort((a, b) => b - a)",
      "}",
    ],
    params: "arr",
    testCases: [
      { input: "myFunction([1,3,2])", output: "[3,2,1]" },
      { input: "myFunction([4,2,3,1])", output: "[4,3,2,1]" },
    ],
    id: "5f082fa739c6fe165eb9f59c",
  },
  {
    title: "Sort an array of strings alphabetically",
    series: "Javascript arrays",
    difficulty: 3,
    titleUrl: "sort-array-of-strings",
    description:
      "Write a function that takes an array of strings as argument. Sort the array elements alphabetically. Return the result.",
    solution: ["function myFunction( arr ) {", "", "return arr.sort()", "}"],
    params: "arr",
    testCases: [
      {
        input: "myFunction(['b', 'c', 'd', 'a'])",
        output: "['a', 'b', 'c', 'd']",
      },
      {
        input: "myFunction(['z', 'c', 'd', 'a', 'y', 'a', 'w'])",
        output: "['a', 'a', 'c', 'd', 'w', 'y', 'z']",
      },
    ],
    id: "5f082fa739c6fe165eb9f59d",
  },
  {
    title: "Return the average of an array of numbers",
    series: "Javascript arrays",
    titleUrl: "return-average-of-array",
    difficulty: 20,
    description:
      "Write a function that takes an array of numbers as argument. It should return the average of the numbers.",
    solution: [
      "function myFunction( arr ) {",
      "",
      "return arr.reduce((acc, cur) => acc + cur, 0) / arr.length",
      "}",
    ],
    params: "arr",
    testCases: [
      { input: "myFunction([10,100,40])", output: "50" },
      { input: "myFunction([10,100,1000])", output: "370" },
      { input: "myFunction([-50,0,50,200])", output: "50" },
    ],
    id: "5f082fa739c6fe165eb9f59e",
  },
  {
    title: "Return the longest string from an array of strings",
    series: "Javascript arrays",
    difficulty: 22,
    titleUrl: "return-longest-string-in-array",
    description:
      "Write a function that takes an array of strings as argument. Return the longest string.",
    solution: [
      "function myFunction( arr ) {",
      "",
      "return arr.reduce((a, b) => a.length <= b.length ? b : a)",
      "}",
    ],
    params: "arr",
    testCases: [
      { input: "myFunction(['help', 'me'])", output: "'help'" },
      { input: "myFunction(['I', 'need', 'candy'])", output: "'candy'" },
    ],
    id: "5f082fa739c6fe165eb9f59f",
  },
  {
    title: "Check if all array elements are equal",
    series: "Javascript arrays",
    difficulty: 25,
    titleUrl: "check-if-array-elements-are-equal",
    description:
      "Write a function that takes an array as argument. It should return true if all elements in the array are equal. It should return false otherwise.",
    solution: [
      "function myFunction( arr ) {",
      "",
      "  return new Set(arr).size === 1",
      "}",
    ],
    params: "arr",
    testCases: [
      { input: "myFunction([true, true, true, true])", output: "true " },
      { input: "myFunction(['test', 'test', 'test'])", output: "true " },
      { input: "myFunction([1,1,1,2])", output: "false " },
      { input: "myFunction(['10',10,10,10])", output: "false " },
    ],
    id: "5f082fa739c6fe165eb9f59b",
  },
  {
    title: "Merge an arbitrary number of arrays",
    series: "Javascript arrays",
    difficulty: 25,
    titleUrl: "merge-number-of-arrays",
    description:
      "Write a function that takes arguments an arbitrary number of arrays. It should return an array containing the values of all arrays.",
    solution: [
      "function myFunction( ...arrays ) {",
      "",
      "return arrays.flat()",
      "}",
    ],
    params: "...arrays",
    testCases: [
      {
        input: "myFunction([1, 2, 3], [4, 5, 6])",
        output: "[1, 2, 3, 4, 5, 6]",
      },
      {
        input: "myFunction(['a', 'b', 'c'], [4, 5, 6])",
        output: "['a', 'b', 'c', 4, 5, 6]",
      },
      {
        input: "myFunction([true, true], [1, 2], ['a', 'b'])",
        output: "[true, true, 1, 2, 'a', 'b']",
      },
    ],
    id: "5f082fa739c6fe165eb9f5a0",
  },
  {
    title: "Sort array by object property",
    series: "Javascript arrays",
    difficulty: 25,
    titleUrl: "sort-array-object-property-javascript",
    description:
      "Write a function that takes an array of objects as argument. Sort the array by property b in ascending order. Return the sorted array",
    solution: [
      "function myFunction(arr) {",
      "   const sort = (x, y) => x.b - y.b;",
      "   return arr.sort(sort);",
      "}",
    ],
    params: "arr",
    testCases: [
      {
        input: "myFunction([{a:1,b:2},{a:5,b:4}])",
        output: "[{a:1,b:2},{a:5,b:4}]",
      },
      {
        input: "myFunction([{a:2,b:10},{a:5,b:4}])",
        output: "[{a:5,b:4},{a:2,b:10}]",
      },
      {
        input: "myFunction([{a:1,b:7},{a:2,b:1}])",
        output: "[{a:2,b:1},{a:1,b:7}]",
      },
    ],
    id: "e1b1b57cd6f79f9984f226a5",
  },
  {
    title: "Merge two arrays with duplicate values",
    series: "Javascript arrays",
    difficulty: 30,
    titleUrl: "merge-arrays-duplicates",
    description:
      "Write a function that takes two arrays as arguments. Merge both arrays and remove duplicate values. Sort the merge result in ascending order. Return the resulting array",
    solution: [
      "function myFunction(a, b) {",
      "  return [...new Set([...a, ...b])].sort((x, y) => x - y);",
      "}",
    ],
    params: "a, b",
    testCases: [
      {
        input: "myFunction([1, 2, 3], [3, 4, 5])",
        output: "[ 1, 2, 3, 4, 5 ]",
      },
      {
        input: "myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42])",
        output: "[ -11, -10, 5, 22, 41,  42, 333]",
      },
    ],
    id: "5f100c8d83fd8e3fef903ea0",
  },
  {
    title: "Sum up all array elements with values greater than",
    series: "Javascript arrays",
    difficulty: 25,
    titleUrl: "sum-up-array-greater",
    description:
      "Write a function that takes an array (a) and a number (b) as arguments. Sum up all array elements with a value greater than b. Return the sum",
    solution: [
      "function myFunction(a, b) {",
      "  return a.reduce((sum, cur) => {",
      "    if (cur > b) return sum + cur;",
      "    return sum;",
      "  }, 0);",
      "}",
    ],
    params: "a, b",
    testCases: [
      { input: "myFunction([1, 2, 3, 4, 5, 6, 7], 2)", output: "25" },
      { input: "myFunction([-10, -11, -3, 1, -4], -3)", output: "1" },
      { input: "myFunction([78, 99, 100, 101, 401], 99)", output: "602" },
    ],
    id: "5f532c5ea1f06caca379c917",
  },
  {
    title: "Create a range of numbers",
    series: "Javascript arrays",
    difficulty: 45,
    titleUrl: "create-range-of-numbers",
    description:
      "Write a function that takes two numbers (min and max) as arguments. Return an array of numbers in the range min to max",
    solution: [
      "function myFunction(min, max) {",
      "  let arr = [];",
      "  for (let i = min; i <= max; i++) {",
      "    arr.push(i);",
      "  }",
      "return arr;",
      "}",
    ],
    params: "min, max",
    testCases: [
      { input: "myFunction(2, 10)", output: "[2, 3, 4, 5, 6, 7, 8, 9, 10]" },
      { input: "myFunction(1, 3)", output: "[1, 2, 3]" },
      {
        input: "myFunction(-5, 5)",
        output: "[-5, -4, -3, -2, -1, 0,  1,  2,  3,  4, 5]",
      },
      { input: "myFunction(2, 7)", output: "[2, 3, 4, 5, 6, 7]" },
    ],
    id: "5f54d27d39e6d6bc4c8754bf",
  },
  {
    title: "Group array of strings by first letter",
    series: "Javascript arrays",
    difficulty: 50,
    titleUrl: "javascript-group-array-strings-first-letter",
    description:
      "Write a function that takes an array of strings as argument. Group those strings by their first letter. Return an object that contains properties with keys representing first letters. The values should be arrays of strings containing only the corresponding strings. For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to. { a: ['Alf', 'Alice'], b: ['Ben']}",
    solution: [
      "function myFunction(arr) {",
      " return arr.reduce((acc, cur) => {",
      "   const firstLetter = cur.toLowerCase().charAt(0);",
      "   return { ...acc, [firstLetter]: [...(acc[firstLetter] || []), cur] };",
      " }, {});",
      "}",
    ],
    params: "arr",
    testCases: [
      {
        input: "myFunction(['Alf', 'Alice', 'Ben'])",
        output: "{ a: ['Alf', 'Alice'], b: ['Ben']}",
      },
      {
        input: "myFunction(['Ant', 'Bear', 'Bird'])",
        output: "{ a: ['Ant'], b: ['Bear', 'Bird']}",
      },
      {
        input: "myFunction(['Berlin', 'Paris', 'Prague'])",
        output: "{ b: ['Berlin'], p: ['Paris', 'Prague']}",
      },
    ],
    id: "613f1d9fcfe31c2db0496299",
  },
  {
    title: "Define an array with conditional elements",
    series: "Javascript arrays",
    difficulty: 31,
    titleUrl: "javascript-add-to-array-conditional-elements",
    description:
      "Write a function that takes an array with arbitrary elements and a number as arguments. Return a new array, the first element should be either the given number itself. or zero if the number is smaller than 6. The other elements should be the elements of the original array. Try not to mutate the original array",
    solution: [
      "function myFunction(arr, num) {",
      " return [...(num > 5 ? [num] : [0]), ...arr];",
      "}",
    ],
    params: "arr, num",
    testCases: [
      { input: "myFunction([1,2,3], 6)", output: "[6,1,2,3]" },
      { input: "myFunction(['a','b'], 2)", output: "[0,'a','b']" },
      { input: "myFunction([null,false], 11)", output: "[11,null,false]" },
    ],
    id: "6140883b27a511644839b50b",
  },
  {
    title: "Get every nth element of array",
    series: "Javascript arrays",
    difficulty: 70,
    titleUrl: "every-nth-element-array-javascript",
    description:
      "Write a function that takes an array (a) and a value (n) as arguments. Save every nth element in a new array. Return the new array",
    solution: [
      "function myFunction(a, n) {",
      "   let rest = [...a];",
      "   let result = [];",
      "   for (let i = 0; i < a.length; i++) {",
      "      if (rest.length < n) break;",
      "      result.push(rest[n - 1]);",
      "      rest = rest.slice(n);",
      "   }",
      "   return result;",
      "}",
    ],
    params: "a, n",
    testCases: [
      { input: "myFunction([1,2,3,4,5,6,7,8,9,10],3)", output: "[3,6,9]" },
      { input: "myFunction([10,9,8,7,6,5,4,3,2,1],5)", output: "[6,1]" },
      {
        input: "myFunction([7,2,1,6,3,4,5,8,9,10],2)",
        output: "[2,6,4,8,10]",
      },
    ],
    id: "936815cd2c98b858ea2ab622",
  },
],
a = [
  {
    title: "Accessing object properties one",
    series: "Javascript objects",
    difficulty: 1,
    titleUrl: "access-object-properties",
    description:
      "Write a function that takes an object with two properties as argument. It should return the value of the property with key country.",
    solution: ["function myFunction(obj) {", "", "  return obj.country", "}"],
    params: "obj",
    testCases: [
      {
        input: "myFunction({  continent: 'Asia',  country: 'Japan'})",
        output: "'Japan'",
      },
      {
        input: "myFunction({  country: 'Sweden',  continent: 'Europe'})",
        output: "'Sweden'",
      },
    ],
    id: "5f1043abbd87ab5028fee129",
  },
  {
    title: "Accessing object properties two",
    series: "Javascript objects",
    difficulty: 18,
    titleUrl: "access-object-properties-square-brackets",
    description:
      "Write a function that takes an object with two properties as argument. It should return the value of the property with key 'prop-2'. Tipp: you might want to use the square brackets property accessor",
    solution: [
      "function myFunction(obj) {",
      "",
      "  return obj['prop-2']",
      "}",
    ],
    params: "obj",
    testCases: [
      { input: "myFunction({  one: 1,  'prop-2': 2})", output: "2" },
      {
        input: "myFunction({  'prop-2': 'two',  prop: 'test'})",
        output: "'two'",
      },
    ],
    id: "5f1043abbd87ab5028fee12a",
  },
  {
    title: "Accessing object properties three",
    series: "Javascript objects",
    difficulty: 3,
    titleUrl: "access-object-properties-dynamic-key",
    description:
      "Write a function that takes an object with two properties and a string as arguments. It should return the value of the property with key equal to the value of the string",
    solution: [
      "function myFunction(obj, key) {",
      "",
      "  return obj[key]",
      "}",
    ],
    params: "obj, key",
    testCases: [
      {
        input:
          "myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent')",
        output: "'Asia'",
      },
      {
        input:
          "myFunction({  country: 'Sweden',  continent: 'Europe'}, 'country')",
        output: "'Sweden'",
      },
    ],
    id: "5f1043abbd87ab5028fee12b",
  },
  {
    title: "Check if property exists in object",
    series: "Javascript objects",
    difficulty: 1,
    titleUrl: "check-object-has-property-javascript",
    description:
      "Write a function that takes an object (a) and a string (b) as argument. Return true if a has a property with key b. Return false otherwise.",
    params: "a, b",
    solution: ["function myFunction(a, b) {", "   return b in a;", "}"],
    testCases: [
      { input: "myFunction({a:1,b:2,c:3},'b')", output: "true" },
      { input: "myFunction({x:'a',y:'b',z:'c'},'a')", output: "false" },
      { input: "myFunction({x:'a',y:'b',z:'c'},'z')", output: "true" },
    ],
    id: "7ba2e311ac00de4baaa13f2f",
  },
  {
    title: "Creating Javascript objects one",
    series: "Javascript objects",
    difficulty: 2,
    titleUrl: "creating-objects-javascript",
    description:
      "Write a function that a string (a) as argument. Create an object that has a property with key 'key' and a value of a. Return the object.",
    params: "a",
    solution: ["function myFunction(a) {", "   return { key: a };", "}"],
    testCases: [
      { input: "myFunction('a')", output: "{key:'a'}" },
      { input: "myFunction('z')", output: "{key:'z'}" },
      { input: "myFunction('b')", output: "{key:'b'}" },
    ],
    id: "3e3ea5df783f2c23c7e37847",
  },
  {
    title: "Creating Javascript objects two",
    series: "Javascript objects",
    difficulty: 8,
    titleUrl: "creating-objects-dynamic-key-javascript",
    description:
      "Write a function that takes two strings (a and b) as arguments. Create an object that has a property with key 'a' and a value of 'b'. Return the object.",
    params: "a, b",
    solution: ["function myFunction(a, b) {", "   return { [a]: b };", "}"],
    testCases: [
      { input: "myFunction('a','b')", output: "{a:'b'}" },
      { input: "myFunction('z','x')", output: "{z:'x'}" },
      { input: "myFunction('b','w')", output: "{b:'w'}" },
    ],
    id: "784bc8964868c2266b5dd5cb",
  },
  {
    title: "Creating Javascript objects three",
    series: "Javascript objects",
    difficulty: 10,
    titleUrl: "creating-objects-from-arrays-javascript",
    description:
      "Write a function that takes two arrays (a and b) as arguments. Create an object that has properties with keys 'a' and corresponding values 'b'. Return the object.",
    params: "a, b",
    solution: [
      "function myFunction(a, b) {",
      "   return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});",
      "}",
    ],
    testCases: [
      { input: "myFunction(['a','b','c'],[1,2,3])", output: "{a:1,b:2,c:3}" },
      {
        input: "myFunction(['w','x','y','z'],[10,9,5,2])",
        output: "{w:10,x:9,y:5,z:2}",
      },
      { input: "myFunction([1,'b'],['a',2])", output: "{1:'a',b:2}" },
    ],
    id: "70d051b7c3d2c18046f2a13e",
  },
  {
    title: "Extract keys from Javascript object",
    series: "Javascript objects",
    difficulty: 8,
    titleUrl: "extract-keys-from-object-javascript",
    description:
      "Write a function that takes an object (a) as argument. Return an array with all object keys.",
    params: "a",
    solution: ["function myFunction(a) {", "   return Object.keys(a);", "}"],
    testCases: [
      { input: "myFunction({a:1,b:2,c:3})", output: "['a','b','c']" },
      { input: "myFunction({j:9,i:2,x:3,z:4})", output: "['j','i','x','z']" },
      { input: "myFunction({w:15,x:22,y:13})", output: "['w','x','y']" },
    ],
    id: "2c73841b840d6fd8e106bf0d",
  },
  {
    title: "Sum object values",
    series: "Javascript objects",
    difficulty: 11,
    titleUrl: "sum-objects-values-javascript",
    description:
      "Write a function that takes an object (a) as argument. Return the sum of all object values.",
    params: "a",
    solution: [
      "function myFunction(a) {",
      "   return Object.values(a).reduce((sum, cur) => sum + cur, 0);",
      "}",
    ],
    testCases: [
      { input: "myFunction({a:1,b:2,c:3})", output: "6" },
      { input: "myFunction({j:9,i:2,x:3,z:4})", output: "18" },
      { input: "myFunction({w:15,x:22,y:13})", output: "50" },
    ],
    id: "b270f0fb810b6d50fc735ff5",
  },
  {
    title: "Remove a property from an object",
    series: "Javascript objects",
    difficulty: 15,
    titleUrl: "remove-property-from-object",
    hint: "<h3 class='mt-4 font-semibold'>Approach 1</h3> <div class='mt-2'> To to delete a property from an object in Javascript, we can use the <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete' target='_blank' rel='noopener noreferrer' class='text-blue-400 hover:underline'>delete</a > operator. Consider the following object: <div class='mt-2'> <code class='bg-blueGray-600 text-base py-1 px-1'>const obj = &#123;x:1,y:2&#125;;</code> </div> <div class='mt-2'> To remove property <i>y</i> we would call: </div> <div class='mt-2'> <code class='bg-blueGray-600 text-base py-1 px-1'>delete obj.y;</code> </div> <div class='mt-2'>The modified object would now be:</div> <div class='mt-2'> <code class='bg-blueGray-600 text-base py-1 px-1'>&#123;x:1&#125;</code> </div> <div class='mt-2'> When using the <i>delete</i> operator, you have to keep in mind that the operation will change/mutate the existing object. This is not always what we want to achieve. Sometimes we would want the original object to persist. The best way to achieve this is to create a new object. It should have all original properties but the one we want to have removed. </div> </div> <h3 class='mt-4 font-semibold'>Approach 2</h3> <div class='mt-2'> To avoid mutating the original object, we can use <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring' target='_blank' rel='noopener noreferrer' class='text-blue-400 hover:underline'>Object destructuring</a > in combination with the <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax' target='_blank' rel='noopener noreferrer' class='text-blue-400 hover:underline'>Spread syntax</a >. Consider again the following object: <div class='mt-2'> <code class='bg-blueGray-600 text-base py-1 px-1'>const obj = &#123;x:1,y:2&#125;;</code> </div> <div class='mt-2'>Now we call:</div> <div class='mt-2'> <code class='bg-blueGray-600 text-base py-1 px-1' >const &#123;y, ...newObj&#125; = obj;</code > </div> <div class='mt-2'> This will assign a new variable <i>y</i> with the value <code class='bg-blueGray-600 text-base py-1 px-1'>obj.y</code> and create a new object with all the remaining properties of <i>obj</i>. </div> </div>",
    description:
      "Write a function that takes an object as argument. It should return an object with all original object properties. except for the property with key 'b'",
    solution: [
      "function myFunction(obj) {",
      "  const { b, ...rest } = obj;",
      "  return rest;",
      "}",
    ],
    params: "obj",
    testCases: [
      { input: "myFunction({ a: 1, b: 7, c: 3 })", output: "{ a: 1, c: 3 }" },
      { input: "myFunction({ b: 0, a: 7, d: 8 })", output: "{ a: 7, d: 8 }" },
      {
        input: "myFunction({ e: 6, f: 4, b: 5, a: 3 })",
        output: "{ e: 6, f: 4, a: 3 }",
      },
    ],
    id: "5f1043abbd87ab5028fee12c",
  },
  {
    title: "Merge two objects with matching keys",
    series: "Javascript objects",
    difficulty: 35,
    titleUrl: "merge-objects-same-key",
    description:
      "Write a function that takes two objects as arguments. Unfortunately, the property 'b' in the second object has the wrong key. It should be named 'd' instead. Merge both objects and correct the wrong property name. Return the resulting object. It should have the properties 'a', 'b', 'c', 'd', and 'e'",
    solution: [
      "function myFunction(x, y) {",
      "  const { b, ...rest } = y;",
      "  return { ...x, ...rest, d: b };",
      "}",
    ],
    params: "x, y",
    testCases: [
      {
        input: "myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })",
        output: "{ a: 1, b: 2, c: 3, e: 5, d: 4}",
      },
      {
        input: "myFunction({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })",
        output: "{ a: 5, b: 4, c: 3, e: 2, d: 1}",
      },
    ],
    id: "5f1043abbd87ab5028fee12d",
  },
  {
    title: "Multiply all object values by x",
    series: "Javascript objects",
    difficulty: 55,
    titleUrl: "multiply-all-objects-values-javascript",
    description:
      "Write a function that takes an object (a) and a number (b) as arguments. Multiply all values of 'a' by 'b'. Return the resulting object.",
    params: "a, b",
    solution: [
      "function myFunction(a, b) {",
      "   return Object.entries(a).reduce((acc, [key, val]) => {",
      "   \treturn { ...acc, [key]: val * b };",
      "   }, {});",
      "}",
    ],
    testCases: [
      { input: "myFunction({a:1,b:2,c:3},3)", output: "{a:3,b:6,c:9}" },
      {
        input: "myFunction({j:9,i:2,x:3,z:4},10)",
        output: "{j:90,i:20,x:30,z:40}",
      },
      {
        input: "myFunction({w:15,x:22,y:13},6)",
        output: "{w:90,x:132,y:78}",
      },
    ],
    id: "4adb827f2de7a9660b6fd5e2",
  },
  {
    title: "Swap object keys and values",
    series: "Javascript objects",
    difficulty: 60,
    titleUrl: "swap-object-keys-values",
    description:
      "Write a function that takes an object as argument. Somehow, the properties and keys of the object got mixed up. Swap the Javascript object's key with its values and return the resulting object",
    solution: [
      "function myFunction(obj) {",
      "   return Object.entries(obj).reduce((acc, [key, val]) => {",
      "      return { ...acc, [val]: key };",
      "   }, {});",
      "}",
    ],
    params: "obj",
    testCases: [
      {
        input: "myFunction({z:'a',y:'b',x:'c',w:'d'})",
        output: "{a:'z',b:'y',c:'x',d:'w'}",
      },
      {
        input: "myFunction({2:'a',4:'b',6:'c',8:'d'})",
        output: "{a:'2',b:'4',c:'6',d:'8'}",
      },
      { input: "myFunction({a:1,z:24})", output: "{1:'a',24:'z'}" },
    ],
    id: "5f1043abbd87ab5028fee12e",
  },
  {
    title: "Replace empty strings in object with null values",
    series: "Javascript objects",
    difficulty: 45,
    titleUrl: "replace-empty-strings-null",
    description:
      "Write a function that takes an object as argument. Some of the property values contain empty strings. Replace empty strings and strings that contain only whitespace with null values. Return the resulting object",
    solution: [
      "function myFunction(obj) {",
      "  const newObj = { ...obj };",
      "  for (key in newObj) {",
      "    if (newObj[key].trim() === '') newObj[key] = null;",
      "  }",
      "  return newObj;",
      "}",
    ],
    params: "obj",
    testCases: [
      {
        input: "myFunction({ a: 'a', b: 'b', c: '' })",
        output: "{ a: 'a', b: 'b', c: null }",
      },
      {
        input: "myFunction({ a: '', b: 'b', c: ' ', d: 'd' })",
        output: "{ a: null, b: 'b', c: null, d: 'd' }",
      },
      {
        input: "myFunction({ a: 'a', b: 'b ', c: ' ', d: '' })",
        output: "{ a: 'a', b: 'b ', c: null, d: null }",
      },
    ],
    id: "5f1d7eb912d05704afbc0761",
  },
  {
    title: "Extracting information from objects",
    series: "Javascript objects",
    difficulty: 75,
    titleUrl: "extracting-information-ojects",
    description:
      "Write a function that takes an object as argument containing properties with personal information. Extract firstName, lastName, size, and weight if available. If size or weight is given transform the value to a string. Attach the unit cm to the size. Attach the unit kg to the weight. Return a new object with all available properties that we are interested in",
    solution: [
      "function myFunction(obj) {",
      "  return {",
      "    fn: obj.fn,",
      "    ln: obj.ln,",
      "    ...(obj.size && { size: `${obj.size}cm` }),",
      "    ...(obj.weight && { weight: `${obj.weight}kg` }),",
      "  };",
      "}",
    ],
    params: "obj",
    testCases: [
      {
        input:
          "myFunction({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67})",
        output: "{fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}",
      },
      {
        input:
          "myFunction({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102})",
        output: "{fn: 'Martin', ln: 'Harper', weight: '102kg'}",
      },
      {
        input:
          "myFunction({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71})",
        output: "{fn: 'Andrew', ln: 'Harper', size: '175cm', weight: '71kg'}",
      },
      {
        input:
          "myFunction({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'})",
        output: "{fn: 'Matthew', ln: 'Müller'}",
      },
    ],
    id: "5f240a8bca2aecb93c0756b8",
  },
  {
    title: "Add property to each object in array",
    series: "Javascript objects",
    difficulty: 30,
    titleUrl: "add-property-array-of-objects",
    description:
      "Write a function that takes an array of objects and a string as arguments. Add a property with key 'continent' and value equal to the string to each of the objects. Return the new array of objects. Tipp: try not to mutate the original array",
    solution: [
      "function myFunction(arr, str) {",
      "  return arr.map((obj) => ({ ...obj, continent: str }));",
      "}",
    ],
    params: "arr, str",
    testCases: [
      {
        input:
          "myFunction([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia')",
        output:
          "[{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]",
      },
      {
        input:
          "myFunction([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe')",
        output:
          "[{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' }]",
      },
    ],
    id: "5f54cf183d245bb9493e585f",
  },
  {
    title: "Convert array to object with counter",
    series: "Javascript objects",
    difficulty: 65,
    titleUrl: "convert-array-to-objects-count",
    description:
      "Write a function that takes an array of numbers as argument. Convert the array to an object. It should have a key for each unique value of the array. The corresponding object value should be the number of times the key occurs within the array.",
    solution: [
      "function myFunction(a) {",
      "   return a.reduce((acc, cur) => {",
      "   \treturn { ...acc, [cur]: (acc[cur] || 0) + 1 };",
      "   }, {});",
      "}",
    ],
    params: "a",
    testCases: [
      { input: "myFunction([1,2,2,3])", output: "{1:1,2:2,3:1}" },
      { input: "myFunction([9,9,9,99])", output: "{9:3,99:1}" },
      { input: "myFunction([4,3,2,1])", output: "{1:1,2:1,3:1,4:1}" },
    ],
    id: "4afe27e61873907a8f04fa77",
  },
],
n = [
  {
    title: "Check if two dates are equal",
    series: "Javascript dates",
    difficulty: 20,
    titleUrl: "check-if-two-dates-equal",
    description:
      "Sounds easy, but you need to know the trick. Write a function that takes two date instances as arguments. It should return true if the dates are equal. It should return false otherwise.",
    solution: [
      "function myFunction(a, b) {",
      "",
      "     return a.getTime() === b.getTime()",
      "}",
    ],
    params: "a, b",
    testCases: [
      {
        input:
          "myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))",
        output: "false",
      },
      {
        input:
          "myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))",
        output: "true",
      },
      {
        input:
          "myFunction(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))",
        output: "false",
      },
    ],
    id: "5f082fa739c6fe165eb9f5a2",
  },
  {
    title: "Return the number of days between two dates",
    series: "Javascript dates",
    difficulty: 37,
    titleUrl: "number-days-between-two-dates",
    description:
      "Write a function that takes two date instances as argument. It should return the number of days that lies between those dates.",
    solution: [
      "function myFunction(a, b) {",
      "   const dif = Math.abs(a - b);",
      "   return dif / 1000 / 60 / 60 / 24",
      "}",
    ],
    params: "a, b",
    testCases: [
      {
        input: "myFunction(new Date('2020-06-11'), new Date('2020-06-01'))",
        output: "10",
      },
      {
        input: "myFunction(new Date('2000-01-01'), new Date('2020-06-01'))",
        output: "7457",
      },
    ],
    id: "5f082fa739c6fe165eb9f5a3",
  },
  {
    title: "Check if two dates fall on the exact same day",
    series: "Javascript dates",
    difficulty: 37,
    titleUrl: "two-dates-same-day",
    description:
      "Write a function that takes two date instances as argument. It should return true if they fall on the exact same day. It should return false otherwise.",
    solution: [
      "function myFunction(a, b) {",
      "",
      "  return a.getFullYear() === b.getFullYear() &&",
      "         a.getMonth() === b.getMonth() &&",
      "         a.getDate()=== b.getDate()",
      "}",
    ],
    params: "a, b",
    testCases: [
      {
        input: "myFunction(new Date('2000/01/01'), new Date('2000/01/01'))",
        output: "true ",
      },
      {
        input: "myFunction(new Date('2000/01/01'), new Date('2000/01/02'))",
        output: "false ",
      },
      {
        input: "myFunction(new Date('2001/01/01'), new Date('2000/01/01'))",
        output: "false ",
      },
      {
        input: "myFunction(new Date('2000/11/01'), new Date('2000/01/01'))",
        output: "false ",
      },
    ],
    id: "5f082fa739c6fe165eb9f5a4",
  },
  {
    title: "Check if two dates are within 1 hour from each other",
    series: "Javascript dates",
    difficulty: 45,
    titleUrl: "two-dates-within-one-hour",
    description:
      "Write a function that takes two date instances as argument. It should return true if the difference between the dates is less than or equal to 1 hour. It should return false otherwise.",
    solution: [
      "function myFunction(a, b) {",
      "",
      "   return Math.abs(a - b) / 1000 / 60 <= 60",
      "}",
    ],
    params: "a, b",
    testCases: [
      {
        input:
          "myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))",
        output: "true ",
      },
      {
        input:
          "myFunction(new Date('2000/01/01 09:00:00'), new Date('2000/01/01 08:45:00'))",
        output: "true ",
      },
      {
        input:
          "myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:45:00'))",
        output: "false ",
      },
      {
        input:
          "myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:00:00'))",
        output: "true ",
      },
    ],
    id: "5f082fa739c6fe165eb9f5a5",
  },
  {
    title: "Check if one date is earlier than another",
    difficulty: 8,
    series: "Javascript dates",
    titleUrl: "check-if-date-is-earlier",
    description:
      "Write a function that takes two date instances (a and b) as arguments. It should return true if a is earlier than b. It should return false otherwise.",
    solution: ["function myFunction(a, b) {", "", "   return a < b", "}"],
    params: "a, b",
    testCases: [
      {
        input:
          "myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))",
        output: "true ",
      },
      {
        input:
          "myFunction(new Date('2000/01/01 08:45:00'), new Date('2000/01/01 08:00:00'))",
        output: "false ",
      },
      {
        input:
          "myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))",
        output: "false ",
      },
    ],
    id: "5f082fa739c6fe165eb9f5a6",
  },
  {
    title: "Add n days to an existing date",
    series: "Javascript dates",
    difficulty: 17,
    titleUrl: "add-days-to-date",
    description:
      "Write a function that takes as argument a date instance (a) and a number (b). It should add b days to a and return the number of milliseconds since January 1, 1970, 00:00:00 UTC.",
    solution: [
      "function myFunction(a, b) {",
      "",
      "  const currentDays = a.getDate();",
      "",
      "  return a.setDate(currentDays + b)",
      "}",
    ],
    params: "a, b",
    testCases: [
      {
        input: "myFunction(new Date(Date.UTC(2000,01,01)), 31)",
        output: "952041600000",
      },
      {
        input: "myFunction(new Date(Date.UTC(2000,01,01)), 10)",
        output: "950227200000",
      },
      {
        input: "myFunction(new Date(Date.UTC(2000,02,28,)), 2)",
        output: "954374400000",
      },
    ],
    id: "5f082fa739c6fe165eb9f5a7",
  },
  {
    title:
      "Calculate difference between two dates in hours, minutes, and seconds",
    series: "Javascript dates",
    difficulty: 77,
    titleUrl: "difference-between-dates",
    description:
      "This is a more difficult challenge. Write a function that takes two date instances as arguments. It should return an object with the properties 'hrs', 'min', and 'sec'. The corresponding values should display the absolute difference between the two dates in hours, minutes, and seconds.",
    solution: [
      "function myFunction(a, b) {",
      "",
      "  const dif = Math.abs(a - b);",
      "",
      "  const hrs = Math.floor(dif / 1000 / 60 / 60);",
      "  const min = Math.floor(dif / 1000 / 60) % (hrs * 60 || 60);",
      "  const sec = Math.floor(dif / 1000) % (min * 60 + hrs * 60 * 60 || 60);",
      "",
      "  return { hrs, min, sec }",
      "}",
    ],
    params: "a, b",
    testCases: [
      {
        input:
          "myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:10'))",
        output: "{ hrs: 0, min: 45, sec: 10 }",
      },
      {
        input:
          "myFunction(new Date('2000/01/01 09:50:23'), new Date('2000/01/01 08:00:00'))",
        output: "{ hrs: 1, min: 50, sec: 23 }",
      },
      {
        input:
          "myFunction(new Date('2000/01/01 11:04:12'), new Date('2000/01/01 08:00:00'))",
        output: "{ hrs: 3, min: 4, sec: 12 }",
      },
    ],
    id: "5f082fa739c6fe165eb9f5a8",
  },
  {
    title: "Return the next nearest quarter hour of a date",
    series: "Javascript dates",
    difficulty: 87,
    titleUrl: "javascript-nearest-quarter-hour-date",
    description:
      "Write a function that takes a Date instance as argument. It should return the next nearest quarter hour in minutes. For example, if the given date has the time 10:01 the function should return 15",
    solution: [
      "function myFunction(date) {",
      "const quarter = 15 * 60 * 1000;",
      "const closestQuarter = new Date(Math.round(date / quarter) * quarter);",
      "const nextQuarter = closestQuarter.getTime() < date.getTime() ? new Date(closestQuarter.getTime() + quarter) : closestQuarter;",
      "return nextQuarter.getMinutes();",
      "}",
    ],
    params: "date",
    testCases: [
      {
        input: "myFunction(new Date(2021, 8, 10, 15, 14, 00))",
        output: "15",
      },
      {
        input: "myFunction(new Date(2021, 8, 10, 15, 31, 00))",
        output: "45",
      },
      {
        input: "myFunction(new Date(2021, 8, 10, 15, 22, 00))",
        output: "30",
      },
    ],
    id: "613b5ed993523106762fa746",
  },
],
i = [
  {
    title: "Check if value is present in Set",
    titleUrl: "value-present-in-set",
    difficulty: 5,
    description:
      "Write a function that takes a Set and a value as arguments. Check if the value is present in the Set",
    solution: [
      "function myFunction(set, val) {",
      "  return set.has(val);",
      "}",
    ],
    series: "Javascript Sets",
    params: "set, val",
    testCases: [
      { input: "myFunction(new Set([1, 2, 3]), 2)", output: "true" },
      { input: "myFunction(new Set([123]), 2)", output: "false" },
      { input: "myFunction(new Set(['1', '2', '3']), '2')", output: "true" },
      { input: "myFunction(new Set('123'), '2')", output: "true" },
    ],
    id: "5f6224bb6f31ba2be47c0e10",
  },
  {
    title: "Convert a Set to Array",
    difficulty: 9,
    titleUrl: "convert-set-to-array",
    description:
      "Write a function that takes a Set as argument. Convert the Set to an Array. Return the Array",
    solution: ["function myFunction(set) {", "  return [...set];", "}"],
    series: "Javascript Sets",
    params: "set",
    testCases: [
      { input: "myFunction(new Set([1, 2, 3]))", output: "[1, 2, 3]" },
      { input: "myFunction(new Set([123]))", output: "[123]" },
      {
        input: "myFunction(new Set(['1', '2', '3']))",
        output: "['1', '2', '3']",
      },
      { input: "myFunction(new Set('123'))", output: "['1', '2', '3']" },
    ],
    id: "5f6224bb6f31ba2be47c0e11",
  },
  {
    title: "Get union of two sets",
    titleUrl: "union-two-sets",
    difficulty: 29,
    description:
      "Write a function that takes two Sets as arguments. Create the union of the two sets. Return the result. Tipp: try not to switch to Arrays, this would slow down your code",
    solution: [
      "function myFunction(a, b) {",
      "  const result = new Set(a);",
      "  b.forEach((el) => result.add(el));",
      "  return result;",
      "}",
    ],
    series: "Javascript Sets",
    params: "a, b",
    testCases: [
      {
        input: "myFunction(new Set('123'), new Set('234'))",
        output: "new Set('1234')",
      },
      {
        input: "myFunction(new Set([1, 2, 3]), new Set([3, 4, 5]))",
        output: "new Set([1, 2, 3, 4, 5])",
      },
      {
        input:
          "myFunction(new Set([false, false, NaN]), new Set([true, true, NaN]))",
        output: "new Set([false, NaN, true])",
      },
    ],
    id: "5f637a48ff7ec65c91f91994",
  },
  {
    title: "Creating Javascript Sets",
    difficulty: 18,
    titleUrl: "create-javascript-set",
    description:
      "Write a function that takes three elements of any type as arguments. Create a Set from those elements. Return the result",
    solution: [
      "function myFunction(a, b, c) {",
      "  const set = new Set();",
      "  set.add(a);",
      "  set.add(b);",
      "  set.add(c);",
      "  return set;",
      "}",
    ],
    series: "Javascript Sets",
    params: "a, b, c",
    testCases: [
      { input: "myFunction(1, 'b', 3)", output: "new Set([1, 'b', 3])" },
      {
        input: "myFunction(NaN, null, false)",
        output: "new Set([NaN, null, false])",
      },
      {
        input: "myFunction('a', ['b'], { c: 3 })",
        output: "new Set(['a', ['b'], { c: 3 }])",
      },
    ],
    id: "5f6481e08af2b2397fd3d8ee",
  },
  {
    title: "Delete element from Set",
    titleUrl: "delete-element-from-javascript-set",
    difficulty: 12,
    description:
      "Write a function that takes a Set and a value as argument. If existing in the Set, remove the value from the Set. Return the result",
    solution: [
      "function myFunction(set, val) {",
      "  set.delete(val);",
      "  return set;",
      "}",
    ],
    params: "set, val",
    series: "Javascript Sets",
    testCases: [
      {
        input: "myFunction(new Set([1, 2, 3]), 1)",
        output: "new Set([2, 3])",
      },
      {
        input: "myFunction(new Set('12345'), '3')",
        output: "new Set(['1', '2', '4', '5'])",
      },
      {
        input: "myFunction(new Set([1, 2, 3]), 4)",
        output: "new Set([1, 2, 3])",
      },
    ],
    id: "5f64b4cfa6c2d654821a93d9",
  },
  {
    title: "Add multiple elements to Set",
    titleUrl: "add-multiple-elements-to-javascript-set",
    difficulty: 22,
    description:
      "Write a function that takes a Set and an array as arguments. If not already existing, add each element in the array to the Set. Return the modified Set",
    solution: [
      "function myFunction(set, arr) {",
      "  arr.forEach((e) => set.add(e));",
      "  return set;",
      "}",
    ],
    series: "Javascript Sets",
    params: "set, arr",
    testCases: [
      {
        input: "myFunction(new Set([1, 2, 3]), [4, 5, 6])",
        output: "new Set([1, 2, 3, 4, 5, 6 ])",
      },
      {
        input: "myFunction(new Set('12345'), [...'6789'])",
        output: "new Set([...'123456789'])",
      },
      {
        input: "myFunction(new Set([1, 2, 3]), [2, 3])",
        output: "new Set([1, 2, 3])",
      },
    ],
    id: "5f64be2cc8150957a369a7f3",
  },
  {
    title: "Get Intersection of two Javascript Sets",
    titleUrl: "intersection-javascript-sets",
    difficulty: 58,
    description:
      "Write a function that takes two sets (a and b) as arguments. Get the intersection of the sets. In other words, return a set containing all elements that are both in a as well as b",
    solution: [
      "function myFunction(a, b) {",
      "  const int = new Set();",
      "  a.forEach(el => b.has(el) && int.add(el));",
      "  return int;",
      "}",
    ],
    series: "Javascript Sets",
    params: "a, b",
    testCases: [
      {
        input: "myFunction(new Set([1, 2, 3]), new Set([4, 5, 6]))",
        output: "new Set()",
      },
      {
        input: "myFunction(new Set('12345'), new Set([...'45678']))",
        output: "new Set('45')",
      },
      {
        input: "myFunction(new Set([1, 2, 3]), new Set([2, 3, 4]))",
        output: "new Set([2, 3])",
      },
    ],
    id: "5f688eac95ee25a74d50da96",
  },
];
export { e as a, t as b, n as d, a as o, i as s };
var t = [
  {
    title: "Sum two numbers",
    series: "Javascript basics",
    difficulty: 1,
    titleUrl: "sum-two-numbers-javascript",
    description:
      "Write a function that takes two numbers (a and b) as argument. Sum a and b. Return the result",
    solution: ["function myFunction(a, b) {", "   return a + b;", "}"],
    params: "a, b",
    testCases: [
      { input: "myFunction(1,2)", output: "3" },
      { input: "myFunction(1,10)", output: "11" },
      { input: "myFunction(99,1)", output: "100" },
    ],
    id: "28576752417e53720e2e9746",
  },
  {
    title: "Comparison operators, strict equality",
    series: "Javascript basics",
    difficulty: 1,
    hint: "<div class='mt-4'> You have to differentiate between basic <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality' target='_blank' rel='noopener noreferrer' class='text-blue-400 hover:underline'>equality</a > (<code class='bg-blueGray-600 text-base py-1 px-1'>==</code>) and <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality' target='_blank' rel='noopener noreferrer' class='text-blue-400 hover:underline'>strict equality</a > (<code class='bg-blueGray-600 text-base py-1 px-1'>===</code>). Both operators check whether two values are equal. However, strict equality requires both values to have the same type. For example, the string <code class='bg-blueGray-600 text-base py-1 px-1'>'1'</code> and the number <code class='bg-blueGray-600 text-base py-1 px-1'>1</code> are equal, but not strictly equal. <div class='mt-4'>Equality:</div> <code class='bg-blueGray-600 text-base py-1 px-1 flex' >console.log('a' == 'b') <br /> // output: false<br /> console.log('a' == 'a')<br /> // output: true<br /> console.log('1' == 1)<br /> // output: true </code> <div class='mt-4'>Strict Equality:</div> <code class='bg-blueGray-600 text-base py-1 px-1 flex'> console.log('a' === 'b')<br /> // output: false<br /> console.log('a' === 'a')<br /> // output: true<br /> console.log('1' === 1)<br /> // output: false</code > </div>",
    titleUrl: "comparison-strict-equality",
    description:
      "Write a function that takes two values, say a and b, as arguments. Return true if the two values are equal and of the same type",
    solution: ["function myFunction(a, b) {", "  return a === b;", "}"],
    params: "a, b",
    testCases: [
      { input: "myFunction(2, 3)", output: "false " },
      { input: "myFunction(3, 3)", output: "true " },
      { input: "myFunction(1, '1')", output: "false " },
      { input: "myFunction('10', '10')", output: "true " },
    ],
    id: "5f5a4f600a27e25dcd4216a6",
  },
  {
    title: "Get type of value",
    series: "Javascript basics",
    difficulty: 1,
    hint: "<div class='mt-4'> To get the type of a value you can use the <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof' target='_blank' rel='noopener noreferrer' class='text-blue-400 hover:underline'>typeof</a > operator. <code class='bg-blueGray-600 text-base py-1 px-1 flex mt-4' >console.log(typeof 'a') <br /> // output: 'string'<br /> console.log(typeof false)<br /> // output: 'boolean'<br /> console.log(typeof 1)<br /> // output: number </code> </div>",
    titleUrl: "type-value-javascript",
    description:
      "Write a function that takes a value as argument. Return the type of the value.",
    solution: ["function myFunction(a) {", "   return typeof a;", "}"],
    params: "a",
    testCases: [
      { input: "myFunction(1)", output: "'number'" },
      { input: "myFunction(false)", output: "'boolean'" },
      { input: "myFunction({})", output: "'object'" },
      { input: "myFunction(null)", output: "'object'" },
      { input: "myFunction('string')", output: "'string'" },
      { input: "myFunction(['array'])", output: "'object'" },
    ],
    id: "bf71aec80d018fd31f9f263c",
  },
  {
    title: "Get nth character of string",
    series: "Javascript basics",
    difficulty: 1,
    hint: "<div class='mt-2'> In order to get the nth character of a given string, you have to know its index. An index describes the position of a character in a given string. Javascript strings are <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf#description' target='_blank' rel='noopener noreferrer' class='text-blue-400 hover:underline'>zero-indexed</a >. This means that the first character of a string has index <i>0</i>. The second character has index <i>1</i> and so on. </div> <div class='mt-2 flex flex-col'> <code class='bg-blueGray-600 text-base px-1 pt-1'>const string = 'abcdefg';</code> <code class='bg-blueGray-600 text-base px-1'>// get first character</code> <code class='bg-blueGray-600 text-base px-1'>console.log(string[0])</code> <code class='bg-blueGray-600 text-base px-1'>// output: 'a'</code> <code class='bg-blueGray-600 text-base px-1'>// get third character</code> <code class='bg-blueGray-600 text-base px-1'>console.log(string[2])</code> <code class='bg-blueGray-600 text-base px-1 pb-1'>// output: 'c'</code> </div>",
    titleUrl: "get-nth-character-string-javascript",
    description:
      "Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.",
    params: "a, n",
    solution: ["function myFunction(a, n) {", "   return a[n - 1];", "}"],
    testCases: [
      { input: "myFunction('abcd',1)", output: "'a'" },
      { input: "myFunction('zyxbwpl',5)", output: "'w'" },
      { input: "myFunction('gfedcba',3)", output: "'e'" },
    ],
    id: "d2fcd730c12b9be642b391c4",
  },
  {
    title: "Remove first n characters of string",
    series: "Javascript basics",
    difficulty: 3,
    hint: "<div class='mt-4'> There are two equally suitable and almost identical methods to remove characters from a string: <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring' target='_blank' rel='noopener noreferrer' class='text-blue-400 hover:underline'>substring</a > and <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice' target='_blank' rel='noopener noreferrer' class='text-blue-400 hover:underline'>slice</a >. My personal favorite is the <code class='bg-blueGray-600 text-base py-1 px-1'>slice()</code> method because you can use the same method when you want to remove elements from an array. That way, you only have to remember one. Also, I easily confuse the <code class='bg-blueGray-600 text-base py-1 px-1'>substring()</code> and the <code class='bg-blueGray-600 text-base py-1 px-1'>substr()</code> method. </div> <div class='mt-6'> Approach 1: <code class='bg-blueGray-600 text-base py-1 px-1'>slice()</code> </div> <div class='mt-2'> <code class='bg-blueGray-600 text-base py-1 px-1'>slice</code> extracts a part of a string and returns it without modifying the original string. To define the part that you want to extract, you can call it with two parameters. The first parameter defines the index of the first character in the string that you want to extract. The second parameter defines the index of the first character that you do <strong>not</strong> want to extract. </div> <code class='bg-blueGray-600 text-base py-1 px-1 flex mt-4' >console.log('abcd'.slice(1,3)) <br /> // output: 'bc' </code> <div class='mt-2'> The second parameter is optional. If not defined, <code class='bg-blueGray-600 text-base py-1 px-1'>slice</code > will simply return all characters starting from the start-index that you defined. </div> <code class='bg-blueGray-600 text-base py-1 px-1 flex mt-4' >console.log('abcd'.slice(1)) <br /> // output: 'bcd' </code> <div class='mt-2'>This way, you can easily remove the first n characters of a string.</div> <div class='mt-6'> Approach 2: <code class='bg-blueGray-600 text-base py-1 px-1'>substring()</code> </div> <div class='mt-2'> As I said above, <code class='bg-blueGray-600 text-base py-1 px-1'>substring</code> is almost identical to <code class='bg-blueGray-600 text-base py-1 px-1'>slice</code>. There are only very subtle differences in some edge cases, but they were never relevant for me. </div> <code class='bg-blueGray-600 text-base py-1 px-1 flex mt-4' >console.log('abcd'.substring(1,3)) <br /> // output: 'bc' <br />console.log('abcd'.substring(1)) <br /> // output: 'bcd' </code>",
    titleUrl: "remove-first-characters-string-javascript",
    description:
      "Write a function that takes a string (a) as argument. Remove the first 3 characters of a. Return the result",
    solution: ["function myFunction(a) {", "   return a.slice(3);", "}"],
    params: "a",
    testCases: [
      { input: "myFunction('abcdefg')", output: "'defg'" },
      { input: "myFunction('1234')", output: "'4'" },
      { input: "myFunction('fgedcba')", output: "'dcba'" },
    ],
    id: "fd7bc8070ee640a89657f16a",
  },
  {
    title: "Get last n characters of string",
    series: "Javascript basics",
    difficulty: 1,
    hint: "<div class='mt-4'> For this task, I recommend using again the <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice' target='_blank' rel='noopener noreferrer' class='text-blue-400 hover:underline'>slice</a > method. </div> <div class='mt-4'> With the <code class='bg-blueGray-600 text-base py-1 px-1'>slice</code> method, you can extract a part of a string without modifying the original string. You call it with two parameters (<i>startIndex</i> and <i>endIndex</i>). <i>startIndex</i> defines the index of the first character in the string that you want to extract. <i>endIndex</i> defines the first character that you do <strong>not</strong> want to extract. </div> <code class='bg-blueGray-600 text-base py-1 px-1 flex mt-4' >console.log('wxyz'.slice(1,3)); <br /> // output: 'xy' </code> <div class='mt-4'> You can omit the <i>endIndex</i> parameter. Then, <code class='bg-blueGray-600 text-base py-1 px-1'>slice</code> will simply return all characters beginning at <i>startIndex</i>. </div> <code class='bg-blueGray-600 text-base py-1 px-1 flex mt-4' >console.log('wxyz'.slice(1)); <br /> // output: 'xyz' </code> <div class='mt-4'> It is important to know, that you can call <code class='bg-blueGray-600 text-base py-1 px-1'>slice</code > with a <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice#using_slice_with_negative_indexes' target='_blank' rel='noopener noreferrer' class='text-blue-400 hover:underline'>negative <i>startIndex</i></a >. In this case, <i>startIndex</i> is not an index but identifies the starting position by counting backwards from the end of the string. </div> <code class='bg-blueGray-600 text-base py-1 px-1 flex mt-4'> // get last two characters of string: <br /> console.log('wxyz'.slice(-2); <br /> // output: 'xy' </code> <div class='mt-4'>This is all you need to solve this task.</div>",
    titleUrl: "get-last-characters-string-javascript",
    description:
      "Write a function that takes a string as argument. Extract the last 3 characters from the string. Return the result",
    solution: ["function myFunction(str) {", "   return str.slice(-3);", "}"],
    params: "str",
    testCases: [
      { input: "myFunction('abcdefg')", output: "'efg'" },
      { input: "myFunction('1234')", output: "'234'" },
      { input: "myFunction('fgedcba')", output: "'cba'" },
    ],
    id: "969172093455d39c4be7299f",
  },
  {
    title: "Get first n characters of string",
    series: "Javascript basics",
    difficulty: 2,
    titleUrl: "get-first-characters-string-javascript",
    description:
      "Write a function that takes a string (a) as argument. Get the first 3 characters of a. Return the result",
    solution: ["function myFunction(a) {", "   return a.slice(0, 3);", "}"],
    params: "a",
    testCases: [
      { input: "myFunction('abcdefg')", output: "'abc'" },
      { input: "myFunction('1234')", output: "'123'" },
      { input: "myFunction('fgedcba')", output: "'fge'" },
    ],
    id: "75e711d26d3e40627ae3e4f9",
  },
  {
    title: "Extract first half of string",
    series: "Javascript basics",
    difficulty: 2,
    titleUrl: "extract-first-half-string-javascript",
    description:
      "Write a function that takes a string (a) as argument. Extract the first half a. Return the result",
    solution: [
      "function myFunction(a) {",
      "   return a.slice(0, a.length / 2);",
      "}",
    ],
    params: "a",
    testCases: [
      { input: "myFunction('abcdefgh')", output: "'abcd'" },
      { input: "myFunction('1234')", output: "'12'" },
      { input: "myFunction('gedcba')", output: "'ged'" },
    ],
    id: "69d07c67bc9917df5206aa3d",
  },
  {
    title: "Remove last n characters of string",
    series: "Javascript basics",
    difficulty: 3,
    titleUrl: "remove-last-characters-string-javascript",
    description:
      "Write a function that takes a string (a) as argument. Remove the last 3 characters of a. Return the result",
    solution: ["function myFunction(a) {", "   return a.slice(0, -3);", "}"],
    params: "a",
    testCases: [
      { input: "myFunction('abcdefg')", output: "'abcd'" },
      { input: "myFunction('1234')", output: "'1'" },
      { input: "myFunction('fgedcba')", output: "'fged'" },
    ],
    id: "9854655dab8e34a320a60cea",
  },
  {
    title: "Return the percentage of a number",
    series: "Javascript basics",
    difficulty: 7,
    titleUrl: "return-percentage-of-number",
    description:
      "Write a function that takes two numbers (a and b) as argument. Return b percent of a",
    solution: [
      "function myFunction(a, b) {",
      "",
      "  return b / 100 * a",
      "}",
    ],
    params: "a, b",
    testCases: [
      { input: "myFunction(100,50)", output: "50" },
      { input: "myFunction(10,1)", output: "0.1" },
      { input: "myFunction(500,25)", output: "125" },
    ],
    id: "5f082fa739c6fe165eb9f593",
  },
  {
    title: "Basic JavaScript math operators",
    series: "Javascript basics",
    difficulty: 10,
    hint: "<div class='mt-4'> The operators you need are: <div class='mt-2'> Addition: <code class='bg-blueGray-600 text-base py-1 px-1'>1 + 2 === 3</code> </div> <div class='mt-2'> Subtraction: <code class='bg-blueGray-600 text-base py-1 px-1'>3 - 2 === 1</code> </div> <div class='mt-2'> Multiplication: <code class='bg-blueGray-600 text-base py-1 px-1'>3 * 2 === 6</code> </div> <div class='mt-2'> Division: <code class='bg-blueGray-600 text-base py-1 px-1'>9 / 3 === 3</code> </div> <div class='mt-2'> Exponent: <code class='bg-blueGray-600 text-base py-1 px-1'>3 ** 3 === 27</code> </div> <div class='mt-2'> Also, pay attention to the order of operations. You might have to include some parentheses. </div> </div>",
    titleUrl: "basic-math-operators-javascript",
    description:
      "Write a function that takes 6 values (a,b,c,d,e,f) as arguments. Sum a and b. Then substract by c. Then multiply by d and divide by e. Finally raise to the power of f and return the result. Tipp: mind the order.",
    solution: [
      "function myFunction(a, b, c, d, e, f) {",
      "   return (((a + b - c) * d) / e) ** f;",
      "}",
    ],
    params: "a, b, c, d, e, f",
    testCases: [
      { input: "myFunction(6,5,4,3,2,1)", output: "10.5" },
      { input: "myFunction(6,2,1,4,2,3)", output: "2744" },
      { input: "myFunction(2,3,6,4,2,3)", output: "-8" },
    ],
    id: "73ebc905fc3159a4bbc797e3",
  },
  {
    title: "Check if a number is even",
    series: "Javascript basics",
    difficulty: 15,
    titleUrl: "check-if-number-is-even",
    description:
      "Write a function that takes a number as argument. If the number is even, return true. Otherwise, return false",
    solution: ["function myFunction(a) {", "", "  return a % 2 === 0", "}"],
    params: "a",
    testCases: [
      { input: "myFunction(10)", output: "true" },
      { input: "myFunction(-4)", output: "true" },
      { input: "myFunction(5)", output: "false" },
      { input: "myFunction(-111)", output: "false" },
    ],
    hint: "<div class='mt-4'> The most common solution for this Javascript problem is to use the <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder' target='_blank' rel='noopener noreferrer' class='text-blue-400 hover:underline'>Remainder</a> operator <code class='bg-blueGray-600 text-base py-1 px-1'>%</code> (sometimes also referred to as <i>Modulo</i> operator). </div> <div class='mt-2'> The <i>Remainder</i> operator returns the remainder of an Integer division. For example:&nbsp;<code class='bg-blueGray-600 text-base py-1 px-1'>10 % 3</code > returns <i>1</i> because the number <i>3</i> fits no more than <i>3</i> times in <i>10</i>. <i>3x3</i> is <i>9</i>. Thus, the <i>Remainder</i> of <code class='bg-blueGray-600 text-base py-1 px-1'>10 % 3</code> is <i>10-9=1</i>. </div> <div class='mt-2'> Now, how do we make use of the <i>Remainder/Modulo</i> operator to find out if a number is even oder odd? Well, we have to account for the fact that every even number is divisible by <i>2</i> while every odd number is not. So, <code class='bg-blueGray-600 text-base py-1 px-1'>evenNumber % 2</code> will always return zero. <code class='bg-blueGray-600 text-base py-1 px-1'>oddNumber % 2</code> will always return a number different from zero. </div>",
    id: "5f082fa739c6fe165eb9f594",
  },
  {
    title: "How many times does a character occur?",
    series: "Javascript basics",
    difficulty: 21,
    titleUrl: "times-character-occurs-string",
    description:
      "Write a function that takes two strings (a and b) as arguments. Return the number of times a occurs in b.",
    solution: [
      "function myFunction(a, b) {",
      "",
      "  return b.split(a).length - 1",
      "}",
    ],
    params: "a, b",
    testCases: [
      {
        input:
          "myFunction('m', 'how many times does the character occur in this sentence?')",
        output: "2",
      },
      {
        input:
          "myFunction('h', 'how many times does the character occur in this sentence?')",
        output: "4",
      },
      {
        input:
          "myFunction('?', 'how many times does the character occur in this sentence?')",
        output: "1",
      },
      {
        input:
          "myFunction('z', 'how many times does the character occur in this sentence?')",
        output: "0",
      },
    ],
    id: "5f082fa739c6fe165eb9f595",
  },
  {
    title: "Check if a number is a whole number",
    series: "Javascript basics",
    difficulty: 20,
    titleUrl: "check-if-number-is-whole",
    description:
      "Write a function that takes a number (a) as argument. If a is a whole number (has no decimal place), return true. Otherwise, return false.",
    solution: [
      "function myFunction(a) {",
      "",
      "  return a - Math.floor(a) === 0",
      "}",
    ],
    params: "a",
    testCases: [
      { input: "myFunction(4)", output: "true " },
      { input: "myFunction(1.123)", output: "false " },
      { input: "myFunction(1048)", output: "true " },
      { input: "myFunction(10.48)", output: "false " },
    ],
    id: "5f082fa739c6fe165eb9f596",
  },
  {
    title: "Multiplication, division, and comparison operators",
    series: "Javascript basics",
    difficulty: 5,
    titleUrl: "multiplication-division-comparison-operators",
    description:
      "Write a function that takes two numbers (a and b) as arguments. If a is smaller than b, divide a by b. Otherwise, multiply both numbers. Return the resulting value",
    solution: [
      "function myFunction(a, b) {",
      "",
      "  return a < b ? a / b : a * b",
      "}",
    ],
    params: "a, b",
    testCases: [
      { input: "myFunction(10, 100)", output: "0.1" },
      { input: "myFunction(90, 45)", output: "4050" },
      { input: "myFunction(8, 20)", output: "0.4" },
      { input: "myFunction(2, 0.5)", output: "1" },
    ],
    id: "5f082fa739c6fe165eb9f597",
  },
  {
    title: "Check whether a string contains another string and concatenate",
    series: "Javascript basics",
    difficulty: 10,
    titleUrl: "check-if-string-contains-string",
    description:
      "Write a function that takes two strings (a and b) as arguments. If a contains b, append b to the beginning of a. If not, append it to the end. Return the concatenation",
    solution: [
      "function myFunction(a, b) {",
      "",
      "  return a.indexOf(b) === -1 ? a + b : b + a",
      "}",
    ],
    params: "a, b",
    testCases: [
      { input: "myFunction('cheese', 'cake')", output: "'cheesecake'" },
      { input: "myFunction('lips', 's')", output: "'slips'" },
      { input: "myFunction('Java', 'script')", output: "'Javascript'" },
      {
        input: "myFunction(' think, therefore I am', 'I')",
        output: "'I think, therefore I am'",
      },
    ],
    id: "5f0a061aa4b9e9786f669e62",
  },
  {
    title: "Round a number to 2 decimal places",
    series: "Javascript basics",
    difficulty: 25,
    titleUrl: "round-2-decimal-digits",
    description:
      "Write a function that takes a number (a) as argument. Round a to the 2nd digit after the comma. Return the rounded number",
    solution: [
      "function myFunction(a) {",
      "  return Number(a.toFixed(2));",
      "}",
    ],
    params: "a",
    testCases: [
      { input: "myFunction(2.12397)", output: "2.12" },
      { input: "myFunction(3.136)", output: "3.14" },
      { input: "myFunction(1.12397)", output: "1.12" },
      { input: "myFunction(26.1379)", output: "26.14" },
    ],
    id: "5f55c2f61b0005cc692b7b82",
  },
  {
    title: "Split a number into its digits",
    series: "Javascript basics",
    difficulty: 30,
    titleUrl: "split-number-into-digits",
    description:
      "Write a function that takes a number (a) as argument. Split a into its individual digits and return them in an array. Tipp: you might want to change the type of the number for the splitting",
    solution: [
      "function myFunction( a ) {",
      "  const string = a + '';",
      "  const strings = string.split('');",
      "  return strings.map(digit => Number(digit))",
      "}",
    ],
    params: "a",
    testCases: [
      { input: "myFunction(10)", output: "[1,0]" },
      { input: "myFunction(931)", output: "[9,3,1]" },
      { input: "myFunction(193278)", output: "[1,9,3,2,7,8]" },
    ],
    id: "5f09f9f963ad1074c98a7665",
  },
  {
    title: "Clear up the chaos behind these strings",
    series: "Javascript basics",
    difficulty: 70,
    titleUrl: "clean-sort-join-strings",
    description:
      "It seems like something happened to these strings. Can you figure out how to clear up the chaos? Write a function that joins these strings together such that they form the following words:. 'Javascript', 'Countryside', and 'Downtown'. You might want to apply basic JS string methods such as replace(), split(), slice() etc.",
    solution: [
      "function myFunction(a, b) {",
      "",
      "  const func = x => x.replace('%','');",
      "  const first = func(a);",
      "  const second = func(b).split('').reverse().join('');",
      "  return first.charAt(0).toUpperCase() + first.slice(1) + second;",
      "",
      "}",
    ],
    params: "a, b",
    testCases: [
      { input: "myFunction('java', 'tpi%rcs')", output: "'Javascript'" },
      { input: "myFunction('c%ountry', 'edis')", output: "'Countryside'" },
      { input: "myFunction('down', 'nw%ot')", output: "'Downtown'" },
    ],
    id: "5f082fa739c6fe165eb9f598",
  },
  {
    title: "Return the next higher prime number",
    series: "Javascript basics",
    difficulty: 90,
    titleUrl: "return-prime-number",
    description:
      "This challenge is a little bit more complex. Write a function that takes a number (a) as argument. If a is prime, return a. If not, return the next higher prime number.",
    solution: [
      "function myFunction( a ) {",
      "",
      "  function isPrime(num) {",
      "    for (let i = 2; i <= Math.sqrt(num); i++) {",
      "      if (num % i === 0) return false;",
      "    }",
      "    return num > 1;",
      "  }",
      "",
      " let n = a;",
      " while (!isPrime(n)) n++;",
      "",
      "return n",
      "}",
    ],
    params: "a",
    testCases: [
      { input: "myFunction(38)", output: "41" },
      { input: "myFunction(7)", output: "7" },
      { input: "myFunction(115)", output: "127" },
      { input: "myFunction(2000)", output: "2003" },
    ],
    id: "5f082fa739c6fe165eb9f599",
  },
  {
    title: "Find next higher natural number that is divisble by y",
    series: "Javascript basics",
    difficulty: 60,
    titleUrl: "find-next-higher-number",
    description:
      "Write a function that takes two numbers, say x and y, as arguments. Check if x is divisible by y. If yes, return x. If not, return the next higher natural number that is divisible by y",
    solution: [
      "function myFunction(x, y) {",
      "  while (x % y !== 0) x++;",
      "  return x;",
      "}",
    ],
    params: "x, y",
    testCases: [
      { input: "myFunction(1, 23)", output: "23" },
      { input: "myFunction(23, 23)", output: "23" },
      { input: "myFunction(7, 3)", output: "9" },
      { input: "myFunction(-5, 7)", output: "0" },
    ],
    id: "5f51ce458f4a8a78a2f9e238",
  },
  {
    title: "Insert character after every n characters (backwards)",
    series: "Javascript basics",
    difficulty: 65,
    titleUrl: "insert-character-after-every-characters-backwards-javascript",
    description:
      "Write a function that takes two strings (a and b) as arguments. Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'. Return the resulting string.",
    params: "a, b",
    solution: [
      "function myFunction(a, b) {",
      "   let result = [];",
      "   let rest = a;",
      "   while (rest.length) {",
      "   \tresult.push(rest.slice(-3));",
      "   \trest = rest.slice(0, -3);",
      "   }",
      "   return result.reverse().join(b);",
      "}",
    ],
    testCases: [
      { input: "myFunction('1234567','.')", output: "'1.234.567'" },
      { input: "myFunction('abcde','$')", output: "'ab$cde'" },
      {
        input: "myFunction('zxyzxyzxyzxyzxyz','w')",
        output: "'zwxyzwxyzwxyzwxyzwxyz'",
      },
    ],
    id: "791bda03c3d37812e69b168a",
  },
  {
    title: "Find the correct word by incrementing letters in alphabet",
    series: "Javascript basics",
    difficulty: 70,
    titleUrl: "incrementing-javascript-letters-alphabet",
    description:
      "Write a function that takes a string as argument. As it is, the string has no meaning. Increment each letter to the next letter in the alphabet. Return the correct word",
    solution: [
      "function myFunction(str) {",
      "  const arr = [...str];",
      "  const correctedArray = arr.map(e => String.fromCharCode(e.charCodeAt()+1));",
      "  return correctedArray.join('');",
      "}",
    ],
    params: "str",
    testCases: [
      { input: "myFunction('bnchmf')", output: "'coding'" },
      { input: "myFunction('bgddrd')", output: "'cheese'" },
      { input: "myFunction('sdrshmf')", output: "'testing'" },
    ],
    id: "5f6ca62dc850c82949f61ce0",
  },
],
e = [
  {
    title: "Get nth element of array",
    series: "Javascript arrays",
    difficulty: 2,
    hint: "<div class='mt-2'> In order to get the nth element of a given array, you have to know its index. An index describes the position of an element in a given array. Javascript arrays are <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#accessing_array_elements' target='_blank' rel='noopener noreferrer' class='text-blue-400 hover:underline'>zero-indexed</a >. This means that the first element of an array has index <i>0</i>. The second element has index <i>1</i> and so on. </div> <div class='mt-2 flex flex-col'> <code class='bg-blueGray-600 text-base px-1 pt-1'>const arr = [1,2,3,4,5];</code> <code class='bg-blueGray-600 text-base px-1'>// get first element</code> <code class='bg-blueGray-600 text-base px-1'>console.log(arr[0])</code> <code class='bg-blueGray-600 text-base px-1'>// output: 1</code> <code class='bg-blueGray-600 text-base px-1'>// get last element</code> <code class='bg-blueGray-600 text-base px-1'>console.log(arr[4])</code> <code class='bg-blueGray-600 text-base px-1 pb-1'>// output: 5</code> </div>",
    titleUrl: "get-nth-element-array-javascript",
    description:
      "Write a function that takes an array (a) and a value (n) as argument. Return the nth element of 'a'",
    solution: ["function myFunction(a, n) {", "   return a[n - 1];", "}"],
    params: "a, n",
    testCases: [
      { input: "myFunction([1,2,3,4,5],3)", output: "3" },
      { input: "myFunction([10,9,8,7,6],5)", output: "6" },
      { input: "myFunction([7,2,1,6,3],1)", output: "7" },
    ],
    id: "c8e4c12d8911bc6cf2039922",
  },
  {
    title: "Remove first n elements of an array",
    series: "Javascript arrays",
    difficulty: 3,
    hint: "<h3 class='mt-4 font-semibold'>Approach 1</h3> <div class='mt-2'> The most recommended and easy way to remove certain elements from an array is to use the <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice' target='_blank' rel='noopener noreferrer' class='text-blue-400 hover:underline' >slice</a > method. </div> <div class='mt-2'> The <i>slice</i> operator takes two optional parameters (start, end). You can use these parameters to define a range of elements that you want to keep from the original array. Consider the following array: <div class='mt-2'> <code class='bg-blueGray-600 text-base py-1 px-1'>const arr = [0,1,2,3,4];</code> </div> <div class='mt-2'> If we would want to have a new array that only has the third and the fourth element of <i>arr</i>, we would call: </div> <div class='mt-2'> <code class='bg-blueGray-600 text-base py-1 px-1'>arr.slice(2,4); <br />// output: [2,3]</code> </div> <div class='mt-2'> Our start parameter is <i>2</i> because this is the index of the third element - the first element that we want to include in the output. The end parameter is <i>4</i> because this is the index of the fifth element - the first element that we do <strong>not</strong> wish to be included in the outcome. </div> <div class='mt-2'> This method can be applied to our problem. If we want to remove some elements from the beginning of an array, then we only have to define the <i>start</i> parameter. </div> <div class='mt-2'> <code class='bg-blueGray-600 text-base py-1 px-1'>arr.slice(2); <br />// output: [2,3,4]</code> </div> <div class='mt-2'> I recommend this approach because it leaves the original array untouched and creates a new one instead. This is a good way to avoid bugs in your code. </div> <div class='mt-2 flex flex-col'> <code class='bg-blueGray-600 text-base py-1 px-1'> <div>const arr = [0,1,2,3,4];</div> <div>console.log(arr.slice(0,2));</div> <div>// output: [2,3,4]</div> <div>// the original array did not change:</div> <div>console.log(arr);</div> <div>// output: [0,1,2,3,4]</div> </code> </div> <h3 class='mt-4 font-semibold'>Approach 2</h3> <div class='mt-2'> Another way to remove the first n elements from an array is to use the <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice' target='_blank' rel='noopener noreferrer' class='text-blue-400 hover:underline' >splice</a > method. </div> <div class='mt-2'> It is used to remove or replace elements of an array (or even add new elements). It takes as first parameter the start index for your operation. The second (optional) parameter defines how many items you want to delete. Further (optional) parameters define the items you want to add to the array. </div> <div class='mt-2'>Consider the following array:</div> <div class='mt-2'> <code class='bg-blueGray-600 text-base py-1 px-1'>const arr = [0,1,2,3,4];</code> </div> <div class='mt-2'>To remove the first 2 elements from the array, we call:</div> <div class='mt-2'><code class='bg-blueGray-600 text-base py-1 px-1'>arr.splice(0,2);</code></div> <div class='mt-2'> The start parameter is <i>0</i> because we want to remove elements from the beginning of the array. The second parameter is <i>2</i> because we want to delete 2 elements. </div> <div class='mt-2'> It is important to consider that this method mutates the original array. </div> <div class='mt-2 flex flex-col'> <code class='bg-blueGray-600 text-base py-1 px-1'> <div>const arr = [0,1,2,3,4];</div> <div>console.log(arr.splice(0,2));</div> <div>// output: [0,1]</div> <div>// the original array changed:</div> <div>console.log(arr);</div> <div>// output: [2,3,4]</div> </code> </div> </div>",
    titleUrl: "remove-first-elements-array-javascript",
    description:
      "Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'. Return the result",
    solution: ["function myFunction(a) {", "   return a.slice(3);", "}"],
    params: "a",
    testCases: [
      { input: "myFunction([1,2,3,4])", output: "[4]" },
      { input: "myFunction([5,4,3,2,1,0])", output: "[2,1,0]" },
      { input: "myFunction([99,1,1])", output: "[]" },
    ],
    id: "62cd6d6ffee4c0cd71c1dfab",
  },
  {
    title: "Get last n elements of an array",
    series: "Javascript arrays",
    difficulty: 3,
    titleUrl: "get-last-elements-array-javascript",
    description:
      "Write a function that takes an array (a) as argument. Extract the last 3 elements of a. Return the resulting array",
    solution: ["function myFunction(a) {", "   return a.slice(-3);", "}"],
    params: "a",
    testCases: [
      { input: "myFunction([1,2,3,4])", output: "[2,3,4]" },
      { input: "myFunction([5,4,3,2,1,0])", output: "[2,1,0]" },
      { input: "myFunction([99,1,1])", output: "[99,1,1]" },
    ],
    id: "7a4d6b5330c1d81ad4cb6dc1",
  },
  {
    title: "Get first n elements of an array",
    series: "Javascript arrays",
    difficulty: 2,
    titleUrl: "get-first-elements-array-javascript",
    description:
      "Write a function that takes an array (a) as argument. Extract the first 3 elements of a. Return the resulting array",
    solution: ["function myFunction(a) {", "   return a.slice(0, 3);", "}"],
    params: "a",
    testCases: [
      { input: "myFunction([1,2,3,4])", output: "[1,2,3]" },
      { input: "myFunction([5,4,3,2,1,0])", output: "[5,4,3]" },
      { input: "myFunction([99,1,1])", output: "[99,1,1]" },
    ],
    id: "c68ccc6d4d973b70a6237ee7",
  },
  {
    title: "Return last n array elements",
    series: "Javascript arrays",
    difficulty: 10,
    titleUrl: "get-last-array-elements",
    description:
      "Write a function that takes an array (a) and a number (n) as arguments. It should return the last n elements of a.",
    solution: ["function myFunction(a, n) {", "  return a.slice(-n);", "}"],
    params: "a, n",
    testCases: [
      { input: "myFunction([1, 2, 3, 4, 5], 2)", output: "[ 4, 5 ]" },
      { input: "myFunction([1, 2, 3], 6)", output: "[ 1, 2, 3 ]" },
      {
        input: "myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3)",
        output: "[ 6, 7, 8 ]",
      },
    ],
    id: "5f5717679bc7de0d1528055d",
  },
  {
    title: "Remove a specific array element",
    series: "Javascript arrays",
    difficulty: 10,
    titleUrl: "remove-specific-array-element",
    description:
      "Write a function that takes an array (a) and a value (b) as argument. The function should clean a from all occurrences of b. Return the filtered array",
    solution: [
      "function myFunction( a, b ) {",
      "",
      "  return a.filter(cur => cur !== b)",
      "}",
    ],
    params: "a, b",
    testCases: [
      { input: "myFunction([1,2,3], 2)", output: "[1, 3]" },
      { input: "myFunction([1,2,'2'], '2')", output: "[1, 2]" },
      { input: "myFunction([false,'2',1], false)", output: "['2', 1]" },
      { input: "myFunction([1,2,'2',1], 1)", output: "[2, '2']" },
    ],
    id: "5f09fe992d9f417607423347",
  },
  {
    title: "Count number of elements in JavaScript array",
    series: "Javascript arrays",
    difficulty: 1,
    titleUrl: "count-number-elements-javascript-array",
    description:
      "Write a function that takes an array (a) as argument. Return the number of elements in a.",
    solution: ["function myFunction(a) {", "   return a.length;", "}"],
    params: "a",
    testCases: [
      { input: "myFunction([1,2,2,4])", output: "4" },
      { input: "myFunction([9,9,9])", output: "3" },
      { input: "myFunction([4,3,2,1,0])", output: "5" },
    ],
    id: "9bafbab4e736b80fef384d87",
  },
  {
    title: "Count number of negative values in array",
    series: "Javascript arrays",
    difficulty: 3,
    titleUrl: "count-number-negative-values-array",
    description:
      "Write a function that takes an array of numbers as argument. Return the number of negative values in the array.",
    solution: [
      "function myFunction(a) {",
      "   return a.filter((el) => el < 0).length;",
      "}",
    ],
    params: "a",
    testCases: [
      { input: "myFunction([1,-2,2,-4])", output: "2" },
      { input: "myFunction([0,9,1])", output: "0" },
      { input: "myFunction([4,-3,2,1,0])", output: "1" },
    ],
    id: "d5a5d83e9bbee20201e89f16",
  },
  {
    title: "Sort an array of numbers in descending order",
    series: "Javascript arrays",
    difficulty: 15,
    titleUrl: "sort-array-of-numbers",
    description:
      "Write a function that takes an array of numbers as argument. It should return an array with the numbers sorted in descending order.",
    solution: [
      "function myFunction( arr ) {",
      "",
      "  return arr.sort((a, b) => b - a)",
      "}",
    ],
    params: "arr",
    testCases: [
      { input: "myFunction([1,3,2])", output: "[3,2,1]" },
      { input: "myFunction([4,2,3,1])", output: "[4,3,2,1]" },
    ],
    id: "5f082fa739c6fe165eb9f59c",
  },
  {
    title: "Sort an array of strings alphabetically",
    series: "Javascript arrays",
    difficulty: 3,
    titleUrl: "sort-array-of-strings",
    description:
      "Write a function that takes an array of strings as argument. Sort the array elements alphabetically. Return the result.",
    solution: ["function myFunction( arr ) {", "", "return arr.sort()", "}"],
    params: "arr",
    testCases: [
      {
        input: "myFunction(['b', 'c', 'd', 'a'])",
        output: "['a', 'b', 'c', 'd']",
      },
      {
        input: "myFunction(['z', 'c', 'd', 'a', 'y', 'a', 'w'])",
        output: "['a', 'a', 'c', 'd', 'w', 'y', 'z']",
      },
    ],
    id: "5f082fa739c6fe165eb9f59d",
  },
  {
    title: "Return the average of an array of numbers",
    series: "Javascript arrays",
    titleUrl: "return-average-of-array",
    difficulty: 20,
    description:
      "Write a function that takes an array of numbers as argument. It should return the average of the numbers.",
    solution: [
      "function myFunction( arr ) {",
      "",
      "return arr.reduce((acc, cur) => acc + cur, 0) / arr.length",
      "}",
    ],
    params: "arr",
    testCases: [
      { input: "myFunction([10,100,40])", output: "50" },
      { input: "myFunction([10,100,1000])", output: "370" },
      { input: "myFunction([-50,0,50,200])", output: "50" },
    ],
    id: "5f082fa739c6fe165eb9f59e",
  },
  {
    title: "Return the longest string from an array of strings",
    series: "Javascript arrays",
    difficulty: 22,
    titleUrl: "return-longest-string-in-array",
    description:
      "Write a function that takes an array of strings as argument. Return the longest string.",
    solution: [
      "function myFunction( arr ) {",
      "",
      "return arr.reduce((a, b) => a.length <= b.length ? b : a)",
      "}",
    ],
    params: "arr",
    testCases: [
      { input: "myFunction(['help', 'me'])", output: "'help'" },
      { input: "myFunction(['I', 'need', 'candy'])", output: "'candy'" },
    ],
    id: "5f082fa739c6fe165eb9f59f",
  },
  {
    title: "Check if all array elements are equal",
    series: "Javascript arrays",
    difficulty: 25,
    titleUrl: "check-if-array-elements-are-equal",
    description:
      "Write a function that takes an array as argument. It should return true if all elements in the array are equal. It should return false otherwise.",
    solution: [
      "function myFunction( arr ) {",
      "",
      "  return new Set(arr).size === 1",
      "}",
    ],
    params: "arr",
    testCases: [
      { input: "myFunction([true, true, true, true])", output: "true " },
      { input: "myFunction(['test', 'test', 'test'])", output: "true " },
      { input: "myFunction([1,1,1,2])", output: "false " },
      { input: "myFunction(['10',10,10,10])", output: "false " },
    ],
    id: "5f082fa739c6fe165eb9f59b",
  },
  {
    title: "Merge an arbitrary number of arrays",
    series: "Javascript arrays",
    difficulty: 25,
    titleUrl: "merge-number-of-arrays",
    description:
      "Write a function that takes arguments an arbitrary number of arrays. It should return an array containing the values of all arrays.",
    solution: [
      "function myFunction( ...arrays ) {",
      "",
      "return arrays.flat()",
      "}",
    ],
    params: "...arrays",
    testCases: [
      {
        input: "myFunction([1, 2, 3], [4, 5, 6])",
        output: "[1, 2, 3, 4, 5, 6]",
      },
      {
        input: "myFunction(['a', 'b', 'c'], [4, 5, 6])",
        output: "['a', 'b', 'c', 4, 5, 6]",
      },
      {
        input: "myFunction([true, true], [1, 2], ['a', 'b'])",
        output: "[true, true, 1, 2, 'a', 'b']",
      },
    ],
    id: "5f082fa739c6fe165eb9f5a0",
  },
  {
    title: "Sort array by object property",
    series: "Javascript arrays",
    difficulty: 25,
    titleUrl: "sort-array-object-property-javascript",
    description:
      "Write a function that takes an array of objects as argument. Sort the array by property b in ascending order. Return the sorted array",
    solution: [
      "function myFunction(arr) {",
      "   const sort = (x, y) => x.b - y.b;",
      "   return arr.sort(sort);",
      "}",
    ],
    params: "arr",
    testCases: [
      {
        input: "myFunction([{a:1,b:2},{a:5,b:4}])",
        output: "[{a:1,b:2},{a:5,b:4}]",
      },
      {
        input: "myFunction([{a:2,b:10},{a:5,b:4}])",
        output: "[{a:5,b:4},{a:2,b:10}]",
      },
      {
        input: "myFunction([{a:1,b:7},{a:2,b:1}])",
        output: "[{a:2,b:1},{a:1,b:7}]",
      },
    ],
    id: "e1b1b57cd6f79f9984f226a5",
  },
  {
    title: "Merge two arrays with duplicate values",
    series: "Javascript arrays",
    difficulty: 30,
    titleUrl: "merge-arrays-duplicates",
    description:
      "Write a function that takes two arrays as arguments. Merge both arrays and remove duplicate values. Sort the merge result in ascending order. Return the resulting array",
    solution: [
      "function myFunction(a, b) {",
      "  return [...new Set([...a, ...b])].sort((x, y) => x - y);",
      "}",
    ],
    params: "a, b",
    testCases: [
      {
        input: "myFunction([1, 2, 3], [3, 4, 5])",
        output: "[ 1, 2, 3, 4, 5 ]",
      },
      {
        input: "myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42])",
        output: "[ -11, -10, 5, 22, 41,  42, 333]",
      },
    ],
    id: "5f100c8d83fd8e3fef903ea0",
  },
  {
    title: "Sum up all array elements with values greater than",
    series: "Javascript arrays",
    difficulty: 25,
    titleUrl: "sum-up-array-greater",
    description:
      "Write a function that takes an array (a) and a number (b) as arguments. Sum up all array elements with a value greater than b. Return the sum",
    solution: [
      "function myFunction(a, b) {",
      "  return a.reduce((sum, cur) => {",
      "    if (cur > b) return sum + cur;",
      "    return sum;",
      "  }, 0);",
      "}",
    ],
    params: "a, b",
    testCases: [
      { input: "myFunction([1, 2, 3, 4, 5, 6, 7], 2)", output: "25" },
      { input: "myFunction([-10, -11, -3, 1, -4], -3)", output: "1" },
      { input: "myFunction([78, 99, 100, 101, 401], 99)", output: "602" },
    ],
    id: "5f532c5ea1f06caca379c917",
  },
  {
    title: "Create a range of numbers",
    series: "Javascript arrays",
    difficulty: 45,
    titleUrl: "create-range-of-numbers",
    description:
      "Write a function that takes two numbers (min and max) as arguments. Return an array of numbers in the range min to max",
    solution: [
      "function myFunction(min, max) {",
      "  let arr = [];",
      "  for (let i = min; i <= max; i++) {",
      "    arr.push(i);",
      "  }",
      "return arr;",
      "}",
    ],
    params: "min, max",
    testCases: [
      { input: "myFunction(2, 10)", output: "[2, 3, 4, 5, 6, 7, 8, 9, 10]" },
      { input: "myFunction(1, 3)", output: "[1, 2, 3]" },
      {
        input: "myFunction(-5, 5)",
        output: "[-5, -4, -3, -2, -1, 0,  1,  2,  3,  4, 5]",
      },
      { input: "myFunction(2, 7)", output: "[2, 3, 4, 5, 6, 7]" },
    ],
    id: "5f54d27d39e6d6bc4c8754bf",
  },
  {
    title: "Group array of strings by first letter",
    series: "Javascript arrays",
    difficulty: 50,
    titleUrl: "javascript-group-array-strings-first-letter",
    description:
      "Write a function that takes an array of strings as argument. Group those strings by their first letter. Return an object that contains properties with keys representing first letters. The values should be arrays of strings containing only the corresponding strings. For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to. { a: ['Alf', 'Alice'], b: ['Ben']}",
    solution: [
      "function myFunction(arr) {",
      " return arr.reduce((acc, cur) => {",
      "   const firstLetter = cur.toLowerCase().charAt(0);",
      "   return { ...acc, [firstLetter]: [...(acc[firstLetter] || []), cur] };",
      " }, {});",
      "}",
    ],
    params: "arr",
    testCases: [
      {
        input: "myFunction(['Alf', 'Alice', 'Ben'])",
        output: "{ a: ['Alf', 'Alice'], b: ['Ben']}",
      },
      {
        input: "myFunction(['Ant', 'Bear', 'Bird'])",
        output: "{ a: ['Ant'], b: ['Bear', 'Bird']}",
      },
      {
        input: "myFunction(['Berlin', 'Paris', 'Prague'])",
        output: "{ b: ['Berlin'], p: ['Paris', 'Prague']}",
      },
    ],
    id: "613f1d9fcfe31c2db0496299",
  },
  {
    title: "Define an array with conditional elements",
    series: "Javascript arrays",
    difficulty: 31,
    titleUrl: "javascript-add-to-array-conditional-elements",
    description:
      "Write a function that takes an array with arbitrary elements and a number as arguments. Return a new array, the first element should be either the given number itself. or zero if the number is smaller than 6. The other elements should be the elements of the original array. Try not to mutate the original array",
    solution: [
      "function myFunction(arr, num) {",
      " return [...(num > 5 ? [num] : [0]), ...arr];",
      "}",
    ],
    params: "arr, num",
    testCases: [
      { input: "myFunction([1,2,3], 6)", output: "[6,1,2,3]" },
      { input: "myFunction(['a','b'], 2)", output: "[0,'a','b']" },
      { input: "myFunction([null,false], 11)", output: "[11,null,false]" },
    ],
    id: "6140883b27a511644839b50b",
  },
  {
    title: "Get every nth element of array",
    series: "Javascript arrays",
    difficulty: 70,
    titleUrl: "every-nth-element-array-javascript",
    description:
      "Write a function that takes an array (a) and a value (n) as arguments. Save every nth element in a new array. Return the new array",
    solution: [
      "function myFunction(a, n) {",
      "   let rest = [...a];",
      "   let result = [];",
      "   for (let i = 0; i < a.length; i++) {",
      "      if (rest.length < n) break;",
      "      result.push(rest[n - 1]);",
      "      rest = rest.slice(n);",
      "   }",
      "   return result;",
      "}",
    ],
    params: "a, n",
    testCases: [
      { input: "myFunction([1,2,3,4,5,6,7,8,9,10],3)", output: "[3,6,9]" },
      { input: "myFunction([10,9,8,7,6,5,4,3,2,1],5)", output: "[6,1]" },
      {
        input: "myFunction([7,2,1,6,3,4,5,8,9,10],2)",
        output: "[2,6,4,8,10]",
      },
    ],
    id: "936815cd2c98b858ea2ab622",
  },
],
a = [
  {
    title: "Accessing object properties one",
    series: "Javascript objects",
    difficulty: 1,
    titleUrl: "access-object-properties",
    description:
      "Write a function that takes an object with two properties as argument. It should return the value of the property with key country.",
    solution: ["function myFunction(obj) {", "", "  return obj.country", "}"],
    params: "obj",
    testCases: [
      {
        input: "myFunction({  continent: 'Asia',  country: 'Japan'})",
        output: "'Japan'",
      },
      {
        input: "myFunction({  country: 'Sweden',  continent: 'Europe'})",
        output: "'Sweden'",
      },
    ],
    id: "5f1043abbd87ab5028fee129",
  },
  {
    title: "Accessing object properties two",
    series: "Javascript objects",
    difficulty: 18,
    titleUrl: "access-object-properties-square-brackets",
    description:
      "Write a function that takes an object with two properties as argument. It should return the value of the property with key 'prop-2'. Tipp: you might want to use the square brackets property accessor",
    solution: [
      "function myFunction(obj) {",
      "",
      "  return obj['prop-2']",
      "}",
    ],
    params: "obj",
    testCases: [
      { input: "myFunction({  one: 1,  'prop-2': 2})", output: "2" },
      {
        input: "myFunction({  'prop-2': 'two',  prop: 'test'})",
        output: "'two'",
      },
    ],
    id: "5f1043abbd87ab5028fee12a",
  },
  {
    title: "Accessing object properties three",
    series: "Javascript objects",
    difficulty: 3,
    titleUrl: "access-object-properties-dynamic-key",
    description:
      "Write a function that takes an object with two properties and a string as arguments. It should return the value of the property with key equal to the value of the string",
    solution: [
      "function myFunction(obj, key) {",
      "",
      "  return obj[key]",
      "}",
    ],
    params: "obj, key",
    testCases: [
      {
        input:
          "myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent')",
        output: "'Asia'",
      },
      {
        input:
          "myFunction({  country: 'Sweden',  continent: 'Europe'}, 'country')",
        output: "'Sweden'",
      },
    ],
    id: "5f1043abbd87ab5028fee12b",
  },
  {
    title: "Check if property exists in object",
    series: "Javascript objects",
    difficulty: 1,
    titleUrl: "check-object-has-property-javascript",
    description:
      "Write a function that takes an object (a) and a string (b) as argument. Return true if a has a property with key b. Return false otherwise.",
    params: "a, b",
    solution: ["function myFunction(a, b) {", "   return b in a;", "}"],
    testCases: [
      { input: "myFunction({a:1,b:2,c:3},'b')", output: "true" },
      { input: "myFunction({x:'a',y:'b',z:'c'},'a')", output: "false" },
      { input: "myFunction({x:'a',y:'b',z:'c'},'z')", output: "true" },
    ],
    id: "7ba2e311ac00de4baaa13f2f",
  },
  {
    title: "Creating Javascript objects one",
    series: "Javascript objects",
    difficulty: 2,
    titleUrl: "creating-objects-javascript",
    description:
      "Write a function that a string (a) as argument. Create an object that has a property with key 'key' and a value of a. Return the object.",
    params: "a",
    solution: ["function myFunction(a) {", "   return { key: a };", "}"],
    testCases: [
      { input: "myFunction('a')", output: "{key:'a'}" },
      { input: "myFunction('z')", output: "{key:'z'}" },
      { input: "myFunction('b')", output: "{key:'b'}" },
    ],
    id: "3e3ea5df783f2c23c7e37847",
  },
  {
    title: "Creating Javascript objects two",
    series: "Javascript objects",
    difficulty: 8,
    titleUrl: "creating-objects-dynamic-key-javascript",
    description:
      "Write a function that takes two strings (a and b) as arguments. Create an object that has a property with key 'a' and a value of 'b'. Return the object.",
    params: "a, b",
    solution: ["function myFunction(a, b) {", "   return { [a]: b };", "}"],
    testCases: [
      { input: "myFunction('a','b')", output: "{a:'b'}" },
      { input: "myFunction('z','x')", output: "{z:'x'}" },
      { input: "myFunction('b','w')", output: "{b:'w'}" },
    ],
    id: "784bc8964868c2266b5dd5cb",
  },
  {
    title: "Creating Javascript objects three",
    series: "Javascript objects",
    difficulty: 10,
    titleUrl: "creating-objects-from-arrays-javascript",
    description:
      "Write a function that takes two arrays (a and b) as arguments. Create an object that has properties with keys 'a' and corresponding values 'b'. Return the object.",
    params: "a, b",
    solution: [
      "function myFunction(a, b) {",
      "   return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});",
      "}",
    ],
    testCases: [
      { input: "myFunction(['a','b','c'],[1,2,3])", output: "{a:1,b:2,c:3}" },
      {
        input: "myFunction(['w','x','y','z'],[10,9,5,2])",
        output: "{w:10,x:9,y:5,z:2}",
      },
      { input: "myFunction([1,'b'],['a',2])", output: "{1:'a',b:2}" },
    ],
    id: "70d051b7c3d2c18046f2a13e",
  },
  {
    title: "Extract keys from Javascript object",
    series: "Javascript objects",
    difficulty: 8,
    titleUrl: "extract-keys-from-object-javascript",
    description:
      "Write a function that takes an object (a) as argument. Return an array with all object keys.",
    params: "a",
    solution: ["function myFunction(a) {", "   return Object.keys(a);", "}"],
    testCases: [
      { input: "myFunction({a:1,b:2,c:3})", output: "['a','b','c']" },
      { input: "myFunction({j:9,i:2,x:3,z:4})", output: "['j','i','x','z']" },
      { input: "myFunction({w:15,x:22,y:13})", output: "['w','x','y']" },
    ],
    id: "2c73841b840d6fd8e106bf0d",
  },
  {
    title: "Sum object values",
    series: "Javascript objects",
    difficulty: 11,
    titleUrl: "sum-objects-values-javascript",
    description:
      "Write a function that takes an object (a) as argument. Return the sum of all object values.",
    params: "a",
    solution: [
      "function myFunction(a) {",
      "   return Object.values(a).reduce((sum, cur) => sum + cur, 0);",
      "}",
    ],
    testCases: [
      { input: "myFunction({a:1,b:2,c:3})", output: "6" },
      { input: "myFunction({j:9,i:2,x:3,z:4})", output: "18" },
      { input: "myFunction({w:15,x:22,y:13})", output: "50" },
    ],
    id: "b270f0fb810b6d50fc735ff5",
  },
  {
    title: "Remove a property from an object",
    series: "Javascript objects",
    difficulty: 15,
    titleUrl: "remove-property-from-object",
    hint: "<h3 class='mt-4 font-semibold'>Approach 1</h3> <div class='mt-2'> To to delete a property from an object in Javascript, we can use the <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete' target='_blank' rel='noopener noreferrer' class='text-blue-400 hover:underline'>delete</a > operator. Consider the following object: <div class='mt-2'> <code class='bg-blueGray-600 text-base py-1 px-1'>const obj = &#123;x:1,y:2&#125;;</code> </div> <div class='mt-2'> To remove property <i>y</i> we would call: </div> <div class='mt-2'> <code class='bg-blueGray-600 text-base py-1 px-1'>delete obj.y;</code> </div> <div class='mt-2'>The modified object would now be:</div> <div class='mt-2'> <code class='bg-blueGray-600 text-base py-1 px-1'>&#123;x:1&#125;</code> </div> <div class='mt-2'> When using the <i>delete</i> operator, you have to keep in mind that the operation will change/mutate the existing object. This is not always what we want to achieve. Sometimes we would want the original object to persist. The best way to achieve this is to create a new object. It should have all original properties but the one we want to have removed. </div> </div> <h3 class='mt-4 font-semibold'>Approach 2</h3> <div class='mt-2'> To avoid mutating the original object, we can use <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring' target='_blank' rel='noopener noreferrer' class='text-blue-400 hover:underline'>Object destructuring</a > in combination with the <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax' target='_blank' rel='noopener noreferrer' class='text-blue-400 hover:underline'>Spread syntax</a >. Consider again the following object: <div class='mt-2'> <code class='bg-blueGray-600 text-base py-1 px-1'>const obj = &#123;x:1,y:2&#125;;</code> </div> <div class='mt-2'>Now we call:</div> <div class='mt-2'> <code class='bg-blueGray-600 text-base py-1 px-1' >const &#123;y, ...newObj&#125; = obj;</code > </div> <div class='mt-2'> This will assign a new variable <i>y</i> with the value <code class='bg-blueGray-600 text-base py-1 px-1'>obj.y</code> and create a new object with all the remaining properties of <i>obj</i>. </div> </div>",
    description:
      "Write a function that takes an object as argument. It should return an object with all original object properties. except for the property with key 'b'",
    solution: [
      "function myFunction(obj) {",
      "  const { b, ...rest } = obj;",
      "  return rest;",
      "}",
    ],
    params: "obj",
    testCases: [
      { input: "myFunction({ a: 1, b: 7, c: 3 })", output: "{ a: 1, c: 3 }" },
      { input: "myFunction({ b: 0, a: 7, d: 8 })", output: "{ a: 7, d: 8 }" },
      {
        input: "myFunction({ e: 6, f: 4, b: 5, a: 3 })",
        output: "{ e: 6, f: 4, a: 3 }",
      },
    ],
    id: "5f1043abbd87ab5028fee12c",
  },
  {
    title: "Merge two objects with matching keys",
    series: "Javascript objects",
    difficulty: 35,
    titleUrl: "merge-objects-same-key",
    description:
      "Write a function that takes two objects as arguments. Unfortunately, the property 'b' in the second object has the wrong key. It should be named 'd' instead. Merge both objects and correct the wrong property name. Return the resulting object. It should have the properties 'a', 'b', 'c', 'd', and 'e'",
    solution: [
      "function myFunction(x, y) {",
      "  const { b, ...rest } = y;",
      "  return { ...x, ...rest, d: b };",
      "}",
    ],
    params: "x, y",
    testCases: [
      {
        input: "myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })",
        output: "{ a: 1, b: 2, c: 3, e: 5, d: 4}",
      },
      {
        input: "myFunction({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })",
        output: "{ a: 5, b: 4, c: 3, e: 2, d: 1}",
      },
    ],
    id: "5f1043abbd87ab5028fee12d",
  },
  {
    title: "Multiply all object values by x",
    series: "Javascript objects",
    difficulty: 55,
    titleUrl: "multiply-all-objects-values-javascript",
    description:
      "Write a function that takes an object (a) and a number (b) as arguments. Multiply all values of 'a' by 'b'. Return the resulting object.",
    params: "a, b",
    solution: [
      "function myFunction(a, b) {",
      "   return Object.entries(a).reduce((acc, [key, val]) => {",
      "   \treturn { ...acc, [key]: val * b };",
      "   }, {});",
      "}",
    ],
    testCases: [
      { input: "myFunction({a:1,b:2,c:3},3)", output: "{a:3,b:6,c:9}" },
      {
        input: "myFunction({j:9,i:2,x:3,z:4},10)",
        output: "{j:90,i:20,x:30,z:40}",
      },
      {
        input: "myFunction({w:15,x:22,y:13},6)",
        output: "{w:90,x:132,y:78}",
      },
    ],
    id: "4adb827f2de7a9660b6fd5e2",
  },
  {
    title: "Swap object keys and values",
    series: "Javascript objects",
    difficulty: 60,
    titleUrl: "swap-object-keys-values",
    description:
      "Write a function that takes an object as argument. Somehow, the properties and keys of the object got mixed up. Swap the Javascript object's key with its values and return the resulting object",
    solution: [
      "function myFunction(obj) {",
      "   return Object.entries(obj).reduce((acc, [key, val]) => {",
      "      return { ...acc, [val]: key };",
      "   }, {});",
      "}",
    ],
    params: "obj",
    testCases: [
      {
        input: "myFunction({z:'a',y:'b',x:'c',w:'d'})",
        output: "{a:'z',b:'y',c:'x',d:'w'}",
      },
      {
        input: "myFunction({2:'a',4:'b',6:'c',8:'d'})",
        output: "{a:'2',b:'4',c:'6',d:'8'}",
      },
      { input: "myFunction({a:1,z:24})", output: "{1:'a',24:'z'}" },
    ],
    id: "5f1043abbd87ab5028fee12e",
  },
  {
    title: "Replace empty strings in object with null values",
    series: "Javascript objects",
    difficulty: 45,
    titleUrl: "replace-empty-strings-null",
    description:
      "Write a function that takes an object as argument. Some of the property values contain empty strings. Replace empty strings and strings that contain only whitespace with null values. Return the resulting object",
    solution: [
      "function myFunction(obj) {",
      "  const newObj = { ...obj };",
      "  for (key in newObj) {",
      "    if (newObj[key].trim() === '') newObj[key] = null;",
      "  }",
      "  return newObj;",
      "}",
    ],
    params: "obj",
    testCases: [
      {
        input: "myFunction({ a: 'a', b: 'b', c: '' })",
        output: "{ a: 'a', b: 'b', c: null }",
      },
      {
        input: "myFunction({ a: '', b: 'b', c: ' ', d: 'd' })",
        output: "{ a: null, b: 'b', c: null, d: 'd' }",
      },
      {
        input: "myFunction({ a: 'a', b: 'b ', c: ' ', d: '' })",
        output: "{ a: 'a', b: 'b ', c: null, d: null }",
      },
    ],
    id: "5f1d7eb912d05704afbc0761",
  },
  {
    title: "Extracting information from objects",
    series: "Javascript objects",
    difficulty: 75,
    titleUrl: "extracting-information-ojects",
    description:
      "Write a function that takes an object as argument containing properties with personal information. Extract firstName, lastName, size, and weight if available. If size or weight is given transform the value to a string. Attach the unit cm to the size. Attach the unit kg to the weight. Return a new object with all available properties that we are interested in",
    solution: [
      "function myFunction(obj) {",
      "  return {",
      "    fn: obj.fn,",
      "    ln: obj.ln,",
      "    ...(obj.size && { size: `${obj.size}cm` }),",
      "    ...(obj.weight && { weight: `${obj.weight}kg` }),",
      "  };",
      "}",
    ],
    params: "obj",
    testCases: [
      {
        input:
          "myFunction({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67})",
        output: "{fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}",
      },
      {
        input:
          "myFunction({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102})",
        output: "{fn: 'Martin', ln: 'Harper', weight: '102kg'}",
      },
      {
        input:
          "myFunction({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71})",
        output: "{fn: 'Andrew', ln: 'Harper', size: '175cm', weight: '71kg'}",
      },
      {
        input:
          "myFunction({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'})",
        output: "{fn: 'Matthew', ln: 'Müller'}",
      },
    ],
    id: "5f240a8bca2aecb93c0756b8",
  },
  {
    title: "Add property to each object in array",
    series: "Javascript objects",
    difficulty: 30,
    titleUrl: "add-property-array-of-objects",
    description:
      "Write a function that takes an array of objects and a string as arguments. Add a property with key 'continent' and value equal to the string to each of the objects. Return the new array of objects. Tipp: try not to mutate the original array",
    solution: [
      "function myFunction(arr, str) {",
      "  return arr.map((obj) => ({ ...obj, continent: str }));",
      "}",
    ],
    params: "arr, str",
    testCases: [
      {
        input:
          "myFunction([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia')",
        output:
          "[{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]",
      },
      {
        input:
          "myFunction([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe')",
        output:
          "[{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' }]",
      },
    ],
    id: "5f54cf183d245bb9493e585f",
  },
  {
    title: "Convert array to object with counter",
    series: "Javascript objects",
    difficulty: 65,
    titleUrl: "convert-array-to-objects-count",
    description:
      "Write a function that takes an array of numbers as argument. Convert the array to an object. It should have a key for each unique value of the array. The corresponding object value should be the number of times the key occurs within the array.",
    solution: [
      "function myFunction(a) {",
      "   return a.reduce((acc, cur) => {",
      "   \treturn { ...acc, [cur]: (acc[cur] || 0) + 1 };",
      "   }, {});",
      "}",
    ],
    params: "a",
    testCases: [
      { input: "myFunction([1,2,2,3])", output: "{1:1,2:2,3:1}" },
      { input: "myFunction([9,9,9,99])", output: "{9:3,99:1}" },
      { input: "myFunction([4,3,2,1])", output: "{1:1,2:1,3:1,4:1}" },
    ],
    id: "4afe27e61873907a8f04fa77",
  },
],
n = [
  {
    title: "Check if two dates are equal",
    series: "Javascript dates",
    difficulty: 20,
    titleUrl: "check-if-two-dates-equal",
    description:
      "Sounds easy, but you need to know the trick. Write a function that takes two date instances as arguments. It should return true if the dates are equal. It should return false otherwise.",
    solution: [
      "function myFunction(a, b) {",
      "",
      "     return a.getTime() === b.getTime()",
      "}",
    ],
    params: "a, b",
    testCases: [
      {
        input:
          "myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))",
        output: "false",
      },
      {
        input:
          "myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))",
        output: "true",
      },
      {
        input:
          "myFunction(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))",
        output: "false",
      },
    ],
    id: "5f082fa739c6fe165eb9f5a2",
  },
  {
    title: "Return the number of days between two dates",
    series: "Javascript dates",
    difficulty: 37,
    titleUrl: "number-days-between-two-dates",
    description:
      "Write a function that takes two date instances as argument. It should return the number of days that lies between those dates.",
    solution: [
      "function myFunction(a, b) {",
      "   const dif = Math.abs(a - b);",
      "   return dif / 1000 / 60 / 60 / 24",
      "}",
    ],
    params: "a, b",
    testCases: [
      {
        input: "myFunction(new Date('2020-06-11'), new Date('2020-06-01'))",
        output: "10",
      },
      {
        input: "myFunction(new Date('2000-01-01'), new Date('2020-06-01'))",
        output: "7457",
      },
    ],
    id: "5f082fa739c6fe165eb9f5a3",
  },
  {
    title: "Check if two dates fall on the exact same day",
    series: "Javascript dates",
    difficulty: 37,
    titleUrl: "two-dates-same-day",
    description:
      "Write a function that takes two date instances as argument. It should return true if they fall on the exact same day. It should return false otherwise.",
    solution: [
      "function myFunction(a, b) {",
      "",
      "  return a.getFullYear() === b.getFullYear() &&",
      "         a.getMonth() === b.getMonth() &&",
      "         a.getDate()=== b.getDate()",
      "}",
    ],
    params: "a, b",
    testCases: [
      {
        input: "myFunction(new Date('2000/01/01'), new Date('2000/01/01'))",
        output: "true ",
      },
      {
        input: "myFunction(new Date('2000/01/01'), new Date('2000/01/02'))",
        output: "false ",
      },
      {
        input: "myFunction(new Date('2001/01/01'), new Date('2000/01/01'))",
        output: "false ",
      },
      {
        input: "myFunction(new Date('2000/11/01'), new Date('2000/01/01'))",
        output: "false ",
      },
    ],
    id: "5f082fa739c6fe165eb9f5a4",
  },
  {
    title: "Check if two dates are within 1 hour from each other",
    series: "Javascript dates",
    difficulty: 45,
    titleUrl: "two-dates-within-one-hour",
    description:
      "Write a function that takes two date instances as argument. It should return true if the difference between the dates is less than or equal to 1 hour. It should return false otherwise.",
    solution: [
      "function myFunction(a, b) {",
      "",
      "   return Math.abs(a - b) / 1000 / 60 <= 60",
      "}",
    ],
    params: "a, b",
    testCases: [
      {
        input:
          "myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))",
        output: "true ",
      },
      {
        input:
          "myFunction(new Date('2000/01/01 09:00:00'), new Date('2000/01/01 08:45:00'))",
        output: "true ",
      },
      {
        input:
          "myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:45:00'))",
        output: "false ",
      },
      {
        input:
          "myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:00:00'))",
        output: "true ",
      },
    ],
    id: "5f082fa739c6fe165eb9f5a5",
  },
  {
    title: "Check if one date is earlier than another",
    difficulty: 8,
    series: "Javascript dates",
    titleUrl: "check-if-date-is-earlier",
    description:
      "Write a function that takes two date instances (a and b) as arguments. It should return true if a is earlier than b. It should return false otherwise.",
    solution: ["function myFunction(a, b) {", "", "   return a < b", "}"],
    params: "a, b",
    testCases: [
      {
        input:
          "myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))",
        output: "true ",
      },
      {
        input:
          "myFunction(new Date('2000/01/01 08:45:00'), new Date('2000/01/01 08:00:00'))",
        output: "false ",
      },
      {
        input:
          "myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))",
        output: "false ",
      },
    ],
    id: "5f082fa739c6fe165eb9f5a6",
  },
  {
    title: "Add n days to an existing date",
    series: "Javascript dates",
    difficulty: 17,
    titleUrl: "add-days-to-date",
    description:
      "Write a function that takes as argument a date instance (a) and a number (b). It should add b days to a and return the number of milliseconds since January 1, 1970, 00:00:00 UTC.",
    solution: [
      "function myFunction(a, b) {",
      "",
      "  const currentDays = a.getDate();",
      "",
      "  return a.setDate(currentDays + b)",
      "}",
    ],
    params: "a, b",
    testCases: [
      {
        input: "myFunction(new Date(Date.UTC(2000,01,01)), 31)",
        output: "952041600000",
      },
      {
        input: "myFunction(new Date(Date.UTC(2000,01,01)), 10)",
        output: "950227200000",
      },
      {
        input: "myFunction(new Date(Date.UTC(2000,02,28,)), 2)",
        output: "954374400000",
      },
    ],
    id: "5f082fa739c6fe165eb9f5a7",
  },
  {
    title:
      "Calculate difference between two dates in hours, minutes, and seconds",
    series: "Javascript dates",
    difficulty: 77,
    titleUrl: "difference-between-dates",
    description:
      "This is a more difficult challenge. Write a function that takes two date instances as arguments. It should return an object with the properties 'hrs', 'min', and 'sec'. The corresponding values should display the absolute difference between the two dates in hours, minutes, and seconds.",
    solution: [
      "function myFunction(a, b) {",
      "",
      "  const dif = Math.abs(a - b);",
      "",
      "  const hrs = Math.floor(dif / 1000 / 60 / 60);",
      "  const min = Math.floor(dif / 1000 / 60) % (hrs * 60 || 60);",
      "  const sec = Math.floor(dif / 1000) % (min * 60 + hrs * 60 * 60 || 60);",
      "",
      "  return { hrs, min, sec }",
      "}",
    ],
    params: "a, b",
    testCases: [
      {
        input:
          "myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:10'))",
        output: "{ hrs: 0, min: 45, sec: 10 }",
      },
      {
        input:
          "myFunction(new Date('2000/01/01 09:50:23'), new Date('2000/01/01 08:00:00'))",
        output: "{ hrs: 1, min: 50, sec: 23 }",
      },
      {
        input:
          "myFunction(new Date('2000/01/01 11:04:12'), new Date('2000/01/01 08:00:00'))",
        output: "{ hrs: 3, min: 4, sec: 12 }",
      },
    ],
    id: "5f082fa739c6fe165eb9f5a8",
  },
  {
    title: "Return the next nearest quarter hour of a date",
    series: "Javascript dates",
    difficulty: 87,
    titleUrl: "javascript-nearest-quarter-hour-date",
    description:
      "Write a function that takes a Date instance as argument. It should return the next nearest quarter hour in minutes. For example, if the given date has the time 10:01 the function should return 15",
    solution: [
      "function myFunction(date) {",
      "const quarter = 15 * 60 * 1000;",
      "const closestQuarter = new Date(Math.round(date / quarter) * quarter);",
      "const nextQuarter = closestQuarter.getTime() < date.getTime() ? new Date(closestQuarter.getTime() + quarter) : closestQuarter;",
      "return nextQuarter.getMinutes();",
      "}",
    ],
    params: "date",
    testCases: [
      {
        input: "myFunction(new Date(2021, 8, 10, 15, 14, 00))",
        output: "15",
      },
      {
        input: "myFunction(new Date(2021, 8, 10, 15, 31, 00))",
        output: "45",
      },
      {
        input: "myFunction(new Date(2021, 8, 10, 15, 22, 00))",
        output: "30",
      },
    ],
    id: "613b5ed993523106762fa746",
  },
],
i = [
  {
    title: "Check if value is present in Set",
    titleUrl: "value-present-in-set",
    difficulty: 5,
    description:
      "Write a function that takes a Set and a value as arguments. Check if the value is present in the Set",
    solution: [
      "function myFunction(set, val) {",
      "  return set.has(val);",
      "}",
    ],
    series: "Javascript Sets",
    params: "set, val",
    testCases: [
      { input: "myFunction(new Set([1, 2, 3]), 2)", output: "true" },
      { input: "myFunction(new Set([123]), 2)", output: "false" },
      { input: "myFunction(new Set(['1', '2', '3']), '2')", output: "true" },
      { input: "myFunction(new Set('123'), '2')", output: "true" },
    ],
    id: "5f6224bb6f31ba2be47c0e10",
  },
  {
    title: "Convert a Set to Array",
    difficulty: 9,
    titleUrl: "convert-set-to-array",
    description:
      "Write a function that takes a Set as argument. Convert the Set to an Array. Return the Array",
    solution: ["function myFunction(set) {", "  return [...set];", "}"],
    series: "Javascript Sets",
    params: "set",
    testCases: [
      { input: "myFunction(new Set([1, 2, 3]))", output: "[1, 2, 3]" },
      { input: "myFunction(new Set([123]))", output: "[123]" },
      {
        input: "myFunction(new Set(['1', '2', '3']))",
        output: "['1', '2', '3']",
      },
      { input: "myFunction(new Set('123'))", output: "['1', '2', '3']" },
    ],
    id: "5f6224bb6f31ba2be47c0e11",
  },
  {
    title: "Get union of two sets",
    titleUrl: "union-two-sets",
    difficulty: 29,
    description:
      "Write a function that takes two Sets as arguments. Create the union of the two sets. Return the result. Tipp: try not to switch to Arrays, this would slow down your code",
    solution: [
      "function myFunction(a, b) {",
      "  const result = new Set(a);",
      "  b.forEach((el) => result.add(el));",
      "  return result;",
      "}",
    ],
    series: "Javascript Sets",
    params: "a, b",
    testCases: [
      {
        input: "myFunction(new Set('123'), new Set('234'))",
        output: "new Set('1234')",
      },
      {
        input: "myFunction(new Set([1, 2, 3]), new Set([3, 4, 5]))",
        output: "new Set([1, 2, 3, 4, 5])",
      },
      {
        input:
          "myFunction(new Set([false, false, NaN]), new Set([true, true, NaN]))",
        output: "new Set([false, NaN, true])",
      },
    ],
    id: "5f637a48ff7ec65c91f91994",
  },
  {
    title: "Creating Javascript Sets",
    difficulty: 18,
    titleUrl: "create-javascript-set",
    description:
      "Write a function that takes three elements of any type as arguments. Create a Set from those elements. Return the result",
    solution: [
      "function myFunction(a, b, c) {",
      "  const set = new Set();",
      "  set.add(a);",
      "  set.add(b);",
      "  set.add(c);",
      "  return set;",
      "}",
    ],
    series: "Javascript Sets",
    params: "a, b, c",
    testCases: [
      { input: "myFunction(1, 'b', 3)", output: "new Set([1, 'b', 3])" },
      {
        input: "myFunction(NaN, null, false)",
        output: "new Set([NaN, null, false])",
      },
      {
        input: "myFunction('a', ['b'], { c: 3 })",
        output: "new Set(['a', ['b'], { c: 3 }])",
      },
    ],
    id: "5f6481e08af2b2397fd3d8ee",
  },
  {
    title: "Delete element from Set",
    titleUrl: "delete-element-from-javascript-set",
    difficulty: 12,
    description:
      "Write a function that takes a Set and a value as argument. If existing in the Set, remove the value from the Set. Return the result",
    solution: [
      "function myFunction(set, val) {",
      "  set.delete(val);",
      "  return set;",
      "}",
    ],
    params: "set, val",
    series: "Javascript Sets",
    testCases: [
      {
        input: "myFunction(new Set([1, 2, 3]), 1)",
        output: "new Set([2, 3])",
      },
      {
        input: "myFunction(new Set('12345'), '3')",
        output: "new Set(['1', '2', '4', '5'])",
      },
      {
        input: "myFunction(new Set([1, 2, 3]), 4)",
        output: "new Set([1, 2, 3])",
      },
    ],
    id: "5f64b4cfa6c2d654821a93d9",
  },
  {
    title: "Add multiple elements to Set",
    titleUrl: "add-multiple-elements-to-javascript-set",
    difficulty: 22,
    description:
      "Write a function that takes a Set and an array as arguments. If not already existing, add each element in the array to the Set. Return the modified Set",
    solution: [
      "function myFunction(set, arr) {",
      "  arr.forEach((e) => set.add(e));",
      "  return set;",
      "}",
    ],
    series: "Javascript Sets",
    params: "set, arr",
    testCases: [
      {
        input: "myFunction(new Set([1, 2, 3]), [4, 5, 6])",
        output: "new Set([1, 2, 3, 4, 5, 6 ])",
      },
      {
        input: "myFunction(new Set('12345'), [...'6789'])",
        output: "new Set([...'123456789'])",
      },
      {
        input: "myFunction(new Set([1, 2, 3]), [2, 3])",
        output: "new Set([1, 2, 3])",
      },
    ],
    id: "5f64be2cc8150957a369a7f3",
  },
  {
    title: "Get Intersection of two Javascript Sets",
    titleUrl: "intersection-javascript-sets",
    difficulty: 58,
    description:
      "Write a function that takes two sets (a and b) as arguments. Get the intersection of the sets. In other words, return a set containing all elements that are both in a as well as b",
    solution: [
      "function myFunction(a, b) {",
      "  const int = new Set();",
      "  a.forEach(el => b.has(el) && int.add(el));",
      "  return int;",
      "}",
    ],
    series: "Javascript Sets",
    params: "a, b",
    testCases: [
      {
        input: "myFunction(new Set([1, 2, 3]), new Set([4, 5, 6]))",
        output: "new Set()",
      },
      {
        input: "myFunction(new Set('12345'), new Set([...'45678']))",
        output: "new Set('45')",
      },
      {
        input: "myFunction(new Set([1, 2, 3]), new Set([2, 3, 4]))",
        output: "new Set([2, 3])",
      },
    ],
    id: "5f688eac95ee25a74d50da96",
  },
];
export { e as a, t as b, n as d, a as o, i as s };
