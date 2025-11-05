export const contactLoad = () => {
    const defaultStyle = `
                            color: green; 
                            border:5px solid green;
                            border-radius: 20px;
                            text-align:center
                        `;

    const mainDiv = document.querySelector("#content");
    const contactHeader = document.createElement("div");
    contactHeader.textContent =  "Contact Us";
    contactHeader.style.cssText = `${defaultStyle}`;

    const ownerContact = document.createElement("div");
    ownerContact.style.cssText = `${defaultStyle}`;

    const ownerContactHeader = document.createElement("h3");
    ownerContactHeader.textContent = "Madam Limca";
    const details = document.createElement("ul");
    details.style.cssText = "list-style-type:none";
    
    const listDetails = ["Owner", "123-456-789", "madamlimca@gmail.co"];
    listDetails.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        details.appendChild(li);
    })

    ownerContact.appendChild(ownerContactHeader);
    ownerContact.appendChild(details);

    mainDiv.appendChild(contactHeader);
    mainDiv.appendChild(ownerContact);
}