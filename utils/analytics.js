

export async function conversionAnalytics(searchQuery = "", productIds = []) {   
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