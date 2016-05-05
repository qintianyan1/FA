$(function(){
//导航 banner轮播
	var homebannerImgInner=$(".homebanner-img-inner");
	var homebannerRightLi=$(".homebanner-right-li");
	var index=0;
	homebannerImgInner.hide();
	homebannerImgInner.eq(index).fadeIn();
	homebannerRightLi.eq(index).css({background:"#bde9f1",borderColor:"#718c91"});
	function demo(type)
	{
		if(type=="r"){
			index++;
			if(index>=homebannerImgInner.length){
				index=0;
			}
		}
		if(type=="l"){
			index--;
			 if(index<=-1){
				index=homebannerImgInner.length-1
			}
		}
		homebannerImgInner.hide();
		homebannerImgInner.eq(index).fadeIn();
		homebannerRightLi.css({background:"#57838b",borderColor:"#8aa8ae"})
		homebannerRightLi.eq(index).css({background:"#bde9f1",borderColor:"#718c91"});
	}
	var t1=setInterval(function(){
		demo("r");
	},2000);

	
	var ne;
	var aa;

	$(".homebanner-right-li").hover(function(){
		clearInterval(t1);
		ne=$(this).index();
		homebannerRightLi.eq(ne).css({background:"#bde9f1",borderColor:"#718c91"});
		$(this).click(function(){
			homebannerImgInner.hide();
			homebannerImgInner.eq(ne).fadeIn();
			homebannerRightLi.css({background:"#57838b",borderColor:"#8aa8ae"});
			homebannerRightLi.eq(ne).css({background:"#bde9f1",borderColor:"#718c91"});
			index=ne;
			aa=ne;
		})
	},function(){
		homebannerRightLi.eq(ne).css({background:"#57838b",borderColor:"#8aa8ae"});
		homebannerRightLi.eq(aa).css({background:"#bde9f1",borderColor:"#718c91"});
		aa=9;
		t1=setInterval(function(){
				demo("r");
			},2000);
	})

	$(".homebanner-center-left").hover(function(){
		clearInterval(t1);
		//$(".homebanner-center-lefta").css({display:"block"});
	},function(){
		//$(".homebanner-center-lefta").css({display:"none"});
		t1=setInterval(function(){
			demo("r");
		},2000);
	})
	$(".homebanner-center-right").hover(function(){
		clearInterval(t1);
		//$(".homebanner-center-righta").css({display:"block"});
	},function(){
		//$(".homebanner-center-righta").css({display:"none"});
		t1=setInterval(function(){
			demo("r");
		},2000);
	})	
	$(".homebanner-center-left").click(function(){
		demo("l");
	})
	$(".homebanner-center-right").click(function(){
		demo("r");
	})

	$(".bav-ul-li-aa").hover(function(){
		$(this).find(".bav-ul-li-inner").stop();
		$(this).find(".bav-ul-li-inner").slideDown();
	},function(){
		$(this).find(".bav-ul-li-inner").stop();
		$(this).find(".bav-ul-li-inner").slideUp();
	})

	$(".mainbav-word").hover(function(){
		$(".mainbav-right-gouwuche-inner").css("display","block");
		$(".mainbav-right-gouwuchebai").css("display","block");
	},function(){
		$(".mainbav-right-gouwuche-inner").css("display","none");
		$(".mainbav-right-gouwuchebai").css("display","none");
	})

	$(".keyword-left").focus(function(){
		$(".keyword-inner").css("display","none");
		$(".keyword-innerdown").css("display","block");
		$(".keyword-left").css("borderColor","#ff6700");
		$(".keyword").css("borderColor","#ff6700");
	}).blur(function(){
		$(".keyword-inner").css("display","block");
		$(".keyword-innerdown").css("display","none");
		$(".keyword-left").css("borderColor","#e0e0e0");
		$(".keyword").css("borderColor","#e0e0e0");
	})

	$(".homebanner-left li").hover(function(){
		$(this).find(".homebanner-left-inner").css("display","block");
	},function(){
		$(this).find(".homebanner-left-inner").css("display","none");
	})

//小米明星单品	
	var a=0;
	function moves()
	{
		a++;
		if(a==2)
		{
			a=0;
		}
		$(".homestar-content-aa").animate({left:-1240*a},1000);
		if(a==0)
		{
			$(".homestar-title-right-one1 a").css("color","#ccc");
			$(".homestar-title-right-one2 a").css("color","#333");
		}
		if(a==1)
		{
			$(".homestar-title-right-one2 a").css("color","#ccc");
			$(".homestar-title-right-one1 a").css("color","#333");
		}
	}
	var t2=setInterval(moves,3000);
//为你推荐
	var as=0;
	function movec()
	{
		as++;
		if(as==2)
		{
			as=0;
		}
		$(".hometuijian-con").animate({left:-1240*a},1000);
		if(as==0)
		{
			$(".hometuijian-zuo a").css("color","#ccc");
			$(".hometuijian-you a").css("color","#333");
		}
		if(as==1)
		{
			$(".hometuijian-you a").css("color","#ccc");
			$(".hometuijian-zuo a").css("color","#333");
		}
	}
	var t2=setInterval(movec,3000);

/*选项卡*/
	$(".tapei-title").eq(0).css({color:"#ff6700",borderBottomColor:"#ff6700"});
	$(".tapei-con").eq(0).css({display:"block"});
	$(".tapei-title").hover(function(){
		var now1=$(this).index();
   		$(".tapei-title").css({color:"#000",borderBottomColor:"#f5f5f5"});
   		$(this).css({color:"#ff6700",borderBottomColor:"#ff6700"});
   		$(".tapei-con").css({display:"none"});
   		$(".tapei-con").eq(now1).css({display:"block"});
	},function(){})

	$(".peijian-title").eq(0).css({color:"#ff6700",borderBottomColor:"#ff6700"});
	$(".peijian-con").eq(0).css({display:"block"});
	$(".peijian-title").hover(function(){
		var now2=$(this).index();
   		$(".peijian-title").css({color:"#000",borderBottomColor:"#f5f5f5"});
   		$(this).css({color:"#ff6700",borderBottomColor:"#ff6700"});
   		$(".peijian-con").css({display:"none"});
   		$(".peijian-con").eq(now2).css({display:"block"});
	},function(){})

	$(".zhoubian-title").eq(0).css({color:"#ff6700",borderBottomColor:"#ff6700"});
	$(".zhoubian-con").eq(0).css({display:"block"});
	$(".zhoubian-title").hover(function(){
		var now3=$(this).index();
   		$(".zhoubian-title").css({color:"#000",borderBottomColor:"#f5f5f5"});
   		$(this).css({color:"#ff6700",borderBottomColor:"#ff6700"});
   		$(".zhoubian-con").css({display:"none"});
   		$(".zhoubian-con").eq(now3).css({display:"block"});
	},function(){})



	/*内容 轮播*/
//one
	$(".neirong-tushu .homeneirong-foot").eq(0).css({border:"2px solid #ff6700",background:"#fff"});
	var aaa=0;
	$(".neirong-tushu .homeneirong-foot").hover(function(){
		var num=$(this).index();
		if(aaa==num){
			return;
		}
		else{
			$(this).css("background","#ff6700");
		}
		$(this).click(function(){
			$(".neirong-tushu .homeneirong-foot").css({border:"2px solid #fff",background:"#333"});
			$(this).css({border:"2px solid #ff6700",background:"#fff"});
			$(".neirong-tushu .homeneirong-content-ul").animate({left:-216*num});
			aaa=num;
		})
	},function(){
		var num=$(this).index();
		if(aaa==num){
			return;
		}
		else{
			$(this).css("background","#333");
		}
		$(".neirong-tushu .homeneirong-foot").eq(aaa).css({border:"2px solid #ff6700",background:"#fff"});
	});
	$(".neirong-tushu .homeneirong-jiantou-left").click(function(){
		var l=$(".neirong-tushu .homeneirong-content-ul").position().left;
		var num=l/-216;
		if(num>=1){
			aaa=num-1;
			$(".neirong-tushu .homeneirong-foot").css({border:"2px solid #fff",background:"#333"});
			$(".neirong-tushu .homeneirong-foot").eq(aaa).css({border:"2px solid #ff6700",background:"#fff"});
			$(".neirong-tushu .homeneirong-content-ul").animate({left:-216*aaa});
		}
		else{
			return;
		}
	})
	$(".neirong-tushu .homeneirong-jiantou-right").click(function(){
		var r=$(".neirong-tushu .homeneirong-content-ul").position().left;
		var num=r/-216;
		if(num<=2){
			aaa=num+1;
			$(".neirong-tushu .homeneirong-foot").css({border:"2px solid #fff",background:"#333"});
			$(".neirong-tushu .homeneirong-foot").eq(aaa).css({border:"2px solid #ff6700",background:"#fff"});
			$(".neirong-tushu .homeneirong-content-ul").animate({left:-216*aaa});
		}
		else{
			return;
		}
	})
//two
	$(".neirong-zhuti .homeneirong-foot").eq(0).css({border:"2px solid #ff6700",background:"#fff"});
	var aab=0;
	$(".neirong-zhuti .homeneirong-foot").hover(function(){
		var num2=$(this).index();
		if(aab==num2){
			return;
		}
		else{
			$(this).css("background","#ff6700");
		}
		$(this).click(function(){
			$(".neirong-zhuti .homeneirong-foot").css({border:"2px solid #fff",background:"#333"});
			$(this).css({border:"2px solid #ff6700",background:"#fff"});
			$(".neirong-zhuti .homeneirong-content-ul").animate({left:-216*num2});
			aab=num2;
		})
	},function(){
		var num2=$(this).index();
		if(aab==num2){
			return;
		}
		else{
			$(this).css("background","#333");
		}
		$(".neirong-zhuti .homeneirong-foot").eq(aab).css({border:"2px solid #ff6700",background:"#fff"});
	});
	$(".neirong-zhuti .homeneirong-jiantou-left").click(function(){
		var l=$(".neirong-zhuti .homeneirong-content-ul").position().left;
		var num2=l/-216;
		if(num2>=1){
			aab=num2-1;
			$(".neirong-zhuti .homeneirong-foot").css({border:"2px solid #fff",background:"#333"});
			$(".neirong-zhuti .homeneirong-foot").eq(aab).css({border:"2px solid #ff6700",background:"#fff"});
			$(".neirong-zhuti .homeneirong-content-ul").animate({left:-216*aab});
		}
		else{
			return;
		}
	})
	$(".neirong-zhuti .homeneirong-jiantou-right").click(function(){
		var r=$(".neirong-zhuti .homeneirong-content-ul").position().left;
		var num2=r/-216;
		if(num2<=2){
			aab=num2+1;
			$(".neirong-zhuti .homeneirong-foot").css({border:"2px solid #fff",background:"#333"});
			$(".neirong-zhuti .homeneirong-foot").eq(aab).css({border:"2px solid #ff6700",background:"#fff"});
			$(".neirong-zhuti .homeneirong-content-ul").animate({left:-216*aab});
		}
		else{
			return;
		}
	})
//three
	$(".neirong-youxi .homeneirong-foot").eq(0).css({border:"2px solid #ff6700",background:"#fff"});
	var aac=0;
	$(".neirong-youxi .homeneirong-foot").hover(function(){
		var num3=$(this).index();
		if(aac==num3){
			return;
		}
		else{
			$(this).css("background","#ff6700");
		}
		$(this).click(function(){
			$(".neirong-youxi .homeneirong-foot").css({border:"2px solid #fff",background:"#333"});
			$(this).css({border:"2px solid #ff6700",background:"#fff"});
			$(".neirong-youxi .homeneirong-content-ul").animate({left:-216*num3});
			aac=num3;
		})
	},function(){
		var num3=$(this).index();
		if(aac==num3){
			return;
		}
		else{
			$(this).css("background","#333");
		}
		$(".neirong-youxi .homeneirong-foot").eq(aac).css({border:"2px solid #ff6700",background:"#fff"});
	});
	$(".neirong-youxi .homeneirong-jiantou-left").click(function(){
		var l=$(".neirong-youxi .homeneirong-content-ul").position().left;
		var num3=l/-216;
		if(num3>=1){
			aac=num3-1;
			$(".neirong-youxi .homeneirong-foot").css({border:"2px solid #fff",background:"#333"});
			$(".neirong-youxi .homeneirong-foot").eq(aac).css({border:"2px solid #ff6700",background:"#fff"});
			$(".neirong-youxi .homeneirong-content-ul").animate({left:-216*aac});
		}
		else{
			return;
		}
	})
	$(".neirong-youxi .homeneirong-jiantou-right").click(function(){
		var r=$(".neirong-youxi .homeneirong-content-ul").position().left;
		var num3=r/-216;
		if(num3<=2){
			aac=num3+1;
			$(".neirong-youxi .homeneirong-foot").css({border:"2px solid #fff",background:"#333"});
			$(".neirong-youxi .homeneirong-foot").eq(aac).css({border:"2px solid #ff6700",background:"#fff"});
			$(".neirong-youxi .homeneirong-content-ul").animate({left:-216*aac});
		}
		else{
			return;
		}
	})
//four
	$(".neirong-yingyong .homeneirong-foot").eq(0).css({border:"2px solid #ff6700",background:"#fff"});
	var aad=0;
	$(".neirong-yingyong .homeneirong-foot").hover(function(){
		var num4=$(this).index();
		if(aad==num4){
			return;
		}
		else{
			$(this).css("background","#ff6700");
		}
		$(this).click(function(){
			$(".neirong-yingyong .homeneirong-foot").css({border:"2px solid #fff",background:"#333"});
			$(this).css({border:"2px solid #ff6700",background:"#fff"});
			$(".neirong-yingyong .homeneirong-content-ul").animate({left:-216*num4});
			aad=num4;
		})
	},function(){
		var num4=$(this).index();
		if(aad==num4){
			return;
		}
		else{
			$(this).css("background","#333");
		}
		$(".neirong-yingyong .homeneirong-foot").eq(aad).css({border:"2px solid #ff6700",background:"#fff"});
	});
	$(".neirong-yingyong .homeneirong-jiantou-left").click(function(){
		var l=$(".neirong-yingyong .homeneirong-content-ul").position().left;
		var num4=l/-216;
		if(num4>=1){
			aad=num4-1;
			$(".neirong-yingyong .homeneirong-foot").css({border:"2px solid #fff",background:"#333"});
			$(".neirong-yingyong .homeneirong-foot").eq(aad).css({border:"2px solid #ff6700",background:"#fff"});
			$(".neirong-yingyong .homeneirong-content-ul").animate({left:-216*aad});
		}
		else{
			return;
		}
	})
	$(".neirong-yingyong .homeneirong-jiantou-right").click(function(){
		var r=$(".neirong-yingyong .homeneirong-content-ul").position().left;
		var num4=r/-216;
		if(num4<=2){
			aad=num4+1;
			$(".neirong-yingyong .homeneirong-foot").css({border:"2px solid #fff",background:"#333"});
			$(".neirong-yingyong .homeneirong-foot").eq(aad).css({border:"2px solid #ff6700",background:"#fff"});
			$(".neirong-yingyong .homeneirong-content-ul").animate({left:-216*aad});
		}
		else{
			return;
		}
	})


$(".homeneirong-ul-li").each(function(i){
		$(this).hover(function(){
				$(".homeneirong-jiantou-left").eq(i).css({opacity:1});
				$(".homeneirong-jiantou-right").eq(i).css({opacity:1});
			},function(){
				$(".homeneirong-jiantou-left").eq(i).css({opacity:0});
				$(".homeneirong-jiantou-right").eq(i).css({opacity:0});
			});
	})
		/*var r=0;
		$(".homeneirong-foot").each(function(j){
			$(this).hover(function(){
					var r=parseInt(j/4);
					$(this).css("background","#ff6700");
					var num=$(this).index();
					$(this).click(function(){
						$(".homeneirong-foot").eq(4*r).css({border:"2px solid #fff",background:"#333"});
						$(".homeneirong-foot").eq(4*r+1).css({border:"2px solid #fff",background:"#333"});
						$(".homeneirong-foot").eq(4*r+2).css({border:"2px solid #fff",background:"#333"});
						$(".homeneirong-foot").eq(4*r+3).css({border:"2px solid #fff",background:"#333"});
						$(this).css({border:"2px solid #ff6700",background:"#fff"});
						$(".homeneirong-content-ul").eq(r).animate({left:-216*num});
						aaa=num;
					})
				},function(){
					$(this).css("background","#333");
					$(".homeneirong-foot").eq(4*r).css({border:"2px solid #ff6700",background:"#fff"});
				});
		})*/
	


//评价
	var pingjia=function(a){
		//$('.content-con-li .content-pingjia').stop();
		$('.content-con-li .content-pingjia').eq(a).animate({height:80});
	}
	var pingjias=function(a){
		//$('.content-con-li .content-pingjia').stop();
		$('.content-con-li .content-pingjia').eq(a).animate({height:0});
	}
	$('.content-con-li').each(function(i){
		$(this).hover(function(){
			pingjia(i);
		},function(){
			pingjias(i);
		});
	})

})