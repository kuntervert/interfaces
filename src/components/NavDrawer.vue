<template>
  <v-navigation-drawer class="drawerCard" permanent :mini-variant="mini" :value="navDrawer">
    <span>
      <v-icon
        v-if="!mini"
        size="45"
        style="color: #2c6bff; display: inline-flex;margin-bottom: 10px; "
      >mdi-crown-outline</v-icon>
      <p
        style="color: white;    max-width: 50%;
    text-overflow: ellipsis;
    overflow: hidden; display: inline-flex; font-weight: 600; font-size: 20px;
}"
        v-if="!mini"
      >ORGΞT</p>
      <v-btn style="margin-left: 25%;" icon @click.stop="mini = !mini">
        <v-icon
          v-if="mini"
          size="25"
          style="color: white; opacity: 0.6; margin-right: 40%"
        >mdi-arrow-expand-right</v-icon>
        <v-icon v-if="!mini" size="25" style="color: white;opacity: 0.6; ">mdi-arrow-collapse-left</v-icon>
      </v-btn>
    </span>
    <hr />
    <v-list class="routesList">
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon style="color: white">{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title
            style="color: white; text-align: left; padding-left: 15px;"
          >{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <hr />
    <v-list-item-title
      style="color: white; opacity: 0.6; text-align: left; padding-left: 15px; font-size: 12px; padding-bottom: 5%;"
    >PROJECT</v-list-item-title>
    <v-list class="projectList">
      <v-list-item
        @click="tellTitle(project.title)"
        v-for="project in projects"
        :key="project.title"
        link
      >
        <v-list-item-icon>
          <v-icon size="20" style="color: white">{{ project.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title
            style="color: white; text-align: left; padding-left: 15px;"
          >{{ project.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NavDrawer",
  data() {
    return {
      mini: false,
      projects: [
        { title: "Million dollar idea", icon: "mdi-google-circles-extended" },
        { title: "Design team", icon: "mdi-google-circles-extended" }
      ],
      items: [
        { title: "Home", icon: "mdi-home" },
        { title: "Inbox", icon: "mdi-checkbox-multiple-blank-outline" },
        { title: "My Posts", icon: "mdi-format-list-checkbox" },
        { title: "Settings", icon: "mdi-cog-outline" }
      ]
    };
  },
  computed: {
    ...mapGetters(["navDrawer"]),
    drawerWidth() {
      return document.getElementById("navDrawer").offsetWidth;
    }
  },
  methods: {
    tellTitle(title) {
      alert(title);
    }
  }
};
</script>

<style lang="scss">
.drawerCard {
  position: relative;
  z-index: 200;
  height: 100%;
  padding-top: 40px;
  top: 0;
  left: 0;
  color: #1f224c;
  background-color: #1f224c !important;
}
.v-navigation-drawer--open {
  width: 285px !important;
}
.v-navigation-drawer--mini-variant {
  width: 56px !important;
}
.v-list-item__icon {
  margin: 21px 0;
}
.routesList {
  margin-top: 15%;
}
.projectList {
  margin-top: 1%;
  margin-left: 5%;
  .v-list-item {
    max-height: 39px;
  }
  .v-list-item__icon {
    align-self: center;
  }
}
hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 1em 0;
  padding: 0;
  opacity: 0.2;
}
</style>