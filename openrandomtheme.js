(()=>{
    function randomInt(low,high)
    {
        low=Math.ceil(low);
        high=Math.floor(high);
        return Math.floor(Math.random()*(high-low+1))+low;
    }

    setTimeout(()=>{
        var themelinks=document.querySelectorAll(".result a");
        themelinks[randomInt(0,themelinks.length-1)].click();
    },500);
})();