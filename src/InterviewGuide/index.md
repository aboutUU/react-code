
## 1, JSON.stringify()
    定义：将 JavaScript 对象或值转换为 JSON 字符串

    1）如果目标对象有toJSON()方法，它负责定义哪些数据将被序列化。(即如果对象有该方法，最后序列化的结果是该方法的返回值)

    2）Boolean、Number、String 对象在字符串化过程中被转换为对应的原始值，符合传统的转换语义。

    3）undefined、Functions 和 Symbols 不是有效的 JSON 值。如果在转换过程中遇到任何此类值，则它们要么被忽略（在对象中找到），要么被更改为 null（当在数组中找到时）。
        （即undefined, Funtions, Symbol在对象中被忽略，在数组中被转成null)

    4)数字 Infinity 和 NaN 以及 null 值都被认为是 null。

    5) Date的实例通过返回一个字符串来实现toJSON()函数（与date.toISOString()相同）。因此，它们被视为字符串。