<form action="./php/insertDepartment.php" method="post" id="depManagement" class="container form-group collapse">
     <label for="depName">Department name</label>
     <input type="text" name="depName" id="depName" class="form-control" required>
     <label for="depLocation"></label>
     <select name="depLocation" id="depLocation" class="form-control">
         <option value="1">London</option>
         <option value="2">New York</option>
         <option value="3">Paris</option>
         <option value="4">Munich</option>
         <option value="5">Rome</option>
     </select>   
     <button type="submit" class="btn btn-success mt-2">Submit</button>
    </form>

    <!-- --------------------------------------------------------------- -->

    <div class="btn-group collapse" id="depManagement">
        <button type="button" class="btn btn-success" data-toggle="collapse" data-target="#deleteAll">Fetch all</button>
        <button type="button" class="btn btn-success" data-toggle="collapse" data-target="#deleteDep">Delete department</button>
        <button type="button" class="btn btn-success" data-toggle="collapse" data-target="#fetchDep">Fetch all departments</button>
        <button type="button" class="btn btn-success" data-toggle="collapse" data-target="#fetchOneDep">Fetch department</button>
        <button type="button" class="btn btn-success" data-toggle="collapse" data-target="#createDep">Create department</button>
    </div>

    <form action=""></form>

    <form action="./php/newEmployee.php" method="post" id="employeeForm" class="container collapse form-group">
        <label for="firstName">First name</label>
        <input type="text" name="firstName" id="firstName" class="form-control" required>
        <label for="lastName">Last name</label>
        <input type="text" name="lastName" id="lastName" class="form-control" required>
        <label for="jobTitle">Job title</label>
        <input type="text" name="jobTitle" id="jobTitle" class="form-control">
        <label for="email">Email</label>
        <input type="email" name="emal" id="email" class="form-control">
        <label for="department">Department</label>
        <select name="department" id="department" class="form-control">
            <option value="1">Human Resources</option>
            <option value="2">Sales</option>
            <option value="3">Marketing</option>
            <option value="4">Legal</option>
            <option value="5">Services</option>
            <option value="6">Research and Development</option>
            <option value="7">Product Management</option>
            <option value="8">Training</option>
            <option value="9">Support</option>
            <option value="10">Engineering</option>
            <option value="11">Accounting</option>
            <option value="12">Business Development</option>
        </select>
        <button type="reset" class="btn btn-secondary mt-2">Reset</button>
        <button type="submit" class="btn btn-success mt-2">Submit</button>
    </form>