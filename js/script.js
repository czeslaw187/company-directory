$('#noButton').on('click', ()=> {
    $('#removeRecord').fadeOut()
})

$.ajax({
    url: 'php/getAll.php',
    type: 'get',
    dataType: 'json',
    success: response => {
        let rows = []
        for (let i = 0; i < response['data'].length; i++) {
            rows +=
                `<div class="container m-2" id="person${i}">
                    <div class="row">
                        <div class="col-sm-1">
                            <img src="" alt="" class="img d-block" />
                        </div>
                        <div class="col-sm-6">
                            <h4>${response['data'][i]['firstName']} ${response['data'][i]['lastName']}</h4>
                            <p>${response['data'][i]['email']}<p>
                        </div>
                        <div class="col-sm-4">
                            <h6 class="mb-0">Department:</h6>
                            <p class="mt-0">${response['data'][i]['department']}</p>
                            <h6 class="my-0">Location:</h6>
                            <p class="my-0">${response['data'][i]['location']}</p>
                        </div>
                        <div class="col-sm-1">
                            <button type="button" data-toggle="collapse" data-target="#dropdown${i}" class="btn"><span><i class="fa fa-sort-desc"></i></span></button>
                        </div>
                    </div>
                    <div class="row collapse" id="dropdown${i}">
                        <div class="col-sm-6">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item d-flex align-items-center">
                                    <label for="Title" class="mr-2">Title</label>
                                    <select name="Title" id="Title" class="form-control">
                                        <option value="1">Mr</option>
                                        <option value="2">Mrs</option>
                                        <option value="3">Miss</option>
                                        <option value="4">Sir</option>
                                        <option value="5">Dr</option>
                                    </select>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <label for="firstName" class="mr-2">First Name</label>
                                    <input type="text" name="firstName" id="firstName" class="form-control" value="${response['data'][i]['firstName']}" />
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <label for="firstName" class="mr-2">Last Name</label>
                                    <input type="text" name="lastName" id="lastName" class="form-control" value="${response['data'][i]['lastName']}"/>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <label for="dob" class="mr-2">Date of birth</label>
                                    <input type="text" name="dob" id="dob" class="form-control"/>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <label for="firstName" class="mr-2">Address line 1</label>
                                    <input type="text" name="addressOne" id="addressOne" class="form-control"/>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <label for="addresTwo" class="mr-2">Address line 2</label>
                                    <input type="text" name="addressTwo" id="addressTwo" class="form-control"/>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <label for="postCode" class="mr-2">Post Code</label>
                                    <input type="text" name="postCode" id="postCode" class="form-control"/>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <label for="city" class="mr-2">City</label>
                                    <input type="text" name="city" id="city" class="form-control"/>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <label for="email" class="mr-2">Email</label>
                                    <input type="text" name="email" id="email" class="form-control" value="${response['data'][i]['email']}"/>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <span class="mr-2">Picture</span>
                                </li>
                            </ul>
                        </div>
                        <div class="col-sm-5">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <label for="position" class="mr-2">Position</label>
                                    <input type="text" name="position" id="position" class="form-control"/>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <label for="department" class="mr-2">Department</label>
                                    <input type="text" name="department" id="department" class="form-control" value="${response['data'][i]['department']}"/>
                                </li>   
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <label for="hod" class="mr-2">Head of Department</label>
                                    <input type="text" name="hod" id="hod" class="form-control"/>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <label for="salary" class="mr-2">Salary</label>
                                    <input type="text" name="salary" id="salary" class="form-control"/>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <label for="startDate" class="mr-2">Start Date</label>
                                    <input type="text" name="startDate" id="startDate" class="form-control"/>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <label for="endOfEmployment" class="mr-2">End of Employment</label>
                                    <input type="text" name="endOfEmployment" id="endOfEmployment" class="form-control"/>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <label for="location" class="mr-2">Location</label>
                                    <input type="text" name="location" id="location" class="form-control" value="${response['data'][i]['location']}"/>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <label for="workHistory" class="mr-2">Work History</label>
                                    <textarea class="form-control" name="workHistory" id="workHistory"></textarea>
                                </li>
                            </ul>
                            <div class="row">
                                <div class="col-sm-12">
                                    <button type="button" id="saveCredentials" class="btn btn-md btn-success pull-right">SAVE</button>
                                    <button type="button" id="cancelSave" class="btn btn-md btn-danger pull-right mr-3">CANCEL</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-1">
                            <ul class="list-group">
                                <li class="list-group-item border-0">
                                    <button type="button" class="btn" id="enableFields">
                                        <span>
                                            <i class="fa fa-pencil-square-o"></i>
                                        </span>
                                    </button>
                                </li>
                                <li class="list-group-item border-0">
                                    <button type="button" class="btn" data-toggle="modal" data-target="#removeRecord${i}">
                                        <span>
                                            <i class="fa fa-trash-o"></i>
                                        </span>
                                    </button>
                                </li>
                            </ul>
                            <div id="removeRecord${i}" class="modal fade" role="dialog">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-body text-center">
                                            <button type="button" class="close pull-right" data-dismiss="modal">&times;</button>
                                            <h4>Do you want to permamently delete record?</h4><br><br>
                                            <div class="btn-group d-flex justify-content-between align-items-center">
                                                <button type="button" class="btn btn-sm btn-success">Yes</button>
                                                <button type="button" id="noButton" class="btn btn-sm btn-danger" data-dismiss="modal">No</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>`
        }

        $('#main').html(`
            ${rows}
        `);

        $('input, select, textarea').prop('disabled', true)
        $('#cancelSave').hide()
        $(`#saveCredentials`).hide()
        for (let i = 0; i < response['data'].length; i++) {
            $(`#person${i} #enableFields`).click(()=> {
                $(`#person${i} input[type="text"], select, textarea`).prop('disabled', false)
                $(`#person${i} #cancelSave`).show()
                $(`#saveCredentials`).show()
            })
            $(`#person${i} #cancelSave`).click(()=> {
                $(`#person${i} input[type="text"], select, textarea`).prop('disabled', true)
                $(`#person${i} #cancelSave`).hide()
                $(`#saveCredentials`).hide()
            })
        }
        
        $('#count').append(` ${response['data'].length}`)
    }
})
