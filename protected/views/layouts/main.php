<!DOCTYPE html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?php echo CHtml::encode($this->pageTitle); ?></title>
<link rel="stylesheet" type="text/css" href="http://css.tudouui.com/skin/__g/__g_161.css" />
<!--必须加的样式-->
<script type="text/javascript" src="http://js.tudouui.com/nsales/jtudou/jquery_0.js"></script>


<script type="text/javascript" src="http://a.tudou.com/tudou/swfobject.js"></script>
<script type="text/javascript" src="<?php echo Yii::app()->request->baseUrl; ?>/js/tuilib2_74.js"></script>
</head>

<body>
<div id="idUploadInfo" style="display : none; margin-left:210px;position:absolute;top:432px;left:366px;z-index:12340;" >
 </div>   
    
<!-- header -->
<div id="gTop" class="g-mini g-mini-play">
      <div class="g-mini-main">
            <div class="logo"><a href="http://www.tudou.com" title="土豆网 tudou.com 每个人都是生活的导演">土豆网</a></div>
            <div class="g-mini-nav">
                  <ul class="g-link">
                        <li class="first"><a target="_blank" href="http://imake.tudou.com/">原创</a></li>
                        <li><a target="_blank" href="http://tv.tudou.com/">电视剧</a></li>

                        <li><a target="_blank" href="http://movie.tudou.com/">电影</a></li>
                        <li><a target="_blank" href="http://zy.tudou.com/">综艺</a></li>
                        <li class="g-link-more"><span class="handle"><a href="#">更多</a></span>
                              <div class="g-more-nav">
                                    <div class="more-top"></div>
                                    <div class="more-item">
                                          <h3>频道</h3>

                                          <ul>
                                                <li><a target="_blank" href="http://cartoon.tudou.com/">动漫</a></li>
                                                <li class="clear"><a target="_blank" href="http://www.tudou.com/cate/">全部</a></li>
                                                <li><a target="_blank" href="http://news.tudou.com/">热点</a></li>
                                                <li><a target="_blank" href="http://fortune.tudou.com/">财富</a></li>
                                                <li><a target="_blank" href="http://auto.tudou.com/">汽车</a></li>

                                                <li><a target="_blank" href="http://it.tudou.com/">科技</a></li>
                                                <li><a target="_blank" href="http://sports.tudou.com/">体育</a></li>
                                                <li><a target="_blank" href="http://ent.tudou.com/">娱乐</a></li>
                                                <li><a target="_blank" href="http://music.tudou.com/">音乐</a></li>
                                                <li><a target="_blank" href="http://game.tudou.com/">游戏</a></li>
                                                <li><a target="_blank" href="http://fun.tudou.com/">搞笑</a></li>

                                                <li><a target="_blank" href="http://fashion.tudou.com/">风尚</a></li>
                                                <li><a target="_blank" href="http://beauty.tudou.com/">美容</a></li>
                                                <li><a target="_blank" href="http://lady.tudou.com/">女性</a></li>
                                                <li><a target="_blank" href="http://life.tudou.com/">乐活</a></li>
                                                <li><a target="_blank" href="http://health.tudou.com/">健康</a></li>
                                                <li><a target="_blank" href="http://edu.tudou.com/">教育</a></li>

                                                <li><a target="_blank" href="http://city.tudou.com/">城市</a></li>
                                          </ul>
                                    </div>
                                    <div class="more-item">
                                          <h3>产品</h3>
                                          <ul>
                                                <li><a target="_blank" href="http://www.tudou.com/my/tui/square.html">广场</a></li>

                                          </ul>
                                    </div>
                              </div>
                        </li>
                  </ul>
            </div>
            <div class="g-mini-search g-search">
                  <form target="_blank" method="get" action="http://www.soku.com/t/nisearch.do">
                        <div class="g-search-box">

                              <input type="text" onblur="this['_gs_focus']=0" onfocus="this['_gs_focus']=1" autocomplete="off" name="kw" value="" accesskey="s" class="g-search-text tui_searchint g-search-focus">
                        </div>
                        <input type="submit" value="搜索" class="g-search-submit">
                        <input type="hidden" disabled="disabled" name="cid" value="td.t">
                  </form>
            </div>
            <div class="g-mini-user">
                  <ul id="uInfo" class="g-user">
                        <li id="viewRecordNav" class="g-viewlist view_record"><span class="handle"><b class="view_icon"> </b><a target="_blank" href="http://www.tudou.com/my/programs/watched.html#watched">观看历史</a></span>

                              <div id="viewRecordWrap" class="g-viewlist-nav">
                                    <div class="sub_tp"> </div>
                                    <div class="sub_bd">
                                          <p class="viewRecord_notify" id="viewRecordNotify">没有最近的观看记录</p>
                                          <div class="viewRecord_container" id="viewRecordContainer" style="display: none;"> </div>
                                          <div class="viewRecord_do" id="viewRecordDo" style="display: none;"><a class="save" href="http://www.tudou.com/my/programs/watched.html#watched/?page=1&amp;sort=1&amp;desc=true&amp;save=true" target="_blank" id="viewRecordSave">永久保存观看记录</a></div>
                                    </div>

                                    <div class="sub_ft"><a target="_blank" href="http://www.tudou.com/my/playlist/list/quicklist.html">我的点播单(<em id="quickNum">1</em>)</a></div>
                              </div>
                        </li>
                        <li><a id="reg" target="_blank" href="http://login.tudou.com/reg.do">注册</a></li>
                        <li><a id="login" target="_blank" href="http://login.tudou.com/login.do?noreg=ok">登录</a></li>
                  </ul>

                  <a target="_blank" href="http://www.tudou.com/my/program/publish.html" class="g-upload">上传视频</a> </div>
      </div>
