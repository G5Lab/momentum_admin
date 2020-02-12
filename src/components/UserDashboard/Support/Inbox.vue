<template>
  <Structure page="Inbox">
    <div class="container mb-4">
      <div class="row">
        <InboxCard from="Admin" Date="11/02/2019" Desc="lorem sdo fijifnsd ifndfiso" />
        <InboxCard from="Admin" Date="11/02/2019" Desc="lorem sdo fijifnsd ifndfiso" />
        <InboxCard from="Admin" Date="11/02/2019" Desc="lorem sdo fijifnsd ifndfiso" />
        <InboxCard from="Admin" Date="11/02/2019" Desc="lorem sdo fijifnsd ifndfiso" />
        <InboxCard from="Admin" Date="11/02/2019" Desc="lorem sdo fijifnsd ifndfiso" />
        <InboxCard from="Admin" Date="11/02/2019" Desc="lorem sdo fijifnsd ifndfiso" />
        <InboxCard from="Admin" Date="11/02/2019" Desc="lorem sdo fijifnsd ifndfiso" />
        <InboxCard from="Admin" Date="11/02/2019" Desc="lorem sdo fijifnsd ifndfiso" />
      </div>
    </div>
  </Structure>
</template>
<script>
import Structure from "../GUserLayouts/Structure";
import InboxCard from "../GUserLayouts/InboxCard";
export default {
  name: "Inbox",
  components: {
    Structure,
    InboxCard
  }
};
</script>
<style scoped>
</style>