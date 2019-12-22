/* use on a vscode themes website page, opens a random theme on the page */
function main()
{
    var themelinks=document.querySelectorAll("a.css-og9qf9");

    setTimeout(()=>{
        themelinks[randomInt(0,themelinks.length-1)].click();
    },500);

    // window.location=themelinks[randomInt(0,themelinks.length-1)].href;
    // window.location="https://www.google.com/";
}

function randomInt(low,high)
{
    low=Math.ceil(low);
    high=Math.floor(high);
    return Math.floor(Math.random()*(high-low+1))+low;
}

main();