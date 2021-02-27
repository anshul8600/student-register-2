studentarray=[];
function submit(){
var displayarray=[];
for(var a=1;a<=4;a++)
{
var studentname=document.getElementById("name_of_the_student_"+a).value;
studentarray.push(studentname);
}
var lenght=studentarray.length;
for(var i=0;i<lenght;i++)
{
displayarray.push(studentarray[i]);
}
document.getElementById("display_name_with_commas").innerHTML=displayarray;
var remove=displayarray.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
studentarray.sort();
var displayaftersorting=[];
var lengthsort=studentarray.length;
for(var j=0;j<lengthsort;j++)
{
displayaftersorting.push(studentarray[j]);
}
var remove=displayaftersorting.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove;
}