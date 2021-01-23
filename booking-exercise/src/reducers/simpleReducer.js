const initialState = {
  cities: [],
  origin: 'Miami (MIA)',
  destination: '',
  outboundDate: new Date().toISOString().slice(0, 10),
  returnDate: new Date().toISOString().slice(0, 10),
  adults: 0,
  children: 0,
  infants: 0,
  passengers: 0,
  type: false
};

export const simpleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CITIES':
      return {
        ...state,
        cities: action.cities
      };
    case "HANDLE_ON_CHANGE":
      return {
          ...state,
          [action.props]: action.value
      };  
    default:
      return state;
  }
}
