class Images implements IImages {
    imgSrcs: imageSrc[];
    imageObjects: ImageObject[] = [];

    constructor(imgSrcs: imageSrc[]) {
        this.imgSrcs = imgSrcs;
        this.preload();
    }

    public getImgSrcByName(imgName: string): string {
        const result: imageSrc = this.imgSrcs.find( ({ name }) => name === imgName );
        return result.src;
    }

    public getImgBySrc(imgSrc: string): HTMLImageElement {
        const result = this.imageObjects.find( ({ src }) => src === imgSrc );
        return result.image;
    }

    public getImageByName(imgName: string): HTMLImageElement {
        const result = this.imageObjects.find( ({ name }) => name === imgName );
        return result.image;
    }

    private preload(): void {
        this.imgSrcs.forEach(imgSrc => {
            let imageObject: ImageObject = new ImageObject(imgSrc);
            this.imageObjects.push(imageObject);
        });
    }
}

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