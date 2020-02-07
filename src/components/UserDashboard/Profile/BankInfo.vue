<template>
<body id="page-top">
  <div id="wrapper">
    <Sidebar Utype="User">
      <SidebarInner />
    </Sidebar>
    <Body page="Enter Bank Details">
      <div class="container">
        <div class="row justify-content-center">
          <form class="register bg-white p-4">
            <div class="text-center text-gray-900 h4 py-4">Bank Details</div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="firstname">Account Name</label>
                <input
                  type="text"
                  class="form-control"
                  required
                  placeholder="Account Name"
                  id="firstname"
                  name="firstname"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="lastname">Bank</label>
                <input
                  type="text"
                  class="form-control"
                  required
                  id="lastname"
                  placeholder="Bank Name"
                  name="lastname"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="number">Account Number</label>
              <input
                type="Number"
                required
                placeholder="xxxxxxxxxxxxxxxx"
                class="form-control"
                id="email"
                name="email"
              />
            </div>

            <button type="submit" class="btn btn-primary mt-4 mb-3">Update</button>
          </form>
        </div>
      </div>
    </Body>
  </div>
</body>
</template>

<script>
import Sidebar from "../../GLayouts/Sidebar";
import SidebarInner from "../GUserLayouts/SidebarInner";
import Body from "../../GLayouts/Body";
export default {
  name: "BankInfo",
  components: {
    Sidebar,
    SidebarInner,
    Body
  }
};
</script>

<style  scoped>
.register {
  min-height: 25rem;
  padding-top: 5%;
}
.container {
  margin-bottom: 50px;
}
</style>