<template>
  <Structure page="Announcement">
    <div class="container">
      <div class="row">
        <AnnouncementCard />
        <AnnouncementCard />
        <AnnouncementCard />
        <AnnouncementCard />
        <AnnouncementCard />
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