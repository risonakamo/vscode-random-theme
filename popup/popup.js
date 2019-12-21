window.onload=main;

const _themePageMax=42;

function main()
{
    chrome.tabs.create({url:`https://vscodethemes.com/dark?page=${randomInt(1,_themePageMax)}`});
}

function randomInt(low,high)
{
    low=Math.ceil(low);
    high=Math.floor(high);
    return Math.floor(Math.random()*(high-low+1))+low;
}