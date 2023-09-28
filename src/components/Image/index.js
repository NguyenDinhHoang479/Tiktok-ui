import { forwardRef, useState } from "react";
import images from "../../assets/images";
const Image = ({ src, alt, errImage = images.noImage, ...props }, ref) => {
    const [fallBack , setFallBack] = useState('')
    const handleError = ()=>{
        setFallBack(errImage)
    }


  return <img src={fallBack || src} alt={alt} {...props} ref={ref} onError={handleError}/>;
};

export default forwardRef(Image);
