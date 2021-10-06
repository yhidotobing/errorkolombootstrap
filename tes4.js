let apiDigimon = "https://digimon-api.vercel.app/api/digimon";

const getPost = async (API) => {
  const response = await fetch(API); // Paket simpan dalam response
  let result = await response.json(); // Unboxing simpan di json
  console.log(response);
  console.log(result); // [{},{},{}] // untuk mengetahui isi paket

  result = result.filter((item, index) => {
    if (index < 20) return item;
  });
  const postList = document.querySelector(".cardx"); // Ul
  result.forEach((item) => {
    postList.innerHTML += `
        <div class="col">
        <div class="card border border-primary">
          <img src="${item.img}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">
              ${item.level}
            </p>
          </div>
        </div>
        </div>`;
  });
};

getPost(apiDigimon);
