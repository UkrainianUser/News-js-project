import { FetchNews } from './fetchNewsApi';
import { fetchNews } from './fetchNews';
import { renderCard } from './renderCard';

const newsAPI = new FetchNews();

const categoriesContainer = document.getElementById('categories-container');
const menuContainer = document.getElementById('menu-container');
const dropbtn = document.querySelector('.dropbtn');
fetchNewsCategory();

function fetchNewsCategory() {
  return fetch(
    `https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=UPfW6vgRuPuGF8dWeumSDLnq86AeLhG1`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Создаем кнопки для первых 5 категорий
      const categories = data.results
        .slice(0, 5)
        .map(category => category.section);

      const buttonCategories = Array.from(categoriesContainer.children).map(
        button => button.getAttribute('name')
      );

      // Найти категории, которых еще нет в ссылках
      const newCategories = data.results
        .filter(category => !buttonCategories.includes(category.section))
        .map(category => category.section);

      categories.forEach(category => {
        const link = createLink(category);
        categoriesContainer.appendChild(link);
      });
      createMenu(categories, newCategories);

      // menuContainer.appendChild(menu);
    })
    .catch(error => {
      console.error(error);
    });
}
// Функция для создания ссылки
function createLink(category) {
  const link = document.createElement('a');
  link.classList.add('categories-container_link', 'dropdown-link');
  link.textContent = category;
  link.setAttribute('href', '#');
  link.setAttribute('name', category);

  link.addEventListener('click', () => {
    const categoryName = link.getAttribute('name');
    newsAPI.category = categoryName;
    newsAPI
      .fetchByCategory()
      .then(articles => {
        renderCard(articles);
      })
      .catch(error => {
        console.error(error);
      });

    const links = Array.from(categoriesContainer.children);
    links.forEach(l => {
      if (l === link) {
        l.classList.add('activee');
      } else if (l.classList.contains('activee')) {
        l.classList.remove('activee');
      }
    });
  });

  return link;
}

function createMenu(categories, newCategories) {
  const dropdown = document.getElementById('myDropdown');
  dropdown.innerHTML = '';

  const menuCategories = categories.concat(newCategories);

  const existingLinks = Array.from(dropdown.children).map(link =>
    link.getAttribute('name')
  );

  const uniqueCategories = menuCategories.filter(
    category => !existingLinks.includes(category)
  );

  // Удаляем первые пять категорий из массива uniqueCategories
  const filteredCategories = uniqueCategories.filter(
    category => !categories.slice(0, 5).includes(category)
  );

  filteredCategories.forEach(category => {
    const link = createLink(category);
    dropdown.appendChild(link);
  });

  const dropdownLinks = dropdown.querySelectorAll('a');
  dropdownLinks.forEach(link => {
    link.classList.add('categories-container_link_dropDown');
    if (categories.includes(link.getAttribute('name'))) {
      const index = categories.indexOf(link.getAttribute('name'));
      if (index < 5) {
        link.classList.add('activee');
      }
    }
  });

  // установить фиксированную высоту для меню
  dropdown.style.height = '380px';
  // добавить скролл
  dropdown.style.overflowY = 'scroll';

  return dropdown;
}

dropbtn.addEventListener('click', onDropBtn);

//  Когда пользователь нажимает на кнопку,
// переключаться между скрытием и отображением выпадающего содержимого
function onDropBtn() {
  document.getElementById('myDropdown').classList.toggle('show');
}

// Закрываем раскрывающийся список, если пользователь щелкает за его пределами
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

console.log('test');
