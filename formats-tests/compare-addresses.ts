import { AddressEntity, realtyAddress } from "../check-something/interfaces";

export function compareAddresses(edraAddress: AddressEntity, drrpAddress: realtyAddress): boolean {
    if (edraAddress.regionLabel && drrpAddress.regionName && edraAddress.regionLabel !== drrpAddress.regionName) {
        return false;
    }
    if (edraAddress.districtLabel && drrpAddress.districtName && edraAddress.districtLabel !== drrpAddress.districtName) {
        return false;
    }
    if (edraAddress.cityLabel && drrpAddress.cityName && edraAddress.cityLabel !== drrpAddress.cityName) {
        return false;
    }
    if (edraAddress.streetLabel && drrpAddress.streetName && edraAddress.streetLabel !== drrpAddress.streetName.replace(/^вулиця /, '')) {
        return false;
    }
    if (edraAddress.buildingLabel && drrpAddress.house && edraAddress.buildingLabel !== drrpAddress.house) {
        return false;
    }
    return true;
}

export function compareAddresses1(edraAddress: AddressEntity, drrpAddress: realtyAddress): boolean {
    const { regionLabel, districtLabel, cityLabel, streetLabel, buildingLabel } = edraAddress;
    const { regionName, districtName, cityName, streetName, house } = drrpAddress;

    return (
        (!regionLabel || !regionName || regionLabel === regionName) &&
        (!districtLabel || !districtName || districtLabel === districtName) &&
        (!cityLabel || !cityName || cityLabel === cityName) &&
        (!streetLabel || !streetName || streetLabel === (streetName.replace(/^вулиця /, ''))) &&
        (!buildingLabel || !house || buildingLabel === house)
    );
}