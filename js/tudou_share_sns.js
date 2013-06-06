/**<copyright file="share.js" company="a.tudou.com">  
 *    Copyright (c) tudou.com. All rights reserved.
 *    Author:jcheng
 * </copyright>
*/
var  _Data= {},
	 ShareObj='',
	 tudou = '土豆网',
	 tudouHomeUrl = 'http://www.tudou.com/',
	 EUC = encodeURIComponent ;
     var _func= $.extend({
	         ShareActToDb:function(e){
	        	  $.post(e._indburl,e._params,function(data){
	        		  if(data.statu){
	        			  
	        		  } 
	        	  },'json');
			 },
	         linksSharePage:[{ i:0,
	             abbr: 'dban',
	             label: '豆瓣',
	             name: 'dban',
	             exec: function(data) {
				    	//var u ="http://www.douban.com/recommend/?url="+data._url+"&title="+encodeURIComponent(data.title);
	            	 var u ="http://shuo.douban.com/!service/share?"
	            		 +"image="+encodeURIComponent(data._pic)
	            		 +"&href="+encodeURIComponent(data._url)
	            		 +"&name="+encodeURIComponent(data.title); 
	            	 return u; 
				    }
			    },
			  { i:1,
	             abbr: 'sina',
	             label: '新浪微博',
	             name: 'sina_wb',
	             exec: function(data){
 				    	 var u ="	http://service.weibo.com/share/share.php?"
 				    		 +"appkey="
 				    		 +"&url="+encodeURIComponent(data._url)
 				    		 +"&title="+encodeURIComponent(data.title)
 				    		 +"&pic="+encodeURIComponent(data._pic)
 				    		 +"&ralateUid=";
					     return u; 
				     }
			    },
	           { 
	             i:2,
	             abbr: 'renren',
	             label: '人人网',
	             name: 'renren',
	             exec: function(data) {
				    	var u ="http://share.renren.com/share/buttonshare/post/4001?"
				    		+"url="+encodeURIComponent(data._url)
				    		+"&title="+encodeURIComponent(document.title)
				    		+"&content=" + encodeURIComponent(data.content)
				    		+"&pic=" + encodeURIComponent(data._pic);
					    return u; 
				    }
			    },
				 { i:3,
	             abbr: 'kaixin',
	             label: '开心网',
	             name: 'kaixin',
	             exec: function(data) {
				    	var u ="http://www.kaixin001.com/repaste/share.php?"
				    		+"rtitle="+encodeURIComponent(data.title)
				    		+"&rurl="+data._url
				    		+"&rpic="+encodeURIComponent(data._pic)
				    		+"&rcontent="+encodeURIComponent(data.content);
					    return u; 
				    }
			    },
			    { i:4,
	             abbr: 'qqk',
	             label: 'QQ空间',
	             name: 'qqk',
	             exec: function(data) {
				    	var u ="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+encodeURIComponent(data._url)+"&title="+encodeURIComponent(data.content)+"&rcontent="+encodeURIComponent(data.content);
					    return u; 
				    }
			    },
			   { i:5,
	             abbr: 'qqw',
	             label: 'QQ微博',
	             name: 'qqw',
	             exec: function(data) {
	            	 /*
				    	var u ="http://v.t.qq.com/share/share.php?"
				    		+"url="+data._url
				    		+"&site="+encodeURIComponent(data._url)
				    		+"&pic="+encodeURIComponent(data._pic)
				    		+"&title="+encodeURIComponent(data.title);
				    		*/
	            		var _url = encodeURIComponent(data._url);
	            		var _pic = encodeURI(data._pic);//（例如：var _pic='图片url1|图片url2|图片url3....）
	            		var _t = data.title;//标题和描述信息
	            		if(_t.length > 120){
	            			_t= _t.substr(0,117)+'...';
	            		}
	            		_t = encodeURI(_t);
	            		var u = 'http://share.v.t.qq.com/index.php?c=share&a=index&url='
	            			+_url+'&appkey=801114769&pic='+_pic+'&assname=&title='+_t;
					    return u; 
				    }
			    },
			  { i:6,
	             abbr: 'sohu',
	             label: '搜狐微博',
	             name: 'sohu',
	             exec: function(data) {
	             var u ="http://t.sohu.com/third/post.jsp?&url="
	            	 +encodeURIComponent(data._url)
	            	 +"&title="+encodeURIComponent(data.title)
	            	 +"&content=utf-8&pic="+encodeURIComponent(data._pic);
	             return u; 
				    }
		        },
		        { i:7,
				 abbr: 'wy',
				 label: '网易微博',
				 name: 'sohu',
				 exec: function(data) {
		            	 var param = [];
		            	 param[0] = 'link=' + encodeURIComponent(data._url);  //link为网站域名
		            	 param[1] = 'source=' + encodeURIComponent(data.title);  //source为网站名称
		            	 param[2] = 'info=' + encodeURIComponent(data.content) + encodeURIComponent(data._url);  //info为转发的文字内容(可选，默认为页面title)
		            	 param[3] = 'images='+encodeURIComponent(data._pic);  //images为传过来的图片地址，多个图片地址用","隔开；若为空会自动抓取转发页面图片
		            	 param[4] = 'togImg=true';//默认显示转发图片(可选，删除true为不显示)
		            	 var u = 'http://t.163.com/article/user/checkLogin.do?';
		            	 u += param.join("&");
		                      return u; 
					    }
			        },
					{i:8,
		             abbr: 'ty',
		             label: '天涯社区',
		             name: 'ty',
		             exec: function(data) 
					 {
					 
 					    var  param = [];
							 param[0] = 'app_id=baijob'   ;
							 param[1] = 'ccTitle=' + data.title;  
							 param[2] = 'ccUrl=' + data._url;   
							 var u = 'http://share.tianya.cn/openapp/restpage/activity/appendDiv.jsp?';
							 u += param.join("&");
					     return 'http://co.tianya.cn/third/export/thirdLoginDiv.jsp?fowardURL='+encodeURIComponent(u); 
					  }
					},
					{i:9,
					  abbr: 'bdtb',
		             label: '百度贴吧',
		             name: 'bdtb',
		             exec: function(data) 
					 {
					    var u = 'http://tieba.baidu.com/i/app/open_share_api?link='+ encodeURIComponent(data._url); 
						 return u; 
					  }
					},
				   {i:10,
					   abbr: 'bdsc',
		               label: '百度搜藏',
		               name: 'bdsc',
		               exec: function(data) 
					   {
					    var  param = [];
							 param[0] = 'iu='+ encodeURIComponent(data._url);   
							 param[1] = 'it=' + encodeURIComponent(data.title);  
						     param[2] = 'pic=' + encodeURIComponent(data._pic);    
					    var u = "http://cang.baidu.com/do/add?" +param.join('&');
					     return u; 
					   }
					},
					{i:11,
					     abbr: 'tjh',
		                 label: '淘江湖',
		                 name: 'tjh',
		                 exec: function(data) 
					    {
					     var u = "http://share.jianghu.taobao.com/share/addShare.htm?url="+ encodeURIComponent(data._url);   
					      return u; 
					   }
					},
				   {i:12,
					     abbr: 'pyw',
		                 label: '朋友网',
		                 name: 'pyw',
		                 exec: function(data) 
					    {
					       var u = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?to=pengyou&url="+          encodeURIComponent(data._url);
					      return u; 
					    }
					},
					{i:13,
					     abbr: '51',
		                 label: '51社区',
		                 name: '51',
		                 exec: function(data) 
					     {
					       var u = "http://share.51.com/share/share.php?type=8"
								 +"&vaddr="+ encodeURIComponent(data._url) 
							    +"&title=" + encodeURIComponent(data.title) ;
					      return u; 
					     }
			 
					 },
					 {i:14,
					     abbr: 'xianguo',
		                 label: '鲜果',
		                 name: 'xianguo',
		                 exec: function(data) 
					     {
					       var u = "http://xianguo.com/service/submitdigg/?"
								 +"link="+ encodeURIComponent(data._url) 
								 +"&title=" + encodeURIComponent(data.title) 
							     +"&pic=" + encodeURIComponent(data._pic);     
					      return u; 
					     }
					 },
					 {i:15,
					     abbr: 'msn',
		                 label: 'msn',
		                 name: 'msn',
		                 exec: function(data) 
					     {
					       var u = "https://profile.live.com/P.mvc#!/badge?"
								 +"url="+ encodeURIComponent(data._url) 
								 +"&title=" + encodeURIComponent(data.title);  
							  
					      return u; 
					     }
					 },
					 {i:16,
					     abbr: 'baidu',
		                 label: '百度',
		                 name: 'baidu',
		                 exec: function(data) 
					     {
							var u = "http://apps.hi.baidu.com/share/?" +
							"appkey=" +
							"&url=" +
							encodeURIComponent(data._url) +
							"&title=" +
							encodeURIComponent(data.title) +
							"&pic=" +
							encodeURIComponent(data._pic) +
							"&ralateUid=";
							return u;
					     }
					 } 
		        ],
	         linksShareVideo:[
				{ i:0,
					 abbr: 'renren',
					 label: '人人网',
					 name: 'xiaonei',
					 exec: function(data){
							  var u = 'http://share.renren.com/share/buttonshare.do?link=' + EUC(data._url) + '&title=' + EUC(data.title);
							return u;
						  }
				  },	
				  { i:1,
					abbr: 'kx',
					label: '开心网',
					name: 'kaixin',
					exec: function(data){
						var u = "http://www.kaixin001.com/repaste/share.php?rtitle="+data.title+"&rurl="+data._url+"&rcontent=看看这个土豆视频：" +data.title.slice(0,60);
					   return u;
					}
				},
				{  i:2,
					abbr: 'qz',
					label: 'QQ空间',
					name: 'qzone',
					exec: function(data){
						var u ='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + EUC(data._url);
						return u;
					}
				},
				{  i:3,
					abbr: 'wb',
					label: '新浪微博',
					name: 'weibo', 
					exec: function(data){
						 var u = "http://v.t.sina.com.cn/share/share.php?c=spr_web_bd_tudou_weibo&url="+ data._url+"&title="+EUC(data.title)+"&source="+tudou+"&sourceUrl="+tudouHomeUrl+"&content='gb2312'&pic="+data._pic+"&appkey=2043051649";
							return u;
					}
				},
				{i:4,
					abbr: 'db',
					label: '豆瓣网',
					name: 'douban',
					exec: function(data){
						var u ='http://www.douban.com/recommend/?url=' + EUC(data._url) + '&title=' + EUC(data.title);
						 return u;
					}
				},
				{
				  i:5,
					abbr: 'db',
					label: '腾讯微博',
					name: 'twb',
					exec: function(data){
						//var u ='http://share.v.t.qq.com/index.php?c=share&a=index&c=share&a=index&site='+tudou+'&title='+ EUC(data.title)+'&descon=323&url=' + EUC(data._url)+'&appkey=3be7a91cc641445fb33e2b83557b75bc';
						var u ='http://v.t.qq.com/share/share.php?c=share&a=index&site=土豆网&title='+EUC(data.title)+'&descon='+ EUC(data.title)+'&url='+EUC(data._url)+'&appkey=3be7a91cc641445fb33e2b83557b75bc';
						 return u;
					}
				}
		  ],
	     share_check:function(){
                          var key_ID=parseInt(ShareObj[1]),  
						      _act= ShareObj[0];
							  if('v'==_act){
							      _Data.share_url=_func.linksShareVideo[key_ID].exec(_Data);
							  }else if('page'==_act){
							      _Data.share_url=_func.linksSharePage[key_ID].exec(_Data);
							  }else{
							     return false;
							  }
                              _func.beginShare();
	  	           	   },
	  	 beginShare:function(){
	  	                if(_Data.share_url=='error'){
                             alert("系统用户忙,稍后再试!");
	  	            	  }else{
	  	            	       //_func.ShareActToDb({_params:_Data.params,_indburl:_Data._servUrl});/*分享存库*/
		  	            	   window.open(_Data.share_url);
	  	           	        }
	  	               },
	  	 check_login:function(){
	  		    if(!_Data.params.uid){
	  		    	 alert("请先登录!");
	  		    	 return false;
	  		    } return true;
	  	 } 
		 });  



	 