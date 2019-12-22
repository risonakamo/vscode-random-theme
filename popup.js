window.onload=main;

const _themePageMax=42;

async function main()
{
    var choice=randomInt(1,_themePageMax);

    document.querySelector(".picked-number").textContent=choice;

    console.log(await onVsThemesSite());

    // chrome.tabs.create({
    //     url:`https://vscodethemes.com/dark?page=${choice}`,
    //     active:false
    // },(tab)=>{
    //     chrome.tabs.executeScript(tab.id,{
    //         file:"openrandomtheme.js",
    //         runAt:"document_end"
    //     },()=>{
    //         chrome.tabs.update(tab.id,{active:true});
    //     });
    // });
}

//returns a bool promise if the site is vscode themes or not
function onVsThemesSite()
{
    return new Promise((resolve)=>{
        chrome.tabs.query({
            active:true,
            url:"https://vscodethemes.com/*"
        },(tabs)=>{
            resolve(tabs.length>0);
        });
    });
}

function randomInt(low,high)
{
    low=Math.ceil(low);
    high=Math.floor(high);
    return Math.floor(Math.random()*(high-low+1))+low;
}