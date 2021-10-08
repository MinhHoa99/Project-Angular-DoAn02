export class Items {
  toLocaleLowerCase() {
    throw new Error('Method not implemented.');
  }
        
        public name: string;
        public category: string;
        public color: string;
        public screen:string;
        public chip:string;
        public memory: string;
        public ram: string;
        public description: string;
        public imagePath: string;
        public reviewCounter: number;
        public reviews: string[];
        public price: number;
        public ratingCounter: number;
        public ratings: number[];
        public avg: number;
        public extraImages: string[];
    title: any;
    text: any;

        constructor(name: string, category: string, color: string,screen:string,chip:string, memory:string, ram:string, desc: string, imagepath: string,
                reviewCounter: number, reviews: string[], price: number,
                ratingCounter: number, ratings: number[], avg: number, extraImg: string[]) {
                this.name = name;
                this.category = category;
                this.color = color;
                this.screen = screen;
                this.chip = chip;
                this.memory = memory;
                this.ram = ram;
                this.description = desc;
                this.imagePath = imagepath;
                this.reviewCounter = reviewCounter;
                this.reviews = reviews;
                this.price = price;
                this.ratingCounter = ratingCounter;
                this.ratings = ratings;
                this.avg = avg;
                this.extraImages = extraImg;
        }
}
