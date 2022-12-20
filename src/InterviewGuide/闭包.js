/*
 *@description:
 * @author wayne
 * @date 2022-11-09 13:40
*/

//闭包：一个函数可以访问其外部函数作用域，j即使该外部函数已经返回。这意味着闭包可以记住并访问外部函数的变量和参数，甚至是在该外部函数结束之后。



function getCounter() {
    let counter = 0;
    return function() {
        return counter++;
    }
}

let count = getCounter();

console.log(count());  // 0
console.log(count());  // 1
console.log(count());  // 2


// 这个示例中，我们将 getCounter 函数中返回的一个内部匿名函数存储到变量 count 中。
// 现在 count 函数是一个闭包，它可以访问 getCounter 函数中的 counter 变量，即使是在 getCount() 返回之后。
// 但是注意到每次 count 函数调用时，counter 的值并没有向往常那样重置为0。
// 这是因为，每次调用 count() 时，都会为该函数创建一个新的作用域，但是只为 getCounter() 函数创建了一个作用域，
// 因为 counter 变量定义在 getCounter 的作用域中，所以每次调用 count 函数时 counter 变量会递增而不是重置为 0。
