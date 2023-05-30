const gallery = document.querySelector('.gallery');

const data = async () => {
    try {
      const response = await fetch('https://scary-tick-housecoat.cyclic.app//uploads');
      const jsonData = await response.json();
      console.log(jsonData);
      return jsonData;
    } catch (error) {
      console.error('Erro ao carregar o arquivo JSON:', error);
    }
  };

data().then(data => {
  
    data.forEach(img => {

      const dateString = img.date;
      const date = new Date(dateString);
      
      const optionsDate = { year: 'numeric', month: '2-digit', day: '2-digit' };
      const optionsTime = { hour: '2-digit', minute: '2-digit' };
      
      const formattedDate = date.toLocaleDateString('pt-BR', optionsDate);
      const formattedTime = date.toLocaleTimeString('pt-BR', optionsTime);
        

      const container = document.createElement('div');
      container.setAttribute('class', 'card__gallery');
      
      const cardImg = document.createElement('div');
      cardImg.setAttribute('class', 'card__gallery-img');
  
      const content = document.createElement('div');
      content.setAttribute('class', 'card__gallery-title');
  
      const image = document.createElement('img');
      image.setAttribute('src', img.src);
  
      const title = document.createElement('h3');
      title.textContent = `${formattedDate} - ${formattedTime}`;
  
      content.appendChild(title);
      cardImg.appendChild(image)
  
      container.appendChild(cardImg);
      container.appendChild(content);
      gallery.appendChild(container);
    });
  });
  
