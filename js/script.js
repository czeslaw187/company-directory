$('#noButton').on('click', ()=> {
    $('#removeRecord').fadeOut()
})


//single employee
const getEmp = (object, index) => {
   return `<div class="container m-2" id="person${index}">
                    <div class="row">
                        <div class="col-sm-1 p-0">
                            <img src="${object['data'][index]['imgUrl'] ? object['data'][index]['imgUrl'] : ''}" alt="" class="img" id="img" style="width: 90px; heigth: 115px;"/>
                        </div>
                        <div class="col-sm-6">
                            <h4>${object['data'][index]['firstName']} ${object['data'][index]['lastName']}</h4>
                            <p>${object['data'][index]['email']}<p>
                        </div>
                        <div class="col-sm-4">
                            <h6 class="mb-0">Department:</h6>
                            <p class="mt-0">${object['data'][index]['department']}</p>
                            <h6 class="my-0">Location:</h6>
                            <p class="my-0">${object['data'][index]['location']}</p>
                        </div>
                        <div class="col-sm-1">
                            <button type="button" data-toggle="collapse" data-target="#dropdown${index}" class="btn"><span><i class="fa fa-sort-desc fa-3x"></i></span></button>
                        </div>
                    </div>
                    <div class="row collapse" id="dropdown${index}">
                        <div class="col-sm-6">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <label for="title" class="mr-2">Title</label>
                                    <select name="title" id="title" class="form-control">
                                        <option value="mr">Mr</option>
                                        <option value="mrs">Mrs</option>
                                        <option value="miss">Miss</option>
                                        <option value="sir">Sir</option>
                                        <option value="dr">Dr</option>
                                    </select>
                                </li>
                                <li class="list-group-item">
                                    <label for="firstName" class="mr-2">First Name</label>
                                    <input type="text" name="firstName" id="firstName" class="form-control" value="${object['data'][index]['firstName']}" />
                                </li>
                                <li class="list-group-item">
                                    <label for="firstName" class="mr-2">Last Name</label>
                                    <input type="text" name="lastName" id="lastName" class="form-control" value="${object['data'][index]['lastName']}"/>
                                </li>
                                <li class="list-group-item">
                                    <label for="dob" class="mr-2">Date of birth</label>
                                    <input type="text" name="dob" id="dob" class="form-control" value="${object['data'][index]['dob'] ? object['data'][index]['dob'] : ''}"/>
                                </li>
                                <li class="list-group-item">
                                    <label for="firstName" class="mr-2">Address line 1</label>
                                    <input type="text" name="address1" id="address1" class="form-control" value="${object['data'][index]['address_1'] ? object['data'][index]['address_1'] : ''}"/>
                                </li>
                                <li class="list-group-item">
                                    <label for="addresTwo" class="mr-2">Address line 2</label>
                                    <input type="text" name="address2" id="address2" class="form-control" value="${object['data'][index]['address_2'] ? object['data'][index]['address_2'] : ''}"/>
                                </li>
                                <li class="list-group-item">
                                    <label for="postCode" class="mr-2">Post Code</label>
                                    <input type="text" name="postCode" id="postCode" class="form-control" value="${object['data'][index]['post_code'] ? object['data'][index]['post_code'] : ''}"/>
                                </li>
                                <li class="list-group-item">
                                    <label for="city" class="mr-2">City</label>
                                    <input type="text" name="city" id="city" class="form-control" value="${object['data'][index]['city'] ? object['data'][index]['city'] : ''}"/>
                                </li>
                                <li class="list-group-item">
                                    <label for="email" class="mr-2">Email</label>
                                    <input type="text" name="email" id="email" class="form-control" value="${object['data'][index]['email'] ? object['data'][index]['email'] : ''}"/>
                                </li>
                                <li class="list-group-item">
                                    <label for="phone" class="mr-2">Phone</label>
                                    <input type="number" name="phone" id="phone" class="form-control" value="${object['data'][index]['phone'] ? object['data'][index]['phone'] : ''}"/>
                                </li>
                                <li class="list-group-item">
                                <form method="post" action="" enctype="multipart/form-data" id="myform" class="form-group">  
                                    <label for="file">Picture</label>
                                        <div>
                                            <input type="file" id="file" name="file" /> 
                                            <input type="button" class="btn btn-primary" value="Upload" id="but_upload" /> 
                                        </div>
                                </form> 
                                </li>
                            </ul>
                        </div>
                        <div class="col-sm-5">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <label for="position" class="mr-2">Position</label>
                                    <input type="text" name="position" id="position" class="form-control" value="${object['data'][index]['jobTitle'] ? object['data'][index]['jobTitle'] : ''}"/>
                                </li>
                                <li class="list-group-item">
                                    <label for="department" class="mr-2">Department</label>
                                    <select name="department" id="department" class="form-control">
                                    <option value="${object['data'][index]['departmentID']}">${object['data'][index]['department']}</option>
                                    </select>
                                </li>   
                                <li class="list-group-item">
                                    <label for="hod" class="mr-2">Head of Department</label>
                                    <p name="hod" id="hod">${object['data'][index]['hod'] ? object['data'][index]['hod'] : ''}</p>
                                </li>
                                <li class="list-group-item">
                                    <label for="salary" class="mr-2">Salary</label>
                                    <input type="text" name="salary" id="salary" class="form-control" value="${object['data'][index]['salary'] ? object['data'][index]['salary'] : ''}"/>
                                </li>
                                <li class="list-group-item">
                                    <label for="startDate" class="mr-2">Start Date</label>
                                    <input type="text" name="startDate" id="startDate" class="form-control" value="${object['data'][index]['hire_date'] ? object['data'][index]['hire_date'] : ''}"/>
                                </li>
                                <li class="list-group-item">
                                    <label for="endOfEmployment" class="mr-2">End of Employment</label>
                                    <input type="text" name="endOfEmployment" id="endOfEmployment" class="form-control" value="${object['data'][index]['end_date'] ? object['data'][index]['end_date'] : ''}"/>
                                </li>
                                <li class="list-group-item">
                                    <label for="location" class="mr-2">Location</label>
                                    <p id="location" name="location">${object['data'][index]['location'] ? object['data'][index]['location'] : ''}</p>
                                </li>
                                <li class="list-group-item">
                                    <label for="workHistory" class="mr-2">Work History</label>
                                    <textarea class="form-control" name="workHistory" id="workHistory">${object['data'][index]['work_history'] ? object['data'][index]['work_history'] : ''}</textarea>
                                </li>
                            </ul>
                            <div class="row">
                                <div class="col-sm-12">
                                    <button type="submit" id="saveCredentials" value="Submit" class="btn btn-md btn-success pull-right">Submit</button>
                                    <button type="button" id="cancelSave" class="btn btn-md btn-danger pull-right mr-3">Cancel</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-1">
                            <button type="button" class="btn" id="enableFields">
                            <span>
                                <i class="fa fa-pencil-square-o"></i>
                            </span>
                            </button>
                            <button type="button" class="btn" data-toggle="modal" data-target="#removeRecord${index}">
                                <span>
                                    <i class="fa fa-trash-o"></i>
                                </span>
                            </button>                           
                            <div id="removeRecord${index}" class="modal fade" role="dialog">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-body text-center">
                                            <button type="button" class="close pull-right" data-dismiss="modal">&times;</button>
                                            <h4>Do you want to permamently delete record?</h4><br><br>
                                            <button type="button" id="deleteRecord" class="btn btn-lg btn-success">Yes</button>
                                            <button type="button" id="noButton" class="btn btn-lg btn-danger" data-dismiss="modal">No</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>`
}

