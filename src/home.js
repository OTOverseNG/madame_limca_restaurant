export const homeLoad = () => {
    const defaultStyle = `
                            color: green; 
                            border:5px solid green;
                            border-radius: 20px;
                            text-align:center
                        `;
    const mainDiv =  document.querySelector('#content');
    const header = document.createElement("h1");
    header.textContent =  "Welcome to Madame Limca"
    header.style.cssText = `${defaultStyle}`;
    header.style.fontSize =  "42px";

    const review_container = document.createElement("div");
    review_container.style.cssText = `${defaultStyle}`;

    const review = document.createElement("p");
    review.textContent = `
                            Every dish was prepared with care — rich flavors, fresh ingredients, and beautiful presentation that showed real attention to detail. The staff were polite, patient, and very attentive without being overwhelming. Service was quick, and every recommendation they made was spot-on. If you’re looking for a place that combines quality food, great service, and a relaxing environment, this restaurant is absolutely worth visiting
                            `
    review.style.cssText = "font-size: 20px"

    const customer = document.createElement("p");
    customer.textContent = "Madam Kofo Tinubu";
    
    review_container.appendChild(review);
    review_container.appendChild(customer);

    const hour_container = document.createElement("div");
    hour_container.style.cssText = `${defaultStyle}`;
    const hour_header = document.createElement("h4");
    hour_header.textContent =  "Hours";
    const hours_list =  document.createElement("ul");
    hours_list.style.cssText = `list-style-type:none`;
    const hours_list_items = [
                                "Sunday: 8am - 8pm", 
                                "Monday: 8am - 10pm",
                                "Tuesday: 8am -  10pm",
                                "Wednesday: 8am - 10pm",
                                "Thursday: 8am - 10pm",
                                "Friday: 6am - 12am",
                                "Saturday: 10am - 8pm"
                            ];

    hours_list_items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        hours_list.appendChild(li);
    });
    hour_container.appendChild(hour_header);
    hour_container.appendChild(hours_list);

    const location_container = document.createElement("div");
    location_container.style.cssText = `${defaultStyle}`;
    const location_header = document.createElement("h4");
    const location_paragraph = document.createElement("p");
    location_header.textContent = "Location";
    location_paragraph.textContent = "12 Bethel Street Sango Otta Ogun State";
    location_container.appendChild(location_header);
    location_container.appendChild(location_paragraph);

    mainDiv.appendChild(header);
    mainDiv.appendChild(review_container);
    mainDiv.appendChild(hour_container);
    mainDiv.appendChild(location_container);

}