//События: Варг Виккернес, Варракс, Кураев, Русский марш

var event_names=new Array("warrax", "kuraev", "kirill", "schreiber", "alksnis", "holmogor");
var events={warrax:"Варракс продолжил свой фундаментальный труд &#171;Круче Росатого только Рось&#187;, смутив умы нелюдей и обратив их к патриотизму и исконным моральным ценностям.",
	    kuraev:"В Метановую Империю проник диакон Кураев, привезший новую книгу про Гарри Поттера и вызвавший резкую активизацию клерикалов и гуманитариев.",
	    kirill:"В Метановую Империю тайком пробрался отец Кирилл, переодетый в женское платье, и принялся распространять религиозный дурман и уничтожать смехуечки.",
	    schreiber:"Маша Шрайбер пробралась в Имперский зоопарк и начла распространять религиозную пропаганду среди обезьян. Обезумевшие животные вырвались на волю и принялись забрасывать говном интеллектуальную элиту.",
	    alksnis:"Недорастворенный в реакторе депутат Алкснис устроил смуту среди роботов, распространяя среди них операционную систему своего сочинения, основанную на православии и исконных моральных ценностях русского народа. Роботы начали ломаться.",
	    holmogor:"Егор Холмогоров устроил беспрецедентную акцию по освящению биореактора, замаскированную под детский утренник. В результате произошла утечка метана, повлекшая за собой гибель многих граждан Империи."}



//	warrax:"tmp=safe_plus(ressource['unhuman'], -iteration);",
//	    kuraev:"ressource['priest']=safe_plus(ressource['priest'], iteration/2); ressource['humanist']=safe_plus(ressource['humanist'], iteration/2);",
//	    kirill:"tmp=safe_plus(ressource['smeh'], -iteration);"
	    
var action={
warrax: function(){var tmp =ressource['unhuman']-safe_plus(ressource['unhuman'], -iteration/3); news.value +='\n'+tmp +' нелюдей стало быдлом под впечатлением от очередной главы из книги Варракса "Круче Росатого только Рось".'; ressource['bydlo']+=tmp;  ressource['unhuman']-=tmp; reduce('unhuman');},
kuraev:function(){ressource['priest']=safe_plus(ressource['priest'], iteration/3); ressource['humanist']=safe_plus(ressource['humanist'], iteration/3);news.value +='\nТлетворное влияние диакона Кураева увеличило количество клерикалов и гуманитариев на '+Math.ceil(iteration/3);},
kirill: function(){var tmp=ressource['smeh']-safe_plus(ressource['smeh'], -iteration/3); ressource['religion']+=Math.ceil(iteration/3); news.value +='\nТлетворное влияние отца Кирилла уничтожило '+(tmp)+' смехуечек и создало '+Math.ceil(iteration/3)+' религиозного дурмана.';ressource['smeh']-=tmp;},
schreiber: function(){var tmp=ressource['scientist']-safe_plus(ressource['scientist'], -Math.ceil(iteration/3)); ressource['govno']+=iteration*3; news.value +='\nОбезьяны, науськанные Машой Шрайбер истребили '+(tmp)+' ученых и оставили после себя '+iteration*3+ ' говна.'; ressource['scientist']-=tmp;reduce('scientist');},
alksnis: function(){var tmp=ressource['robot']-safe_plus(ressource['robot'], -Math.ceil(iteration/3)); news.value +='\n'+(tmp)+' роботов перегорело в результате инициативы депутата Алксниса.'; ressource['robot']-=tmp;reduce('robot');},
holmogor: function(){var tmp=ressource['metan']-safe_plus(ressource['metan'], -Math.ceil(iteration)); var tmp1=ressource['bydlo']-safe_plus(ressource['bydlo'], -Math.ceil(iteration)); news.value +='\n Было потеряно'+tmp+' единиц метана, погибло '+tmp1+' граждан Империи.'; ressource['metan']-=tmp;ressource['bydlo']-=tmp;}
}

var bonus={
warrax: function(){news.value +='\n В результате победы над Варраксом было произведено '+Math.ceil(iteration/5)+' нелюдей.'; ressource['unhuman']+=Math.ceil(iteration/5);},
kuraev:function(){news.value +='\n В результате победы над диаконом Кураевым было произведено '+Math.ceil(iteration/3)+' смехуечек.'; ressource['smeh']+=Math.ceil(iteration/3);},
kirill: function(){news.value +='\n В результате победы над отцом Кириллом было произведено '+Math.ceil(iteration/3)+' смехуечек.'; ressource['smeh']+=Math.ceil(iteration/3);},
schreiber: function(){news.value +='\n В результате победы над Машей Шрайбер было произведено '+Math.ceil(iteration/5)+' смехуечек и '+Math.ceil(iteration/5)+' матана.'; ressource['smeh']+=Math.ceil(iteration/5); ressource['matan']+=Math.ceil(iteration/5);},
alksnis: function(){news.value +='\n В результате победы над депутатом Алкснисом было произведено '+Math.ceil(iteration/5)+' роботов.'; ressource['robot']+=Math.ceil(iteration/5);},
holmogor: function(){news.value +='\n В результате победы над  Егором Холмогоровым было произведено '+Math.ceil(iteration/3)+' метана.'; ressource['metan']+=Math.ceil(iteration/3);}
}

