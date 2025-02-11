import { compareAddresses1 } from "../formats-tests/compare-addresses";
import { AddressEntity, realtyAddress } from "./interfaces";

// 1
const edraAddress1: AddressEntity = {
    id: 1,
    regionLabel: "Вінницька обл.",
    regionExternalId: "UA.ATU.O.10236",
    districtLabel: "Гайсинський район",
    districtExternalId: "UA.ATU.P.50292",
    cityLabel: "м. Бершадь",
    cityExternalId: "UA.ATU.M.24726",
    streetLabel: "Шевченка",
    streetExternalId: "UA.ADR.S.6043379",
    buildingLabel: "12",
    buildingExternalId: "UA.ADR.B.708715144725",
    building: null
};

const drrpAddress1: realtyAddress = {
    addressDetail: "Вінницька обл., Гайсинський район, м. Бершадь, вулиця Шевченка, будинок 12",
    dcHouseType: "",
    house: "12",
    regionName: "Вінницька обл.",
    regionId: "UA.ATU.O.10236",
    districtName: "Гайсинський район",
    districtId: "UA.ATU.P.50292",
    cityName: "м. Бершадь",
    cityId: "UA.ATU.M.24726",
    streetName: "вулиця Шевченка",
    streetId: "UA.ADR.S.6043379",
    koatuu: "UA.ADR.B.708715144725"
};

console.log(compareAddresses1(edraAddress1, drrpAddress1));

// 2
const edraAddress2: AddressEntity = {
    id: 2,
    regionLabel: "м. Київ",
    regionExternalId: "UA.ATU.M.93317",
    cityLabel: "м. Київ",
    cityExternalId: "UA.ATU.M.93317",
    streetLabel: "Хрещатик",
    streetExternalId: "UA.ADR.S.9768662",
    buildingLabel: "25",
    buildingExternalId: "UA.ADR.B.527607527093",
    building: null
};

const drrpAddress2: realtyAddress = {
    addressDetail: "м. Київ, Хрещатик, будинок 25",
    dcHouseType: "",
    house: "25",
    regionName: "м. Київ",
    regionId: "UA.ATU.M.93317",
    districtName: "",
    districtId: "",
    cityName: "м. Київ",
    cityId: "UA.ATU.M.93317",
    streetName: "Хрещатик",
    streetId: "UA.ADR.S.9768662",
    koatuu: "UA.ADR.B.527607527093"
};

console.log(compareAddresses1(edraAddress2, drrpAddress2));

// 4
const edraAddress4: AddressEntity = {
    id: 4,
    regionLabel: "Київська обл.",
    regionExternalId: "UA.ATU.O.30281",
    districtLabel: "Вишгородський район",
    districtExternalId: "UA.ATU.P.65867",
    cityLabel: "м. Вишгород",
    cityExternalId: "UA.ATU.M.59200",
    streetLabel: "Київська",
    streetExternalId: "UA.ADR.S.4001000",
    buildingLabel: "18",
    buildingExternalId: "UA.ADR.B.657303794935",
    building: null
};

const drrpAddress4: realtyAddress = {
    addressDetail: "Київська обл., Вишгородський район, м. Вишгород, вулиця Київська, будинок 18",
    dcHouseType: "",
    house: "18",
    regionName: "Київська обл.",
    regionId: "UA.ATU.O.30281",
    districtName: "Вишгородський район",
    districtId: "UA.ATU.P.65867",
    cityName: "м. Вишгород",
    cityId: "UA.ATU.M.59200",
    streetName: "вулиця Київська",
    streetId: "UA.ADR.S.4001000",
    koatuu: "UA.ADR.B.657303794935"
};

console.log(compareAddresses1(edraAddress4, drrpAddress4));

// 5
const edraAddress5: AddressEntity = {
    id: 5,
    regionLabel: "м. Київ",
    regionExternalId: "UA.ATU.M.93317",
    cityLabel: "м. Київ",
    cityExternalId: "UA.ATU.M.93317",
    streetLabel: "Володимирська",
    streetExternalId: "UA.ADR.S.3121079",
    buildingLabel: "46",
    buildingExternalId: "UA.ADR.B.227849008145",
    building: null
};

