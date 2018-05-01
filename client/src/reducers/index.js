const initialState = {
  recipes: [{
    id: 1,
    title: "pasta",
    img_main: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/3/1/0/FNM_040111-WN-Dinners-030_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371595164628.jpeg",
    prepmins: 30
  },
  {
    id: 2,
    title: "pizza",
    img_main: "https://media-cdn.tripadvisor.com/media/photo-s/0e/a0/60/f3/salamina.jpg",
    prepmins: 45
  },
  {
    id: 3,
    title: "bagel",
    img_main: "https://static01.nyt.com/images/2016/08/16/dining/baron-bagels/baron-bagels-articleLarge.jpg",
    prepmins: 15
  }
  ]
};

const reducerRoutes = {
  default: (state, action) => state
}

const rootReducer = (state = initialState, action) => {
  let reducerAction = reducerRoutes[action.type] || reducerRoutes.default
  return reducerAction(state, action)
}

export default rootReducer;
