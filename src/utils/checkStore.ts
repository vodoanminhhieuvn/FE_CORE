// import { Token } from 'types/Auth';
import { Token } from 'types/Auth';
import { LocalStorageType } from 'types/LocalStorageType';

export function checkAuthorization() {
  const storedToken = localStorage.getItem(LocalStorageType.REFRESH_TOKEN);

  // if it exists
  if (storedToken) {
    // parse it down into an object
    // const token = JSON.parse(storedToken) as Token;

    // this just all works to compare the total seconds of the created
    // time of the token vs the ttl (time to live) seconds
    // const createdDate = new Date(token.expires);
    // const created = Math.round(createdDate.getTime() / 1000);
    // const ttl = 1209600;
    // const expiry = created + ttl;

    // // if the token has expired return false
    // if (created > expiry) return false;

    // otherwise, dispatch the token to our setClient action
    // which will update our redux state with the token and return true
    return {
      isValid: true,
      refreshToken: JSON.parse(storedToken) as Token,
    };
  }

  return {
    isValid: false,
    refreshToken: {} as Token,
  };
}
