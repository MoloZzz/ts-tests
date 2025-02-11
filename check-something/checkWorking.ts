import { compareAddresses } from "../formats-tests/compare-addresses";
import { AddressEntity, realtyAddress } from "./interfaces";

//1
const edraAddress: AddressEntity = {
    id: 1,
    regionLabel: "Львівська обл.",
    regionExternalId: "13",
    districtLabel: "м. Львів",
    districtExternalId: "375",
    communityLabel: "",
    communityExternalId: "",
    cityLabel: "м. Львів",
    cityExternalId: "375",
    streetLabel: "вулиця Дашкевича Р.",
    streetExternalId: "55909",
    buildingLabel: "10",
    buildingExternalId: "1",
    building: null
};

const drrpAddress: realtyAddress = {
    addressDetail: "Львівська обл., м. Львів, вулиця Дашкевича Р., будинок 10",
    dcHouseType: "1",
    house: "10",
    regionName: "Львівська обл.",
    regionId: "13",
    districtName: "м. Львів",
    districtId: "375",
    cityName: "м. Львів",
    cityId: "375",
    streetName: "вулиця Дашкевича Р.",
    streetId: "55909",
    koatuu: "46060250010015970"
};

console.log(compareAddresses(edraAddress, drrpAddress));

//2
const edraAddress2: AddressEntity = {
    id: 1,
    regionLabel: "Львівська обл.",
    districtLabel: "м. Львів",
    communityLabel: "",
    cityLabel: "м. Львів",
    streetLabel: "вулиця Дашкевича Р.",
    buildingLabel: "30",
    building: null
};

const drrpAddress2: realtyAddress = {
    "addressDetail": "Львівська обл., м. Львів, вулиця Дашкевича Р., будинок 30, корп. 11, квартира 74, приміщення 8",
    "dcHouseType": "1",
    "house": "30",
    "dcObjectNumType": "2",
    "objectNum": "74",
    "dcRoomType": "2",
    "room": "8",
    "dcBuildingType": "1",
    "building": "11",
    "regionName": "Львівська обл.",
    "regionId": "13",
    "districtName": "м. Львів",
    "districtId": "375",
    "streetName": "вулиця Дашкевича Р.",
    "streetId": "55909",
    "koatuu": "46060250010015970"
};

console.log(compareAddresses(edraAddress2, drrpAddress2));