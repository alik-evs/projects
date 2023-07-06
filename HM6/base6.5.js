const circles = document.querySelectorAll(".circle");

circles.forEach(circle => {
 
  const animation = circle.getAttribute("data-anim");

  circle.classList.add(animation);
  
  const isAnimationApplied = circle.classList.contains(animation);
  console.log(`Анимация "${animation}": ${isAnimationApplied ? "Применена" : "Не применена"}`);
});