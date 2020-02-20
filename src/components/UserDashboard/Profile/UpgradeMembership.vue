<template>
  <Structure page="Upgrade Your Membership">
    <div class="container-fluid mt-4 d-flex justify-content-center">
      <div class="card-body shadow col-md-12 col-xs-12 col-lg-10 mb-4">
        <div class="py-3">
          <div class="bg-light">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, assumenda hic culpa odit non, ratione vero magnam nihil commodi ducimus quia voluptatibus officiis laudantium dolores optio quaerat sequi ex repellat?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque expedita dolores minima hic officiis perspiciatis consequatur molestias aspernatur beatae quis reprehenderit aut tempore delectus ipsam, fugiat at illo. Asperiores, maxime.
          </div>
        </div>
        <div id="accordion" class="mt-2">
          <!-- Basic Member -->
          <div class="border mb-2">
            <a href="#collapse3" data-parent="#accordion" data-toggle="collapse">
              <div class="p-2 mb-2 text-dark">
                <i class="fa fa-shield mr-3 lead"></i>
                <span class="font-weight-bold">Become a Basic Member</span>
              </div>
            </a>
            <div class="card border m-2 p-2 collapse" id="collapse3">
              <p>Loop Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum explicabo cumque laborum, dolorum excepturi soluta placeat animi ipsum nam magnam exercitationem possimus praesentium illo eum. At aperiam soluta adipisci quos. N100</p>
              <div class="d-flex justify-content-center">
                <button class="btn btn-primary">Proceed</button>
              </div>
            </div>
          </div>

          <!-- Pro -->
          <div class="border mb-2">
            <a href="#collapse4" data-parent="#accordion" data-toggle="collapse">
              <div class="p-2 mb-2 text-dark">
                <i class="fa fa-star mr-3 lead"></i>
                <span class="font-weight-bold">Become a Pro</span>
              </div>
            </a>
            <div class="border m-2 p-2 collapse" id="collapse4">
              <p>4 ansd Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde fugit nobis molestias voluptatum porro quidem quo natus, facere beatae ipsa molestiae, provident aliquam perspiciatis quia, expedita cupiditate iusto fuga commodi! N700</p>
              <div class="d-flex justify-content-center">
                <button class="btn btn-primary">Proceed</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Structure>
</template>


<script>
import Structure from "../GUserLayouts/Structure";
export default {
  name: "UpgradeMembership",
  components: {
    Structure
  }
};
</script>
<style scoped>
a:hover {
  color: black;
}
</style>