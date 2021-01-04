$('#noButton').on('click', ()=> {
    $('#removeRecord').fadeOut()
})

//single employee
const getEmp = (object, index) => {
   return `<div class="container m-2" id="person${index}">
                    <div class="row">
                        <div class="col-sm-1 p-0">
                            <img src="" alt="" class="img d-block" id="img"/>
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
                                    <form method="post" action="" enctype="multipart/form-data" id="myform">
                                        <div >
                                            <input type="file" id="file" name="file" />
                                            <input type="button" class="button" value="Upload" id="but_upload">
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
                                    <input type="text" name="hod" id="hod" class="form-control" value="${object['data'][index]['hod'] ? object['data'][index]['hod'] : ''}"/>
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
let result = []

$.ajax({
    url: 'php/getAll.php',
    type: 'get',
    dataType: 'json',
    success: response => {    
        
        for (let i = 0; i < response['data'].length; i++) { 
            let count = i
            rows += getEmp(response, count)                
        }
    
        $('#main').html(`
            ${rows}
        `);
        console.log(response['data'])
        // enable editing data
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
                        options.push(`<option value="${departments['data'][i]['id']}">${departments['data'][i]['name']}</option>`)
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

        //submit new employee

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
                        } else {
                            alert(`Server Error`)
                        }
                    }
                })
            }
        })

        // update record

        for (let i = 0; i < response['data'].length; i++) {
            $(`#person${i} #saveCredentials`).on('click', ()=> {
                console.log(response['data'][i]['id'])
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

        // delete record

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

        // file upload
        for (let i = 0; i < response['data'].length; i++) {
            $(`#person${i} #but_upload`).on('click', ()=>{

                var fd = new FormData();
                var files = $(`#person${i} #file`)[0].files;
                
                // Check file selected or not
                if(files.length > 0 ){
                   fd.append('file',files[0]);
        
                   $.ajax({
                      url: 'php/upload.php',
                      type: 'post',
                      data: fd,
                      contentType: false,
                      processData: false,
                      success: respond => {
                         if(respond != 0){
                            $(`#person${i} #img`).attr("src",respond); 
                            $(`#person${i} img`).show(); // Display image element
                         }else{
                            alert('file not uploaded');
                         }
                      },
                   });
                }else{
                   alert("Please select a file.");
                }
            });
        }

    }    
       
})

