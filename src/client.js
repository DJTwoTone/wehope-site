import sanityClient from '@sanity/client';

export default sanityClient({
    "projectId": "m3s1i693",
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: true,

})