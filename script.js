// U08282838

document.addEventListener('DOMContentLoaded', () => {
    let count = 0;
    function call(count)
    {
        const request = fetch(`https://course-api.com/react-store-products`).then((response)=>{
            return response.json();
        }).then((data)=>{
            console.log(data);
            document.querySelector("#productName").textContent = `${data[count].name}`;
            document.querySelector("#productPicture").src = `${data[count].image}`;
            document.querySelector("#productPrice").textContent = `$${data[count].price}`;
            document.querySelector("#productDescription").textContent = `${data[count].description}`;
        }).catch((err)=>{
            console.log(err);
            alert('There was an error loading products. Please try again soon.')  
        }).finally(()=>{
            console.log("Nothing to see here");
        })
    }

        call(count)

        //Previous button event listener
        document.getElementById('previousbtn').addEventListener('click', ()=>{
            count = (count > 0) ? --count : 21;
            console.log(count);
            call(count)
        })

        //Next button event listener
        document.getElementById('nextbtn').addEventListener('click', ()=>{
            count = (count < 21) ? ++count : 0;
            console.log(count);
            call(count)
        })
    })