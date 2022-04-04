import React from 'react'
import groq from 'groq'
import { useRouter } from 'next/router'
import { client, urlFor } from '../../lib/sanity'
import ImageGrid from '../../components/ImageGrid'
import Modal from '../../components/Modal'




function GalleryPage({ galleryImages }) {
    const router = useRouter()
    const { slug } = router.query
    const [selectedImg, setSelectedImg] = React.useState(null);
    const filteredGalleryImages = galleryImages.filter(gallery => gallery.slug.current === slug)
    const imageData = filteredGalleryImages[0]?.images.map(image => {
        return { id: image._key, url: urlFor(image).url() }
    })

    return (
        <div>
            <main className="container m-auto">
                <h1 className="text-center text-3xl">{filteredGalleryImages[0]?.title} Gallery</h1>
                <ImageGrid imageData={imageData} setSelectedImg={setSelectedImg} />
                {selectedImg && (
                    <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
                )}
            </main>
        </div>

    )
}

export default GalleryPage

GalleryPage.getInitialProps = async ctx => {
    const galleryImages = await
        client
            .fetch(
                groq`
    *[_type=="gallery"] 
    `
            )
            .catch(console.error)
    return { galleryImages }
}
