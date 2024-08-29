a=parseInt(prompt("Введите число 1:")); 
b=parseInt(prompt("Введите число 2:")); 
c=parseInt(prompt("Введите число 3:")); 
if((b<a && a<c) || (c<a && a<b)) alert('средний число ' + a);
if((a<b && b<c) || (c<b && b<a)) alert('средний число ' + b);
if((a<c && c<b) || (b<c && c<a)) alert('средний число ' + c);