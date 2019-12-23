/* use on a vscode themes website page, opens a random theme on the page */
function main()
{
    setTimeout(()=>{
        var themelinks=document.querySelectorAll("a.css-og9qf9");
        themelinks[randomInt(0,themelinks.length-1)].click();
    },500);
}

function randomInt(low,high)
{
    low=Math.ceil(low);
    high=Math.floor(high);
    return Math.floor(Math.random()*(high-low+1))+low;
}

main();