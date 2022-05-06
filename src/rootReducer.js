const initialState = {
  cards: [
    {id:1,name:'Levi',body:'lorem ipsum1'},
    {id:2,name:'Kenny',body:'lorem ipsum2'},
    {id:3,name:'Maskaka',body:'lorem ipsum3'}
  ]
};

const rootReducer = (state = initialState, action) => {
  return state;
};

export default rootReducer;
