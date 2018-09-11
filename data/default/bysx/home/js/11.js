		function cl(){
           var time=document.getElementById('time');
           var today=new Date();
           var week=new Array(' 星期日',' 星期一',' 星期二',' 星期三',' 星期四',' 星期五',' 星期六');
           time.innerHTML = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate()+" "+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds() + week[today.getDay()];
            }
       setInterval("cl();",1000);
       function jingguo(){
          
           this.style.border='solid 0.1px white';
           //this.style.color='black';
           this.style.cursor='pointer';
           //var change=this.getElementsByTagName('div')[0];
           //if(change!=undefined)change.style.display='block';
       }
       function likai(){
          
           this.style.border='';
           //this.style.color='';
           //var change=this.getElementsByTagName('div')[0];
          // if(change!=undefined)change.style.display='';
       }
       