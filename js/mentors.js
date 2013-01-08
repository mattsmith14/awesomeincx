(function (window, angular, $) {
		
		// On window load. This waits until images have loaded which is essential
		$(window).load(function(){
			
			// Fade in images so there isn't a color "pop" document load and then on window load
			$(".thumbnails img").fadeIn(500);
			
			// clone image
			$('.thumbnails img').each(function(){
				var el = $(this);
				el.css({"position":"absolute"}).wrap("<div class='img_wrapper' style='display: inline-block'>").clone().addClass('img_grayscale').css({"position":"absolute","z-index":"998","opacity":"0"}).insertBefore(el).queue(function(){
					var el = $(this);
					el.parent().css({"width":this.width,"height":this.height});
					el.dequeue();
				});
				this.src = grayscale(this.src);
			});
			
			// Fade image 
			$('.thumbnails img').mouseover(function(){
				$(this).parent().find('img:first').stop().animate({opacity:1}, 400);
			})
			$('.img_grayscale').mouseout(function(){
				$(this).stop().animate({opacity:0}, 400);
			});		
		});
		
		// Grayscale w canvas method
		function grayscale(src){
			var canvas = document.createElement('canvas');
			var ctx = canvas.getContext('2d');
			var imgObj = new Image();
			imgObj.src = src;
			canvas.width = imgObj.width;
			canvas.height = imgObj.height; 
			ctx.drawImage(imgObj, 0, 0); 
			var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
			for(var y = 0; y < imgPixels.height; y++){
				for(var x = 0; x < imgPixels.width; x++){
					var i = (y * 4) * imgPixels.width + x * 4;
					var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
					imgPixels.data[i] = avg; 
					imgPixels.data[i + 1] = avg; 
					imgPixels.data[i + 2] = avg;
				}
			}
			ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
			return canvas.toDataURL();
	    }
		

	function MentorsCtrl($scope) {
	  $scope.mentors = [{"title":"Founder","website":"http://www.linkedin.com/in/noahkagan","name":"Noah Kagan","company":"AppSumo","website_text":"Founder, AppSumo. Former Marketing Director, Mint.com. Former PM, Facebook","image":"http://awesomeinc.org/images/120x119xkagan.jpg.pagespeed.ic.56n827S4v9.jpg"},{"title":"Founder","website":"http://www.linkedin.com/in/nihalmehta","name":"Nihal Mehta","company":"LocalResponse. Partner, ENIAC Ventures","website_text":"Founder, LocalResponse. Partner, ENIAC Ventures","image":"http://awesomeinc.org/images/120x119xmehta.jpg.pagespeed.ic.5rqx5N3oxH.jpg"},{"title":"Founder","website":"http://www.engr.uky.edu/alumni/hod/davis-l-marksbury/","name":"Davis Marksbury","company":"Exstream Software (sold to HP)","website_text":"Founder, Exstream Software (sold to HP)","image":"http://awesomeinc.org/images/120x119xmarksbury.jpg.pagespeed.ic.Du_svn3ZEJ.jpg"},{"title":"Founder","website":"http://www.badgirlventures.com/index.php?option\u003dcom_content\u0026view\u003darticle\u0026id\u003d26\u0026Itemid\u003d34","name":"Candace Klein","company":"SoMoLend","website_text":"Founder, SoMoLend","image":"http://awesomeinc.org/images/120x119xklein.jpg.pagespeed.ic.ye9E0wYzyp.jpg"},{"title":"Founder","website":"http://www.linkedin.com/in/brendanlim","name":"Brendan Lim","company":"Kicksend. YC Grad","website_text":"Founder, Kicksend. YC Grad","image":"http://awesomeinc.org/images/120x119xlim.jpg.pagespeed.ic.Ld8nnIsq3_.jpg"},{"title":"Mayor","website":"http://www.lexingtonky.gov/index.aspx?page\u003d305","name":"Jim Gray","company":"Lexington    ","website_text":"Lexington Mayor","image":"http://awesomeinc.org/images/120x119xgray.jpg.pagespeed.ic.H0NVQ0uzYu.jpg"},{"title":"President \u0026 Co-Founder","website":"http://www.linkedin.com/in/seanshadmand","name":"Sean Shadmand","company":"Socialize, Inc","website_text":"President \u0026 Co-Founder, Socialize, Inc","image":"http://awesomeinc.org/images/120x119xshadmand.jpg.pagespeed.ic.lJ67RD2ZI3.jpg"},{"title":"Director","website":"http://www.linkedin.com/in/rickcoplin","name":"Rick Coplin","company":"TechColumbus. Venture Accelerator","website_text":"Venture Acceleration. Director, TechColumbus","image":"http://awesomeinc.org/images/119x119xcoplin.jpg.pagespeed.ic.yfHkCqJJgx.jpg"},{"title":"CEO \u0026 Founder","website":"http://www.linkedin.com/in/drodio","name":"Daniel Odio","company":"Socialize, Inc","website_text":"CEO \u0026 Co-Founder, Socialize, Inc","image":"http://awesomeinc.org/images/120x119xodio.jpg.pagespeed.ic.T31MmWJ9ZO.jpg"},{"title":"Executive Director. Angel Investor","website":"http://www.linkedin.com/pub/george-ward/8/482/500","name":"George Ward","company":"UK Coldstream","website_text":"Angel Investor. Executive Director at UK Coldstream","image":"http://awesomeinc.org/images/120x119xward.jpg.pagespeed.ic.J-xsNVHz7S.jpg"},{"title":"Owner","website":"http://www.linkedin.com/pub/alan-stein/1/143/813","name":"Alan Stein","company":"Lexington Legends","website_text":"Angel Investor. Lexington Legends Owner","image":"http://awesomeinc.org/images/120x119xstein.gif.pagespeed.ic.FcyAcZlsU2.png"},{"title":"Angel Investor. GM","website":"http://www.linkedin.com/pub/chris-young/1/94/499","name":"Chris Young","company":"Overbrook Farms","website_text":"Angel Investor. GM, Overbrook Farms","image":"http://awesomeinc.org/images/young.jpg"},{"title":"Angel Investor. Founder","website":"http://www.linkedin.com/pub/j-whitney-wallingford/16/3bb/7a6","name":"Whitney Wallingford","company":"Wallingford Law","website_text":"Angel Investor. Founder, Wallingford Law","image":"http://awesomeinc.org/images/wallingford.jpg"},{"title":"Founder. Angel Investor","website":"http://www.linkedin.com/pub/ben-self/0/96a/460","name":"Ben Self","company":"State Digital","website_text":"Founder, Blue State Digital. Angel Investor","image":"http://awesomeinc.org/images/self.jpg"},{"title":"Senior Director","website":"http://www.linkedin.com/pub/sean-o-leary/6/977/556","name":"Sean O\u0027Leary","company":"KSTC","website_text":"Senior Director, KSTC","image":"http://awesomeinc.org/images/oleary.jpg"},{"title":"Associate Dean","website":"http://www.linkedin.com/pub/bruce-walcott/25/822/380","name":"Bruce Walcott","company":"University of Kentucky","website_text":"Associate Dean, University of Kentucky","image":"http://awesomeinc.org/images/walcott.jpg"},{"title":"Angel Investor","website":"http://www.linkedin.com/pub/richard-c-rick-miller/b/128/b54","name":"Rick Miller","company":"","website_text":"Angel Investor","image":"http://awesomeinc.org/images/miller.jpg"},{"title":"ICC Director","website":"http://www.linkedin.com/pub/warren-nash/14/8b9/68b","name":"Warren Nash","company":"Lexington","website_text":"Lexington ICC Director","image":"http://awesomeinc.org/images/nash.jpg"},{"title":"Director","website":"http://www.linkedin.com/pub/dov-rosenberg/0/45/1b8","name":"Dov Rosenberg","company":"Allos Ventures","website_text":"Director, Allos Ventures","image":"http://awesomeinc.org/images/rosenberg.jpg"},{"title":"Owner","website":"http://www.linkedin.com/pub/bryce-anderson/5/90/6b","name":"Bryce Anderson","company":"Orange Leaf Frozen Yogurt","website_text":"Owner, Orange Leaf Frozen Yogurt","image":"http://awesomeinc.org/images/anderson.jpg"},{"title":"Principal","website":"http://www.linkedin.com/in/kelleysloane","name":"Kelley Sloane","company":"Sloane Marketing","website_text":"Principal, Sloane Marketing. Former VP Mktg, Exstream Software","image":"http://awesomeinc.org/images/sloan.jpg"},{"title":"President. Angel Investor","website":"http://www.linkedin.com/in/erichauck1","name":"Eric Hauck","company":"Equinext","website_text":"President, Equinext. Angel Investor","image":"http://awesomeinc.org/images/hauck.jpg"},{"title":"CEO. Founder","website":"http://www.linkedin.com/pub/randall-stevens/0/363/232","name":"Randall Stevens","company":"Punndit. Archvision","website_text":"CEO, Punndit. Founder, Archvision","image":"http://awesomeinc.org/images/stevens.jpg"},{"title":"Director","website":"http://www.linkedin.com/pub/gordon-garrett/2/209/267","name":"Gordon Garrett","company":"KY Small Business Development Center","website_text":"Director, KY Small Busienss Development Center","image":"http://awesomeinc.org/images/garrett.jpg"},{"title":"Owner","website":"http://www.linkedin.com/in/evanmorris","name":"Evan Morris","company":"Orange Leaf Frozen Yogurt","website_text":"Owner, Orange Leaf Frozen Yogurt","image":"http://awesomeinc.org/images/morris.jpg"},{"title":"Attorney","website":"http://www.linkedin.com/in/kensagan","name":"Ken Sagan","company":"Stites \u0026 Harbison","website_text":"Attorney, Stites \u0026 Harbison","image":"http://awesomeinc.org/images/sagan.jpg"},{"title":"Owner","website":"http://www.facebook.com/sizemore","name":"Jeremiah Sizemore","company":"Orange Leaf Frozen Yogurt","website_text":"Owner, Orange Leaf Frozen Yogurt","image":"http://awesomeinc.org/images/sizemore.jpg"},{"title":"Wealth Manager","website":"http://www.linkedin.com/in/chadbischof","name":"Chad Bischof","company":"Strong Tower Group","website_text":"Wealth Management, Strong Tower Group","image":"http://awesomeinc.org/images/bischof.jpg"},{"title":"Project Manager","website":"http://www.linkedin.com/pub/keith-kurzendoerfer/3/aa4/127","name":"Keith Kurzendoerfer","company":"APAX Software","website_text":"Project Manager, APAX Software","image":"http://awesomeinc.org/images/kurzendoerfer.jpg"},{"title":"Founder. Owner","website":"http://www.linkedin.com/in/wayneyeager","name":"Wayne Yeager","company":"Webalytics. Bailey Run Farm","website_text":"Founder, Webalytics. Owner at Bailey Run Farm","image":"http://awesomeinc.org/images/yeager.jpg"},{"title":"Founder","website":"http://www.linkedin.com/pub/drew-curtis/18/285/32b","name":"Drew Curtis","company":"Fark.com","website_text":"Founder, Fark.com","image":"http://awesomeinc.org/images/120x119xcurtis.jpg.pagespeed.ic.VTQQMUw6pQ.jpg"}];
	}

	window.MentorsCtrl = MentorsCtrl;
}(window, angular, jQuery));