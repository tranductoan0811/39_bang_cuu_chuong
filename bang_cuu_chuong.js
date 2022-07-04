function bangcuuchuong() 
{
  document.write("<table border=1 width=50%>");
    for(i=1;i<=9;i++) {
	    document.write("<tr>");
        for(j=2;j<=9;j++) {   
          document.write("<td>" + j + "x" + i +"="+ (i*j));
          document.write("</td>");
        }
	    document.write("</tr>");
    }
      document.write("</tr></table>");

}