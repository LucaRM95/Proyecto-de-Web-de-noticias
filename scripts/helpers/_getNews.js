import { getFetch, postFetch }  from "./_getFetch.js";

const getNews = ( sectionNews ) => {

    let loading = true;

    getFetch()
    .then( news => {
            
        return news.map(article => {
            sectionNews.innerHTML += `
                <div id=${article.id} class="col-md-6 d-flex justify-content-center">
                    <div class="card-news mt-5 mb-5">
                        <img src="./assets/img/news-photo.jpg" alt="">
                        <div class="card-text">
                            <h1 class="mb-4">${article.title}</h1>
                            <strong>Posted by user${article.userId}</strong>
                            <p class="mt-4">
                                ${article.body}
                            </p>
                            <button class="btn btn-outline-success">Read More</button>
                            <button id="delete" class="btn btn-outline-danger">Delete</button>
                        </div>
                    </div>
                </div>
            `
        })
           
    })
    .catch( () => {
        alert('There was a problem with load the news');
    });
}

const createPost = ( element, section ) => {

    element.addEventListener("submit", (e) => {
        e.preventDefault();

        const data = {
            userId: 1,
            img: document.querySelector("#imgPost").value,
            title: document.querySelector("#inputTitle").value,
            user: document.querySelector("#inputUser").value,
            body: document.querySelector("#inputContent").value,
        }

        postFetch(data).then(response => {

            console.log(response)
            const principalDiv = document.createElement("div");
            const cardDiv = document.createElement("div");
            const img = document.createElement("img");
            const cartTextDiv = document.createElement("div");
            const h1 = document.createElement("h1");
            const strong = document.createElement("strong");
            const p = document.createElement("p");
            const buttonRead = document.createElement("button");
            const buttonDelete = document.createElement("button");

            principalDiv.id = response.id;
            principalDiv.className = "col-md-6 d-flex justify-content-center";

            cardDiv.className = "card-news mt-5 mb-5";
            img.src = "./assets/img/news-photo.jpg";

            cartTextDiv.className = "card-text";

            h1.className = "mb-4";
            h1.textContent = response.title;

            strong.textContent = `Posted by user ${response.user}`;

            p.className = "mt-4";
            p.textContent = response.body;

            buttonRead.className = "btn btn-outline-success me-2";
            buttonRead.textContent = "Read More";
            buttonDelete.id = "delete";
            buttonDelete.className = "btn btn-outline-danger";
            buttonDelete.textContent = "Delete";

            cartTextDiv.appendChild(h1);
            cartTextDiv.appendChild(strong);
            cartTextDiv.appendChild(p);
            cartTextDiv.appendChild(buttonRead);
            cartTextDiv.appendChild(buttonDelete);
            cardDiv.appendChild(img);
            cardDiv.appendChild(cartTextDiv)
            principalDiv.appendChild(cardDiv);

            return section.prepend(principalDiv);
        });

    });
}

export {
    getNews,
    createPost
}