// load all employees
let rows = []

$.ajax({
    url: 'php/getAll.php',
    type: 'get',
    dataType: 'json',
    success: response => {    
        
        for (let i = 0; i < response['data'].length; i++) { 
            let count = i
            rows += getEmp(response, count)                
        }
        
        const renderInMain = object => {
            $('#main').html(`
            <div class="container" style="border: none;">
                <div class="row">
                    <button type="button" class="btn btn-md btn-success my-2" id="addEmployeeBtn" data-toggle="modal" data-target="#employeeForm">Create New Employee</button>
                </div>
            </div>
            ${object}
        `);
        }
        renderInMain(rows)
        // enable editing data
        const enableEdit = () => {
            for (let i = 0; i < response['data'].length; i++) {
                $(`#person${i} input, #person${i} select, #person${i} textarea`).prop('disabled', true)
                $(`#person${i} #cancelSave`).hide()
                $(`#person${i} #saveCredentials`).hide()
                $(`#person${i} #enableFields`).click(()=> {
                    $(`#person${i} input, #person${i} select, #person${i} textarea`).prop('disabled', false)
                    $(`#person${i} #cancelSave`).show()
                    $(`#person${i} #saveCredentials`).show()
                    getDepartments()
                })
                $(`#person${i} #cancelSave`).click(()=> {
                    $(`#person${i} input, #person${i} select, #person${i} textarea`).prop('disabled', true)
                    $(`#person${i} #cancelSave`).hide()
                    $(`#person${i} #saveCredentials`).hide()
                    $(`#person${i} #department`).html(`<option value="${response['data'][i]['departmentID']}">${response['data'][i]['department']}</option>`)
                })
            }
        }
        enableEdit()

        // search by name

        $(`#nameInput`).on('keyup', (e)=> {
            e.preventDefault()
            let name = $('#nameInput').val().split(' ')
            if (name[1]) {
                for (let i = 0; i < response['data'].length; i++) {
                    if (response['data'][i]['firstName'].toLowerCase() === name[0] && response['data'][i]['lastName'].toLowerCase() === name[1]) {
                        $(`#person${i}`).get(0).scrollIntoView()
                        break
                    }
                }
            } else {
                for (let i = 0; i < response['data'].length; i++) {
                    if (response['data'][i]['email'].toLowerCase() === name[0].toLowerCase()) {
                        $(`#person${i}`).get(0).scrollIntoView()
                        break
                    } 
                }
            }   
        })
        // employee counter

        $('#count').append(` ${response['data'].length}`)

        //get departments

        const getDepartments = () => {
            $.ajax({
                url: 'php/getAllDepartments.php',
                type: 'get',
                dataType: 'json',
                success: departments => {           
                    let options = []
                    for (let i = 0; i < departments['data'].length; i++) {
                        options.push(`<option value="${departments['data'][i]['id']}">${departments['data'][i]['departmentName']}</option>`)
                    }        
                    for (let i = 0; i < response['data'].length; i++) {
                        $(`#person${i} #department`).html(`${options}`)
                    }
                    $('#employeeForm #departmentNew').html(`${options}`)                               
                }
            })
        }

        $('#addEmployeeBtn').on('click', ()=> {
            getDepartments()
        })
        // load employees

        $(`#loadEmployees`).on('click', ()=> {
            let someArr = []
            $(`#main`).html('')
            for (let i = 0; i < response['data'].length; i++) {
                someArr.push(getEmp(response, i))
            }
            renderInMain(someArr)
            enableEdit()
            getDepartments()
            submitNewEmployee()
            updateNewEmployee(response)
            deleteRecord(response)
            loadFiles()
        })

        //submit new employee

        const submitNewEmployee = () => {
            $('#submitNewEmployee').on('click', ()=> {
                const title = $('#titleNew').val(),
                      firstName = $('#firstNameNew').val(),
                      lastName = $('#lastNameNew').val(),
                      dob = $('#dobNew').val(),
                      address1 = $('#address1New').val(),
                      address2 = $('#address2New').val(),
                      postCode = $('#postCodeNew').val(),
                      city = $('#cityNew').val(),
                      email = $('#emailNew').val(),
                      phone = $('#phoneNew').val(),
                      position = $('#positionNew').val(),
                      department = $('#departmentNew').val(),
                      hod = $('#hodNew').val(),
                      salary = $('#salaryNew').val(),
                      startDate = $('#startDateNew').val(),
                      endDate = $('#endOfEmploymentNew').val(),
                      workHistory = $('#workHistoryNew').val();   
                if (!firstName) {
                alert('Enter first name')
                } else if (!lastName) {
                    alert('Enter last name')
                } else if (!email) {              
                    alert('Enter a valid email')
                } else if (!dob) {
                    alert('Enter valid date of birth')            
                } else if (!department) {
                    alert('Enter valid department')            
                } else {
                    $.ajax({
                        url: 'php/insertNewEmployee.php',
                        method: 'post',
                        data: {
                            title: title,
                            firstName: firstName,
                            lastName: lastName,
                            dob: dob,
                            address1: address1,
                            address2: address2,
                            postCode: postCode,
                            city: city,
                            email: email,
                            phone: phone,
                            position: position,
                            department: department,
                            hod: hod,
                            salary: salary,
                            startDate: startDate,
                            endDate: endDate,
                            workHistory: workHistory
                        },
                        dataType: 'json',
                        success: newEmployee=> {
                            if (newEmployee['status']['name'] == 'ok') {
                                alert(`Record created`)
                                window.location.reload()               
                            } else {
                                alert(`Server Error`)
                            }
                        }
                    })
                }
            })
        }
        submitNewEmployee()
        // update record

        const updateNewEmployee = (response) => {
            for (let i = 0; i < response['data'].length; i++) {
                $(`#person${i} #saveCredentials`).on('click', ()=> {
                const title = $(`#person${i} #title`).val(),
                    id = response['data'][i]['id'],  
                    firstName = $(`#person${i} #firstName`).val(),
                    lastName = $(`#person${i} #lastName`).val(),
                    dob = $(`#person${i} #dob`).val(),
                    address1 = $(`#person${i} #address1`).val(),
                    address2 = $(`#person${i} #address2`).val(),
                    postCode = $(`#person${i} #postCode`).val(),
                    city = $(`#person${i} #city`).val(),
                    email = $(`#person${i} #email`).val(),
                    phone = $(`#person${i} #phone`).val(),
                    position = $(`#person${i} #position`).val(),
                    department = $(`#person${i} #department`).val(),
                    hod = $(`#person${i} #hod`).val(),
                    salary = $(`#person${i} #salary`).val(),
                    startDate = $(`#person${i} #startDate`).val(),
                    endDate = $(`#person${i} #endOfEmployment`).val(),
                    workHistory = $(`#person${i} #workHistory`).val();
                    $.ajax({
                        url: 'php/updateRecord.php',
                        method: 'post',
                        data: {
                            id: id,
                            title: title,
                            firstName: firstName,
                            lastName: lastName,
                            dob: dob,
                            address1: address1,
                            address2: address2,
                            postCode: postCode,
                            city: city,
                            email: email,
                            phone: phone,
                            position: position,
                            department: department,
                            hod: hod,
                            salary: salary,
                            startDate: startDate,
                            endDate: endDate,
                            workHistory: workHistory
                        },
                        dataType: 'json',
                        success: response=> {
                            if (response['status']['name'] == 'ok') {
                                alert('Record updated')
                                $(`#person${i} input, #person${i} select, #person${i} textarea`).prop('disabled', true)
                                $(`#person${i} #cancelSave`).hide()
                                $(`#person${i} #saveCredentials`).hide()
                                window.location.reload()
                            } else {
                                alert(`Server Error`)
                            }
                        }
                    })
                })
            }
        }
        updateNewEmployee(response)
        // delete record

        const deleteRecord = (response) => {
            for (let i = 0; i < response['data'].length; i++) {
                $(`#person${i} #deleteRecord`).on('click', ()=> {
                    const endDate = $(`#person${i} #endOfEmployment`).val()
                    if (endDate.toLowerCase() === 'active') {
                        alert('Cannot delete active employee!')
                    } else {
                        $.ajax({
                            url: 'php/deleteRecord.php',
                            method: 'post',
                            dataType: 'json',
                            data: {
                                id: response['data'][i]['id']    
                            },
                            success: deleted=> {
                                if (deleted) {
                                    alert('Record deleted') 
                                    window.location.reload()                           
                                } else {
                                    alert('Server Error')
                                }
                            }
                        })
                    }      
                })
            }
        }
        deleteRecord(response)
        // file upload
        
        const loadFiles = () => {
            for (let i = 0; i < response['data'].length; i++) {
                $(`#person${i} #but_upload`).click(() => { 
                    let fd = new FormData(); 
                    let files = $(`#person${i} #file`)[0].files[0]; 
                    let id = response['data'][i]['id']
                    fd.append('id', JSON.stringify(id))
                    fd.append('file', files); 
                    $.ajax({ 
                        url: 'php/fileUpload.php', 
                        type: 'post', 
                        data: fd, 
                        contentType: false, 
                        processData: false, 
                        success: respond => { 
                            if(respond != 0){ 
                               alert('file uploaded'); 
                               let imgUrl = respond['data'].replace('../', './')
                               $(`#person${i} #img`).prop('src', imgUrl)
                            } 
                            else{ 
                                alert('file not uploaded'); 
                            } 
                        }, 
                    }); 
                });
            }
        }
        loadFiles()

        // render list of departments

        const renderDeps = (object) => {
            return `
            <div class="container" id="department${object['id']}">
                <div class="row justify-content-between" id="forLocation">
                    <div class="col-8-sm ml-2">
                        <h3 class="h3 w-100">${object['departmentName']}</h3>
                    </div>
                    <div class="col-4-sm mr-2">
                        <button type="button" class="btn m-2" data-toggle="collapse" data-target="#updateDep${object['id']}"><span><i class="fa fa-sort-desc fa-3x"></i></span></button>
                    </div>
                </div>
                <div class="modal fade" id="deleteDepartment${object['id']}" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-body text-center">
                                <h3 class="h3">Do you want to delete department?</h3>
                                <button class="btn btn-md btn-success" id="delDep${object['id']}">Yes</button>
                                <button class="btn btn-danger" data-dismiss="modal">No</button>
                            </div>
                        </div>
                    </div>
                </div>
                <form class="row collapse justify-content-between" id="updateDep${object['id']}">
                    <div class="col-10-sm form-group">
                        <label for="hodName" class="ml-2">Head of Department</label>
                        <input name="hodName" id="hodName${object['id']}" class="form-control ml-2" value="${object['hod'] ? object['hod'] : ''}" />
                        <label for="memberCount" class="ml-2">Members</label>
                        <p name="memberCount" class="ml-2" id="memberCount${object['id']}"></p>
                        <label for="depLocation" class="ml-2">Location</label>
                        <select name="depLocation" id="depLocation${object['id']}" class="form-control ml-2 pl-0">
                            <option class="active">${object['locationName']}</option>
                            
                        </select>
                    </div>
                    <div class="col-2-sm">
                        <div class="row">                            
                            <div class="col-6-sm d-flex flex-column">
                                <button type="button" class="btn btn-success m-2" id="submitDep${object['id']}">Submit</button>
                                <button type="button" class="btn btn-danger m-2" id="cancelSubmitDep${object['id']}">Cancel</button>
                            </div>
                            <div class="col-6-sm d-flex flex-column">
                                <button type="button" class="btn m-2" id="editDep${object['id']}"><span><i class="fa fa-pencil-square-o"></i></span></button>
                                <button type="button" class="btn m-2" id="cancelDep${object['id']}" data-toggle="modal" data-target="#deleteDepartment${object['id']}"><span><i class="fa fa-trash-o"></i></span></button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>`
        }
        // create new department
        $(`#onManage`).on('click', ()=> {
            $.ajax({
                url: 'php/getAllDepartments.php',
                type: 'get',
                dataType: 'json',
                success: respond => {
                    let newDeps = []
                    respond['data'].forEach(obj=> {
                    newDeps.push(renderDeps(obj))
                    })
                    
                    $(`#main`).html(`
                    <div class="container" style="border: none;">
                        <div class="row">
                            <button type="button" class="btn btn-md btn-success my-2" id="createNewDep" data-toggle="modal" data-target="#newDepartment">Create New Department</button>
                            <div class="modal fade" id="newDepartment" role="dialog">
                                <div class="modal-dialog modal-md">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h4 class="modal-title">Create New Department</h4>
                                            <button class="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div class="modal-body">
                                            <form class="form-group">
                                                <label for="depName">Department Name</label>
                                                <input name="depName" id="depName" class="form-control"/>
                                                <label for="newHod">Head of Department</label>
                                                <input name="newHod" id="newHod" class="form-control"/>
                                                <label for="newLocation">Location</label>
                                                <select name="newLocation" id="newLocation" class="form-control pl-0">
                                                    
                                                </select>
                                            </form>
                                            <div class="row justify-content-around">
                                                <button type="button" class="btn btn-success" id="submitNewDep">Submit</button>
                                                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ${newDeps}
                    `)

                    // disable enable input and button on edit
                    respond['data'].forEach(obj=> {
                        $(`#department${obj['id']} input, #department${obj['id']} select`).prop('disabled', true)
                        $(`#department${obj['id']} #submitDep${obj['id']}`).hide()
                        $(`#department${obj['id']} #cancelSubmitDep${obj['id']}`).hide()
                        $(`#editDep${obj['id']}`).on('click', ()=> {
                            $(`#department${obj['id']} input, #department${obj['id']} select`).prop('disabled', false)
                            $(`#department${obj['id']} #submitDep${obj['id']}`).show()
                            $(`#department${obj['id']} #cancelSubmitDep${obj['id']}`).show()
                        })
                        $(`#cancelSubmitDep${obj['id']}`).on('click', ()=> {
                            $(`#department${obj['id']} input, #department${obj['id']} select`).prop('disabled', true)
                            $(`#department${obj['id']} #submitDep${obj['id']}`).hide()
                            $(`#department${obj['id']} #cancelSubmitDep${obj['id']}`).hide()
                            $(`#department${obj['id']} input`).val('')
                        })                        
                    })
                        
                         // delete department
                         respond['data'].forEach(obj=> {
                            $(`#department${obj['id']} #delDep${obj['id']}`).on('click', ()=> {
                                let ifNotZero = $(`#department${obj['id']} #memberCount${obj['id']}`).html()
                                if (ifNotZero > 0) {
                                    alert('Cannot delete department with active employees!')
                                    $(`#department${obj['id']} #deleteDepartment${obj['id']}`).modal('hide')
                                } else {
                                    $.ajax({
                                        url: 'php/deleteDepartmentById.php',
                                        type: 'post',
                                        data: {
                                            id: obj['id']
                                        },
                                        dataType: 'json',
                                        success: ifDel=> {
                                            if (ifDel['status']['code'] == '200') {
                                                alert('Record deleted')
                                                window.location.reload()
                                            } else {
                                                alert('Could not delete record!')
                                            }
                                        }
                                    })
                                }
                            })
                        })    
                        
                        // update department 
                        
                        respond['data'].forEach(obj=> {
                            $(`#department${obj['id']} #submitDep${obj['id']}`).on('click', ()=> {
                                const hod = $(`#department${obj['id']} #hodName${obj['id']}`).val(),
                                      location = $(`#department${obj['id']} #depLocation${obj['id']}`).val();
                                $.ajax({
                                    url: 'php/updateDepartment.php',
                                    type: 'post',
                                    data: {
                                        hod: hod,
                                        location: location,
                                        id: obj['id'],
                                    },
                                    dataType: 'json',
                                    success: updated=> {
                                        if (updated['status']['code'] == '200') {
                                            alert('Record updated')
                                            window.location.reload()
                                        } else {
                                            alert('Failed to upload record')
                                        }
                                    }
                                })      
                            })
                        })

                        //create new department 

                        $(`#submitNewDep`).on('click', ()=> {
                            const departmentName = $(`#depName`).val(),
                                  newHod = $(`#newHod`).val(),
                                  location = $(`#newLocation`).val();
                                  if (!departmentName) {
                                      alert(`Enter department name`)
                                  } else {
                                    $.ajax({
                                        url: 'php/insertDepartment.php',
                                        type: 'post',
                                        data: {
                                            name: departmentName,
                                            hod: newHod,
                                            locationID: location  
                                        },
                                        dataType: 'json',
                                        success: newObj=> {
                                            if (newObj['status']['code'] == '200') {
                                                alert('New department created')
                                                window.location.reload()
                                            } else {
                                                alert('Failed to create new record!')
                                            }
                                        }
                                    })
                                  }
                        })
                    // counting specific department memmbers

                    let howMany = 0
                    respond['data'].forEach(depsCount=> {
                        response['data'].forEach(empsCount=> {
                            if (depsCount['departmentName'] == empsCount['department']) {
                                howMany++
                            }
                        })
                        $(`#department${depsCount['id']} #memberCount${depsCount['id']}`).html(`${howMany}`)
                        howMany = 0
                    })

                    // get all locations

                    const getLocations = () => {
                        $.ajax({
                            url: 'php/getAllLocations.php',
                            type: 'get',
                            dataType: 'json',
                            success: loca=> {
                                let locaArr = []
                                loca['data'].forEach(obj=> {
                                    locaArr.push(`<option value="${obj['id']}">${obj['name']}</option>`)
                                })
                                $(`#newLocation`).html(`${locaArr}`)
                                respond['data'].forEach(obj=> {
                                    $(`#department${obj['id']} #depLocation${obj['id']}`).html(`${locaArr}`)
                                })
                            }
                        })
                    }

                    getLocations()

                }
            }) 
        })

        // Show all locations

        const renderLocations = (object) => {
            return `
            <div class="container" id="location${object['id']}">
                <div class="row justify-content-between">
                    <div class="col-6-sm">
                        <h3 class="h3 m-2">${object['name']}</h4>           
                    </div>
                    <div class="col-6-sm">
                        <button type="button" class="btn" data-toggle="modal" data-target="#delLocModal${object['id']}"><span><i class="fa fa-trash-o fa-2x"></i></span></button>
                    </div>
                    <div class="modal fade" id="delLocModal${object['id']}">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <h4 class="h4">Do you really want to delete location?</h4>
                                    <div class="row justify-content-around">
                                        <button type="button" class="btn btn-success" id="delLocation${object['id']}">Yes</button>
                                        <button type="button" class="btn btn-danger" data-dismiss="modal">No</button>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>                       
                </div>
            </div>`
        }

        $(`#onLocation`).on('click', ()=> {

            $.ajax({
                url: 'php/getAllLocations.php',
                type: 'get',
                dataType: 'json',
                success: locs=> {
                    locArr = []
                    locs['data'].forEach(obj=> {
                        locArr.push(renderLocations(obj))
                    })
                    $(`#main`).html(`
                        <div class="container" style="border: none;">
                            <div class="row">
                                <button type="button" class="btn btn-success my-2" data-toggle="modal" data-target="#addLocation">Add New Location</button>
                            </div>
                            <div class="modal fade" id="addLocation">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h3 class="modal-title">Add New Location</h3>
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div class="modal-body form-inline justify-content-around">
                                            <form class="form-group">
                                            <label for="newLocName">Location</label>
                                            <input name="newLocName" id="newLocName" class="form-control mx-2"/>
                                            <button type="button" class="btn btn-success" id="submitNewLoc">Submit</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ${locArr}`)

                    // create new location

                    $(`#submitNewLoc`).on('click', ()=> {
                        const newLocName = $(`#newLocName`).val();
                        if (!newLocName) {
                            alert(`Enter location name!`) 
                        } else {
                            $.ajax({
                                url: 'php/insertLocation.php',
                                type: 'post',
                                data: {name: newLocName},
                                dataType: 'json',
                                success: locResponse=> {
                                    if (locResponse['status']['code'] == '200') {
                                        alert('Location created successfuly!')
                                        window.location.reload()
                                    } else {
                                        alert(`Failed to create new locations`)
                                    }
                                }
                            })
                        }
                    })
                    
                    // delete location
                    locs['data'].forEach(obj=> {    
                        let counter = 0                    
                        $(`#location${obj['id']} #delLocation${obj['id']}`).on('click', ()=> {
                            response['data'].forEach(checkName=> {
                                if (obj['name'] == checkName['location']) {
                                    counter++
                                }
                            })
                            console.log(counter)
                            if (counter > 0) {
                                alert(`Can not delete location with active employees!`)
                            } else {
                                const locId = obj['id']
                                $.ajax({
                                    url: 'php/delLocation.php',
                                    type: 'post',
                                    data: {id: locId},
                                    dataType: 'json',
                                    success: delLoc=> {
                                        if (delLoc['status']['code'] == '200') {
                                            alert(`Record deleted successfuly`)
                                            window.location.reload()
                                        } else {
                                            alert(`Failed to delete record`)
                                        }
                                    }
                                })
                            }
                        })
                    })
                }
            })                        
        })
    }       
})


