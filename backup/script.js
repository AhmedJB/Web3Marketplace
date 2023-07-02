const categoryContainer = document.querySelector(".category-container");
const categoryItems = document.querySelectorAll('.category-item');
const categoryControls = document.querySelectorAll('.category-controls button');
const productName = document.querySelector('.product-name');

class Carousel {
  constructor(container, items, controls){
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];
    this.currentIndex = Math.floor(this.carouselArray.length / 2);
  }
  
  updateCategory(){
    this.carouselArray.forEach(el => {
      el.classList.remove('category-item-1', 'category-item-2', 'category-item-3', 'category-item-4', 'category-item-5');
    });
    
    for(let i = 0; i < this.carouselArray.length; i++){
      this.carouselArray[i].classList.add(`category-item-${i + 1}`);
    }
    
    // Update product name
    productName.textContent = this.carouselArray[this.currentIndex].dataset.productName;
  }
  
  setCurrentState(target){
    if(target.classList.contains('category-controls-previous')){
      this.carouselArray.unshift(this.carouselArray.pop());
      this.currentIndex = (this.currentIndex - 1 + this.carouselArray.length) % this.carouselArray.length;
    }else{
      this.carouselArray.push(this.carouselArray.shift());
      this.currentIndex = (this.currentIndex + 1) % this.carouselArray.length;
    }
    this.updateCategory();
  }
}

const exampleCarousel = new Carousel(categoryContainer, categoryItems, categoryControls);
categoryControls.forEach(control => control.addEventListener('click', e => exampleCarousel.setCurrentState(e.target)));