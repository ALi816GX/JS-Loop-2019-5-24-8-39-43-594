var row = 9;
var colum = 9;
document.write("<table>");
for(i = 1; i <= row; i++){               //循环控制行
    document.write("<tr>");
    for (j = 1; j <= colum; j++){            //循环控制列
        if (j <= i){
            document.write("<td>"+ i + "*" + j  + "=" + i*j + "</td>");
        }else{
            document.write("<td> </td>");
        }
    }
    document.write("</tr>");
}
document.write("</table>");
