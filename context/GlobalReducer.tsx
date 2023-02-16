export default (state: any, action: any) => {
    switch (action.type) {
      case "SET_MENU":
        return {
          ...state,
          currentMenu: action.payload,
        };
       default:
        return state;
    }
  };