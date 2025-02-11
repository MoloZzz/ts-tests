export class AddressEntity {
    id?: number;
    regionLabel?: string;
    regionExternalId?: string;
    districtLabel?: string;
    districtExternalId?: string;
    communityLabel?: string;
    communityExternalId?: string;
    cityLabel?: string;
    cityExternalId?: string;
    streetLabel?: string;
    streetExternalId?: string;
    buildingLabel?: string;
    buildingExternalId?: string;
    building?: any; 
}

export interface realtyAddress {
    /** Адреса */
    addressDetail: string;
    /** Регіон (об’єкт 1го рівня) */
    regionName?: string;
    /** ID Регіону */
    regionId?: string;
    /** Район (об’єкт 2го рівня) */
    districtName?: string;
    /** ID Району */
    districtId?: string;
    /** Населений пункт (об’єкт 3го рівня) */
    cityName?: string;
    /** ID Населеного пункту */
    cityId?: string;
    /** Гаражний кооператив\Садове товариство (об’єкт 4го рівня) */
    objectName?: string;
    /** ID Гаражного кооперативу\Садового товариства */
    objectId?: string;
    /** Вулиця (об’єкт 5го рівня) */
    streetName?: string;
    /** ID Вулиці */
    streetId?: string;
    /** Тип */
    dcHouseType?: string;
    /** No Типу */
    house?: string;
    /** Підтип */
    dcBuildingType?: string;
    /** No Підтипу */
    building?: string;
    /** Тип номер */
    dcObjectNumType?: string;
    /** No Типу номера */
    objectNum?: string;
    /** Підтип номера */
    dcRoomType?: string;
    /** No Підтипу номера */
    room?: string;
    /** КОАТУУ. Значення об’єкта
        1-3 рівнів, якщо вони є
        кінцевою адресою
        або
        Значення батьківського
        об’єкту 1-3 рівня, якщо
        кінцева адреса є об’єктом 4-
        5го рівня */
    koatuu?: string;
}
