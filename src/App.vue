<template>

  <v-app
    id="inspire"
  >
    <v-navigation-drawer
      persistent
      clipped
      enable-resize-watcher
      v-model="drawer"
      app
      dark
    >
      <v-list>
        <v-subheader class="mt-3 text--darken-1">SUBSCRIPTIONS</v-subheader>

        <v-list>
          <v-list-group v-for="item in items" :value="item.active" v-bind:key="item.title">
            <v-list-tile slot="item" ripple @click="">
              <v-list-tile-action>
                <v-icon>{{ item.action }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon>keyboard_arrow_down</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile v-for="subItem in item.items" v-bind:key="subItem.title" v-bind:to="subItem.to" ripple @click="">
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon>{{ subItem.action }}</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list>

      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="white" flat dense fixed clipped-left app>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      </v-toolbar-title>
      <v-toolbar-title>{{ pageTitle }} page link is {{ pageLink }}</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-content>

        <router-view />

      </v-content>
    </main>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  computed: {
    pageTitle: function() {
      return this.$store.getters.pageTitle
    },
    pageLink: function() {
      return this.$store.getters.pageLink
    }
  },
  data: () => ({
    drawer: true,
    items: [
        {
          action: 'school',
          title: 'Components',
          items: [
            { title: 'Header', to: '/header' },
            { title: 'Buttons', to: '/buttons' },
            { title: 'Breadcrumbs', to: '/breadcrumbs' },
            { title: 'Forms' },
            { title: 'Lists', to: '/lists' },
            { title: 'Tabs', to: '/tabs' },
            { title: 'Headings', to: '/headings' },
            { title: 'Typeography', to: '/typeography' },
          ]
        },
      ]
  }),
  props: {
    source: String
  }
}
</script>

<style src="./assets/scss/global.scss" lang="scss"></style>
