export const menuLoad = () => {
    const defaultStyle = `
                            color: green; 
                            border:5px solid green;
                            border-radius: 20px;
                            text-align:center
                        `;
    const mainDiv = document.querySelector("#content");
    const menuContainer = document.createElement("div");
    menuContainer.textContent = "Menu";
    menuContainer.style.cssText = `${defaultStyle}`;
    menuContainer.style.display = "flex";
    menuContainer.style.flexDirection = "column";
    menuContainer.style.gap = "40px";
    menuContainer.style.fontSize = "32px";

    const subContainerOne = document.createElement("div");
    subContainerOne.textContent = "Appetizers";
    subContainerOne.style.cssText =  `${defaultStyle}`;
    subContainerOne.style.display = "flex";
    subContainerOne.style.flexDirection = "column";
    subContainerOne.style.gap = "30px";
    

    const itemOneContainer = document.createElement("div");
    itemOneContainer.style.cssText = `${defaultStyle}`;
    const itemOneheader = document.createElement("h4");
    itemOneheader.textContent = "Crispy Chicken Wings"
    const itemOnePara =  document.createElement("p");
    itemOnePara.textContent = "description : fried wings served with spicy dip";
    itemOneContainer.appendChild(itemOneheader);
    itemOneContainer.appendChild(itemOnePara);

    const itemTwoContainer = document.createElement("div");
    itemTwoContainer.style.cssText = `${defaultStyle}`;
    const itemTwoheader = document.createElement("h4");
    itemTwoheader.textContent = "Spring Rolls"
    const itemTwoPara =  document.createElement("p");
    itemTwoPara.textContent = "description :crunchy rolls stuffed with vegetables";
    itemTwoContainer.appendChild(itemTwoheader);
    itemTwoContainer.appendChild(itemTwoPara);



    
    mainDiv.appendChild(menuContainer);
    mainDiv.appendChild(subContainerOne);
    mainDiv.appendChild(itemOneContainer);
    mainDiv.appendChild(itemTwoContainer)
}