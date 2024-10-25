//公式の設定
//公式番号の入力と確認
function btnClick1(){
var number = prompt("公式の番号を入力:");
if (number => 1 && number <= 10){
    alert("使用する公式を設定しました");
} else {
    alert("正しい番号を入力してください");
}  
}
number=input("公式の番号を入力:");
if (number => 1 && number <= 10){
    alert("使用する公式を設定しました");
} else {
    alert("正しい番号を入力してください");
}
let button1 = document.getElementById("formula_num_btn");
button1.onclick = btnClick1;
 //変数-公式
 const formula = ["二次方程式の解の公式"+"<math><mi>x</mi><mo>=</mo><mfrac><mrow><mo>-</mo> <mi>b</mi><mo>±</mo><msqrt><msup> <mi>b</mi> <mn>2</mn> </msup><mo>-</mo><mn>4</mn> <mo>⁢</mo> <mi>a</mi> <mo>⁢</mo> <mi>c</mi></msqrt></mrow><mrow><mn>2</mn> <mo> </mo><mi>a</mi></mrow></mfrac></math>",]
//公式の呼び出し
var useformula=formulas[int(number)-1];
document.getElementById("use_formula").textContent = `使用する公式:${useformula}`;