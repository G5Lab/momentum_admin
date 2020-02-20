<template>
  <Structure page="Announcement">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mb-4">
          <AnnouncementCard
            sentDate="11/22/90"
            desc="Lorem Andkd kdnub gdoihidb godhubgodby gobdgnob doibi"
            body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ducimus nostrum molestiae corporis quod culpa omnis natus reprehenderit consectetur! Possimus ipsa quos aperiam commodi, rerum explicabo dolor eaque ad sed.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ducimus nostrum molestiae corporis quod culpa omnis natus reprehenderit consectetur! Possimus ipsa quos aperiam commodi, rerum explicabo dolor eaque ad sed.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ducimus nostrum molestiae corporis quod culpa omnis natus reprehenderit consectetur! Possimus ipsa quos aperiam commodi, rerum explicabo dolor eaque ad sed.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ducimus nostrum molestiae corporis quod culpa omnis natus reprehenderit consectetur! Possimus ipsa quos aperiam commodi, rerum explicabo dolor eaque ad sed.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ducimus nostrum molestiae corporis quod culpa omnis natus reprehenderit consectetur! Possimus ipsa quos aperiam commodi, rerum explicabo dolor eaque ad sed."
          />
        </div>
        <div class="col-md-6 mb-4">
          <AnnouncementCard
            sentDate="11/22/90"
            desc="Lorem Andkd kdnub gdoihidb godhubgodby gobdgnob doibi"
            body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ducimus nostrum molestiae corporis quod culpa omnis natus reprehenderit consectetur! Possimus ipsa quos aperiam commodi, rerum explicabo dolor eaque ad sed.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ducimus nostrum molestiae corporis quod culpa omnis natus reprehenderit consectetur! Possimus ipsa quos aperiam commodi, rerum explicabo dolor eaque ad sed.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ducimus nostrum molestiae corporis quod culpa omnis natus reprehenderit consectetur! Possimus ipsa quos aperiam commodi, rerum explicabo dolor eaque ad sed.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ducimus nostrum molestiae corporis quod culpa omnis natus reprehenderit consectetur! Possimus ipsa quos aperiam commodi, rerum explicabo dolor eaque ad sed.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ducimus nostrum molestiae corporis quod culpa omnis natus reprehenderit consectetur! Possimus ipsa quos aperiam commodi, rerum explicabo dolor eaque ad sed."
          />
        </div>
        <div class="col-md-6 mb-4">
          <AnnouncementCard />
        </div>
        <div class="col-md-6 mb-4">
          <AnnouncementCard />
        </div>
        <div class="col-md-6 mb-4">
          <AnnouncementCard />
        </div>
      </div>
    </div>
  </Structure>
</template>
<script>
import Structure from "../GUserLayouts/Structure";
import AnnouncementCard from "../GUserLayouts/AnnouncementCard";
export default {
  name: "Announcement",
  components: {
    Structure,
    AnnouncementCard
  }
};
</script>