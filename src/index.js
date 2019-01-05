import 'bootstrap';
import style from './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';


$.get('http://127.0.0.1:8000/courses/')
    .done( function(data) {
        const courseList = data;
        const titlesFromBackend = courseList.map( c => c.title); 
        const descFromBackend = courseList.map ( d => d.description);
        Array.from(document.getElementsByClassName('course-title')).forEach( 
            t => t.innerHTML = titlesFromBackend.pop() 
        );
        Array.from(document.getElementsByClassName('course-description')).forEach( 
            d => d.innerHTML = descFromBackend.pop() 
        );

    })

Array.from(document.getElementsByClassName('collapsible')).forEach(
    collapsible => collapsible.addEventListener('click', () => {
        collapsible.classList.toggle('active');
        const content = collapsible.parentElement.nextElementSibling;
        console.log(content);
        content.style.display = content.style.display === 'block'
            ? 'none': 'block';
  })
);