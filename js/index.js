//自定义的JS样式
'use strict';

$('#myTabs a').click(function(e) {
	e.preventDefault()
	$(this).tab('show')
})
$(function() {
	$('[data-toggle="tooltip"]').tooltip()
})

// tabs处横向滚动条
$(function() {
	let $winWid = $(window).width()
	//获取tabs外部标签
	let $ulwapper = $('.ul-wapper');
	//定义初始宽度
	let width = 30;
	//获取所有子元素的宽度和
	let $ul = $('#myTabs'); //ul标签
	let $lis = $ul.children(); //li标签
	//遍历子元素
	$lis.each(function(index, item) {
		//console.log(index , item)
		//console.log(index.clientWidth)
		width += item.clientWidth //width为li的总合
	})
	//判断当前屏幕宽度是否小于li的宽度，超出了就显示滚动条，不超出不显示
	if($winWid < width) {
		$ul.css('width', width)
	}

	//a点击注册事件
	let $a = $('.newsTit li a') //找到a标签
	let $newTit = $('.news .title') //news下面的title  div标签
	$a.on('click', function() { //给a绑定点击事件
		let $title = $(this).data('title')
		$newTit.html($title)
	})
})

//吸顶效果
$('#myAffix').affix({
	offset: {
		top: 100,
		bottom: function() {
			return(this.bottom = $('.footer').outerHeight(true))
		}
	}
})
// 滑动轮播图
// 1.判断是向那个方向滑动(左 还是 右)  slideStart()   slideEnd()
// 2.手开始触摸的坐标和手抬起的坐标
// 3.如果手开始的坐标小于手结束的坐标，就是向右滑，图片是上一张 prev
// 4.如果手开始的坐标大于手结束的坐标，就是向左滑，图片是下一张 next

function slide() {
	// 获取到事件产生的元素
	let $banner = $('#carousel-example-generic')
	// 第一次按下的X轴坐标
	let startClientX;
	let endClientX;
	let sum;
	// 定一个数值 在这个数值之内的话不触发事件，大于这个数值再触发事件
	let offset = 50;
	$banner.on('touchstart', function(e) {
		startClientX = e.touches[0].clientX
		//		console.log('开始',startClientX)
	});
	$banner.on('touchmove', function(e) {
		endClientX = e.touches[0].clientX
		//console.log('结束', endClientX)
	})
	$banner.on('touchend', function(e) {
		//控制精度
		let precision = Math.abs(startClientX - endClientX);
		// startClientX - endClientX 起始位置大于结束位置的话就滑到下一张，否则跳到上一张
		// 使用bootstrap中的carousel改变图片的走向 
		if(precision > offset){
			$(this).carousel(startClientX - endClientX > 0 ?'next':'prev')
		}
		
		
		//startClientX - endClientX > 0 ?'next':'prev'
	})
}
slide()