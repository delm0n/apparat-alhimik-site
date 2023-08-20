<template>
  <section id="photo">
    <div class="container">
      <div class="title">
        <h2>Реальные фото «Алхимика»</h2>
      </div>

      <div class="photo-wrapper">
        <div
          v-for="(col, index) in cols"
          :key="index"
          class="photo-wrapper__col"
        >
          <a
            :href="
              'build/images/photo/' +
              col.up +
              '-modal' +
              (getWebp === 'webp' ? '.webp' : '.png')
            "
            data-fancybox="gallery"
            class="photo-wrapper__img"
          >
            <my-image
              :alt="'Фото алхимика'"
              :sorce="'build/images/photo/' + col.up"
              :media="769"
            />
          </a>

          <a
            :href="
              'build/images/photo/' +
              col.down +
              '-modal' +
              (getWebp === 'webp' ? '.webp' : '.png')
            "
            data-fancybox="gallery"
            class="photo-wrapper__img"
          >
            <my-image
              :alt="'Фото алхимика'"
              :sorce="'build/images/photo/' + col.down"
              :media="769"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
import { mapGetters } from "vuex";

export default {
  components: { MyImage },
  computed: mapGetters(["getWebp"]),
  data() {
    return {
      cols: [
        {
          up: "col-1-1",
          down: "col-1-2",
        },

        {
          up: "col-2-1",
          down: "col-2-2",
        },

        {
          up: "col-3-1",
          down: "col-3-2",
        },

        {
          up: "col-4-1",
          down: "col-4-2",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#photo {
  @extend %pbt;

  .photo-wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
    &__col {
      display: flex;
      flex-direction: column;
      flex-grow: 1;

      &:not(:last-child) {
        margin-right: 20px;

        @media (max-width: 992px) {
          margin-right: 10px;
        }

        @media (max-width: 425px) {
          margin-right: 5px;
        }
      }
    }

    &__img {
      box-shadow: 5px 5px 15px 0px rgba(157, 157, 157, 0.15);
      border-radius: 40px;
      overflow: hidden;
      background: #f8f8f8;
      display: block;
      cursor: zoom-in;
      max-width: max-content;

      &:not(:last-child) {
        margin-bottom: 20px;
      }
      img {
        transition: all 0.4s;
        transform: scale(1.01);
      }

      @media (max-width: 992px) {
        border-radius: 20px;
        box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.15);

        &:not(:last-child) {
          margin-bottom: 10px;
        }
      }

      @media (max-width: 425px) {
        border-radius: 5px;

        &:not(:last-child) {
          margin-bottom: 5px;
        }
      }

      &:hover {
        img {
          transform: scale(1.05);
        }
      }

      @include image-aspect {
        aspect-ratio: 379/311;
        // @media (max-width: 768px) {
        //   max-width: 385px;
        //   aspect-ratio: 385/227;
        // }
      }
    }
  }
}
</style>