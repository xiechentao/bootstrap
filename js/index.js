window.onload = function() {
			//获取dom元素
			var arrowEl = document.querySelector("#head .headMain > .arrow"); //tab标签下的小三角
			var liNodes = document.querySelectorAll("#head .headMain > .nav > .list > li"); //顶部导航栏
			var upNodes = document.querySelectorAll("#head .headMain > .nav > .list > li .up"); //导航栏第二层
			var firstLiNode = liNodes[0]; //第一个li
			var firstUpNode = firstLiNode.querySelector(".up");
			var cList = document.querySelector("#content .list");
			var head = document.querySelector("#head");
			var content = document.querySelector("#content");
			var cLiNodes = document.querySelectorAll("#content .list > li");
			var home1Lis = document.querySelectorAll("#content > .list > .home .home1 >li");
			var home2Lis = document.querySelectorAll("#content > .list > .home .home2 >li");

			var aboutUl = document.querySelectorAll('#content > .list > .about .about3 .item > ul')
			var roundLis = document.querySelectorAll("#content > .round li");

			var music = document.querySelector('#head > .headMain .music');
			var audio = document.querySelector('#head > .headMain audio');

			var line = document.querySelector("#mask .line");
			var maskDiv = document.querySelectorAll("#mask div");
			var mask = document.querySelector("#mask");
			//内容区
			var timer = 0;
			var now = 0;
			var oldIndex = 0;
			var autoIndex = 0;
			var timer3D = 0;
			var beforeIndex = 0;

			//开机动画
			maskAn();

			function maskAn() {
				var arr = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg', 'about1.jpg', 'about2.jpg', 'about3.jpg', 'about4.jpg', 'worksimg1.jpg', 'worksimg2.jpg', 'worksimg3.jpg', 'worksimg4.jpg', 'team.png', 'greenLine.png'];
				var flag = 0;
				for(var i = 0; i < arr.length; i++) {
					var img = new Image();
					img.src = 'img/' + arr[i];
					img.onload = function() {
						flag++;
						line.style.width = flag / arr.length * 100 + '%';
					}
					line.addEventListener('transitionend', function() {
						if(flag === arr.length) {
							for(var i = 0; i < maskDiv.length; i++) {
								maskDiv[i].style.height = 0 + 'px';
								this.style.display = 'none';
								home3D();
								audio.play();
							}
						}
					})
					maskDiv[0].addEventListener('transitionend', function() {
						mask.remove()
					})
				}
			}

			//每一屏的出入场动画
			var anArr = [{ // 第一屏出入场
					inAn: function() {
						var home1 = document.querySelector('#content > .list > .home .home1');
						var home2 = document.querySelector('#content > .list > .home .home2');

						home1.style.transform = 'translateY(0)';
						home2.style.transform = 'translateY(0)';
						home1.style.opacity = '1';
						home2.style.opacity = '1';
					},
					outAn: function() {
						var home1 = document.querySelector('#content > .list > .home .home1');
						var home2 = document.querySelector('#content > .list > .home .home2');

						home1.style.transform = 'translateY(-400px)';
						home2.style.transform = 'translateY(200px)';
						home1.style.opacity = '0';
						home2.style.opacity = '0';
					}
				},
				{ // 2 第二屏出入场
					inAn: function() {
						var plane1 = document.querySelector('#content .course .plane1');
						var plane2 = document.querySelector('#content .course .plane2');
						var plane3 = document.querySelector('#content .course .plane3');

						plane1.style.transform = 'translate(0 , 0)';
						plane2.style.transform = 'translate(0 , 0)';
						plane3.style.transform = 'translate(0 , 0)';

						plane1.style.opacity = '1';
						plane2.style.opacity = '1';
						plane3.style.opacity = '1';
					},
					outAn: function() {
						var plane1 = document.querySelector('#content .course .plane1');
						var plane2 = document.querySelector('#content .course .plane2');
						var plane3 = document.querySelector('#content .course .plane3');

						plane1.style.transform = 'translate(-200px , -200px)';
						plane2.style.transform = 'translate(-200px , 200px)';
						plane3.style.transform = 'translate(200px , -200px)';

						plane1.style.opacity = '0';
						plane2.style.opacity = '0';
						plane3.style.opacity = '0';
					}
				},
				{ // 3 第三屏出入场
					inAn: function() {
						var pencel1 = document.querySelector('#content .works .pencel1');
						var pencel2 = document.querySelector('#content .works .pencel2');
						var pencel3 = document.querySelector('#content .works .pencel3');

						pencel1.style.transform = 'translateY(0)';
						pencel2.style.transform = 'translateY(0)';
						pencel3.style.transform = 'translateY(0)';
					},
					outAn: function() {
						var pencel1 = document.querySelector('#content .works .pencel1');
						var pencel2 = document.querySelector('#content .works .pencel2');
						var pencel3 = document.querySelector('#content .works .pencel3');

						pencel1.style.transform = 'translateY(-200px)';
						pencel2.style.transform = 'translateY(200px)';
						pencel3.style.transform = 'translateY(200px)';
					}
				},
				{ // 4 第四屏出入场
					inAn: function() {
						var Rect1 = document.querySelector('#content  .list .about .about3  .item:nth-child(1)');
						var Rect2 = document.querySelector('#content  .list .about .about3  .item:nth-child(2)');

						Rect1.style.transform = 'rotate(0)';
						Rect2.style.transform = 'rotate(0)';
					},
					outAn: function() {
						var Rect1 = document.querySelector('#content  .list  .about .about3  .item:nth-child(1)');
						var Rect2 = document.querySelector('#content  .list  .about .about3  .item:nth-child(2)');

						Rect1.style.transform = 'rotate(45deg)';
						Rect2.style.transform = 'rotate(-45deg)';
					}
				},
				{ //5
					inAn: function() {
						var Text1 = document.querySelector('#content > .list > .team .team1');
						var Text2 = document.querySelector('#content > .list > .team .team2');
						Text1.style.transform = 'translateX(0)';
						Text2.style.transform = 'translateX(0)';
					},
					outAn: function() {
						var Text1 = document.querySelector('#content > .list > .team .team1');
						var Text2 = document.querySelector('#content > .list > .team .team2');

						Text1.style.transform = 'translateX(-200px)';
						Text2.style.transform = 'translateX(200px)';
					}
				}
			]
			//进出场动画
			//音频播放,播放音乐
			music.onclick = function() {
				if(audio.paused) { //如果没有播放，点击之后就开始播放，并且换一种图片
					audio.play();
					music.style.background = 'url(img/musicon.gif)';
				} else { //如果在播放，点击之后就停止播放，并且换一种图片
					audio.pause();
					music.style.background = 'url(img/musicoff.gif)';
				}
			}
			for(var i = 0; i < anArr.length; i++) {
				anArr[i]['outAn']();
			}
			setTimeout(function() {
				anArr[0].inAn();
			}, 1000)
			//点击小圆点从左往右
			//home3D();轮播图
			function home3D() {
				for(var i = 0; i < home2Lis.length; i++) {
					home2Lis[i].index = i;
					home2Lis[i].onclick = function() {
						clearInterval(timer3D)
						for(var i = 0; i < home2Lis.length; i++) {
							home2Lis[i].classList.remove('active') //清除其他li标签的active
						}
						this.classList.add('active') //设置当前的class类为active
						//手动轮播
						//从左往右点击  leftHide rightShow  当前节点大于上一节点
						if(oldIndex < this.index) {
							home1Lis[this.index].classList.remove('leftHide')
							home1Lis[this.index].classList.remove('leftShow')
							home1Lis[this.index].classList.remove('rightHide')
							home1Lis[this.index].classList.add('rightShow')

							home1Lis[oldIndex].classList.remove('rightShow')
							home1Lis[oldIndex].classList.remove('leftShow')
							home1Lis[oldIndex].classList.remove('rightHide')
							home1Lis[oldIndex].classList.add('leftHide')
						}
						//从右往左点击  leftShow rightHide  当前节点小于上一节点
						if(oldIndex > this.index) {
							home1Lis[oldIndex].classList.remove('leftHide')
							home1Lis[oldIndex].classList.remove('leftShow')
							home1Lis[oldIndex].classList.remove('rightShow')
							home1Lis[oldIndex].classList.add('rightHide')

							home1Lis[this.index].classList.remove('rightShow')
							home1Lis[this.index].classList.remove('leftHide')
							home1Lis[this.index].classList.remove('rightHide')
							home1Lis[this.index].classList.add('leftShow')
						}
						oldIndex = this.index;
					}
				}
				move();

				function move() {
					clearInterval(timer3D)
					timer3D = setInterval(function() {
						autoIndex++;
						if(autoIndex > home1Lis.length) {
							autoIndex = 0;
						}
						for(var i = 0; i < home2Lis.length; i++) {
							home2Lis[i].classList.remove('active') //清除其他li标签的active
							home2Lis[autoIndex].classList.add('active');
						}
						home1Lis[autoIndex].classList.remove('leftHide')
						home1Lis[autoIndex].classList.remove('leftShow')
						home1Lis[autoIndex].classList.remove('rightHide')
						home1Lis[autoIndex].classList.add('rightShow')

						home1Lis[oldIndex].classList.remove('rightShow')
						home1Lis[oldIndex].classList.remove('leftShow')
						home1Lis[oldIndex].classList.remove('rightHide')
						home1Lis[oldIndex].classList.add('leftHide')

						oldIndex = autoIndex;
					}, 2000)
				}
			}

			window.onresize = function() {
				contentBind();
				cList.style.top = -now * (document.documentElement.clientHeight - head.offsetHeight) + "px";
				arrowEl.style.left = liNodes[now].offsetLeft + liNodes[now].offsetWidth / 2 - arrowEl.offsetWidth / 2 + "px";
			}

			//第四屏交互     获取ul标签  动态添加四个 li标签每个 li标签占ul标签的四分之一；
			picBoom();

			function picBoom() {
				for(var i = 0; i < aboutUl.length; i++) {
					change(aboutUl[i]);
				}

				function change(Ul) {
					var w = Ul.offsetWidth / 2;
					var src = Ul.dataset.src;
					var h = Ul.offsetHeight / 2;

					//for循环动态添加四个 li标签 和img标签
					for(var i = 0; i < 4; i++) {
						var imgFlag = i;
						var liNode = document.createElement('li');
						var imgNode = document.createElement('img');
						liNode.style.width = w + 'px';
						liNode.style.height = h + 'px';
						/*
						 1.left:0	    top:0
						 2.left:-w		top:0
						 3.left:0      	top:-h
						 4.left:-w      top:-h
						 */
						//注意：img 需要参照 li 进行定位；否则会参照item定位了，导致图片一直对不上
						imgNode.style.left = -(i % 2) * w + "px";
						imgNode.style.top = -Math.floor(i / 2) * h + "px";
						imgNode.src = src;
						liNode.appendChild(imgNode)
						Ul.appendChild(liNode)
					}

					console.log(imgFlag)
					Ul.onmouseenter = function() {
						var imgNode = this.querySelectorAll('li > img');
						/*
						 1.left:0	    top:0				left:0     top: h
						 2.left:-w		top:0				left:-2w   top:0
						 3.left:0      	top:-h				left: w   top:0
						 4.left:-w      top:-h				left: 0    top:-2h
						 */
						imgNode[0].style.top = h + 'px';
						imgNode[1].style.left = -2 * w + 'px';
						imgNode[2].style.left = w + 'px';
						imgNode[3].style.top = -2 * h + 'px'
					}
					Ul.onmouseleave = function() {
						var imgNode = this.querySelectorAll('li > img');
						/*
						 1.left:0	    top:0				left:0     top: h
						 2.left:-w		top:0				left:-2w   top:0
						 3.left:0      	top:-h				left: w   top:0
						 4.left:-w      top:-h				left: 0    top:-2h
						 */
						imgNode[0].style.top = 0 + 'px';
						imgNode[1].style.left = -w + 'px';
						imgNode[2].style.left = 0 + 'px';
						imgNode[3].style.top = -h + 'px'
					}

				}
			}

			//判断滚轮
			if(content.addEventListener) {
				content.addEventListener('DOMMouseScroll', function(ev) {
					ev = ev || event;
					clearTimeout(timer);
					timer = setTimeout(function() {
						fn(ev);
					}, 200)
				});
			}

			content.onmousewheel = function(ev) {
				ev = ev || event;
				clearTimeout(timer);
				timer = setTimeout(function() {
					fn(ev);
				}, 200)
			};

			function fn(ev) {
				ev = ev || event;
				var dir = '';
				if(ev.wheelDelta) {
					dir = ev.wheelDelta > 0 ? 'up' : 'down';
				} else if(ev.detail) {
					dir = ev.detail < 0 ? 'up' : 'down';
				}

				beforeIndex = now; //实现出场动画

				switch(dir) {
					case 'up':
						if(now > 0) {
							now--;
							move(now);
						};
						break;
					case 'down':
						if(now < liNodes.length - 1) {
							now++;
							move(now);
						};
						break;
				}
			}

			contentBind();

			function contentBind() {
				content.style.height = document.documentElement.clientHeight - head.offsetHeight + 'px';
				for(var i = 0; i < cLiNodes.length; i++) {
					cLiNodes[i].style.height = document.documentElement.clientHeight - head.offsetHeight + 'px';
				}
			}

			//头部交互
			headBind();

			function headBind() {
				firstUpNode.style.width = "100%";
				arrowEl.style.left = firstLiNode.offsetLeft + firstLiNode.offsetWidth / 2 - arrowEl.offsetWidth / 2 + "px";
				//	头部点击按钮
				for(var i = 0; i < liNodes.length; i++) {
					//转绑很重要
					liNodes[i].index = i;
					liNodes[i].onclick = function() {
						//i:liNodes.length 5
						beforeIndex = now;
						move(this.index);
						now = this.index;
					}
				}
				//侧方点击按钮
				for(var i = 0; i < roundLis.length; i++) {
					//转绑很重要
					roundLis[i].index = i;
					roundLis[i].onclick = function() {
						beforeIndex = now;
						move(this.index);
						now = this.index;
					}
				}
			}

			function move(index) {
				for(var i = 0; i < upNodes.length; i++) {
					//upNodes[i].style.width="0";
					upNodes[i].style.width = "";
				}
				for(var i = 0; i < roundLis.length; i++) {
					//upNodes[i].style.width="0";
					roundLis[i].className = "";
				}
				roundLis[index].className = "active";

				arrowEl.style.left = liNodes[index].offsetLeft + liNodes[index].offsetWidth / 2 - arrowEl.offsetWidth / 2 + "px";
				cList.style.top = -index * (document.documentElement.clientHeight - head.offsetHeight) + "px";

				//进出场动画
				if(anArr[index] && typeof anArr[index]['inAn'] === 'function') {
					anArr[index]['inAn']();
				}
				if(anArr[beforeIndex] && typeof anArr[beforeIndex]['outAn'] === 'function') {
					anArr[beforeIndex]['outAn']();
				}
			}
		}