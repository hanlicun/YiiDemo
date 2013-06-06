
//点击选项管理中的菜单，改变菜单列表的显示
function switchmenu(menutitle, menulist, num){	
	var mTitleObj=document.getElementById(menutitle);
	var tlist=document.getElementById("menulist");
	var mlist=tlist.getElementsByTagName("div");
	
	switch(num){
		case 0: mTitleObj.innerText="【系统管理】"; break;
		case 1: mTitleObj.innerText="【文章管理】"; break;
		case 2: mTitleObj.innerText="【用户管理】"; break;
	}

	for(var i=0; i<mlist.length; i++){
		if(i==num){
			mlist[num].style.display="block";
		}else {
			mlist[i].style.display="none";
		}
	}				 	
}



var ntu=null;
var up=null;

//弹出图片属性窗口
function newopen(id){
	window.open("admin.php?m=image&a=openwin&id="+id,"_blank", "width=500, height=300, top=0, left=0,scrollbars=yes");	
}

//多选框处理，全选、反选、全不选
	var checkall=document.getElementsByName("id[]");
	function select(){
		for(var i=0; i<checkall.length; i++)
		{
			checkall[i].checked=true;
		}
	}

	function fanselect(){
		for(var i=0; i<checkall.length; i++)
		{
			if(checkall[i].checked)
			{
				checkall[i].checked=false;
			}else
			{
				checkall[i].checked=true;
			}
		}
	}

	function noselect(){
		for(var i=0; i<checkall.length; i++)
		{
			checkall[i].checked=false;
		}
	}
	var win=null;
	//弹出图片选择框
	function showWin(url){
		//弹出一个窗体
		
		if(win==null){
			win=document.createElement("div");

			win.className="open";

			document.body.appendChild(win);
			var aj=Ajax();

			aj.get(url, function(data){
				win.innerHTML=data;
			});	

			document.body.onscroll=function(){
				win.style.left=100+document.body.scrollLeft;
				win.style.top=100+document.body.scrollTop;
			}
		}
	}

	//弹出图片选择框
	function imglist(url){
		//弹出一个窗体
		
		var win=document.getElementById("glist");

		var aj=Ajax();

		aj.get(url, function(data){
				win.innerHTML=data;
		});	
	}
	function closewin(){
		if(win!=null){
			document.body.removeChild(win);
			win=null;
		}
	}
	//设置图片
	function setImage(picId, picName){

		var pic=document.getElementById("pic");
		var picbid=document.getElementById("picId");
		

		picbid.value=picId;
		pic.src=picName; 
		closewin();
		
	}
	//设置分类隐藏和显示
	function dis(obj,id){
		var aj=Ajax();
		if(ieff(obj)=="正常"){
			aj.get("admin.php?m=column&a=dis&con=0&id="+id);
			ieff(obj,"隐藏");
			obj.style.backgroundColor="#ccc";
		}else if(ieff(obj)=="隐藏"){
			aj.get("admin.php?m=column&a=dis&con=1&id="+id);
			ieff(obj,"正常");
			obj.style.backgroundColor="";
		}
	}
	//ie和ff  ie 使用innerText 而ff使用textContent	
	function ieff(obj, value){
		if(document.all){
			  if(typeof(value)=="undefined")
                            	return obj.innerText;
			  else
				obj.innerText=value;
                 } else{
   		 	 if(typeof(value)=="undefined")
                            	return obj.textContent;
			  else
				obj.textContent=value;
                 }
	}

	//设置首页的幻灯内容
	function setPlay(id, stat){
		var play=document.getElementById(id);
		if(stat){
			play.style.display="block";
		}else{
			play.style.display="none";
		}
	}

	
