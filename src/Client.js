import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
    projectId: 'pz4p0i03',
    dataset: 'production',
    apiVersion: '2022-07-01',
    useCdn: true,
    token: process.env.PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)