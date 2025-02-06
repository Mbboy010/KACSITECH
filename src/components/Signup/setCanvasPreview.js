"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var setCanvasPreview = function (image, // HTMLImageElement
canvas, // HTMLCanvasElement
crop // PixelCrop
) {
    var ctx = canvas.getContext("2d");
    if (!ctx) {
        throw new Error("No 2d context");
    }
    // devicePixelRatio slightly increases sharpness on retina devices
    // at the expense of slightly slower render times and needing to
    // size the image back down if you want to download/upload and be
    // true to the images natural size.
    var pixelRatio = window.devicePixelRatio;
    var scaleX = image.naturalWidth / image.width;
    var scaleY = image.naturalHeight / image.height;
    canvas.width = Math.floor(crop.width * scaleX * pixelRatio);
    canvas.height = Math.floor(crop.height * scaleY * pixelRatio);
    ctx.scale(pixelRatio, pixelRatio);
    ctx.imageSmoothingQuality = "high";
    ctx.save();
    var cropX = crop.x * scaleX;
    var cropY = crop.y * scaleY;
    // Move the crop origin to the canvas origin (0,0)
    ctx.translate(-cropX, -cropY);
    ctx.drawImage(image, 0, 0, image.naturalWidth, image.naturalHeight, 0, 0, image.naturalWidth, image.naturalHeight);
    ctx.restore();
};
exports.default = setCanvasPreview;
