import React from 'react';
import { motion } from 'framer-motion';



const ImageGrid = ({ setSelectedImg, imageData }: any) => {


    return (
        <div className='img-grid'>
            {imageData && imageData.map(imageData => (
                <motion.div className="img-wrap" key={imageData.id}
                    layout
                    whileHover={{ opacity: 1 }}
                    onClick={() => setSelectedImg(imageData.url)}
                >
                    <motion.img src={imageData.url} alt="uploaded pic"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    />
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid;