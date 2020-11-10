import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 5M7Ma_4rEvMXVnQpqJIPNUnpvCMV0vWnr2DyyaceXtJ2-ggAS4nMA-GfO1ErRqPp9Gwt7Do2PcieDPXFUufNYIZfhOvY7gU4LzSOzEHxDJR1PlE-KIO_qjl-FnCqX3Yx'
    }
});
