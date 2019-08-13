import { IS_LOADING} from "./types";

  export const isLoading = (bool) => {
    return {
      type: IS_LOADING,
      payload: bool
    }
  }