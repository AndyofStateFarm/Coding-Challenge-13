function call()
{
    const request = fetch(`https://course-api.com/react-store-products`).then((response)=>{
        return response.json();
    }).then((data)=>{
        document.querySelector("#productName").textContent = `${data[0].name}`;
        document.querySelector("#productPicture").src = `${data[0].image}`;
        document.querySelector("#productPrice").textContent = `${data[0].price}`;
        document.querySelector("#productDescription").textContent = `${data[0].description}`;
    })
}
call()