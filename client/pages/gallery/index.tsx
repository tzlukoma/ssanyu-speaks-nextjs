import React from 'react'
import groq from 'groq'
import { client } from '../../lib/sanity'
import GalleryCoverImage from '../../components/GalleryCoverImage'

function GalleryPage({ gallery }) {

    return (
        <div>
            <main style={{ display: "flex", justifyContent: "center" }}>
                <article className='main-content'>
                    <h1>Picture Galleries</h1>
                    <div className=''>
                        <div className="gallery-grid">
                            {
                                gallery.map(galleryItem => {
                                    console.log(galleryItem)
                                    // return <div key={galleryItem._id}>Gallery </div>
                                    return <GalleryCoverImage key={galleryItem._id} gallery={galleryItem} />
                                })
                            }
                            <div className='next-image-container gallery-image-container'>

                            </div>
                        </div>

                    </div>
                </article>
            </main>
        </div>
    )
}

export default GalleryPage

GalleryPage.getInitialProps = async ctx => {
    const gallery = await client
        .fetch(
            groq`
	*[_type=="gallery"] 
	`
        )
        .catch(console.error)

    return { gallery }
}
