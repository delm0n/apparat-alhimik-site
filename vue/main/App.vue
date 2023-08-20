<template>
  <div>
    <header>
      <header-top />
      <header-main />
    </header>

    <main>
      <reasons />
      <characteristic />
      <steps />
      <detali />
      <place />
      <idea />
      <now />
      <faq />
      <tinkoff-block />
      <delivery />
      <!-- <made /> -->
      <feedback />
      <photo />
      <questions />
      <helicon-map />
    </main>

    <alhimik-footer />
    <feedback-modal />
    <order-modal />
    <call-modal />
    <order-success />
    <button-up />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

import HeaderTop from "../components/HeaderTop.vue";
import HeaderMain from "../components/HeaderMain.vue";

import Reasons from "../components/Reasons.vue";
import Characteristic from "../components/Characteristic.vue";
// import Steps from "../components/Steps.vue";
// import Place from "../components/Place.vue";
// import Feedback from "../components/Feedback.vue";
// import Detali from "../components/Detali.vue";
import Delivery from "../components/Delivery-v2.vue";
// import Made from "../components/Made.vue";
// import Idea from "../components/Idea.vue";
import Now from "../components/Now.vue";
import Questions from "../components/Questions.vue";
import OrderModal from "../components/OrderModal.vue";
// import Photo from "../components/Photo.vue";
import CallModal from "../components/CallModal.vue";
// import OrderSuccess from "../components/OrderSuccess.vue";

export default {
  components: {
    HeaderTop,
    HeaderMain,
    Reasons,
    Characteristic,
    Steps: defineAsyncComponent(() => import("../components/Steps.vue")),
    Detali: defineAsyncComponent(() => import("../components/Detali.vue")),
    Place: defineAsyncComponent(() => import("../components/Place.vue")),
    Feedback: defineAsyncComponent(() => import("../components/Feedback.vue")),
    FeedbackModal: defineAsyncComponent(() =>
      import("../components/FeedbackModal.vue")
    ),
    Faq: defineAsyncComponent(() => import("../components/FAQ.vue")),
    ButtonUp: defineAsyncComponent(() => import("../components/ButtonUp.vue")),
    HeliconMap: defineAsyncComponent(() => import("../components/Map.vue")),
    AlhimikFooter: defineAsyncComponent(() =>
      import("../components/Footer.vue")
    ),
    Delivery,
    TinkoffBlock: defineAsyncComponent(() =>
      import("../components/TinkoffBlock.vue")
    ),
    Made: defineAsyncComponent(() => import("../components/Made.vue")),
    Idea: defineAsyncComponent(() => import("../components/Idea.vue")),
    Now,
    Questions,
    OrderModal,
    Photo: defineAsyncComponent(() => import("../components/Photo.vue")),

    CallModal,
    OrderSuccess: defineAsyncComponent(() =>
      import("../components/OrderSuccess.vue")
    ),
  },
};
</script>

<style lang="scss">
@import "../../scss/_fonts.scss";
@import "../../scss/_main.scss";
</style>
