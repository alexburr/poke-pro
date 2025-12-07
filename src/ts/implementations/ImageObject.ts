class ImageObject {
    name: string;
    src: string;
    image: HTMLImageElement;

    constructor(imgSrc: imageSrc) {
        this.name = imgSrc.name;
        this.src = imgSrc.src;
        this.image = this.setImage(imgSrc.src);
    }

    private setImage(src: string) {
        const image: HTMLImageElement = new Image;
        image.src = src;
        return image;
    }
}