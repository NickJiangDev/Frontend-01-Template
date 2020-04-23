## 知识

## 语言按语法分类 

- 非形式语言
    - 中文， 英文
- 形式语言（乔姆斯基谱系）
    - 0型 无限制文法
        - ?::=?
    - 1型 上下文相关文法
        - ?<A>?::=?<B>?
    - 2型 上下文无关文法
        - <A>::=?
    - 3型 正则文法
        - <A>::=<A>? 只允许左递归

学习形式语言 -> 产生式（BNF）

eg 定义语言:
```
<Number> = "0" | "1" | ... | "9"
正则写法： <Number> =  /[0-9]/
<DecimalNumber> =  "0" | (("0" | "1" | ... | "9") <Number>*) 
正则写法： <DecimalNumber> =  /0|[1-9][0-9]*/
```

括号表达式:
```
<PrimaryExression> = <DecimalNumber> | "(" <LogicalExpression> ")"
```

乘除表达式:
```
<MultiplicativeExpression> = <DecimalNumber> | <MultiplicativeExpression> "*" <DecimalNumber> | <MultiplicativeExpression> "/" <DecimalNumber>
```

加减表达式:
```
<AdditiveExpression> = <MultiplicativeExpression> | <AdditiveExpression> "+" <MultiplicativeExpression> | <AdditiveExpression> "-" <MultiplicativeExpression>
```

与或表达式:
```
<LogicalExpression> = <AdditiveExpression> | <LogicalExpression> "||" <AdditiveExpression> | <LogicalExpression> "&&" <AdditiveExpression>
```

解析表达式 -> 语法分析(LR, LL)

eg: 上下文相关
```
"a" <b> "c" ::= "a" "x" "c"
"四则运算" <LogicalExpression> "```" = "四则运算" (<AdditiveExpression> | <LogicalExpression> "||" <AdditiveExpression> | <LogicalExpression> "&&" <AdditiveExpression>) "```"
```

## 图灵完备性

- 命令式 - 图灵机(凡是可计算的东西都能计算出来)
    - goto
    - if和while
- 声明式 - lambda
    - 递归

## 动态与静态
- 动态
    - 在用户的设备/在线服务器上
    - 产品实际运行时
    - Runtime
- 静态
    - 在程序员设备上
    - 产品开发时
    - Compiletime

## 类型系统
- 动态类型系统与静态类型系统
- 强类型与弱类型
    - String + Number
    - String == Boolean
- 符合类型
    - 结构体 （键值对）
    - 函数签名 (参数列表 和 返回值组成)
- 子类型
    - 逆变/协变

## 一般命令式编程语言
- Atom
- Expression
- Statement
- Structure
- Program
4 Token （有效的东西）
- Literal: 直接量
    - Number
    - 揭秘 0.1 + 0.2 != 0.3
    - String
    - Boolean
    - Null
    - Undefindy

5 float 的精度问题