</div>
<!-- /header --> 
<!-- peter -->
<?php echo $content; ?>
<!--peter -->

<!-- footer -->
<div id="gBot" class="g-bot g-bot-w g-bot-play">
      <div class="g-bot-main">
            <div class="logo"><a href="http://www.tudou.com" title="土豆网 tudou.com 每个人都是生活的导演">土豆网</a></div>
            <div class="g-searchbar">
                  <div class="g-mini-search g-search">
                        <form target="_blank" searchtype="" method="get" action="http://www.soku.com/t/nisearch.do">
                              <div class="g-search-box">
                                    <input type="text" onblur="this['_gs_focus']=0" onfocus="this['_gs_focus']=1" autocomplete="off" name="kw" value="" accesskey="s" class="g-search-text tui_searchint g-search-focus"><a href="http://www.rizhaotea.net" style="display:none;"></a>

                              </div>
                              <input type="submit" value="搜索" class="g-search-submit">
                              <input type="hidden" disabled="disabled" name="cid" value="td.t">
                        </form>
                  </div>
                  <a target="_blank" class="g-rank" href="http://www.tudou.com/top/rank.html">排行榜</a> </div>
            <div class="g-sitemap">
                  <ul class="g-category">

                        <li><a hidefocus="true" rel="1" href="#">频道</a></li>
                        <li><a hidefocus="true" rel="2" href="#">创新产品</a></li>
                        <li><a hidefocus="true" rel="3" href="#">软件</a></li>
                        <li><a hidefocus="true" rel="4" href="#">帮助</a></li>
                        <li class="last"><a hidefocus="true" rel="5" href="#">公司</a></li>
                  </ul>

                  <ul class="g-cateitem g-cate-chs">
                        <li><a target="_blank" href="http://imake.tudou.com/">原创</a></li>
                        <li class="tv"><a target="_blank" href="http://tv.tudou.com/">电视剧</a></li>
                        <li><a target="_blank" href="http://movie.tudou.com/">电影</a></li>
                        <li><a target="_blank" href="http://zy.tudou.com/">综艺</a></li>
                        <li class="clear"><a target="_blank" href="http://cartoon.tudou.com/">动漫</a></li>

                        <li><a target="_blank" href="http://news.tudou.com/">热点</a></li>
                        <li class="tv"><a target="_blank" href="http://fortune.tudou.com/">财富</a></li>
                        <li><a target="_blank" href="http://auto.tudou.com/">汽车</a></li>
                        <li><a target="_blank" href="http://it.tudou.com/">科技</a></li>
                        <li><a target="_blank" href="http://sports.tudou.com/">体育</a></li>
                        <li><a target="_blank" href="http://ent.tudou.com/">娱乐</a></li>

                        <li><a target="_blank" href="http://music.tudou.com/">音乐</a></li>
                        <li class="clear"><a target="_blank" href="http://game.tudou.com/">游戏</a></li>
                        <li><a target="_blank" href="http://fun.tudou.com/">搞笑</a></li>
                        <li class="tv"><a target="_blank" href="http://fashion.tudou.com/">风尚</a></li>
                        <li><a target="_blank" href="http://beauty.tudou.com/">美容</a></li>
                        <li><a target="_blank" href="http://lady.tudou.com/">女性</a></li>

                        <li><a target="_blank" href="http://life.tudou.com/">乐活</a></li>
                        <li><a target="_blank" href="http://health.tudou.com/">健康</a></li>
                        <li><a target="_blank" href="http://edu.tudou.com/">教育</a></li>
                        <li><a target="_blank" href="http://city.tudou.com">城市</a></li>
                  </ul>
                  <ul class="g-cateitem">
                        <li><a target="_blank" href="http://www.tudou.com/my/tui/square.html">推广场</a></li>

                        <li><a target="_blank" href="http://dp.tudou.com"> 豆泡</a></li>
                  </ul>
                  <ul class="g-cateitem">
                        <li><a target="_blank" href="http://www.tudou.com/soft/speedup.html">飞速土豆</a></li>
                        <li><a target="_blank" href="http://www.tudou.com/soft/itudou.html">iTudou</a></li>
                        <li><a target="_blank" href="http://w.tudou.com">无线客户端</a></li>

                        <li><a target="_blank" href="http://www.tudou.com/soft/sharktudou.html">鲨鱼土豆</a></li>
                  </ul>
                  <ul class="g-cateitem">
                        <li><a target="_blank" href="http://www.tudou.com/service/feedback/">帮助反馈</a></li>
                        <li><a target="_blank" href="http://www.tudou.com/service/reg/">玩转土豆</a></li>
                        <li><a href="#" id="translate_s2t">繁體版</a></li>
                  </ul>

                  <ul class="g-cateitem">
                        <li><a href="http://www.tudou.com/about/cn/" target="_blank">关于土豆</a></li>
                        <li><a href="http://www.tudou.com/about/en/" target="_blank">About Us</a></li>
                        <li><a href="http://www.tudou.com/about/news/" target="_blank">土豆新闻</a></li>
                        <li><a href="http://www.tudou.com/about/cn/joinus.html" target="_blank">招贤纳士</a></li>
                        <li><a href="http://www.tudou.com/about/cn/contact.html" target="_blank">联系土豆</a></li>

                        <li><a href="http://www.tudou.com/tv/" target="_blank">合作伙伴</a></li>
                        <li><a href="http://www.tudou.com/about/media/2012/m1.html" target="_blank">媒体声音</a></li>
                        <li><a href="http://www.tudou.com/about/cn/agreement.html" target="_blank">使用土豆前必读</a></li>
                  </ul>
            </div>
      </div>
      <div class="g-licence">

            <ul>
                  <li>Copyright &copy; 2005-2012 土豆网 <a target="_blank" href="http://www.tudou.com/">(www.tudou.com)</a></li>
                  <li>沪ICP证：<a target="_blank" href="http://www.miibeian.gov.cn/publish/query/indexFirst.action">沪B2-20120009</a>&nbsp; 网络视听许可证：<a target="_blank" href="http://css.tudouui.com/skin/__g/img/gov/xkz.jpg">0908301</a></li>
                  <li>广播电视节目制作经营许可证：<a target="_blank" href="http://css.tudouui.com/skin/__g/img/gov/gbz.png">(沪)字第678号</a></li>

                  <li>沪公网安备：3101040256</li>
            </ul>
            <ul>
                  <li>药品服务许可证：<a target="_blank" href="http://css.tudouui.com/skin/__g/img/gov/yyz.jpg">(沪)-非经营性-2008-0051</a></li>
                  <li>网络文化经营许可证：<a target="_blank" href="http://css.tudouui.com/skin/__g/img/gov/whz.jpg">沪网文[2012]0101-015</a></li>
                  <li>互联网医疗卫生许可证：<a target="_blank" href="http://css.tudouui.com/skin/__g/img/gov/wsz.jpg">沪卫(中医)网审[2012]第10015号</a></li>

                  <li>请使用者仔细阅读土豆<a target="_blank" href="http://www.tudou.com/about/agreement.php">使用协议</a>和<a target="_blank" href="http://www.tudou.com/about/copyright.php">版权政策</a></li>
            </ul>
            <ul class="last">
                  <li><a href="http://net.china.com.cn" title="中国互联网违法和不良信息举报中心" target="_blank">中国互联网违法和不良信息举报中心</a></li>
                  <li><a href="http://www.shjubao.cn" title="上海市举报中心" target="_blank">上海市举报中心</a> <a href="http://www.cyberpolice.cn" title="网络违法犯罪举报网站" target="_blank">网络违法犯罪举报网站</a></li>

                  <li><a href="javascript:;" title="“扫黄打非”办公室举报中心：12390">“扫黄打非”办公室举报中心：12390</a></li>
            </ul>
      </div>
</div>
<!--/footer -->
<script>
	$(function(){
			$(".g-search-text").val('');
			setTimeout(function(){$(".g-search-text").val('');},200);
	})
</script>

</body>
</html>
