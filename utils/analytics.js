

export async function conversionAnalytics(searchQuery = "", productIds = []) {   
    // console.log(window.$nuxt.$axios);
  
    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append('Authorization', 'Basic ' + btoa('a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61'));
    // console.log(searchQuery,productIds);
    // var raw = JSON.stringify({
    //     "query_id": searchQuery,
    //     "conversion_on": productIds,
    // });

    // var requestOptions = {
    //     method: 'PUT',
    //     headers: myHeaders,
    //     body: raw,
    //     redirect: 'follow',
    //     credentials: 'include',
    // };

    // return fetch("https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@appbase-demo-ansible-abxiydt-arc.searchbase.io/movies-store-app/_analytics/conversion", requestOptions)
    // .then(response => response.text())   
    // .catch(error => console.log('error', error));

    var data = JSON.stringify({
        "query": searchQuery,
        "conversion_on": productIds,
      });
       
      var xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          console.log(this.responseText);
        }
      });
      
      xhr.open("PUT", "https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@appbase-demo-ansible-abxiydt-arc.searchbase.io/movies-store-app/_analytics/conversion");
      xhr.setRequestHeader("content-type", "application/javascript");
      xhr.setRequestHeader("authorization", "Basic YTAzYTFjYjcxMzIxOjc1YjY2MDNkLTk0NTYtNGE1YS1hZjZiLWE0ODdiMzA5ZWI2MQ==");
      xhr.setRequestHeader("cache-control", "no-cache");
      
      xhr.send(data);
}