$('.jquery').hover(()=>{
    console.log(this)
    $(this).toggleClass('random')
    $(this).parent().toggleClass('flex-row-reverse')
    $(this).css({ "left": Math.random() *(1536-40), "top": Math.random() * (792-300) })
})
// let intViewportWidth = window.innerHeight;
// console.log(intViewportWidth)
// var x = Math.floor(Math.random() * 10);  

// $('.ju').each(function () {
//     $(this).css({ "left": Math.random() * window.outerWidth, "top": Math.random() * window.outerHeight }).textillate();
// });