class Idea {
  constructor(title, body) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
    this.star = false;
    this.src = './assets/star.svg'
  }
  updateIdea(){
    if (!this.star){
      this.star = true;
      this.src = './assets/star-active.svg'
    } else {
      this.star = false
      this.src = './assets/star.svg'
    }
  }
}