const drrpAddress5: realtyAddress = {
    addressDetail: "м. Київ, Володимирська, будинок 46",
    dcHouseType: "",
    house: "46",
    regionName: "м. Київ",
    regionId: "UA.ATU.M.93317",
    districtName: "",
    districtId: "",
    cityName: "м. Київ",
    cityId: "UA.ATU.M.93317",
    streetName: "Володимирська",
    streetId: "UA.ADR.S.3121079",
    koatuu: "UA.ADR.B.227849008145"
};

console.log(compareAddresses1(edraAddress5, drrpAddress5));

// 6
const edraAddress6: AddressEntity = {
    id: 6,
    regionLabel: "м. Київ",
    regionExternalId: "UA.ATU.M.93317",
    cityLabel: "м. Київ",
    cityExternalId: "UA.ATU.M.93317",
    streetLabel: "Володимирська",
    streetExternalId: "UA.ADR.S.3121079",
    buildingLabel: "5",
    buildingExternalId: "UA.ADR.B.227849008163",
    building: null
};

const drrpAddress6: realtyAddress = {
    addressDetail: "м. Київ, Володимирська, будинок 5",
    dcHouseType: "",
    house: "5",
    regionName: "м. Київ",
    regionId: "UA.ATU.M.93317",
    districtName: "",
    districtId: "",
    cityName: "м. Київ",
    cityId: "UA.ATU.M.93317",
    streetName: "Володимирська",
    streetId: "UA.ADR.S.3121079",
    koatuu: "UA.ADR.B.227849008163"
};

console.log(compareAddresses1(edraAddress6, drrpAddress6));

// 7
const edraAddress7: AddressEntity = {
    id: 7,
    regionLabel: "Волинська обл.",
    regionExternalId: "UA.ATU.O.24379",
    districtLabel: "Ковельський район",
    districtExternalId: "UA.ATU.P.92268",
    cityLabel: "смт. Люблинець",
    cityExternalId: "UA.ATU.M.38196",
    streetLabel: "Франка І.",
    streetExternalId: "UA.ADR.S.0455292",
    buildingLabel: "8",
    buildingExternalId: "UA.ADR.B.448606045787",
    building: null
};

const drrpAddress7: realtyAddress = {
    addressDetail: "Волинська обл., Ковельський район, смт. Люблинець, вулиця Франка І., будинок 8",
    dcHouseType: "",
    house: "8",
    regionName: "Волинська обл.",
    regionId: "UA.ATU.O.24379",
    districtName: "Ковельський район",
    districtId: "UA.ATU.P.92268",
    cityName: "смт. Люблинець",
    cityId: "UA.ATU.M.38196",
    streetName: "вулиця Франка І.",
    streetId: "UA.ADR.S.0455292",
    koatuu: "UA.ADR.B.448606045787"
};

console.log(compareAddresses1(edraAddress7, drrpAddress7));

// 8
const edraAddress8: AddressEntity = {
    id: 8,
    regionLabel: "Івано-Франківська обл.",
    regionExternalId: "UA.ATU.O.69363",
    districtLabel: "Косівський район",
    districtExternalId: "UA.ATU.P.92255",
    cityLabel: "м. Косів",
    cityExternalId: "UA.ATU.M.26473",
    streetLabel: "Шевченка Т.",
    streetExternalId: "UA.ADR.S.2136552",
    buildingLabel: "10/17",
    buildingExternalId: "UA.ADR.B.289018737699",
    building: null
};

const drrpAddress8: realtyAddress = {
    addressDetail: "Івано-Франківська обл., Косівський район, м. Косів, вулиця Шевченка Т., будинок 10/17",
    dcHouseType: "",
    house: "10/17",
    regionName: "Івано-Франківська обл.",
    regionId: "UA.ATU.O.69363",
    districtName: "Косівський район",
    districtId: "UA.ATU.P.92255",
    cityName: "м. Косів",
    cityId: "UA.ATU.M.26473",
    streetName: "вулиця Шевченка Т.",
    streetId: "UA.ADR.S.2136552",
    koatuu: "UA.ADR.B.289018737699"
};

console.log(compareAddresses1(edraAddress8, drrpAddress8));

// 9
const edraAddress9: AddressEntity = {
    id: 9,
    regionLabel: "Херсонська обл.",
    regionExternalId: "UA.ATU.O.30969",
    districtLabel: "Генічеський район",
    districtExternalId: "UA.ATU.P.88940",
    cityLabel: "м. Генічеськ",
    cityExternalId: "UA.ATU.M.40633",
    streetLabel: "Морська",
    streetExternalId: "UA.ADR.S.0436215",
    buildingLabel: "6А",
    buildingExternalId: "UA.ADR.B.840974795865",
    building: null
};

