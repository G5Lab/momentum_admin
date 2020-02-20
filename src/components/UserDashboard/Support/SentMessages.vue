<template>
  <Structure page="Sent Messages">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 col-xl-6 mb-4">
          <SentMessagesCard />
        </div>
        <div class="col-md-4 col-xl-6 mb-4">
          <SentMessagesCard />
        </div>
        <div class="col-md-4 col-xl-6 mb-4">
          <SentMessagesCard />
        </div>
      </div>
    </div>
  </Structure>
</template>

<script>
import Structure from "../GUserLayouts/Structure";
import SentMessagesCard from "./SentMessageCard";
export default {
  name: "SentMessages",
  components: {
    Structure,
    SentMessagesCard
  }
};
</script>