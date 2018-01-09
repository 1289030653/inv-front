export default class ApiAuthc
{

  static login(action)
  {
    return fetch( 'http://localhost:8080/login' , {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": '*',
        },
        mode: 'cors',
        credentials: 'include',
        body: 'username=' + action.userInfo.username + 
        '&password=' + action.userInfo.password +
        '&rememberMe=' + action.userInfo.rememberMe,
      })
            .then(response => response.json())
            .catch(function(e) {
              console.log("Oops, error");
            });
  }

  static logout(action)
  {
    return fetch('http://localhost:8080/logout', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": '*',
        },
      })
            .then(response => response.json())
            .catch(function(e) {
              console.log("Oops, error");
            });
  }


}