const drrpAddress9: realtyAddress = {
    addressDetail: "Херсонська обл., Генічеський район, м. Генічеськ, вулиця Морська, будинок 6А",
    dcHouseType: "",
    house: "6А",
    regionName: "Херсонська обл.",
    regionId: "UA.ATU.O.30969",
    districtName: "Генічеський район",
    districtId: "UA.ATU.P.88940",
    cityName: "м. Генічеськ",
    cityId: "UA.ATU.M.40633",
    streetName: "вулиця Морська",
    streetId: "UA.ADR.S.0436215",
    koatuu: "UA.ADR.B.840974795865"
};

console.log(compareAddresses1(edraAddress9, drrpAddress9));

// 10
const edraAddress10: AddressEntity = {
    id: 10,
    regionLabel: "м. Київ",
    regionExternalId: "UA.ATU.M.93317",
    cityLabel: "м. Київ",
    cityExternalId: "UA.ATU.M.93317",
    streetLabel: "Володимирська",
    streetExternalId: "UA.ADR.S.3121079",
    buildingLabel: "15",
    buildingExternalId: "UA.ADR.B.227840620481",
    building: null
};

const drrpAddress10: realtyAddress = {
    addressDetail: "м. Київ, Володимирська, будинок 15",
    dcHouseType: "",
    house: "15",
    regionName: "м. Київ",
    regionId: "UA.ATU.M.93317",
    districtName: "",
    districtId: "",
    cityName: "м. Київ",
    cityId: "UA.ATU.M.93317",
    streetName: "Володимирська",
    streetId: "UA.ADR.S.3121079",
    koatuu: "UA.ADR.B.227840620481"
};

console.log(compareAddresses1(edraAddress10, drrpAddress10));

// 11
const edraAddress11: AddressEntity = {
    id: 11,
    regionLabel: "м. Київ",
    regionExternalId: "UA.ATU.M.93317",
    cityLabel: "м. Київ",
    cityExternalId: "UA.ATU.M.93317",
    streetLabel: "Полярна",
    streetExternalId: "UA.ADR.S.4449698",
    buildingLabel: "5",
    buildingExternalId: "UA.ADR.B.527498475123",
    building: null
};

const drrpAddress11: realtyAddress = {
    addressDetail: "м. Київ, Полярна, будинок 5",
    dcHouseType: "",
    house: "5",
    regionName: "м. Київ",
    regionId: "UA.ATU.M.93317",
    districtName: "",
    districtId: "",
    cityName: "м. Київ",
    cityId: "UA.ATU.M.93317",
    streetName: "Полярна",
    streetId: "UA.ADR.S.4449698",
    koatuu: "UA.ADR.B.527498475123"
};

console.log(compareAddresses1(edraAddress11, drrpAddress11));

// 12
const edraAddress12: AddressEntity = {
    id: 12,
    regionLabel: "м. Київ",
    regionExternalId: "UA.ATU.M.93317",
    cityLabel: "м. Київ",
    cityExternalId: "UA.ATU.M.93317",
    streetLabel: "Полярна",
    streetExternalId: "UA.ADR.S.4449698",
    buildingLabel: "8/6",
    buildingExternalId: "UA.ADR.B.526928049757",
    building: null
};

const drrpAddress12: realtyAddress = {
    addressDetail: "м. Київ, Полярна, будинок 8/6",
    dcHouseType: "",
    house: "8/6",
    regionName: "м. Київ",
    regionId: "UA.ATU.M.93317",
    districtName: "",
    districtId: "",
    cityName: "м. Київ",
    cityId: "UA.ATU.M.93317",
    streetName: "Полярна",
    streetId: "UA.ADR.S.4449698",
    koatuu: "UA.ADR.B.526928049757"
};

console.log(compareAddresses1(edraAddress12, drrpAddress12));

// 13
const edraAddress13: AddressEntity = {
    id: 13,
    regionLabel: "м. Київ",
    regionExternalId: "UA.ATU.M.93317",
    cityLabel: "м. Київ",
    cityExternalId: "UA.ATU.M.93317",
    streetLabel: "Полярна",
    streetExternalId: "UA.ADR.S.4449698",
    buildingLabel: "103",
    buildingExternalId: "UA.ADR.B.526693168611",
    building: null
};

