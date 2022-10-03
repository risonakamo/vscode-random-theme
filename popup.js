window.onload=main;

const _themePageMax=179;

async function main()
{
    var choice=randomInt(1,_themePageMax);

    document.querySelector(".picked-number").textContent=choice;

    var isthemespage=await onVsThemesSite();

    //if we are not already on a vscode themes page
    if (isthemespage<0)
    {
        chrome.tabs.create({
            url:`https://vscodethemes.com/dark?page=${choice}`,
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

    //if we are on vscode page
    else
    {
        chrome.tabs.update(isthemespage,{
            url:`https://vscodethemes.com/dark?page=${choice}`
        },(tab)=>{
            setTimeout(()=>{
                chrome.tabs.executeScript(tab.id,{
                    file:"openrandomtheme.js"
                });
            },500);
        });
    }
}

/* int onVsThemesSite()
   returns if the current active tab is a vscodethemes site or not.
   if it is, will return the ID of the current active tab that is the vscode
   theme site tab. if it is NOT, it will return a NEGATIVE NUMBER.*/
function onVsThemesSite()
{
    return new Promise((resolve)=>{
        chrome.tabs.query({
            active:true,
            currentWindow:true,
            url:"https://vscodethemes.com/*"
        },(tabs)=>{
            if (!tabs.length)
            {
                resolve(-1);
                return;
            }

            resolve(tabs[0].id);
        });
    });
}

function randomInt(low,high)
{
    low=Math.ceil(low);
    high=Math.floor(high);
    return Math.floor(Math.random()*(high-low+1))+low;
}