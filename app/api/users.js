export default class ApiUsers
{
  //const path = "http://localhost:8080";
  static getList(action)
  {
    return fetch('http://localhost:8181/user/test', {
        method: 'GET',
        cache: 'default'
      })
            .then(response => response.json())
            .then(data => data.users)
            .catch(function(e) {
              console.log("Oops, error");
            });
  }

  static add(action)
  {
    return fetch('http://localhost:8181/user/addTest', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json, text/plain, */*',
                  "Content-Type": "application/x-www-form-urlencoded"
                },
                body: 'username=' + action.username + '&job=' + action.job,
                credentials: 'include'
                })
                .then(response => response.json())
                .then(json =>
                  console.log(json.success)
                )

  }
  static edit(action)
  {
    return fetch('http://localhost:8181/user/editTest', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json, text/plain, */*',
                  "Content-Type": "application/x-www-form-urlencoded"
                },
                body: 'id=' + action.id + '&username=' + action.username + '&job=' + action.job,
                credentials: 'include'
                })
                .then(response => response.json())
                .then(json =>
                  console.log(json.success)
                )

  }
  static delete(action)
  {
    return fetch('http://localhost:8181/user/deleteTest', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json, text/plain, */*',
                  "Content-Type": "application/x-www-form-urlencoded"
                },
                body: 'id=' + action.id,
                credentials: 'include'
                })
                .then(response => response.json())
                .then(json =>
                  console.log(json.success)
                )
  }
}
