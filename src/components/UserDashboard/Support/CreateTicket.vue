<template>
  <Structure page="Create Ticket">
    <div class="container d-flex justify-content-center">
      <div class="card CardOne shadow justify-content-center mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">- Write To Admin</h6>
        </div>
        <div class="card-body">
          <form class="register bg-white">
            <div class="form-group">
              <label for="exampleTextarea">Subject</label>
              <input type="text" class="form-control" placeholder="Enter Ticket Name" name id />
            </div>
            <div class="form-group">
              <label for="exampleTextarea">Priority</label>
              <input type="text" class="form-control" placeholder="Enter Ticket Name" name id />
            </div>

            <div class="form-group">
              <label for="exampleTextarea">Body</label>
              <textarea class="form-control" id="exampleTextarea" rows="7"></textarea>
            </div>
            <button
              type="submit"
              class="btn btn-primary mt-3 btn-block text-center mb-3"
            >Create Ticket</button>
          </form>
        </div>
      </div>
    </div>
  </Structure>
</template>

<script>
import Structure from "../GUserLayouts/Structure";
export default {
  name: "CreateTicket",
  components: {
    Structure
  }
};
</script>
<style scoped>
.CardOne {
  max-width: 50rem;
  min-width: 40rem;
  color: black;
}
</style>