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

const configAuth = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: '2021-03-25',
    token: process.env.SANITY_FORM_ROBOT_TOKEN
}

export const client = sanityClient(config)
export const authClient = sanityClient(configAuth)
export const urlFor = (source: any) => createImageUrlBuilder(config).image(source)
