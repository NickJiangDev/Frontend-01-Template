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
var a = 1;
## 一般命令式编程语言
- Atom
    - InputElement
        - WhiteSpace
            - ```<TAB>```
            - ```<VT>```
            - ```<FF>```
            - ```<SP> ```
            - ```<NBSP> 处理排版，不会断行```
            - ```<ZWNBSP> 零宽空格```
            - ```<USP>```
        - LineTerminator 换行符
        - Comment 注释 
        - Token 有效的东西
            - Punctuator 符号
            - IdentifierName 标识符
                - Keywords
                - Identifier
                - Future reserved Keywords: enum
            - Literal 直接量
                - Number
                    - 进制位写法代替parseInt
                - String
                    - Character
                    - Code Point
                    - Encode
                - Boolean
                - Object
                    - Grammar
                        - {} . [] Object.defineProperty
                        - Object.create / Object.setPrototypeOf / Object.getPrototypeOf
                        - new / class / extends
                        - new / function / prototype
                    - Function Object
                     
                - Null
                - Undefined
                - Symbol
Member > New > Call
- Expression
    - Grammar
        - Left Handside 等号左边
            - Member
                - a.b
                - a[b]
                - foo`string`
                - super.b
                - super['b']
                - new.target
                - new Foo()
            - New
                - new Foo
            - Reference
                - Object
                    - 理解为世间万物, 完全一致的两个对象，也并不相等, 三要素： 唯一性，状态，行为(`改变状态的动作`)
                    - class-base-object(基于类的面向对象)
                        - 分类
                        - 归类
                    - prototype
                        - API:
                            - Object.defineProperty {} []
                            - Object.create / Object.setPrototypeOf / Object.getPrototypeOf
                            - new / class / extends
                            - new / function / prototype

                - Key
                - 写的能力
                    - delete
                    - assign
            - Call
                - foo()
                - super()
                - foo()['b']
                - foo().b
                - foo()`abc`
        - Right Handside 等号右边
            - Update
            - Unary
                - 生成undefined: void 0;
            - Exponental
                - Multiplicative
                    - * / %
                - Additive
                    - + -
                - Shift
                    - << >> >>>
                - Relationship
                    - < > <= >= instanceof in
                - Equality
                - Bitwise
                - || &&
                - Conditional: ? :
                - ,
    - Runtime
- Statement
    - Grammar
        - 简单语句
            - ExpressionStatement
                a = 1 + 2;
            - EmptyStatement
                ;
            - DebuggerStatement
                debugger;
            - ThrowStatement
                throw a;
            - ContinueStatement
                continue label2;
            - BreakStatement
                break label1;
            - ReturnStatement
                return a;
        - 组合语句
            - BlockStatement
                - 因为有block 可以有多个语句
                - 可以为const 和 let 提供作用域
                {
                    ...
                }
                - [[type]]: normal
                - [[value]]: --
                - [[target]]: --
            - IfStatement
            - SwitchStatement
            - IterationStatement
                for of 和generater也可以搭配，对应Iterator机制
                for of => Iterator => Generator/Array
            - WithStatement
            - LabelledStatement
            - TryStatement
        - 声明
            - FunctionDeclaration
            - GeneratorDeclaration
            - AsyncFunctionDeclaration  
            - AsyncGeneratorDeclaration
            - VariableStatement
            - ClassDeclaration
            - LexicalDeclaration
    - Runtime
        - Completion Record 完成记录
            - [[type]]: normal, break, continue, return, or throw
            - [[value]]: Types
            - [[target]]: label
        - Lexical Environment 初始环境
- Structure
- Program

- Boxing & Unboxing

eg: 
```
// 点击全是 10
for(var i = 0; i< 10; i++) {
    var button = document.createElement('button');
    document.body.appendChild(button);
    button.innerHTML = i;
    button.onclick = function(){
        console.log(i)
    }
}
```

```
for(var i = 0; i< 10; i++) {
    var button = document.createElement('button');
    document.body.appendChild(button);
    button.innerHTML = i;
    void function(i){
        button.onclick = function(){
           console.log(i) 
        }
    }(i)
}
```

作用域和上下文得区别
作用域是源代码里的范围
上下文是用户的电脑上存放变量的地方

使用var的建议：
- var 不建议写在子结构里，写在function范围内
- 不要在block里面使用var
