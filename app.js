//::::::::::::::::::::::::::::::::::::::::::::::::::
// Анимация текстовых параграфов
//::::::::::::::::::::::::::::::::::::::::::::::::::

const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
	window.addEventListener("scroll", animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 0.6;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}

	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.scrollX || document.documentElement.scrollLeft,
			scrollTop = window.scrollY || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	setTimeout(() => {
		animOnScroll();
	}, 300);

}


const animIMGs = document.querySelectorAll("._anim-IMG");

if (animIMGs.length > 0) {
  window.addEventListener("scroll", animOnScrollIMG);

  function animOnScrollIMG() {
    for (let index = 0; index < animIMGs.length; index++) {
      const animIMG = animIMGs[index];
      const animIMGHeight = animIMG.offsetHeight;
      const animIMGOffset = offsetIMG(animIMG).top;
      const animIMGStart = 3;

      let animIMGPoint = window.innerHeight - animIMGHeight / animIMGStart;
      if (animIMGHeight > window.innerHeight) {
        animIMGPoint = window.innerHeight - window.innerHeight / animIMGStart;
      }

      if ((scrollY > animIMGOffset - animIMGPoint) && scrollY < (animIMGOffset + animIMGHeight)) {
        animIMG.classList.add('_active-IMG');
      } else {
        if (!animIMG.classList.contains('_anim-no-IMG')) {
          animIMG.classList.remove('_active-IMG');
        }
      }
    }
  }

  function offsetIMG(el) {
    const rectIMG = el.getBoundingClientRect(),
      scrollLeft = window.scrollX || document.documentElement.scrollLeft,
      scrollTop = window.scrollY || document.documentElement.scrollTop;
    return { top: rectIMG.top + scrollTop, left: rectIMG.left + scrollLeft }
  }

  setTimeout(() => {
    animOnScrollIMG();
  }, 300);
}

//::::::::::::::::::::::::::::::::::::::::::::::::::
//Анимация прокрутки до якоря
//::::::::::::::::::::::::::::::::::::::::::::::::::

function setScrollIntoView1(top) {
	const biography = document.querySelector('.rocket_up');
	biography.scrollIntoView(top);
}

function setScrollIntoView1Options(top) {
	const biography = document.querySelector('.rocket_up');
	biography.scrollIntoView({
		block: "start",
		inline: "nearest",
		behavior: "smooth"
	});
}



function setScrollIntoView2(top) {
	const lesson = document.querySelector('.lesson');
	lesson.scrollIntoView(top);
}

function setScrollIntoView2Options(top) {
	const lesson = document.querySelector('.lesson');
	lesson.scrollIntoView({
		block: "start",
		inline: "nearest",
		behavior: "smooth"
	});
}

function setScrollIntoView3(top) {
	const boxprice = document.querySelector('.boxprice');
	boxprice.scrollIntoView(top);
}

function setScrollIntoView3Options(top) {
	const boxprice = document.querySelector('.boxprice');
	boxprice.scrollIntoView({
		block: "start",
		inline: "nearest",
		behavior: "smooth"
	});
}

function setScrollIntoView4(top) {
	const themes = document.querySelector('.themes');
	themes.scrollIntoView(top);
}

function setScrollIntoView4Options(top) {
	const themes = document.querySelector('.themes');
	themes.scrollIntoView({
		block: "start",
		inline: "nearest",
		behavior: "smooth"
	});
}

function showImage(src) {
	var modal = document.getElementById("modal");
	var modalImage = document.getElementById("modal-image");
	modalImage.src = src;
	modal.style.display = "block";
  }
  
  function hideImage() {
	var modal = document.getElementById("modal");
	modal.style.display = "none";
  }

//::::::::::::::::::::::::::::::::::::::::::::::::::
// Большой автослайдер с фото
//::::::::::::::::::::::::::::::::::::::::::::::::::
  

  document.addEventListener('DOMContentLoaded', () => {
  
	//===== MICRO-SLIDER begin
	const __ms = document.querySelector('.micro-slider');
	const __msSlider = new MicroSlider(__ms, { indicators: true, indicatorText: '' });
	const hammer = new Hammer(__ms);
	  const __msTimer = 3000;
	let __msAutoplay = setInterval(() => __msSlider.next(), __msTimer);
	  
	
	//detect gesture tap event with hammer js library
	hammer.on('tap', function(e) {
	  clearInterval(__msAutoplay);
	  console.log(e.type + ' gesture detected');
	});
	
	//detect gesture swipe event with hammer js library
	hammer.on('swipe', function(e) {
	  clearInterval(__msAutoplay); 
	  __msAutoplay = setInterval(() => __msSlider.next(), __msTimer);
	  console.log(e.type + ' gesture detected');
	});
	
  });


//::::::::::::::::::::::::::::::::::::::::::::::::::
//Анимация 4 фото под постами
//::::::::::::::::::::::::::::::::::::::::::::::::::

const slides = document.querySelectorAll(".slide");

for (const slide of slides) {
  slide.addEventListener("click", () => {
    clearActiveClasses();
    
    slide.classList.add("active");
  });
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}