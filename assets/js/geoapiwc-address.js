import {AddressToCity} from "./GeoApiWC/AddressToCity.js";

((that) => {
    const
        document = that.document,
        geoapiwc = that.geoapiwc
    ;

    that.window.addEventListener('load', () => {
        const addressCity = new AddressToCity(
            document,
            geoapiwc.country_field_id,
            geoapiwc.address_field_id,
            geoapiwc.postcode_field_id,
            geoapiwc.city_field_id
        );

        console.log (addressCity.getAddressElement());

        addressCity.getAddressElement().addEventListener('focusout', () => {
            addressCity.apiCallGeoAddressData();
        });
    });
})(window);