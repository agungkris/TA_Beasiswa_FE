<template>
  <!--begin::List Widget 9-->
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header align-items-center border-0 mt-4">
      <h3 class="card-title align-items-start flex-column">
        <span class="font-weight-bolder text-dark">
          Recent Activities
        </span>
        <span class="text-muted mt-3 font-weight-bold font-size-sm">
          890,344 Sales
        </span>
      </h3>
      <div class="card-toolbar">
        <Dropdown2></Dropdown2>
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body pt-4">
      <div class="timeline timeline-5 mt-3">
        <template v-for="(item, i) in list">
          <!--begin::Item-->
          <div :key="i" class="timeline-item align-items-start">
            <!--begin::Label-->
            <div
              class="timeline-label font-weight-bolder text-dark-75 font-size-lg"
            >
              {{ item.time }}
            </div>
            <!--end::Label-->

            <!--begin::Badge-->
            <div class="timeline-badge">
              <i class="icon-xxl" :class="item.badge"></i>
            </div>
            <!--end::Badge-->

            <!--begin::Text-->
            <div
              class="font-weight-mormal font-size-sm timeline-content text-muted pl-3"
            >
              <span
                :class="{
                  'font-weight-bolder text-dark-75': item.bold,
                  'mr-4': item.images
                }"
                v-html="item.desc"
              ></span>

              <!--begin::Section-->
              <div class="d-flex align-items-start mt-n2">
                <template v-for="(image, i) in item.images">
                  <!--begin::Symbol-->
                  <a
                    :key="i"
                    href="#"
                    class="symbol symbol-35 symbol-light-success mr-2"
                  >
                    <span class="symbol-label">
                      <img
                        :src="image.img"
                        class="h-75 align-self-end"
                        :alt="image.alt"
                      />
                    </span>
                  </a>
                  <!--end::Symbol-->
                </template>
              </div>
              <!--end::Section-->
            </div>
            <!--end::Text-->
          </div>
          <!--end::Item-->
        </template>
      </div>
      <!--end: Items-->
    </div>
    <!--end: Card Body-->
  </div>
  <!--end: Card-->
  <!--end: List Widget 9-->
</template>

<script>
import Dropdown2 from "@/view/content/dropdown/Dropdown2.vue";
import { mapGetters } from "vuex";

export default {
  name: "Widget9",
  components: {
    Dropdown2
  },
  data() {
    return {
      list: [
        {
          time: "08:42",
          desc: "Outlines of the recent activities that happened last weekend",
          badge: "fa fa-genderless text-success"
        },
        {
          time: "3 hr",
          desc: "AEOL meeting",
          bold: true,
          badge: "fa fa-genderless text-danger"
        },
        {
          time: "14:37",
          desc: `Submit initial budget - <a href="#" class="text-primary">USD 700</a>.`,
          badge: "fa fa-genderless text-info",
          bold: true
        },
        {
          time: "16:50",
          desc: "Stakeholder meeting scheduling.",
          badge: "fa fa-genderless text-danger"
        },
        {
          time: "17:30",
          desc: "Project scoping & estimations with stakeholders.",
          badge: "fa fa-genderless text-success"
        },
        {
          time: "21:03",
          desc: `New order placed <a href="#" class="text-primary">#XF-2356</a>.`,
          badge: "fa fa-genderless text-warning",
          bold: true
        },
        {
          time: "21:07",
          desc:
            "Company BBQ to celebrate the last quater achievements and goals.",
          badge: "fa fa-genderless text-danger"
        },
        {
          time: "20:30",
          desc: "Marketing campaign planning with customer.",
          badge: "fa fa-genderless text-info"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["layoutConfig"])
  }
};
</script>
