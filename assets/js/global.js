const api_version = document.getElementById('api_v');

//check if the api_v is there

$.ajax({
    url: 'https://hanime.tv/api/hanime/',
    type: 'GET',
    dataType: 'json',
    success: async function (data) {
        api_version.innerHTML = "API Version: " + await data.Version;
    }
})
