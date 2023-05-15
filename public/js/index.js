$(document).ready(function () {
    var feedback_slider = $('.feedback-slider')
    feedback_slider.not('.slick-initialized').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              infinite: true
            }
      
          }, 
          {
      
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              dots: true
            }
      
          }, {
      
            breakpoint: 300,
            settings: "unslick" // destroys slick
      
          }]
    });


    document.querySelector('.feedback-slider').afterChange = function (){
        var active_circle = document.querySelectorAll('.feedback-circle.slick-active')
     

        document.querySelectorAll('.feedback-circle-text').forEach((e)=>{
            e.classList.remove('show-feedback')
        }) 

        if(active_circle.length === 5){
            active_circle[0].style.scale = '0.6'
            active_circle[1].style.scale = '0.8'
            active_circle[2].style.scale = '1.2'
            active_circle[3].style.scale = '0.8'
            active_circle[4].style.scale = '0.6'  
            active_circle[2].querySelector('.feedback-circle-text').classList.add('show-feedback')     
        }else if(active_circle.length === 3){
            active_circle[0].style.scale = '0.8'
            active_circle[1].style.scale = '1.2'
            active_circle[2].style.scale = '0.8'

            active_circle[1].querySelector('.feedback-circle-text').classList.add('show-feedback')

        }else {
            active_circle[0].style.scale = '1'
            active_circle[0].querySelector('.feedback-circle-text').classList.add('show-feedback')
        }
            var active_circle = document.querySelectorAll('.feedback-circle:not(.slick-active)')
            active_circle.forEach((e)=>{
                e.style.scale = '1.2'
        })
        
    }
    
    var feedback_btn_right = document.querySelector('.feedback-btn-right')
    var feedback_btn_left = document.querySelector('.feedback-btn-left')

    feedback_btn_left.onclick = function (){
        feedback_slider.slick('slickPrev');
    }

    feedback_btn_right.onclick = function (){
        feedback_slider.slick('slickNext');
    }

})

$(document).ready(function () {
    var active_circle = document.querySelectorAll('.feedback-circle.slick-active')
        if(active_circle.length === 5){
            active_circle[0].style.scale = '0.6'
            active_circle[1].style.scale = '0.8'
            active_circle[2].style.scale = '1.2'
            active_circle[3].style.scale = '0.8'
            active_circle[4].style.scale = '0.6'  
            active_circle[2].querySelector('.feedback-circle-text').classList.add('show-feedback')

        }else if(active_circle.length === 3){
            active_circle[0].style.scale = '0.8'
            active_circle[1].style.scale = '1.2'
            active_circle[2].style.scale = '0.8'
            active_circle[1].querySelector('.feedback-circle-text').classList.add('show-feedback')
        }else {
            active_circle[0].style.scale = '1'
            active_circle[0].querySelector('.feedback-circle-text').classList.add('show-feedback')
        }
    

    var menu = document.querySelector('.menu-overlay')
    var bars = document.querySelector('.bars')
    var service_btn = document.querySelector('.service-btn')
    var benefit_item = document.querySelectorAll('.benefit-item')

    
    menu.onclick = ()=> {
        document.querySelector('#open').checked = false;
        bars.classList.remove('tinLeftOut')
        bars.classList.add('tinLeftIn')
    }

    bars.onclick = ()=> {
        bars.classList.add('tinLeftOut')
        bars.classList.remove('tinLeftIn')
    }

    benefit_item.forEach((e)=>{
        e.onclick = function() {
            this.classList.add('rotateDown')
            setTimeout(function(){
                e.classList.remove('rotateDown')
            },2000)
        }
    })

    service_btn.onclick = ()=> {
        service_btn.classList.add('magic')

        setTimeout(()=>{
        service_btn.classList.remove('magic')

        },3000)
    }


    var cate_responsive = document.querySelectorAll('.cate-responsive')
    var cate_btn = document.querySelector('.cate-btn-responsive')
        cate_btn.onclick = ()=> {
        cate_btn.querySelector('.down-up').classList.toggle('rotate')

        cate_responsive.forEach((e)=>{
            e.classList.toggle('show')
        })
    }


})

