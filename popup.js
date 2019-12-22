window.onload=main;

const _themePageMax=42;

function main()
{
    chrome.tabs.create({
        url:`https://vscodethemes.com/dark?page=${randomInt(1,_themePageMax)}`,
        active:false
    },(tab)=>{
        chrome.tabs.executeScript(tab.id,{
            file:"openrandomtheme.js",
            runAt:"document_end"
        },()=>{
            chrome.tabs.update(tab.id,{active:true});
        });
    });
}

function randomInt(low,high)
{
    low=Math.ceil(low);
    high=Math.floor(high);
    return Math.floor(Math.random()*(high-low+1))+low;
}