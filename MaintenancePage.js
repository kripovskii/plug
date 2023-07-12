export default class MaintenancePage {
    render() {
      const container = document.createElement('div');
      container.className = 'maintenance-page';
  
      const title = document.createElement('h1');
      title.textContent = 'Сайт находится на технических работах';
      container.appendChild(title);
  
      const paragraphs = [
        'Дорогой посетитель,',
        'Мы приносим извинения за временные неудобства, но хотим сообщить вам, что наш сайт в настоящий момент находится на технических работах с веб-сервером.',
       
        'Благодарим вас за ваше терпение и понимание.',
        'С наилучшими пожеланиями,',
        'ITExplorer'
      ];
  
      paragraphs.forEach(text => {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        container.appendChild(paragraph);
      });
  
      return container;
    }
  }
  