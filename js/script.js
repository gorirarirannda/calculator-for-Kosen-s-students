//公式の設定
//変数-公式
const formula = ["二次方程式の解の公式<math><mi>x</mi><mo>=</mo><mfrac><mrow><mo>-</mo> <mi>b</mi><mo>±</mo><msqrt><msup> <mi>b</mi> <mn>2</mn> </msup><mo>-</mo><mn>4</mn> <mo></mo> <mi>a</mi> <mo></mo> <mi>c</mi></msqrt></mrow><mrow><mn>2</mn> <mo> </mo><mi>a</mi></mrow></mfrac></math>","展開、因数分解の公式<math> <mrow> <mo> ( </mo> <mi> a </mi> <mi> x </mi> <mo> + </mo> <mi> b </mi> <mo> ) </mo> </mrow> <mrow> <mo> ( </mo> <mi> c </mi> <mi> x </mi> <mo> + </mo> <mi> d </mi> <mo> ) </mo> </mrow> <mo> = </mo> <mi> a </mi> <mi> c </mi> <msup> <mrow> <mi> x </mi> </mrow> <mrow> <mn> 2 </mn> </mrow> </msup> <mo> + </mo> <mrow> <mo> ( </mo> <mi> a </mi> <mi> d </mi> <mo> + </mo> <mi> b </mi> <mi> c </mi> <mo> ) </mo> </mrow> <mi> x </mi> <mo> + </mo> <mi> b </mi> <mi> d </mi> </math>","球の表面積<math> <mi> S </mi> <mo> = </mo> <mn> 4 </mn> <mi> &#x03C0; <!-- greek small letter pi --> </mi> <msup> <mrow> <mi> r </mi> </mrow> <mrow> <mn> 2 </mn> </mrow> </msup> </math>","球の体積<math> <mi> v </mi> <mo> = </mo> <mfrac> <mrow> <mn> 4 </mn> <mi> &#x03C0; <!-- greek small letter pi --> </mi> <msup> <mrow> <mi> r </mi> </mrow> <mrow> <mn> 3 </mn> </mrow> </msup> </mrow> <mrow> <mn> 3 </mn> </mrow> </mfrac> </math>"]
//公式番号の入力と確認
let button1 = document.getElementById("formula_num_btn");
button1.onclick = btnClick1;
function btnClick1(){
var number = prompt("公式の番号を入力:");
if (number > 0 && number < 11){
    alert("使用する公式を設定しました");
} else {
    alert("正しい番号を入力してください");
}
//公式の呼び出し
var useformula=formula[number-1];
document.getElementById('use_formula').innerHTML = `使用する公式:${useformula}`;  
}