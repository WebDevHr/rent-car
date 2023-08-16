<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
  <div>
    <header class="fontFamilyCinzel">
      <div class="flex items-center h-20 justify-center space-x-[80px]">
        <div class="flex items-center justify-center w-28">
          <img src="src/assets/img/carLogo.png" alt="Logo" class="w-28">
          <!-- <span style="font-family: 'Beau Rivage', cursive;">Rent Car</span> -->
        </div>
        <nav class="flex flex-row">
          <dropdown-menu v-for="(item, index) in navLinks" :key="index" class="custom-style another-one" mode="hover"
            transition="zoom">
            <template #trigger>
              <div class="flex flex-col">
                <button class="text-center text-lg lg:w-40 md:w-32  
                hover:text-gray-900 text-gray-400 rounded py-[26px] rounded-lg ease-in-out duration-300">{{
                  item.link
                }}</button>
                <div class="flex flex-row justify-center">
                  <span class="custom-class"></span>
                </div>
              </div>
            </template>

            <template #body>
              <div class="flex felx-row border rounded bg-white absolute left-0 w-full px-32">
                <img src="src/assets/img/carLogo.png" alt="" class="w-96 h-96">
                <ul>
                  <li v-for="(sub, i) in item.subLinks" :key="i">
                    <a href="">{{ sub }}</a>
                  </li>
                </ul>
              </div>
            </template>

          </dropdown-menu>
        </nav>
      </div>
    </header>
    <router-view></router-view>
    <footer class="absolute bottom-0">
      <div>
        Here is footer
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      navLinks: [
        {
          link: 'Anasayfa',
          subLinks: []
        },
        {
          link: 'Hakımızda',
          subLinks: []
        },
        {
          link: 'Haberler',
          subLinks: ['Genel haberler', 'Araclarin durumu', 'Araclarin durumu', 'Araclarin durumu']
        },
        {
          link: 'Araçlar',
          subLinks: []
        },
        {
          link: 'İletişim',
          subLinks: []
        }
      ],
      isDropdownOpen: false
    };
  },
  methods: {
    openDropdown(open: boolean) {
      this.isDropdownOpen = open;
    }
  }
};
</script>

<style scoped>
.fontFamilyBeauRivage {
  font-family: 'Beau Rivage', cursive;
}

.fontFamilySquarePeg {
  font-family: 'Square Peg', cursive;
  font-size: 30px;
}

.fontFamilyKranky {
  font-family: 'Kranky', cursive;
  font-size: 24px;
}

.fontFamilyCormorantGaramond {
  font-family: 'Cormorant Garamond', serif;
  font-size: 20px;
}

.fontFamilyVinaSans {
  font-family: 'Vina Sans', cursive;
}

.fontFamilyAmaticSC {
  font-family: 'Amatic SC', cursive;
  font-size: 24px;
}

.fontFamilyCinzel {
  font-family: 'Cinzel', serif;
}

.custom-class {
  width: 0px;
  height: 2px;
  background-color: black;
  transition: all 0.3s ease-in-out;
}

.another-one:hover .custom-class {
  width: 100%;
}
</style>