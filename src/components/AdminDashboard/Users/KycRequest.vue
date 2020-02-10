<template>
  <Structure page="KYC Requests">
    <div class="container">
      <div class="row no-gutters">
        <div class="col-md-4">
          <router-link class="link-unstyled" to="/">
            <KycCard Uname="Pedro" desc="lorem lorem lorem lsod difnor finsi" Ukyc="Ldpdp" />
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link class="link-unstyled" to="/">
            <KycCard Uname="Daniel" desc="lorem lorem lorem lsod difnor finsi" Ukyc="Lop" />
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link class="link-unstyled" to="/">
            <KycCard Uname="John" desc="lorem lorem lorem lsod difnor finsi" Ukyc="Done" />
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link class="link-unstyled" to="/">
            <KycCard Uname="Psalm" desc="djjd jfjfkkkfrem lorem lksksi" Ukyc="Qwen" />
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link class="link-unstyled" to="/">
            <KycCard Uname="Psalm" desc="djjd jfjfkkkfrem lorem lksksi" Ukyc="Qwen" />
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link class="link-unstyled" to="/">
            <KycCard Uname="Psalm" desc="djjd jfjfkkkfrem lorem lksksi" Ukyc="Qwen" />
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link class="link-unstyled" to="/">
            <KycCard Uname="Psalm" desc="djjd jfjfkkkfrem lorem lksksi" Ukyc="Qwen" />
          </router-link>
        </div>
      </div>
    </div>
  </Structure>
</template>

<script>
import Structure from "../GAdminLayouts/AStructure";
import KycCard from "../GAdminLayouts/KycCard";
export default {
  name: "KycRequest",
  components: {
    Structure,
    KycCard
  }
};
</script>
<style scoped>
.link-unstyled:hover {
  text-decoration: none;
  color: inherit;
}
</style>