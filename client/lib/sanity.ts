import sanityClient from '@sanity/client'
import {
    createImageUrlBuilder,
} from 'next-sanity'

const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: '2021-03-25',
    useCdn: true,
}

export const client = sanityClient(config)
export const urlFor = (source) => createImageUrlBuilder(config).image(source)
