let reducer = function (state, action) {
   switch (action.type) {
      case 'SHOW_MENU':
         return state;
      case 'CLOSE_MENU':
         return state === false;
 
   }
}

export default reducer;