function reducer(state, action) {
   
   switch (action.type) {
      case 'NEXT_SLIDER':
         return reactSwipeEl.next()
      case 'PREVIOUS_SLIDER':
         return reactSwipeEl.prev()
   }
}

export default reducer;