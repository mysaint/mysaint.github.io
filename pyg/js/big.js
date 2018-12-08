        
        var move = document.getElementById('move');
		var fix = document.getElementById('fix');
		var big = document.getElementById('big');
		var b = document.getElementById('b');
		     fix.onmouseenter = function(){
				 move.className = "move active";
				 big.className = "big active";
			 }
			 fix.onmouseleave = function(){
				 move.className = "move";
				 big.className = "big";
			 }
			 fix.onmousemove = function(e){
				 var _e = window.event || e;
				 var x = _e.clientX - this.offsetLeft - move.offsetWidth/2;
				 var y = _e.clientY - this.offsetTop - move.offsetHeight/2;
				 if(x < 0){
					 x = 0;
				 }
				 if(y < 0){
					y = 0;
				}
				 if(x > this.offsetWidth - move.offsetWidth){
					 x = this.offsettWidth - move.offsetWidth;
				 }

			     if(y > this.offsettHeight -move.offsetHeight){
					y = this.pffsetHeight - move.offsetHeight;
				}
				// var scope = 1700/300;
				// var img_x = -(x * scope);
				// var img_y = -(y * scope);

				move.style.left = x + "px";
				move.style.top = y + "px";
				b.style.left = -x + "px";
				b.style.top = -y + "px";


			}
		
