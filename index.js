const zip_test = () => {
    var xhr = new XMLHttpRequest
    xhr.onload = function () {
        var blob = xhr.response;
        var zipArr = new Uint8Array(blob);
        var unzipResult = new Zlib.Unzip(zipArr);
        var importFileList = unzipResult.getFilenames();
        var jsonBuffer = new TextDecoder().decode(unzipResult.decompress(importFileList[0]));
        var json = JSON.parse(jsonBuffer);
        console.log("json is", json);
    }
    xhr.open('GET', "URL", true)
    xhr.responseType = 'arraybuffer'
    xhr.send();
}

zip_test();
