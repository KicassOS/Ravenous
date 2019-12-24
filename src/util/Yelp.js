const apiKey = "bMfW0wolnnVP0qVJdVfi1xdWFLGViiLFs86a1UtuPxm2CnuYyQPhdoShs8MUjymsB6myiIw79N4BeBl21Fh587eHT-hGOaXH_bSlyMH9xIQ8MoyiuibIHXMdkwYAXnYx";

export const Yelp =  {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {headers: {Authorization: `Bearer ${apiKey}`}}).then(response => {
                    return response.json();
                }).then(jsonResponse => {
                    if (jsonResponse.businesses) {
                        let businessArray = jsonResponse.businesses.map(business => {
                            return {id: business.id, name: business.name, imageSrc: business.image_url,
                            address: business.location.address1, city: business.location.city, state: business.location.state,
                            zipCode: business.location.zip_code, category: business.category, rating: business.rating,
                            reviewCount: business.review_count};
                        }
                        );
                        return businessArray;
                    }
                })
    }


}