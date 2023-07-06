let services_section = document.querySelector('.section__services');
let services_section_blocks = document.querySelectorAll('.section__services .section__services__item');
services_section_blocks.forEach(el =>{
    console.log(el)
})


window.onscroll = () =>{
    let services_section_position = services_section.getBoundingClientRect().y;
    if(services_section_position <= 300){
        services_section_blocks.forEach(el =>{
            el.style.animation = 'slideFromTop 1s'
            el.style.opacity = 1;
           
        })
    }
}