const drrpAddress13: realtyAddress = {
    addressDetail: "м. Київ, Полярна, будинок 103",
    dcHouseType: "",
    house: "103",
    regionName: "м. Київ",
    regionId: "UA.ATU.M.93317",
    districtName: "",
    districtId: "",
    cityName: "м. Київ",
    cityId: "UA.ATU.M.93317",
    streetName: "Полярна",
    streetId: "UA.ADR.S.4449698",
    koatuu: "UA.ADR.B.526693168611"
};

console.log(compareAddresses1(edraAddress13, drrpAddress13));

// 14
const edraAddress14: AddressEntity = {
    id: 14,
    regionLabel: "Волинська обл.",
    regionExternalId: "UA.ATU.O.24379",
    districtLabel: "Володимир-Волинський район",
    districtExternalId: "UA.ATU.P.48211",
    cityLabel: "м. Володимир-Волинський",
    cityExternalId: "UA.ATU.M.41660",
    streetLabel: "Володимирська",
    streetExternalId: "UA.ADR.S.5623213",
    buildingLabel: "68",
    buildingExternalId: "UA.ADR.B.586774807699",
    building: null
};

const drrpAddress14: realtyAddress = {
    addressDetail: "Волинська обл., Володимир-Волинський район, м. Володимир-Волинський, вулиця Володимирська, будинок 68",
    dcHouseType: "",
    house: "68",
    regionName: "Волинська обл.",
    regionId: "UA.ATU.O.24379",
    districtName: "Володимир-Волинський район",
    districtId: "UA.ATU.P.48211",
    cityName: "м. Володимир-Волинський",
    cityId: "UA.ATU.M.41660",
    streetName: "вулиця Володимирська",
    streetId: "UA.ADR.S.5623213",
    koatuu: "UA.ADR.B.586774807699"
};

console.log(compareAddresses1(edraAddress14, drrpAddress14));

// 15
const edraAddress15: AddressEntity = {
    id: 15,
    regionLabel: "Донецька обл.",
    regionExternalId: "UA.ATU.O.91971",
    districtLabel: "Бахмутський район",
    districtExternalId: "UA.ATU.P.13572",
    cityLabel: "м. Бахмут",
    cityExternalId: "UA.ATU.M.59145",
    streetLabel: "Шевченка",
    streetExternalId: "UA.ADR.S.UA.ADR.S.8533314",
    buildingLabel: "10",
    buildingExternalId: "UA.ADR.B.374719186784",
    building: null
};

const drrpAddress15: realtyAddress = {
    addressDetail: "Донецька обл., Бахмутський район, м. Бахмут, вулиця Шевченка, будинок 10",
    dcHouseType: "",
    house: "10",
    regionName: "Донецька обл.",
    regionId: "UA.ATU.O.91971",
    districtName: "Бахмутський район",
    districtId: "UA.ATU.P.13572",
    cityName: "м. Бахмут",
    cityId: "UA.ATU.M.59145",
    streetName: "вулиця Шевченка",
    streetId: "UA.ADR.S.UA.ADR.S.8533314",
    koatuu: "UA.ADR.B.374719186784"
};

console.log(compareAddresses1(edraAddress15, drrpAddress15));

// 16
const edraAddress16: AddressEntity = {
    id: 16,
    regionLabel: "Житомирська обл.",
    regionExternalId: "UA.ATU.O.41385",
    districtLabel: "Бердичівський район",
    districtExternalId: "UA.ATU.P.72859",
    cityLabel: "с. Ягнятин",
    cityExternalId: "UA.ATU.M.53371",
    streetLabel: "Сквирська",
    streetExternalId: "UA.ADR.S.UA.ADR.S.0909295",
    buildingLabel: "25",
    buildingExternalId: "UA.ADR.B.230715483653",
    building: null
};

const drrpAddress16: realtyAddress = {
    addressDetail: "Житомирська обл., Бердичівський район, с. Ягнятин, вулиця Сквирська, будинок 25",
    dcHouseType: "",
    house: "25",
    regionName: "Житомирська обл.",
    regionId: "UA.ATU.O.41385",
    districtName: "Бердичівський район",
    districtId: "UA.ATU.P.72859",
    cityName: "с. Ягнятин",
    cityId: "UA.ATU.M.53371",
    streetName: "вулиця Сквирська",
    streetId: "UA.ADR.S.UA.ADR.S.0909295",
    koatuu: "UA.ADR.B.230715483653"
};

console.log(compareAddresses1(edraAddress16, drrpAddress16));
