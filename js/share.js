/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var    _Data= {  
				   _url:encodeURI('http://minisite.tudou.com/2013DHL/'),
				   title:' DHL��׿Խӳ����𴫵�',
				//   _pic:'http://a.tudou.com/healthking/kw/new/images/a1.jpg',
				   content:' DHL��׿Խӳ����𴫵�',
				   params:{
						uid:10 //check login
				   }
 };
 
 $(document).ready(function(){
     	$("#sharedd > a").click(function(){
					     ShareObj=this.id.split('@');
					     if(_func.check_login()){
							  _func.share_check();
					    }
	});
 })
