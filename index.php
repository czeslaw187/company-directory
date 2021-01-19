<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Company Directory</title>
    <link rel="icon" href="images/favicon.png" type="image/x-icon"/>
    <link rel="stylesheet" href="./vendors/bootstrap-4.5.3-dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="./vendors/font-awesome-4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="./vendors/jquery-ui-1.12.1/jquery-ui.css">
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
<!--  Navbar--> 
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Company Directory</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control form-control-lg mr-sm-2" type="search" id="nameInput" placeholder="Search by name, email" aria-label="Search">
    </form>  
    <span class="container border-0 bg-light" id="count">Employees</span>
    <div class="dropdown ml-auto mr-2">
        <button type="button" class="btn btn-lg dropdown-toggle" data-toggle="dropdown">
            Select
            <span class="caret"></span>
        </button>
        <ul class="dropdown-menu dropdown-menu-right">
            <li class="dropdown-item">
                <a href="#" role="button" class="btn" id="loadEmployees">Manage Employees</a>
            </li>
            <li class="dropdown-item">
                <a href="#" role="button" class="btn" id="onManage">Manage Departments</a>
            </li>
            <li class="dropdown-item">
                <a href="#" role="button" class="btn" id="onLocation">Manage Locations</a>
            </li>
        </ul>    
    </div>
  </div>
</nav>
<!-- Main content-->
  
<div class="w-100 text-center">
 <span id="errMsg"></span>
</div>
<div class="container" id="buttonHead"></div>
<main id="main" class="container border-0 h-100 overflow-auto">   
</main>

<!-- New employee form -->

<div class="modal fade" id="employeeForm" role="dialog">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Add new employee</h4>
                <button type="button" class="close pull-right" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-sm-6">
                        <span id="employeeErr"></span>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <label for="titleNew" class="mr-2">Title</label>
                                <input type="text" name="titleNew" id="titleNew" class="form-control">
                            </li>
                            <li class="list-group-item">
                                <label for="firstNameNew" class="mr-2">First name <sup>*</sup></label>
                                <input type="text" name="firstNameNew" id="firstNameNew" class="form-control" />
                            </li>
                            <li class="list-group-item">
                                <label for="lastNameNew">Last name <sup>*</sup></label>
                                <input type="text" name="lastNameNew" id="lastNameNew" class="form-control">
                            </li>
                            <li class="list-group-item">
                                <label for="EmailNew">Email <sup>*</sup></label>
                                <input type="email" name="emailNew" id="emailNew" class="form-control">
                            </li>
                            <li class="list-group-item">
                                <label for="dobNew">Date of birth</label>
                                <input type="text" name="dobNew" id="dobNew" class="form-control">
                            </li>
                            <li class="list-group-item">
                                <label for="address1New">Addres line 1</label>
                                <input type="text" name="address1New" id="address1New" class="form-control">
                            </li>
                            <li class="list-group-item">
                                <label for="address2New">Address line 2</label>
                                <input type="text" name="address2New" id="address2New" class="form-control">
                            </li>
                            <li class="list-group-item">
                                <label for="postCodebNew">Post Code</label>
                                <input type="text" name="postCodeNew" id="postCodeNew" class="form-control">
                            </li>
                            <li class="list-group-item">
                                <label for="dobNew">City</label>
                                <input type="text" name="cityNew" id="cityNew" class="form-control">
                            </li>
                            <li class="list-group-item">
                                <label for="phone">Phone</label>
                                <input type="text" name="phoneNew" id="phoneNew" class="form-control">
                            </li>
                        </ul>
                    </div>
                    <div class="col-sm-6">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <label for="positionNew">Position</label>
                                <input type="text" name="positionNew" id="positionNew" class="form-control">
                            </li>
                            <li class="list-group-item">
                                <label for="departmentNew">Department <sup>*</sup></label>
                                <select name="departmentNew" id="departmentNew" class="form-control">
                                    <option value=""></option>
                                </select>    
                            </li>
                            <li class="list-group-item">
                                <label for="salaryNew">Salary</label>
                                <input type="number" name="salarynNew" id="salaryNew" class="form-control">
                            </li>
                            <li class="list-group-item">
                                <label for="startDateNew">Start Date</label>
                                <input type="text" name="startDateNew" id="startDateNew" class="form-control">
                            </li>
                            <li class="list-group-item">
                                <label for="endOfEmploymentNew">End of Employment</label>
                                <input type="text" name="endOfEmploymentNew" id="endOfEmploymentNew" class="form-control">
                            </li>
                            <li class="list-group-item">
                                <label for="workHistoryNew">Work History</label>
                                <textarea type="text" name="workHistoryNew" id="workHistoryNew" class="form-control"></textarea>
                            </li>
                        </ul>
                        
                        <button type="button" id="submitNewEmployee" class="btn btn-md btn-success">SUBMIT</button>
                        <button type="button" class="btn btn-md btn-danger" data-dismiss="modal">CANCEL</button>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>    
</div>

<!-- Department management modal-->




<script src="./vendors/jquery/jquery-3.5.1.js"></script>
<script src="./vendors/jquery-ui-1.12.1/jquery-ui.js"></script>
<script src="./vendors/bootstrap-4.5.3-dist/js/bootstrap.bundle.js"></script>    
<script src="./js/script.js"></script>
</body>
</html>