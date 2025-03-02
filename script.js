fetch('courses.json')
    .then(response => response.json())
    .then(data => {
        const courseList = document.getElementById('course-list');
        data.courses.forEach(course => {
            let li = document.createElement('li');
            li.innerHTML = `${course.year_level} Year, ${course.sem} Sem - ${course.code}: ${course.description} (${course.credit.replace(/\n/g, '<br>')} Credits\n)`;
            courseList.appendChild(li);
        });
    })
    .catch(error => console.error('Error loading JSON:', error));