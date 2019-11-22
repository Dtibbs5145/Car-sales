export const ADD_FEATURE = "ADD_FEATURE";

export const addFeature = car => {
    return {
        type: ADD_FEATURE,
        payload: car
    };
;}