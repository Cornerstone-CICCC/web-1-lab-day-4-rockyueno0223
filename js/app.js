const form = document.querySelector('form')

// From Submit
form.addEventListener("submit", (e) => {

  e.preventDefault();
  const formData = new FormData(form)

  const employee = document.createElement('tr')
  // Photo
  const td1 = employee.appendChild(document.createElement('td'))
  const photo = formData.get('photo')
  let imgElement = document.createElement('img')
  imgElement.src = `./images/${photo.name}`

  td1.appendChild(imgElement)
  // First Name
  const td2 = employee.appendChild(document.createElement('td'))
  td2.textContent = formData.get('firstname')
  // Last Name
  const td3 = employee.appendChild(document.createElement('td'))
  td3.textContent = formData.get('lastname')
  // Email
  const td4 = employee.appendChild(document.createElement('td'))
  td4.textContent = formData.get('email')
  // Hire Date
  const td5 = employee.appendChild(document.createElement('td'))
  td5.textContent = formData.get('hire_date')
  // Delete Button
  const td6 = employee.appendChild(document.createElement('td'))
  const deleteBtn = document.createElement('button')
  deleteBtn.textContent = 'Delete'
  td6.appendChild(deleteBtn)

  const employeeList = document.getElementById('employeeList')
  employeeList.append(employee)

  form.reset()

  // Delete Employee
  deleteBtn.addEventListener('click', () => {
    let result = confirm('Are you sure you want to delete this employee?')

    if (result == true) {
      deleteBtn.parentElement.parentElement.remove()
    }
  })
})