var lost={
warrax: function(){var tmp =ressource['unhuman']-safe_plus(ressource['unhuman'], -iteration/3); var tmp1 =ressource['smeh']-safe_plus(ressource['smeh'], -iteration/3);  news.value +='\n'+tmp +' нелюдей стало быдлом под впечатлением от очередной главы из книги Варракса "Круче Росатого только Рось" '+tmp1+' смехуечек уничтожено.' ; ressource['bydlo']+=tmp;  ressource['unhuman']-=tmp;  ressource['smeh']-=tmp1; reduce('unhuman');},
kuraev:function(){ressource['priest']=safe_plus(ressource['priest'], iteration/3); ressource['govno']=safe_plus(ressource['govno'], iteration*2); ressource['humanist']=safe_plus(ressource['humanist'], iteration/3);news.value +='\nТлетворное влияние диакона Кураева увеличило количество клерикалов и гуманитариев на '+Math.ceil(iteration/3)+', в ходе боевых действий произведено ' + iteration*2+ ' говна.';},
kirill: function(){var tmp1=ressource['scientist']-safe_plus(ressource['scientist'], -iteration/3); var tmp=ressource['smeh']-safe_plus(ressource['smeh'], -iteration/3); ressource['religion']+=Math.ceil(iteration/3); news.value +='\nТлетворное влияние отца Кирилла уничтожило '+(tmp)+' смехуечек и создало '+Math.ceil(iteration/3)+' религиозного дурмана. '+tmp1+' ученых убито.';ressource['smeh']-=tmp; ressource['scientist']-=tmp1; reduce('scientist');},
schreiber: function(){var tmp=ressource['scientist']-safe_plus(ressource['scientist'], -Math.ceil(iteration/3)); var tmp1=ressource['matan']-safe_plus(ressource['matan'], -Math.ceil(iteration/3)); ressource['govno']+=iteration*3; news.value +='\nОбезьяны, науськанные Машой Шрайбер истребили '+(tmp)+' ученых и оставили после себя '+iteration*3+ ' говна. '+tmp1+' матана уничтожено.'; ressource['scientist']-=tmp; ressource['matan']-=tmp1; reduce('scientist');},
alksnis: function(){var tmp=ressource['robot']-safe_plus(ressource['robot'], -Math.ceil(iteration/3)); var tmp1=ressource['matan']-safe_plus(ressource['matan'], -Math.ceil(iteration/3)); news.value +='\n'+(tmp)+' роботов перегорело в результате инициативы депутата Алксниса, ' +tmp1+ ' матана уничтожено.'; ressource['robot']-=tmp;ressource['matan']-=tmp1;reduce('robot');},
holmogor: function(){var tmp=ressource['metan']-safe_plus(ressource['metan'], -Math.ceil(iteration)); var tmp1=ressource['bydlo']-safe_plus(ressource['bydlo'], -Math.ceil(iteration)); news.value +='\n Было потеряно'+tmp+' единиц метана, погибло '+tmp1+' граждан Империи, произведено '+iteration+' религиозного дурмана.'; ressource['metan']-=tmp;ressource['bydlo']-=tmp;ressource['religion']+=iteration;}
}

//var fight={
//warrax: function(){if (ressource);},
//kuraev:function(){ressource['priest']=safe_plus(ressource['priest'], iteration/3); ressource['humanist']=safe_plus(ressource['humanist'], iteration/3);news.value +='\nТлетворное влияние диакона Кураева увеличило количество клерикалов и гуманитариев на '+Math.ceil(iteration/3);},
//kirill: function(){var tmp=ressource['smeh']-safe_plus(ressource['smeh'], -iteration/3); ressource['religion']+=Math.ceil(iteration/3); news.value +='\nТлетворное влияние отца Кирилла уничтожило '+(tmp)+' смехуечек и создало '+Math.ceil(iteration/3)+' религиозного дурмана.';ressource['smeh']-=tmp;}
//}

var close_but;
var mess_window;
var messagetxt;
var messagebtn;
var pause=false;
var ev=0;
function load_window()
{
close_but=document.getElementById('#close_mess');
mess_window=document.getElementById('#messwin');
messagetxt=document.getElementById('#messagetxt');
messagebtn=document.getElementById('#messagebtn');


}

function close_window()
{
mess_window.style.display="none";

if (pause) {pause=false;setTimeout("next_it()", 1500); }

}

function get_event(rt)
{
ev=Math.floor(Math.random()*event_names.length*2);

if (ev<event_names.length)
{
if (rt)
pause=true;
mess_window.style.display="block";
messagetxt.innerHTML=events[event_names[ev]];
messagetxt.innerHTML+="<br><br><span style='font-size:12px;'>Помните, что проиграв бой, вы претерпите большый урон, чем избегнув его. Выигранная битва, в свою очередь, сулит определенные бонусы. <br></span>"
messagebtn.style.visibility="visible";
close_but.style.visibility="hidden";
}

}

function ignore_proc()
{
messagetxt.innerHTML="Вы отказались от боя.";
close_but.style.visibility="visible";
action[event_names[ev]]();
messagebtn.style.visibility="hidden";

}

function fight_proc()
{
messagetxt.innerHTML="Вы приняли битву...<br>";
close_but.style.visibility="visible";

if ((ressource['priest']+ressource['humanist'])*Math.random()<(ressource['robot']+ressource['unhuman'])*Math.random())
{
messagetxt.innerHTML+="<br>...и одержали победу!";

bonus[event_names[ev]]();
}
else
{
messagetxt.innerHTML+="<br>...и потерпели поражение.";

lost[event_names[ev]]();

}

messagebtn.style.visibility="hidden";
}