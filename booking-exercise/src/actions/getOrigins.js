import AppDataService from '../services/app.services';

export const getCities = (cityQuery) => {
  return dispatch => {
    AppDataService.getSuggestions(cityQuery)
      .then(response => {
         if (response) {
          let data = response.data.replace(/^\(/,'').replace(/;$/, '').replace(/\)$/, '');
          let data1 = JSON.parse(data);
           dispatch(setCities(data1.r));
         }
     });
  };
}

export const onChangeProps = (props, event) => {
  return dispatch => {
      dispatch(handleOnChangeProps(props, event.target.value));
  };
};

export function handleOnChangeProps(props, value){
  return{
      type: "HANDLE_ON_CHANGE",
      props: props,
      value: value
  }
}

export function setCities(cities){
  return{
      type: "SET_CITIES",
      cities: cities
  }
}

export const getOrigins = cities => dispatch => {
  dispatch({
    type: 'GET_ORIGINS',
    payload: cities
  })
}
