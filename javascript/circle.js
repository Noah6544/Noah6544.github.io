const circle = document.getElementById('circle');

window.addEventListener('mousemove', function(e){
    const mouseX = e.clientX;
    const mouseY = e.clientY; 
    circle.style.transform = `translate(${mouseX-15}px, ${mouseY-15}px)`
    keyframes =[{transform:`translate(${mouseX-15}px, ${mouseY-15}px)`}]
    circle.animate(keyframes,{duration: 250})
})

divsToHover = ['#menu','#my-projects-container','.experience-image','#about-image-gallery','#abouticon','#projects-icon','#experience-icon','#contact-icon','#home-icon','#linkedinlogo','#githublogo','#imessagelogo','#speedModifierDiv','#project-django-container']

// was trying to make it so that i don't have to manually type each id, but rather one class, take all those class objects and put them back into divs to hover, working on it.

// Array.from(divsToHover).forEach(initialElement => {
//     if(initialElement.startsWith(".")){ /*if the element is a class, we want all classes*/
//         console.log("true");    
//         list = document.getElementsByClassName(initialElement);
//         console.log(initialElement)
//         Array.from(list).forEach(element => {
//             divsToHover.push(element)
//         })
//     console.log(divsToHover);
//     console.log("confusion");
//     const index = divsToHover.indexOf(initialElement); //removes initialClass element
//     if (index > -1) { 
//         divsToHover.splice(index, 1);
//     }
// }
// })


try {
    Array.from(divsToHover).forEach(element => {
    
        element = document.querySelector(element)
        if(element == null){
            ;
        }
        else if(element=='.experience-image'){
            const imageDivs = Array.from(document.getElementsByClassName('experience-image'));
            Array.from(imageDivs).forEach(image => {
                image.addEventListener('mouseover', function(){
                    circle.classList.toggle("circle-hovering");
                })   
                image.addEventListener('mouseout', function(){
                    circle.classList.toggle("circle-hovering");
                })
            })
        }
        else{
            element.addEventListener('mouseover', function(){
                circle.classList.toggle("circle-hovering");
            })   
            element.addEventListener('mouseout', function(){
                circle.classList.toggle("circle-hovering");
            })
        }   
    

    }) 
    
  } catch (error) {
    console.error(error);
  }
  