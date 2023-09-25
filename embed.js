(function (document, scriptAddress) {
    const time = new Date().getTime()
    const scriptElement = document.createElement('script');
    window.whata = {
        store: 'REPLACE_WITH_YOUR_WHATACART_ID',
    }        
    scriptElement.src = `${scriptAddress}?ts=${time}`;        
    document.body.appendChild(scriptElement);
})(document, 'https://embed-whatacart.sfo3.cdn.digitaloceanspaces.com/vtex.production.js');
