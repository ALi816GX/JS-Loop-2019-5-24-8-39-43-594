document.write("<table>");
for(i = 1;i <= 20 ; i++){
    document.write("<tr>");
    if(i%2 == 0){
        document.write("<td>"+ i + "是偶数。" + "</td>");
    }else {
        document.write("<td>"+ i + "是奇数。" + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");
